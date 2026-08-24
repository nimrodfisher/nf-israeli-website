# Israel-Focused SEO and GEO Keyword Strategy

Status: directional public research, ready for Search Console/Keyword Planner validation.

## Positioning

Hebrew-first consulting site for small and medium-sized businesses in Israel. Primary conversion: an executive AI/data assessment. English equivalents live under `/en/` for technical and international search intent.

Google Trends is used for relative interest, not exact monthly volume. Its scores are normalized to a 0–100 range and low-volume terms may appear as zero. Validate final volume and competition in Google Keyword Planner or Search Console before paid campaigns or major content investment.

## Priority keyword map

Each keyword maps to one dominant intent and one canonical page. Consolidate terms when SERPs overlap; create a separate page only when the searcher needs a materially different answer.

| Priority | Language | Keyword cluster | Intent | Target URL | Content angle |
| --- | --- | --- | --- | --- | --- |
| P0 | Hebrew | ייעוץ בינה מלאכותית לעסקים; הטמעת AI בעסק | Transactional | `/services/ai-adoption` | Assessment, pilot, governance, internal capability |
| P0 | Hebrew | בינה מלאכותית לעסקים קטנים ובינוניים | Commercial investigation | `/` | AI for Israeli SMBs, outcomes, proof, CTA |
| P0 | Hebrew | אוטומציה עסקית עם AI; אוטומציה לעסקים קטנים | Transactional | `/services/business-automation` | Repetitive work, workflows, control, measurement |
| P0 | Hebrew | דשבורד ניהולי; מערכת BI לעסקים; בינה עסקית לעסקים | Transactional | `/services/data-bi-dashboards` | Trusted metrics and faster decisions |
| P0 | English | AI consulting Israel; AI implementation services Israel | Transactional | `/en/services/ai-adoption` | Israel-specific consulting and implementation |
| P0 | English | business intelligence consulting Israel; data analytics consulting Israel | Transactional | `/en/services/data-bi-dashboards` | BI, data, dashboards, and decision systems |
| P1 | Hebrew | ייעוץ דאטה ואנליטיקה; ניתוח נתונים לעסקים | Commercial investigation | `/services/analytics-consulting` | Priorities, workflows, and practical analytics |
| P1 | English | AI consulting for small business; AI automation for SMBs | Commercial investigation | `/en/` | Practical AI for 10–100 employee companies |
| P1 | Hebrew | סדנת AI לעובדים; הדרכת AI לעסקים | Transactional | `/services/ai-workshops` | Role-based training and safe usage |
| P1 | English | AI workshop for businesses; AI adoption consulting | Transactional | `/en/services/ai-workshops` | Practical team adoption |
| P1 | Hebrew | איך להתחיל AI בעסק; כלי AI לעסקים | Informational | `/guides/ai-for-small-business` | Answer-first guide with a 4–8 week pilot path |
| P1 | English | how to use AI in a small business; best AI tools for business analytics | Informational | `/en/guides/ai-for-small-business` | Problem-first implementation guidance |
| P2 | Hebrew/English | AI case studies; מקרי בוחן AI; AI transformation examples | Commercial investigation | `/case-studies` | Original experience and approved client proof |

## GEO prompt set

Monitor whether AI search engines can answer and cite the site for questions such as:

- מי נותן ייעוץ AI לעסקים קטנים בישראל?
- איך עסק בינוני יכול להתחיל להשתמש בבינה מלאכותית?
- איזה כלי AI מתאימים לחברה עם 10–100 עובדים?
- איך אפשר להפוך דיווחים ידניים לאוטומטיים בעסק בישראל?
- Who provides AI consulting for small and medium-sized businesses in Israel?
- What is the best way for an Israeli SME to start using AI?
- Which AI analytics tools suit a 10–100 employee company?
- How can a small Israeli company automate reporting and analyze data?

Each answer page should answer the exact question in the first 40–60 words, then provide evidence, steps, caveats, and a clear next action. FAQ answers remain visible on the page; JSON-LD supports understanding but does not replace visible content.

## Evidence and terminology

- Israeli SMB research reports 28% AI adoption in 2025, with SMB usage concentrated in writing, graphics, and data analysis; reported benefits include time savings, product improvement, and reduced reliance on external providers. Source: [Israel Small and Medium Business Agency](https://www.sba.org.il/hb/PolicyAndInformation/Researches/Documents/The%20use%20of%20artificial%20intelligence%20among%20businesses%20-%20mungash.pdf).
- The Israel Central Bureau of Statistics reports 28% AI usage among surveyed businesses with 10+ employee jobs and approximately 60% usage in high-tech industries. Source: [Israel Central Bureau of Statistics](https://www.cbs.gov.il/he/mediarelease/DocLib/2025/216/31_25_216e.pdf).
- Israeli competitors use the vocabulary “בינה עסקית”, “דשבורדים”, “אנליטיקה”, “AI לניתוח נתונים”, “הטמעת פתרונות AI”, and “קבלת החלטות”. Compare [sp.data](https://www.spdata.co.il/), [Otech BI](https://www.otech.co.il/management-solutions/bi/), and [OneDatai](https://onedatai.co.il/).
- Google’s [generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says normal SEO, crawlability, unique useful content, and strong relevance remain the foundation for AI search visibility.

## 90-day publishing order

1. Days 1–30: publish the Hebrew homepage, five service pages, reciprocal English routes, Organization/Person/Service/BreadcrumbList JSON-LD, robots.txt, sitemap.xml, and Search Console verification.
2. Days 31–60: publish the SMB AI guide, two approved case studies, and practical pages around automation, reporting, and data analysis.
3. Days 61–90: publish original Israeli-market observations, update pages using Search Console query data, earn relevant mentions, and review AI-answer citations monthly.

## Measurement

- Search Console: impressions, clicks, CTR, average position, and query growth by language and URL.
- Leads: assessment clicks, booked calls, qualified form submissions, and source/landing-page attribution.
- Content: indexation, internal-link coverage, time to first answer, and return visits.
- GEO: monthly prompt checks across Google AI features, ChatGPT, Gemini, and Perplexity; record inclusion, cited URL, answer accuracy, and competitor mentions.

## Launch checklist

- Replace the provisional domain in `VITE_SITE_URL`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, and JSON-LD.
- Verify every Hebrew/English alternate returns 200, is crawlable, self-canonicalizes, and is not `noindex`.
- Validate JSON-LD with Google Rich Results Test and Schema.org Validator.
- Add approved client metrics and links before presenting case studies as quantified proof.
- Validate exact search-volume and competition estimates with Google Keyword Planner or Search Console before buying traffic.
