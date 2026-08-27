# Israel-Focused SEO and GEO Keyword Strategy

Status: directional public research, ready for Search Console/Keyword Planner validation.

Canonical host: `https://nimrodfisher.co.il` (placeholder until the domain is live). The worldwide hub remains `https://ai-analytics-hub.com`.

## Positioning

Hebrew-first personal brand for **Nimrod Fisher / נמרוד פישר**. Offer: **data agents (סוכני דאטה) for companies**. Two motions: consultation (where an agent should live) then building it on company data — CRM, warehouse, and documents.

Not the ICP: SMBs as a segment. Not the lead product: workshops. Not a peer product: BI dashboards. Automation is how the agent acts. Data/BI is how company data becomes usable for the agent.

Primary conversion: a data-agent consultation. English equivalents live under `/en/` for technical and international search intent.

Google Trends is used for relative interest, not exact monthly volume. Its scores are normalized to a 0–100 range and low-volume terms may appear as zero. Validate final volume and competition in Google Keyword Planner or Search Console before paid campaigns or major content investment.

## Priority keyword map

Each keyword maps to one dominant intent and one canonical page. Consolidate terms when SERPs overlap; create a separate page only when the searcher needs a materially different answer.

| Priority | Language | Keyword cluster | Intent | Target URL | Content angle |
| --- | --- | --- | --- | --- | --- |
| P0 | Hebrew | סוכני דאטה; סוכן דאטה; ייעוץ לסוכני דאטה | Transactional | `/services/ai-agents` | Agent vs chatbot; where an agent should live; consult then build |
| P0 | Hebrew | בניית סוכני דאטה; סוכן דאטה לחברות | Transactional | `/services/ai-agents` | Build on CRM, warehouse, and documents |
| P0 | Hebrew | סוכני דאטה לחברות; ייעוץ ואז בניה | Commercial investigation | `/` | Homepage H1 kept; title/lede/services say data agents |
| P0 | English | data agents; data agent consulting; build data agents | Transactional | `/en/services/ai-agents` | Consult then build on company data |
| P0 | English | data agent vs chatbot; ai agents on company data | Commercial investigation | `/en/services/ai-agents` | Distinction and system connections |
| P1 | Hebrew | הטמעת AI בעסק; ייעוץ בינה מלאכותית לעסקים | Supporting | `/services/ai-adoption` | Supporting page; not the homepage offer |
| P1 | Hebrew | אוטומציה עסקית עם AI | Supporting | `/services/business-automation` | Folded into how the agent acts; page kept |
| P1 | Hebrew | דשבורד ניהולי; מערכת BI לעסקים | Supporting | `/services/data-bi-dashboards` | Data usable for the agent; not a peer product |
| P1 | English | AI consulting Israel; AI implementation services Israel | Supporting | `/en/services/ai-adoption` | Supporting English route |
| P1 | Hebrew | ייעוץ דאטה ואנליטיקה; ניתוח נתונים לעסקים | Commercial investigation | `/services/analytics-consulting` | Priorities, workflows, and practical analytics |
| P1 | Hebrew | סדנת AI לעובדים; הדרכת AI לעסקים | Supporting | `/services/ai-workshops` | Page kept; off homepage and nav |
| P1 | English | AI workshop for businesses | Supporting | `/en/services/ai-workshops` | Page kept; off homepage and nav |
| P1 | Hebrew | איך להתחיל AI בעסק; כלי AI לעסקים | Informational | `/guides/ai-for-small-business` | Answer-first guide; not the ICP |
| P1 | English | how to use AI in a small business | Informational | `/en/guides/ai-for-small-business` | Problem-first implementation guidance |
| P2 | Hebrew/English | AI case studies; מקרי בוחן AI | Commercial investigation | `/case-studies` | Original experience and approved client proof |

## GEO prompt set

Monitor whether AI search engines can answer and cite the site for questions such as:

- מה ההבדל בין סוכן דאטה לצ׳אטבוט?
- איפה סוכן דאטה צריך לחיות בארגון?
- איך בונים סוכן דאטה על CRM, מחסן נתונים ומסמכים?
- מי בונה סוכני דאטה לחברות בישראל?
- How is a data agent different from a chatbot?
- Where should a data agent live in a company?
- Who builds data agents on company data in Israel?
- What is the first step: consult or build a data agent?

Each answer page should answer the exact question in the first 40–60 words, then provide evidence, steps, caveats, and a clear next action. FAQ answers remain visible on the page; JSON-LD supports understanding but does not replace visible content.

## Evidence and terminology

- Competitors still sell BI dashboards, workshops, and generic AI adoption. This site should keep using “סוכן דאטה”, “ייעוץ ואז בניה”, and the chatbot distinction in titles, ledes, and FAQs.
- Israeli competitors use the vocabulary “בינה עסקית”, “דשבורדים”, “אנליטיקה”, “AI לניתוח נתונים”, “הטמעת פתרונות AI”, and “קבלת החלטות”. Compare [sp.data](https://www.spdata.co.il/), [Otech BI](https://www.otech.co.il/management-solutions/bi/), and [OneDatai](https://onedatai.co.il/).
- Google’s [generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says normal SEO, crawlability, unique useful content, and strong relevance remain the foundation for AI search visibility.

## 90-day publishing order

1. Days 1–30: publish the Hebrew homepage (data-agent consult + build), the `/services/ai-agents` money page, reciprocal English routes, Organization/Person/Service/BreadcrumbList JSON-LD, robots.txt, sitemap.xml, and Search Console verification.
2. Days 31–60: keep workshops and BI pages in the sitemap but off the homepage; add approved case studies and practical pages around connecting agents to CRM, warehouse, and documents.
3. Days 61–90: publish original Israeli-market observations, update pages using Search Console query data, earn relevant mentions, and review AI-answer citations monthly.

## Measurement

- Search Console: impressions, clicks, CTR, average position, and query growth by language and URL.
- Leads: assessment clicks, booked calls, qualified form submissions, and source/landing-page attribution.
- Content: indexation, internal-link coverage, time to first answer, and return visits.
- GEO: monthly prompt checks across Google AI features, ChatGPT, Gemini, and Perplexity; record inclusion, cited URL, answer accuracy, and competitor mentions.

## Launch checklist

- Replace the placeholder domain in `VITE_SITE_URL`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, and JSON-LD when `nimrodfisher.co.il` is live. Do not point canonicals at the old Hub `.co.il` placeholder.
- Verify every Hebrew/English alternate returns 200, is crawlable, self-canonicalizes, and is not `noindex`. Inner routes must rewrite to `index.html`.
- Validate JSON-LD with Google Rich Results Test and Schema.org Validator.
- Add approved client metrics and links before presenting case studies as quantified proof.
- Validate exact search-volume and competition estimates with Google Keyword Planner or Search Console before buying traffic.
