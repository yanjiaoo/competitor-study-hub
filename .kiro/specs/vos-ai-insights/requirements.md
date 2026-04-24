# Requirements Document

## Introduction

The VOS AI Insights feature transforms the "VOS From Social Media" module into a Social Media Listening system for Amazon Account Managers and leaders. The core goal is to capture seller voices that are invisible through internal channels — real complaints, policy reactions, operational pain points, and emerging issues that sellers discuss on social media but don't surface through formal feedback mechanisms. The system combines Reddit deep scraping (with comment analysis), DeepSeek AI-powered topic generation and summarization, and Amazon Seller Forums cross-verification to deliver actionable intelligence. The output is a `vos-data.json` file consumed by the static frontend on GitHub Pages.

## Glossary

- **VOS_Pipeline**: The Python script (`fetch-vos.py`) that runs in GitHub Actions to generate `vos-data.json`
- **DeepSeek_API**: The DeepSeek large language model API used for topic generation and summarization
- **VOS_Data_File**: The `vos-data.json` output file containing the array of topic objects
- **Frontend**: The Seller Learning Hub static site at `https://yanjiaoo.github.io/competitor-study-hub/` that renders VOS data
- **Manual_Entry**: A VOS topic entry that contains hand-curated `sellerVoices` and/or `comparison` table data
- **AM_Insight**: An Account Manager perspective summary analyzing a seller hot topic's operational impact, seller sentiment, and recommended actions
- **Topic_Category**: One of the eight classification labels: advertising, promotion, compliance, brand, returns, tax, logistics, trending
- **Source_Platform**: The origin community or media outlet for a topic (知无不言, 卖家之家, AMZ123, 雨果跨境, Reddit r/FBA, 微信公众号)
- **Seller_Sentiment**: The dominant emotional tone of seller discussions (negative/neutral/positive) with specific pain points identified
- **Alert_Level**: Urgency classification (critical/high/normal) based on seller impact scope and sentiment intensity

## Requirements

### Requirement 1: DeepSeek API Topic Generation

**User Story:** As an Account Manager, I want the VOS pipeline to use DeepSeek API to generate a curated list of real seller hot topics, so that I get high-quality, relevant content instead of noisy RSS title fragments.

#### Acceptance Criteria

1. WHEN the VOS_Pipeline executes, THE VOS_Pipeline SHALL call the DeepSeek_API to generate exactly 20 seller hot topics covering recent Amazon seller community discussions
2. WHEN generating topics, THE DeepSeek_API prompt SHALL instruct the model to produce topics across three layers:
   - **Layer 1 - Amazon Policy Impact**: Internal policy changes and their seller reactions (e.g., DD+7 payment hold, Prime Day rule changes, advertising payment method changes, GWD launch, FBA fee adjustments)
   - **Layer 2 - Macro Event Transmission**: External events that impact sellers through supply chain, cost, or demand channels (e.g., Middle East conflict affecting shipping, oil price increases raising logistics costs, tariff policy changes, currency fluctuations)
   - **Layer 3 - Emerging Unknown Topics**: Issues the model identifies as actively discussed by sellers but unlikely to be on an AM's radar — topics that represent genuine information blind spots
3. THE DeepSeek_API prompt SHALL instruct the model to allocate approximately 10 topics to Layer 1, 5 topics to Layer 2, and 5 topics to Layer 3
4. THE VOS_Pipeline SHALL include the DeepSeek_API prompt instruction that all generated topics must reference real, verifiable seller community discussions and not fabricate content
5. WHEN the DeepSeek_API returns topics, THE VOS_Pipeline SHALL validate that each topic contains all required fields: title, summary, source, topic category, date, and layer
6. IF the DeepSeek_API returns fewer than 20 valid topics, THEN THE VOS_Pipeline SHALL log a warning and proceed with the available valid topics

### Requirement 2: AM Perspective Summaries

**User Story:** As an Account Manager, I want each hot topic to include an AM-perspective insight summary at the quality level of the existing TOP1 entry (DD+7 policy), so that I can quickly understand the operational impact, seller sentiment, and recommended actions.

#### Acceptance Criteria

1. WHEN generating each topic, THE DeepSeek_API prompt SHALL instruct the model to write the summary field from an Account Manager's perspective, covering: (a) what happened, (b) who is affected and how, (c) seller emotional reaction and specific complaints, (d) what this means for AM's daily work with sellers
2. THE VOS_Pipeline SHALL ensure each topic summary is between 100 and 400 Chinese characters in length
3. WHEN a topic relates to a policy change, THE DeepSeek_API prompt SHALL instruct the model to include the specific policy impact, timeline, and before/after comparison in the AM_Insight summary
4. WHEN a topic relates to a macro event (Layer 2), THE DeepSeek_API prompt SHALL instruct the model to explain the transmission mechanism — how the external event translates into concrete seller impact (e.g., "oil price +15% → head-haul shipping cost +$0.5/kg → FBA inbound cost increase for sellers")
5. THE DeepSeek_API prompt SHALL use the following quality benchmark as reference for summary style and depth: "该政策统一全球卖家资金预留规则，要求所有订单货款在商品妥投后需额外冻结7天方可转入卖家可用余额。FBA订单回款周期普遍延长8-9天，FBM订单回款周期最长延长至20-30天，直接加剧卖家现金流压力，月销百万美金卖家额外资金占用超20万美金。"

### Requirement 3: Topic Categorization and Layering

**User Story:** As an Account Manager, I want each topic categorized by both topic type and information layer, so that I can filter by subject area and quickly identify blind-spot discoveries.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL assign exactly one Topic_Category to each generated topic from the set: advertising, promotion, compliance, brand, returns, tax, logistics, trending
2. THE VOS_Pipeline SHALL assign exactly one `layer` field to each topic with values: "policy_impact" (Layer 1), "macro_event" (Layer 2), or "emerging_unknown" (Layer 3)
3. WHEN the DeepSeek_API returns a topic with a category value not in the allowed set, THE VOS_Pipeline SHALL map the category to the closest matching allowed value or default to "trending"
4. THE VOS_Pipeline SHALL ensure the 20 generated topics cover at least 4 distinct Topic_Category values
5. THE Frontend SHALL support filtering by both Topic_Category and layer, and SHALL display a layer indicator on each card: "📋 政策影响" for Layer 1, "🌍 宏观传导" for Layer 2, "🔍 盲区发现" for Layer 3

### Requirement 4: Source Attribution and Priority

**User Story:** As an Account Manager, I want each topic to clearly indicate its source platform with priority weighting, so that I can assess credibility and understand where the most actionable intelligence comes from.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL assign a Source_Platform value to each topic from the allowed set, with the following priority tiers:
   - **High Priority**: Reddit r/FulfillmentByAmazon, Reddit r/AmazonSeller (policy field-testing and technical feedback), 知无不言 (Chinese seller compliance, tax, cross-border logistics pain points), AMZ123 (Chinese seller policy analysis), Amazon Seller Central Forums (official seller discussions, first-hand policy announcements), Value Added Resource (expert policy change analysis and first-hand interpretation)
   - **Medium Priority**: 卖家之家, 雨果跨境, 微信公众号
   - **Low Priority**: Other industry media (used as fallback only)
2. WHEN the DeepSeek_API returns a topic with a source not in the allowed Source_Platform set, THE VOS_Pipeline SHALL map the source to the closest matching allowed value or use "行业媒体" as fallback
3. THE VOS_Pipeline SHALL ensure the 20 generated topics include at least 3 distinct Source_Platform values, with at least 1 from each priority tier (High and Medium)
4. THE Frontend SHALL display the source priority tier as a visual indicator: gold badge for High Priority sources, silver for Medium Priority

### Requirement 5: RSSHub Multi-Source Integration

**User Story:** As a developer, I want the pipeline to use RSSHub as a universal RSS adapter to access seller forums and platforms that don't offer native RSS feeds, so that the system can monitor a much wider range of seller communities without custom scrapers for each site.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL integrate with a self-hosted or public RSSHub instance to generate RSS feeds for platforms that lack native RSS support
2. THE VOS_Pipeline SHALL configure RSSHub routes for the following sources:
   - **知无不言**: `/wearesellers/hot` (hot topics) and `/wearesellers/new` (new posts)
   - **AMZ123**: `/amz123/news` (news feed)
   - **卖家之家**: `/mjzj/article` (article feed)
   - **Amazon Seller Central Forums**: `/amazon/seller-forums` (official seller discussions and policy announcements)
   - **Value Added Resource**: RSS feed from `https://www.valueaddedresource.net/feed/` (expert policy analysis — native RSS, no RSSHub needed)
   - **雨果跨境**: `/cifnews/article` (cross-border e-commerce news)
3. THE VOS_Pipeline SHALL fetch RSS feeds from RSSHub with a 15-second timeout per source, and SHALL gracefully skip any source that fails without blocking the entire pipeline
4. THE VOS_Pipeline SHALL parse each RSSHub feed item to extract: title, description/content, publication date, source URL, and author (if available)
5. THE VOS_Pipeline SHALL combine RSSHub-sourced items with Reddit API-sourced items and DeepSeek-generated items into a unified candidate pool before applying noise filtering and topic merging

### Requirement 6: Cross-Source Topic Merging and Intelligence Briefing

**User Story:** As an Account Manager leader, I want the system to automatically merge related discussions from different platforms into consolidated intelligence briefings, so that I see one comprehensive view per topic instead of scattered fragments from each source.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL implement a topic merging algorithm that groups raw items from different sources into clusters when they discuss the same underlying event or policy change
2. THE topic merging algorithm SHALL use the following signals to determine if two items belong to the same cluster:
   - Keyword overlap: more than 40% of significant terms (nouns, proper nouns, policy names) match
   - Entity matching: same Amazon policy name, fee type, or program name mentioned
   - Temporal proximity: published within 7 days of each other
3. WHEN a cluster contains items from 2 or more distinct Source_Platforms, THE VOS_Pipeline SHALL mark the merged topic with a `crossSourceCount` field indicating the number of distinct sources
4. FOR each merged topic cluster, THE VOS_Pipeline SHALL call the DeepSeek_API with all cluster items as context to generate a single consolidated intelligence briefing that includes:
   - **Headline**: A neutral, factual title summarizing the core event
   - **Briefing**: A 200-400 character AM-perspective summary synthesizing insights from all sources
   - **Source Breakdown**: Which platforms are discussing this and what each platform's unique angle is (e.g., "Reddit focuses on operational workaround, 知无不言 focuses on compliance risk, AMZ123 provides policy timeline")
   - **Seller Consensus**: Whether sellers across platforms agree on the impact, or if there are divergent views
5. THE Frontend SHALL display merged topics as "intelligence briefing" cards with a "📊 综合情报 | {N}个来源" header badge, visually distinct from single-source topic cards
6. THE Frontend SHALL show a collapsible "来源分析" section within each briefing card that lists each contributing source with its unique perspective

### Requirement 7: Noise Filtering Protocol

**User Story:** As an Account Manager, I want the system to automatically filter out low-value noise, so that every topic I see has genuine decision-making value.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL apply a noise filter that drops the following content types before inclusion in the VOS_Data_File:
   - **Beginner questions**: Posts asking "how to start selling", "how to open an account", registration tutorials
   - **Service provider ads**: Posts promoting third-party tools, agencies, or paid services
   - **Pure emotional venting**: Posts that contain only negative sentiment without specific policy/operational details (e.g., "Amazon sucks" without actionable context)
   - **Duplicate events**: Multiple posts about the same event — keep only the highest-quality version
2. WHEN using DeepSeek_API for topic generation, THE prompt SHALL explicitly instruct the model to exclude beginner questions, service provider promotions, and pure emotional venting without operational substance
3. WHEN scraping Reddit, THE VOS_Pipeline SHALL skip posts with fewer than 3 comments AND fewer than 5 upvotes (low-engagement filter)
4. THE VOS_Pipeline SHALL apply title-level deduplication: if two topics share more than 50% of key terms, keep only the one with higher engagement metrics or more detailed summary

### Requirement 8: VOS Data File Output

**User Story:** As a developer, I want the pipeline to output a well-structured vos-data.json file, so that the frontend can render topics without modification.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL write the generated topics to the VOS_Data_File in JSON format as an array of topic objects
2. THE VOS_Pipeline SHALL structure each topic object with the fields: id (string, format `vos_XXX`), rank (integer 1-20), title (string), verified (string, default "unconfirmed"), effectDate (string, ISO date format), summary (string), source (string), sellerVoices (array, default empty), comparison (array, default empty), links (array of link objects)
3. THE VOS_Pipeline SHALL sort topics by effectDate in descending order (most recent first) before assigning rank values
4. WHEN writing the VOS_Data_File, THE VOS_Pipeline SHALL use UTF-8 encoding with `ensure_ascii=False` and 2-space indentation

### Requirement 9: Manual Entry Preservation

**User Story:** As a content curator, I want manually curated high-quality entries (with sellerVoices and comparison tables) to be preserved across pipeline runs, so that editorial work is not lost.

#### Acceptance Criteria

1. WHEN the VOS_Pipeline generates new topics, THE VOS_Pipeline SHALL read the existing VOS_Data_File and identify Manual_Entries (topics where `sellerVoices` array is non-empty OR `comparison` array is non-empty)
2. THE VOS_Pipeline SHALL preserve all identified Manual_Entries in the output VOS_Data_File with their original content unchanged
3. WHEN merging Manual_Entries with newly generated topics, THE VOS_Pipeline SHALL place Manual_Entries at their original rank positions and fill remaining slots with new AI-generated topics up to a total of 20
4. IF a newly generated topic covers the same subject as an existing Manual_Entry (matched by similar title), THEN THE VOS_Pipeline SHALL keep the Manual_Entry and discard the duplicate AI-generated topic

### Requirement 10: AI Content Labeling

**User Story:** As an Account Manager, I want to clearly distinguish AI-generated content from manually curated content, so that I can assess the reliability of each entry.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL add an `aiGenerated` boolean field to each topic object in the VOS_Data_File
2. WHEN a topic is generated by the DeepSeek_API, THE VOS_Pipeline SHALL set `aiGenerated` to `true`
3. WHEN a topic is a preserved Manual_Entry, THE VOS_Pipeline SHALL set `aiGenerated` to `false`
4. WHEN displaying a topic with `aiGenerated` set to `true`, THE Frontend SHALL render a visible "🤖 AI 生成" label on the topic card

### Requirement 11: GitHub Actions Integration

**User Story:** As a developer, I want the VOS AI pipeline to run automatically on a daily schedule via GitHub Actions, so that the data stays fresh without manual intervention.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL be executable as a GitHub Actions workflow step using Python 3.12
2. THE VOS_Pipeline SHALL read the DeepSeek API key from the `DEEPSEEK_API_KEY` environment variable (sourced from GitHub Secrets)
3. IF the `DEEPSEEK_API_KEY` environment variable is not set or empty, THEN THE VOS_Pipeline SHALL exit with a clear error message and non-zero exit code
4. WHEN the VOS_Pipeline completes successfully, THE GitHub Actions workflow SHALL commit and push the updated VOS_Data_File to the repository
5. THE GitHub Actions workflow SHALL run on a daily schedule and support manual trigger via `workflow_dispatch`

### Requirement 12: Error Handling and Resilience

**User Story:** As a developer, I want the pipeline to handle API failures gracefully, so that a single failure does not break the entire data pipeline.

#### Acceptance Criteria

1. IF the DeepSeek_API call fails due to network error or timeout, THEN THE VOS_Pipeline SHALL retry the call up to 3 times with exponential backoff (2s, 4s, 8s delays)
2. IF all DeepSeek_API retry attempts fail, THEN THE VOS_Pipeline SHALL preserve the existing VOS_Data_File unchanged and exit with a warning log message
3. IF the DeepSeek_API returns malformed JSON, THEN THE VOS_Pipeline SHALL log the parsing error and attempt to re-request with a simplified prompt
4. THE VOS_Pipeline SHALL complete execution within 120 seconds under normal operating conditions

### Requirement 13: Frontend Display of AI Topics

**User Story:** As an Account Manager, I want the frontend to display the AI-generated topics in the existing VOS card layout, so that the user experience remains consistent.

#### Acceptance Criteria

1. THE Frontend SHALL load the VOS_Data_File from `https://raw.githubusercontent.com/yanjiaoo/vos-social-media/main/vos-data.json` with the local `vos-data.json` as fallback
2. THE Frontend SHALL render each topic as a VOS card displaying: title, AM_Insight summary, Source_Platform badge, Topic_Category tag, and effectDate
3. WHEN a topic has `aiGenerated` set to `true`, THE Frontend SHALL display a "🤖 AI 生成" indicator on the topic card
4. THE Frontend SHALL support filtering topics by Topic_Category using the existing category selector UI

### Requirement 14: Seller Sentiment and Pain Point Capture

**User Story:** As an Account Manager, I want each topic to surface the dominant seller sentiment and specific pain points, so that I can understand what sellers are truly feeling and proactively address issues before they escalate.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL include a `sentiment` field in each topic object with values: "negative", "neutral", or "positive"
2. THE VOS_Pipeline SHALL include a `painPoints` array field listing 1-3 specific seller pain points extracted from the topic (e.g., "cash flow pressure", "compliance cost increase")
3. WHEN generating topics, THE DeepSeek_API prompt SHALL instruct the model to identify the dominant seller emotion and extract concrete operational pain points
4. THE Frontend SHALL display the sentiment as a color-coded indicator on each topic card (red for negative, gray for neutral, green for positive)

### Requirement 15: Information Blind Spot Discovery

**User Story:** As an Account Manager leader, I want the system to highlight topics that represent information blind spots — issues sellers are discussing on social media that are NOT yet visible through internal Amazon channels, so that I can stay ahead of emerging problems.

#### Acceptance Criteria

1. WHEN generating topics, THE DeepSeek_API prompt SHALL instruct the model to prioritize topics where sellers report issues, policy impacts, or operational challenges that are unlikely to surface through Amazon's internal seller feedback mechanisms (e.g., Seller Central tickets, AM conversations)
2. THE VOS_Pipeline SHALL include an `insightType` field with values: "blind_spot" (not visible internally), "amplifier" (known internally but social media reveals greater severity), or "confirmation" (aligns with internal signals)
3. THE Frontend SHALL visually distinguish "blind_spot" topics with a prominent "🔍 盲区发现" badge

### Requirement 16: Reddit Deep Scraping with Comment Analysis

**User Story:** As an Account Manager, I want the system to scrape Reddit r/FBA posts including comment sections, so that I get verified seller discussions with community confirmation signals.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL scrape Reddit r/FulfillmentByAmazon and r/AmazonSeller using the free JSON API in the GitHub Actions environment
2. THE VOS_Pipeline SHALL fetch the top 30 comments for posts with more than 10 comments
3. THE VOS_Pipeline SHALL count confirmation words in comments ("confirmed", "happening to me too", "same here", "can confirm", "me too", "same issue") and store the count as `confirmationCount`
4. THE VOS_Pipeline SHALL extract up to 3 highest-scored comments (score >= 5) as `sellerVoices` entries with source attribution "Reddit (👍{score})"
5. WHEN a topic has `confirmationCount` >= 5, THE Frontend SHALL display a "🔥 {count}人确认" badge on the topic card

### Requirement 17: Urgent Alert Classification

**User Story:** As an Account Manager leader, I want critical topics (mass seller protests, sudden policy changes, system outages) to be prominently flagged, so that I can take immediate action.

#### Acceptance Criteria

1. THE VOS_Pipeline SHALL assign an `alertLevel` field to each topic with values: "critical", "high", or "normal"
2. THE VOS_Pipeline SHALL classify a topic as "critical" when it involves: mass seller protests, account suspension waves, system outages, or sudden fee increases affecting all sellers
3. THE VOS_Pipeline SHALL classify a topic as "high" when it involves: policy changes with deadlines, significant fee adjustments, or compliance requirement changes
4. THE Frontend SHALL render "critical" topics with a red left border and "⚠️ 紧急" badge, and "high" topics with an orange left border

### Requirement 18: LLM Content Transparency

**User Story:** As an Account Manager, I want clear disclosure about the limitations of AI-generated content, so that I use the information appropriately and verify critical details before acting.

#### Acceptance Criteria

1. THE Frontend SHALL display a persistent disclaimer at the top of the VOS section: "以下话题由 AI 基于公开社媒信息生成，可能存在时效性和准确性局限。重要决策请以亚马逊官方公告为准。"
2. WHEN a topic has `aiGenerated` set to `true` AND has no `links` with verifiable URLs, THE Frontend SHALL display an additional "⚠️ 待验证" indicator
3. THE VOS_Pipeline SHALL NOT generate fabricated URLs or fake source links — if no verifiable link exists, the `links` array SHALL contain only the source platform name without a URL
