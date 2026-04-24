# Implementation Plan: VOS AI Insights

## Overview

Replace the existing Google News RSS-based `fetch-vos.py` with a multi-source AI-powered pipeline that collects seller discussions from Reddit, RSSHub, and DeepSeek API, then merges and enriches them into intelligence briefings. Enhance the frontend to render new card types (AI labels, layer badges, sentiment indicators, alert levels, intelligence briefing cards, and source priority badges).

The pipeline lives in the `vos-social-media` repo (`scripts/fetch-vos.py`), the frontend in `competitor-study-hub` (`index.html`, `script.js`, `styles.css`). The GitHub Actions workflow is `.github/workflows/update-vos.yml` in `vos-social-media`.

## Tasks

- [ ] 1. Define data models and constants
  - [ ] 1.1 Create data models and constants module (`scripts/models.py`)
    - Define `RawItem` and `Cluster` dataclasses matching the design
    - Define `SOURCE_PRIORITY`, `TOPIC_LABELS`, `CONFIRMATION_WORDS`, and allowed value sets for topic/layer/sentiment/alertLevel/insightType
    - Implement field normalization functions: `normalize_category(raw) -> str`, `normalize_layer(raw) -> str`, `normalize_source(raw) -> str` that always return a value from the allowed set (default to "trending", "emerging_unknown", "行业媒体" respectively)
    - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2, 8.2_

  - [ ]* 1.2 Write property test for field normalization (Property 2)
    - **Property 2: Field Normalization Always Produces Valid Values**
    - **Validates: Requirements 3.1, 3.2, 3.3, 4.1, 4.2**

  - [ ] 1.3 Implement topic validation function (`validate_topic(topic: dict) -> bool`)
    - Validate all required fields exist with correct types and allowed values
    - Validate `painPoints` array length 1-3, `summary` length 100-400 Chinese chars for AI-generated topics
    - Validate `id` format `vos_XXX`, `rank` 1-20, `effectDate` ISO date format
    - _Requirements: 1.5, 2.2, 3.1, 3.2, 8.2, 14.1, 14.2, 15.2, 17.1_

  - [ ]* 1.4 Write property test for topic validation (Property 1)
    - **Property 1: Topic Validation Completeness**
    - **Validates: Requirements 1.5, 2.2, 3.1, 3.2, 8.2, 14.1, 14.2, 15.2, 17.1**

- [ ] 2. Implement Reddit Scraper
  - [ ] 2.1 Create `RedditScraper` class (`scripts/reddit_scraper.py`)
    - Implement `fetch_posts(subreddit, limit=25)` using Reddit public JSON API (`{url}.json`)
    - Implement `fetch_comments(post_url, limit=30)` for posts with >10 comments
    - Implement engagement filter: skip posts with <3 comments AND <5 upvotes
    - Implement `count_confirmations(comments)` using `CONFIRMATION_WORDS` (case-insensitive)
    - Implement `extract_seller_voices(comments, max_voices=3)` — top-scored comments with score >= 5, formatted as `"Reddit (👍{score})"`
    - Implement `scrape_all()` returning `list[RawItem]`
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 7.3_

  - [ ]* 2.2 Write property test for confirmation counting (Property 10)
    - **Property 10: Reddit Confirmation Word Counting**
    - **Validates: Requirements 16.3**

  - [ ]* 2.3 Write property test for seller voice extraction (Property 11)
    - **Property 11: Seller Voice Extraction**
    - **Validates: Requirements 16.4**

- [ ] 3. Implement RSSHub Fetcher
  - [ ] 3.1 Create `RSSHubFetcher` class (`scripts/rsshub_fetcher.py`)
    - Configure RSSHub routes for 知无不言 (hot + new), AMZ123, 卖家之家, Amazon Seller Central Forums, 雨果跨境
    - Configure native RSS for Value Added Resource (`https://www.valueaddedresource.net/feed/`)
    - Implement `fetch_feed(route_or_url)` with 15-second timeout, returning `list[RawItem]`
    - Implement `fetch_all()` that skips failed feeds gracefully without blocking the pipeline
    - Parse each feed item to extract: title, description/content, publication date, source URL, author
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 3.2 Write property test for RSS parsing (Property 3)
    - **Property 3: RSS Feed Parsing Extracts All Required Fields**
    - **Validates: Requirements 5.4**

- [ ] 4. Implement Noise Filter and Deduplication
  - [ ] 4.1 Create `NoiseFilter` class (`scripts/noise_filter.py`)
    - Implement beginner question detection using keyword patterns
    - Implement service provider ad detection
    - Implement `deduplicate(items)` — if two items share >50% key terms, keep the one with higher engagement
    - Implement `filter_items(items)` that applies all filters and returns clean items
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 4.2 Write property test for noise filter correctness (Property 5)
    - **Property 5: Noise Filter Correctness**
    - **Validates: Requirements 7.1, 7.3**

  - [ ]* 4.3 Write property test for title deduplication (Property 6)
    - **Property 6: Title Deduplication Keeps Higher Engagement**
    - **Validates: Requirements 7.4**

- [ ] 5. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implement Topic Merger
  - [ ] 6.1 Create `TopicMerger` class (`scripts/topic_merger.py`)
    - Implement `extract_significant_terms(text)` to extract nouns, proper nouns, policy names
    - Implement `calculate_similarity(item_a, item_b)` based on keyword overlap (>40%), entity matching, and temporal proximity (within 7 days)
    - Implement `cluster_items(items)` using agglomerative clustering approach
    - Set `crossSourceCount` on each cluster to the number of distinct `source_platform` values
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ]* 6.2 Write property test for topic merging (Property 4)
    - **Property 4: Topic Merging Clusters by Similarity**
    - **Validates: Requirements 6.1, 6.2, 6.3**

- [ ] 7. Implement DeepSeek Client
  - [ ] 7.1 Create `DeepSeekClient` class (`scripts/deepseek_client.py`)
    - Read API key from `DEEPSEEK_API_KEY` env var; exit with clear error if missing/empty
    - Implement `_call_api(messages, retry_count=0)` with retry logic: 3 retries, exponential backoff (2s, 4s, 8s)
    - On malformed JSON response, re-request with simplified prompt
    - Implement `generate_topics(context_items)` — prompt instructs DeepSeek to generate 20 topics across 3 layers (10 policy_impact, 5 macro_event, 5 emerging_unknown)
    - Prompt must include: AM-perspective summary requirements, noise exclusion instructions, quality benchmark text, real verifiable discussions requirement, no fabricated URLs
    - Prompt must instruct: identify dominant seller sentiment, extract 1-3 pain points, classify alertLevel and insightType
    - Implement `generate_briefing(cluster_items)` — generate consolidated intelligence briefing with headline, briefing text, source breakdown, and seller consensus
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 7.2, 11.2, 11.3, 12.1, 12.2, 12.3, 14.3, 15.1, 17.2, 17.3, 18.3, 6.4_

- [ ] 8. Implement Manual Entry Preserver
  - [ ] 8.1 Create `ManualEntryPreserver` class (`scripts/manual_entry.py`)
    - Implement `load_existing(filepath)` to read existing `vos-data.json`
    - Implement `identify_manual_entries(entries)` — entries where `sellerVoices` or `comparison` is non-empty
    - Implement `is_duplicate(manual_entry, new_topic)` — title similarity check
    - Implement `merge(manual_entries, new_topics, max_total=20)` — manual entries keep original positions, discard duplicate new topics, fill remaining slots up to 20
    - Set `aiGenerated=false` on manual entries, `aiGenerated=true` on DeepSeek-generated topics
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 10.2, 10.3_

  - [ ]* 8.2 Write property test for manual entry preservation (Property 8)
    - **Property 8: Manual Entry Preservation**
    - **Validates: Requirements 9.1, 9.2, 10.2, 10.3**

  - [ ]* 8.3 Write property test for manual entry merge priority (Property 9)
    - **Property 9: Manual Entry Merge Priority**
    - **Validates: Requirements 9.3, 9.4**

- [ ] 9. Implement Pipeline Orchestrator
  - [ ] 9.1 Create `VOSPipeline` class and `main()` in `scripts/fetch-vos.py`
    - Replace the existing `fetch-vos.py` content with the new pipeline orchestrator
    - Wire all components: RedditScraper → RSSHubFetcher → NoiseFilter → TopicMerger → DeepSeekClient → ManualEntryPreserver
    - Validate each output topic, drop invalid ones with warning
    - Sort topics by `effectDate` descending, assign sequential `rank` 1-N
    - Ensure topic diversity: ≥4 distinct categories, ≥3 distinct sources with ≥1 from High and Medium priority tiers
    - Write `vos-data.json` with UTF-8 encoding, `ensure_ascii=False`, 2-space indent
    - Enforce 120-second execution timeout
    - _Requirements: 1.5, 1.6, 3.4, 4.3, 5.5, 8.1, 8.3, 8.4, 11.1, 12.4_

  - [ ]* 9.2 Write property test for output sort and rank invariant (Property 7)
    - **Property 7: Output Sort and Rank Invariant**
    - **Validates: Requirements 8.3**

- [ ] 10. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Create GitHub Actions workflow
  - [ ] 11.1 Create `.github/workflows/update-vos.yml`
    - Set up daily cron schedule and `workflow_dispatch` manual trigger
    - Use Python 3.12, install dependencies (`requests`, `hypothesis` for tests)
    - Pass `DEEPSEEK_API_KEY` from GitHub Secrets as env var
    - Run `python scripts/fetch-vos.py`
    - Commit and push updated `vos-data.json` (skip if no changes)
    - Follow the pattern from the existing `update-news.yml` workflow
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [ ] 12. Enhance frontend — AI labels, layer badges, and disclaimer
  - [ ] 12.1 Update `renderVOS()` in `script.js` to display new card elements
    - Add AI disclaimer banner at top of VOS section: "以下话题由 AI 基于公开社媒信息生成，可能存在时效性和准确性局限。重要决策请以亚马逊官方公告为准。"
    - Add "🤖 AI 生成" badge when `aiGenerated === true`
    - Add layer badge: "📋 政策影响" / "🌍 宏观传导" / "🔍 盲区发现" based on `layer` field
    - Add "⚠️ 待验证" indicator when `aiGenerated === true` AND no verifiable links
    - _Requirements: 10.4, 13.2, 13.3, 18.1, 18.2_

  - [ ] 12.2 Add sentiment, alert level, and source priority indicators
    - Add sentiment color-coded indicator: red dot for negative, gray for neutral, green for positive
    - Add alert level styling: red left border + "⚠️ 紧急" badge for critical, orange left border for high
    - Add source priority badge: gold for High Priority sources, silver for Medium Priority
    - Add "🔥 {count}人确认" badge when `confirmationCount >= 5`
    - Add "🔍 盲区发现" badge when `insightType === "blind_spot"`
    - _Requirements: 4.4, 14.4, 15.3, 16.5, 17.4_

  - [ ] 12.3 Add intelligence briefing card layout for merged topics
    - Render merged topics (crossSourceCount >= 2) as intelligence briefing cards with "📊 综合情报 | {N}个来源" header badge
    - Add collapsible "来源分析" section showing each source's unique perspective from `sourceBreakdown`
    - Visually distinguish briefing cards from single-source cards
    - _Requirements: 6.5, 6.6_

  - [ ] 12.4 Enhance `filterVOS()` to support layer filtering
    - Add layer filter buttons alongside existing topic category filters
    - Support filtering by both `topic` category and `layer` field
    - _Requirements: 3.5, 13.4_

- [ ] 13. Add frontend styles for new VOS card elements
  - [ ] 13.1 Update `styles.css` with new VOS card styles
    - Style AI label badge, layer badges, sentiment indicators
    - Style alert level borders (red for critical, orange for high)
    - Style source priority badges (gold, silver)
    - Style intelligence briefing card layout and collapsible source analysis section
    - Style confirmation badge, blind spot badge, unverified indicator
    - Style the AI disclaimer banner
    - _Requirements: 4.4, 6.5, 10.4, 14.4, 15.3, 16.5, 17.4, 18.1, 18.2_

- [ ] 14. Update `index.html` with layer filter UI
  - [ ] 14.1 Add layer filter buttons to the VOS section
    - Add filter buttons for "全部", "📋 政策影响", "🌍 宏观传导", "🔍 盲区发现" alongside existing topic filters
    - _Requirements: 3.5_

- [ ] 15. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The pipeline (`scripts/fetch-vos.py` and supporting modules) lives in the `vos-social-media` repo
- The frontend (`index.html`, `script.js`, `styles.css`) lives in the `competitor-study-hub` repo (this repo)
- The GitHub Actions workflow lives in the `vos-social-media` repo
- Property tests use `hypothesis` library for Python
- Each task references specific requirements for traceability
