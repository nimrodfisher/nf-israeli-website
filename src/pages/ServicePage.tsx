import { ArrowUpLeft, Check } from 'lucide-react';
import { useEffect } from 'react';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';
import { SiteHeader } from '../components/SiteHeader';
import { Language, localizedPath, SITE_URL, absoluteUrl } from '../lib/seo';

const CALENDAR_URL = 'https://calendar.app.google/P6mjrP2Akirk3zodA';

type ServiceCopy = {
  he: { title: string; description: string; h1: string; intro: string; keywords: string[]; bullets: string[]; steps: [string, string][]; outcomes: string[]; faqs: FAQItem[] };
  en: { title: string; description: string; h1: string; intro: string; keywords: string[]; bullets: string[]; steps: [string, string][]; outcomes: string[]; faqs: FAQItem[] };
};

const services: Record<string, ServiceCopy> = {
  'ai-agents': {
    he: {
      title: 'סוכני דאטה לחברות | נמרוד פישר',
      description: 'סוכן דאטה זה לא צ׳אטבוט. קודם מבינים באיזה תהליך הוא נכנס בארגון, אחר כך בונים אותו על ה-CRM, המחסן והמסמכים של החברה.',
      h1: 'סוכן דאטה — לא צ׳אטבוט על האתר',
      intro: 'צ׳אטבוט עונה למבקרים. סוכן דאטה עובד בתוך החברה: מתחבר ל-CRM, למחסן הנתונים ולמסמכים, ועושה עבודה על הדאטה שכבר יש. מתחילים בייעוץ — באיזה תהליך הסוכן נכנס — ורק אחר כך עוברים לבנייה.',
      keywords: ['סוכני דאטה', 'סוכן דאטה', 'ייעוץ לסוכני דאטה', 'בניית סוכני דאטה', 'data agents'],
      bullets: [
        'הפרדה ברורה בין סוכן דאטה לבין צ׳אטבוט באתר',
        'ייעוץ שממפה באיזה תהליך הסוכן נכנס: החלטה, תהליך, ומקורות מידע',
        'חיבור ל-CRM, למחסן נתונים, למסמכים ולכלים שכבר רצים בארגון',
        'בנייה על הדאטה של החברה, עם אוטומציה כחלק מהפעולה של הסוכן',
        'הדאטה וה-BI הופכים למשהו שהסוכן באמת עובד איתו, לא למוצר בצד',
      ],
      steps: [
        ['01 / ייעוץ', 'מבינים באיזה תהליך הסוכן נכנס: איזו החלטה תקועה, איזה מידע כבר קיים, ואיפה חיבור ל-CRM, למחסן או למסמכים ייצר ערך.'],
        ['02 / בנייה', 'בונים את הסוכן על הדאטה של החברה: חיבורים, הקשר, גבולות, והפעולות שהוא באמת מבצע.'],
        ['03 / הפעלה', 'הצוות יודע להפעיל, למדוד ולשפר. בלי תלות בי לכל שאלה.'],
      ],
      outcomes: ['החלטה ברורה איפה הסוכן יושב, ואיפה לא', 'סוכן מחובר למערכות ולדאטה האמיתיים של החברה', 'דרך עבודה שהצוות יכול להמשיך ממנה'],
      faqs: [
        { question: 'מה ההבדל בין סוכן דאטה לצ׳אטבוט?', answer: 'צ׳אטבוט מדבר עם אנשים באתר או בוואטסאפ. סוכן דאטה עובד על הדאטה של החברה: CRM, מחסן נתונים, מסמכים ותהליכים פנימיים. אם מישהו מוכר לכם ״סוכן״ שהוא בעיקר חלון צ׳אט באתר, זה צ׳אטבוט.' },
        { question: 'לאילו מערכות אפשר לחבר סוכן דאטה?', answer: 'ל-CRM, למחסן נתונים, למסמכים פנימיים, לכלים תפעוליים ולמקורות שהצוות כבר עובד איתם. החיבור הוא חלק מהבנייה, לא תוסף אחרי ההשקה.' },
        { question: 'למה מתחילים בייעוץ ולא ישר בבנייה?', answer: 'כי קודם צריך להבין באיזה תהליך הסוכן נכנס: איזו החלטה, איזה תהליך, איזה מידע. בלי זה בונים כלי יפה שאף אחד לא מפעיל.' },
        { question: 'האם צריך להחליף את מחסן הנתונים או את ה-BI?', answer: 'לא. הדאטה וה-BI הקיימים הופכים למשהו שהסוכן באמת עובד איתו. לא מחליפים אותם במוצר מקביל, ולא בונים דשבורד נוסף בתור העבודה.' },
        { question: 'כמה זמן לוקח מהייעוץ לבנייה ראשונה?', answer: 'ייעוץ ממוקד ואז בנייה ראשונה נמשכים בדרך כלל כמה שבועות, לפי מורכבות החיבורים ולזמינות הצוות. לא מתחילים בפרויקט תשתית של שנה.' },
      ],
    },
    en: {
      title: 'Data Agents for Companies | Consult, Then Build',
      description: 'A data agent is not a chatbot. Consult on where the agent should live, then build it on the company CRM, warehouse, and documents.',
      h1: 'A data agent — not a chatbot on the website',
      intro: 'A chatbot answers visitors. A data agent lives inside the company: it connects to the CRM, warehouse, and documents, and does work on data you already have. Start with consulting — where the agent should live — then build.',
      keywords: ['data agents', 'data agent consulting', 'build data agents', 'data agent vs chatbot', 'ai agents on company data'],
      bullets: [
        'A clear line between a data agent and a marketing chatbot',
        'Consulting that maps where the agent should live: decision, workflow, and sources',
        'Connections to the CRM, warehouse, documents, and tools already in use',
        'A build on company data, with automation as how the agent acts',
        'Data and BI become material the agent can use — not a peer product',
      ],
      steps: [
        ['01 / Consult', 'Find where an agent should live: which stuck decision, which existing information, and where a CRM, warehouse, or document connection creates value.'],
        ['02 / Build', 'Build the agent on company data — connections, context, guardrails, and the actions it actually takes.'],
        ['03 / Operate', 'Leave the team able to run, measure, and improve it — without depending on me for every question.'],
      ],
      outcomes: ['A clear call on where the agent lives — and where it does not', 'An agent connected to the company’s real systems and data', 'A way of working the team can continue'],
      faqs: [
        { question: 'How is a data agent different from a chatbot?', answer: 'A chatbot talks to people on a front-door channel. A data agent works on company data: CRM, warehouse, documents, and internal workflows. If someone sells you an “agent” that is mostly a chat window on the website — that is a chatbot.' },
        { question: 'Which systems can a data agent connect to?', answer: 'CRM, warehouse, internal documents, operational tools, and sources the team already uses. The connection is part of the build, not a later add-on.' },
        { question: 'Why consult before building?', answer: 'Because you first need to know where the agent should live — which decision, which workflow, which information. Without that, you build a polished tool nobody operates.' },
        { question: 'Do we need to replace the warehouse or BI?', answer: 'No. Existing data and BI become material the agent can use. They are not replaced by a parallel product, and the engagement is not “another dashboard.”' },
        { question: 'How long from consultation to a first build?', answer: 'Focused consulting and a first build usually take several weeks, depending on connection complexity and team availability. It does not start with a year-long infrastructure program.' },
      ],
    },
  },
  'ai-adoption': {
    he: { title: 'הטמעת AI בחברה | מפיילוט לסוכן שעובד', description: 'הטמעת AI בחברות: מבינים באיזה תהליך זה נכנס, מריצים פיילוט, ואז בונים סוכן על הדאטה שכבר יש.', h1: 'הטמעת AI שמתחילה מהעסק, לא מהבאזז', intro: 'עוזרים להנהלה להפוך עניין ב-AI לתכנית שאפשר למדוד ולהפעיל. לא רשימת כלים. תהליך, פיילוט, ואז סוכן על הדאטה של החברה.', keywords: ['הטמעת AI בחברה', 'ייעוץ AI לחברות', 'פיילוט AI', 'תכנית AI לארגון', 'סוכני דאטה'], bullets: ['מיפוי תהליכים והחלטות שבאמת זזים', 'בחירת פיילוט ראשון עם מדד הצלחה ברור', 'הגדרת בעלות, הרשאות וכללי שימוש בטוח', 'הצוות יודע להמשיך בליי, לא תלות בספק'], steps: [['01 / להבין', 'ממפים מה מעכב את החברה ומה כבר קיים בפנים.'], ['02 / לתעדף', 'בוחרים מהלך קטן מספיק כדי להתחיל, ומהותי מספיק כדי להוכיח ערך.'], ['03 / להפעיל', 'בונים, מודדים ומשפרים עם הצוות שממשיך להפעיל את זה.']], outcomes: ['תכנית AI שההנהלה יכולה לעמוד מאחוריה', 'פיילוט ראשון עם מדדי הצלחה', 'שפה משותפת בין הנהלה, דאטה ותפעול'], faqs: [{ question: 'כמה זמן לוקחת הטמעת AI?', answer: 'ייעוץ ופיילוט ראשוני נמשכים בדרך כלל 4–8 שבועות, לפי מורכבות הנתונים ולזמינות הצוות.' }, { question: 'האם צריך צוות דאטה גדול?', answer: 'לא בהכרח. מתחילים מתהליך ממוקד, ומתכננים סביב האנשים והכלים שכבר יש בחברה.' }] },
    en: { title: 'AI Adoption Consulting Israel | From Plan to Practice', description: 'A practical AI adoption plan for Israeli small and medium businesses: use cases, measurable pilots, governance, and internal capability.', h1: 'AI adoption that starts with the business — not the buzzword', intro: 'Turn interest in AI into an action plan your leadership team can measure, explain, and operate.', keywords: ['ai adoption consulting', 'ai consulting israel', 'ai implementation services israel', 'ai strategy for smbs', 'business ai implementation'], bullets: ['Map workflows and decisions with real leverage', 'Choose a first pilot with a clear success metric', 'Define ownership, permissions, and safe usage', 'Build internal capability instead of vendor dependency'], steps: [['01 / Understand', 'Map what slows the business down and what already exists inside it.'], ['02 / Prioritize', 'Choose a move small enough to start and meaningful enough to prove value.'], ['03 / Operate', 'Build, measure, and improve with the team that will own the capability.']], outcomes: ['An AI plan leadership can explain', 'A first pilot with measurable outcomes', 'Shared language across leadership, data, and operations'], faqs: [{ question: 'How long does AI implementation take?', answer: 'An assessment and first pilot usually take 4–8 weeks, depending on data complexity and team availability.' }, { question: 'Do we need a large data team?', answer: 'Not necessarily. Start with one focused use case and design around the people and tools already in the business.' }] },
  },
  'business-automation': {
    he: { title: 'אוטומציה עם AI | פחות עבודה ידנית', description: 'אוטומציה עם AI לחברות: פחות עבודה ידנית, פחות טעויות. האוטומציה היא איך שהסוכן פועל, לא שירות בצד.', h1: 'אוטומציה שמחזירה זמן לצוות', intro: 'מחברים בין המידע, התהליכים והכלים שכבר קיימים. פחות עבודה ידנית, בלי עוד סיסמאות.', keywords: ['אוטומציה עם AI', 'אוטומציה עסקית', 'אוטומציה של תהליכים', 'סוכני דאטה'], bullets: ['זיהוי משימות חוזרות שגוזלות זמן', 'תכנון זרימת עבודה עם נקודות בקרה', 'חיבור מערכות, מסמכים ומקורות מידע', 'מדידה של זמן, שגיאות ואיכות לפני ואחרי'], steps: [['01 / למפות', 'מזהים איפה העבודה הידנית מצטברת ואיפה היא מייצרת סיכון.'], ['02 / לחבר', 'מתכננים חיבורים בין הכלים שכבר נמצאים בשימוש.'], ['03 / לשלוט', 'מוסיפים בקרה, התראות ובעלות ברורה לכל תהליך.']], outcomes: ['פחות עבודה חוזרת', 'תהליכים ברורים יותר', 'אפשר למדוד מה האוטומציה נתנה'], faqs: [{ question: 'איזה תהליכים אפשר להפוך לאוטומטיים?', answer: 'דיווחים שחוזרים, איסוף מידע, סיכום מסמכים, תיוג, בדיקות, והעברת נתונים בין מערכות. בסוכן דאטה זה חלק מהפעולה, לא שירות בצד.' }, { question: 'האם אוטומציה עם AI בטוחה לחברה?', answer: 'כן, כשמתכננים הרשאות, נקודות אישור, פרטיות ובקרה אנושית כחלק מהמערכת. לא אחרי ההשקה.' }] },
    en: { title: 'AI Business Automation Israel | Reduce Manual Work', description: 'Design and implement AI business automation for Israeli companies: fewer manual tasks, fewer errors, and workflows you can measure.', h1: 'Business automation that gives time back to the team', intro: 'Connect the information, workflows, and tools you already use to reduce manual work without adding noise.', keywords: ['ai business automation', 'ai automation for smbs', 'business process automation israel', 'workflow automation consulting', 'ai operations consulting'], bullets: ['Identify repetitive work that consumes team time', 'Design workflows with clear control points', 'Connect systems, documents, and information sources', 'Measure time, errors, and quality before and after'], steps: [['01 / Map', 'Find where manual work accumulates and where it creates risk.'], ['02 / Connect', 'Design connections between the tools your team already uses.'], ['03 / Control', 'Add approvals, alerts, and clear ownership to every workflow.']], outcomes: ['Less repetitive work', 'Clearer operational workflows', 'A measurable automation business case'], faqs: [{ question: 'What business processes can be automated?', answer: 'Common opportunities include recurring reports, information collection, document summaries, classification, checks, and data handoffs.' }, { question: 'Is AI automation safe for a small business?', answer: 'Yes, when permissions, privacy, approvals, and human oversight are designed into the system from the beginning.' }] },
  },
  'data-bi-dashboards': {
    he: { title: 'דאטה ו-BI לחברות | שהסוכן יוכל לעבוד איתם', description: 'דאטה ו-BI לחברות: הופכים נתונים מפוזרים למשהו שההנהלה סומכת עליו, ושהסוכן יכול לעבוד איתו. לא עוד דשבורד בצד.', h1: 'דשבורד שאנשים באמת פותחים', intro: 'בונים תמונה שההנהלה סומכת עליה. הדאטה וה-BI הופכים למשהו שהסוכן באמת עובד איתו, לא למוצר בצד.', keywords: ['דשבורד ניהולי', 'BI לחברות', 'דאטה להנהלה', 'ניתוח נתונים לחברות'], bullets: ['הגדרת מדדים לפי החלטות ניהוליות', 'חיבור מקורות מידע בלי לאבד הקשר', 'הסכמה על הגדרות ובעלות', 'הצגה ברורה של חריגות, מגמות והזדמנויות'], steps: [['01 / להגדיר', 'מחליטים אילו החלטות הדשבורד צריך לשפר ואילו שאלות הוא חייב לענות.'], ['02 / לאחד', 'מחברים מקורות ומסכימים על הגדרות, בעלות ותדירות עדכון.'], ['03 / להנגיש', 'בונים תצוגה שמאפשרת להבין, לשאול ולפעול. לא רק להסתכל.']], outcomes: ['מדדים שהנהלה סומכת עליהם', 'פחות ויכוחים על המספרים', 'זמן קצר יותר מנתון להחלטה'], faqs: [{ question: 'האם חייבים להחליף את מערכת ה-BI?', answer: 'לא. פעמים רבות מתחילים מהשאלות, המדדים והחיבורים, לפני שמחליפים כלי.' }, { question: 'למי מתאים דשבורד ניהולי?', answer: 'לחברות שרוצות תמונת מצב אחת של מכירות, תפעול, שיווק, כספים או לקוחות, עם אפשרות לרדת לפרטים כשצריך.' }] },
    en: { title: 'BI Dashboards for Business | Data into Decisions', description: 'Data, BI, and dashboard consulting for Israeli SMBs. Turn scattered information into a management view that improves decisions.', h1: 'A dashboard people actually use', intro: 'Build the right management view with trusted data, business context, and decisions your team can make faster.', keywords: ['bi dashboard consulting', 'business intelligence consulting israel', 'data analytics consulting israel', 'business dashboard', 'management dashboard'], bullets: ['Define metrics around management decisions', 'Connect information sources without losing context', 'Create a shared metric dictionary and ownership', 'Make exceptions, trends, and opportunities clear'], steps: [['01 / Define', 'Decide which decisions the dashboard should improve and which questions it must answer.'], ['02 / Unify', 'Connect sources and agree on definitions, ownership, and refresh cadence.'], ['03 / Enable', 'Create a view that lets people understand, ask, and act — not just look.']], outcomes: ['Metrics leadership can trust', 'Fewer arguments about the numbers', 'A shorter path from data to decision'], faqs: [{ question: 'Do we need to replace our BI platform?', answer: 'Not always. Start with the questions, metrics, and connections before deciding whether a platform change is necessary.' }, { question: 'Who benefits from a management dashboard?', answer: 'Any company that needs one view of sales, operations, marketing, finance, or customers with the ability to drill into the detail.' }] },
  },
  'analytics-consulting': {
    he: { title: 'ייעוץ דאטה ואנליטיקה | מדאטה להחלטה', description: 'ייעוץ דאטה ואנליטיקה להנהלות: סדר עדיפויות, תהליכי עבודה, ודאטה שהסוכן יכול לעבוד איתו.', h1: 'מדאטה מפוזר להחלטה שאפשר לפעול לפיה', intro: 'עוזרים לחברה לחבר בין המטרות, הדאטה והעבודה היומיומית. בלי להיתקע בפרויקט תשתית של שנה.', keywords: ['ייעוץ דאטה ואנליטיקה', 'ניתוח נתונים לחברות', 'אסטרטגיית דאטה', 'ייעוץ אנליטיקה'], bullets: ['מיפוי שאלות עסקיות ומקורות נתונים', 'תעדוף לפי ערך ומאמץ', 'שיפור תהליך האנליזה והדיווח', 'ליווי הנהלה וצוותים בהחלטות על בסיס דאטה'], steps: [['01 / לשאול', 'מנסחים את השאלות העסקיות לפני שבוחרים כלי.'], ['02 / לחבר', 'מייצרים קשר בין הנתונים, התהליך והאחריות של הצוות.'], ['03 / ללמוד', 'מודדים מה השתפר ומעדכנים את הדרך לפי מה שקורה בפועל.']], outcomes: ['סדר עדיפויות ברור', 'תהליכי אנליזה עקביים', 'שיתוף פעולה טוב יותר בין עסק, דאטה וטכנולוגיה'], faqs: [{ question: 'מה ההבדל בין ייעוץ דאטה לייעוץ BI?', answer: 'ייעוץ דאטה מסתכל על השאלות, התהליכים והמקורות. BI הוא אחד הכלים שאפשר להפוך את זה לתפעול יומיומי, וחומר שהסוכן יכול לעבוד איתו.' }, { question: 'האם זה מתאים לחברה בלי צוות דאטה גדול?', answer: 'כן. אפשר להתחיל ממיפוי צרכים ודרך עבודה פשוטה, ואחר כך להחליט מה לבנות בפנים ומה לקחת מבחוץ.' }] },
    en: { title: 'Data Analytics Consulting Israel | From Data to Decisions', description: 'Data and analytics consulting for Israeli leadership teams: priorities, workflows, and tools that connect information to business outcomes.', h1: 'From scattered data to decisions you can act on', intro: 'Connect business goals, data, and daily work without getting stuck in an endless infrastructure project.', keywords: ['data analytics consulting israel', 'business analytics consulting', 'data strategy consulting israel', 'analytics workflow consulting', 'data analysis for business'], bullets: ['Map business questions and data sources', 'Prioritize initiatives by value and effort', 'Improve analysis and reporting workflows', 'Support leadership and teams with data-driven decisions'], steps: [['01 / Ask', 'Define the business questions before choosing a tool.'], ['02 / Connect', 'Link data, workflow, and team accountability.'], ['03 / Learn', 'Measure what improved and update the approach based on reality.']], outcomes: ['A clear priority stack', 'Consistent analytics workflows', 'Better collaboration across business, data, and technology'], faqs: [{ question: 'How is data consulting different from BI consulting?', answer: 'Data consulting looks at questions, workflows, and sources; BI is one possible tool for making those decisions operational.' }, { question: 'Can this help a company without a data team?', answer: 'Yes. Start with a simple needs and workflow assessment, then decide what to build internally and what to source externally.' }] },
  },
  'ai-workshops': {
    he: { title: 'סדנת AI לצוותים | שימוש מעשי ובטוח', description: 'סדנאות AI להנהלות ולצוותי דאטה: שימושים אמיתיים, עבודה בטוחה, ותכנית שמתחילה ביום הראשון.', h1: 'סדנת AI שמתחברת לעבודה שכבר קיימת', intro: 'מייצרים לצוות שפה משותפת, שימוש בטוח והרגלים שמתחברים לתהליכים שכבר רצים בחברה.', keywords: ['סדנת AI לצוותים', 'הדרכת AI', 'סדנת בינה מלאכותית', 'הטמעת AI בארגון'], bullets: ['מיפוי שימושים לפי תפקיד ותהליך', 'תרגול על דוגמאות מהחברה', 'כללי פרטיות, אבטחה ובקרת איכות', 'תכנית 30 יום להמשך שימוש ומדידה'], steps: [['01 / הקשר', 'מתחילים מהעבודה שהצוות כבר עושה ומהתסכולים שחוזרים עליה.'], ['02 / לתרגל', 'מנסים כלים וטכניקות על בעיות אמיתיות, לא על דוגמאות כלליות.'], ['03 / להמשיך', 'מסיימים עם תרגול המשך, כללי שימוש ותעדוף צעדים.']], outcomes: ['שפה משותפת סביב AI', 'יותר ביטחון בשימוש בכלים', 'צעדים שכל אחד בצוות יכול להמשיך מהם'], faqs: [{ question: 'למי מתאימה סדנת AI?', answer: 'להנהלות, צוותי תפעול, שיווק, כספים, אנליטיקה וידע שרוצים לעבור מהתנסות אקראית לשימוש פרקטי ובטוח.' }, { question: 'האם הסדנה מותאמת לחברה?', answer: 'כן. התוכן והתרגילים נבנים סביב התפקידים, הכלים והמידע שהצוות פוגש ביום-יום.' }] },
    en: { title: 'AI Workshops for Teams | Practical and Safe Usage', description: 'Practical AI workshops for Israeli teams and leaders: real use cases, safe workflows, and a plan your people can use immediately.', h1: 'An AI workshop that leaves the room and enters the work', intro: 'Give your team shared language, safe usage patterns, and habits connected to the workflows that matter.', keywords: ['ai workshop for businesses', 'ai training for teams israel', 'business ai training', 'ai adoption workshop', 'practical ai workshop'], bullets: ['Map use cases by role and workflow', 'Practice on examples from the business', 'Set privacy, security, and quality rules', 'Create a 30-day plan for continued use'], steps: [['01 / Context', 'Start from the work your team already does and the friction that repeats.'], ['02 / Practice', 'Try tools and techniques on real problems, not generic examples.'], ['03 / Continue', 'Leave with practice, usage rules, and prioritized next steps.']], outcomes: ['Shared language around AI', 'More confident tool usage', 'Practical next steps each employee can continue'], faqs: [{ question: 'Who benefits from an AI workshop?', answer: 'Leadership, operations, marketing, finance, analytics, and knowledge teams moving from random experimentation to practical and safe usage.' }, { question: 'Can the workshop be tailored to our company?', answer: 'Yes. The content and exercises are built around the roles, tools, and information your team encounters every day.' }] },
  },
};

function serviceSchema(copy: ServiceCopy['he'], language: Language, path: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: copy.h1, description: copy.description, provider: { '@type': 'Person', name: 'Nimrod Fisher', url: 'https://www.linkedin.com/in/nimrod-fisher/' }, areaServed: { '@type': 'Country', name: 'Israel' }, url: absoluteUrl(path) },
      { '@type': 'FAQPage', mainEntity: copy.faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: language === 'he' ? 'בית' : 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: copy.h1, item: absoluteUrl(path) }] },
    ],
  };
}

export function ServicePage({ slug, language }: { slug: string; language: Language }) {
  const service = services[slug];
  const copy = service[language];
  const path = `/services/${slug}`;

  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
  }, [slug, language]);

  return (
    <div className="site-page inner-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={copy.keywords} schema={serviceSchema(copy, language, localizedPath(path, language))} noIndex={slug === 'ai-workshops'} />
      <SiteHeader language={language} currentPath={path} />
      <main>
        <section className="inner-hero shell"><div className="section-kicker"><span>{slug === 'ai-agents' ? 'ISRAEL / DATA AGENTS' : 'ISRAEL / AI & DATA'}</span></div><h1>{copy.h1}</h1><p>{copy.intro}</p><a className="ui-button ui-button-primary ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{language === 'he' ? 'לקבוע שיחה' : 'Book an assessment'} <ArrowUpLeft size={18} /></a></section>
        <section className="inner-grid shell"><div className="inner-grid-heading"><div className="section-kicker"><span>{language === 'he' ? 'מה משתנה' : 'WHAT CHANGES'}</span></div><h2>{language === 'he' ? 'מה משתנה בפועל' : 'What changes in practice'}</h2></div><div className="benefit-list">{copy.bullets.map((bullet) => <div className="benefit-item" key={bullet}><Check size={20} /><p>{bullet}</p></div>)}</div></section>
        <section className="process-section"><div className="shell"><div className="section-heading-row"><div className="section-kicker"><span>{language === 'he' ? 'איך זה עובד' : 'THE PROCESS'}</span></div><p>{language === 'he' ? 'דרך עבודה קצרה, ברורה ומחוברת לתוצאה.' : 'A short, clear process connected to an outcome.'}</p></div><div className="process-grid">{copy.steps.map(([title, body], index) => <article key={title} id={slug === 'ai-agents' ? ['consult', 'build', 'operate'][index] : undefined}><strong>{title}</strong><h3>{title.replace(/^\d+\s\/\s/, '')}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="outcomes-section shell"><div className="section-kicker"><span>{language === 'he' ? 'בסוף' : 'THE OUTCOME'}</span></div><h2>{language === 'he' ? 'יוצאים עם משהו שאפשר להפעיל.' : 'Leave with something you can operate.'}</h2><div className="outcomes-grid">{copy.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p></div>)}</div></section>
        <FAQSection items={copy.faqs} title={language === 'he' ? 'שאלות נפוצות על השירות' : 'Frequently asked questions'} kicker={language === 'he' ? 'שאלות' : 'FAQ'} />
        <section className="inner-cta shell"><h2>{language === 'he' ? 'רוצים להבין אם זה מתאים לחברה שלכם?' : 'Want to see if this fits your company?'}</h2><a className="ui-button ui-button-dark ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{language === 'he' ? 'לקבוע שיחה' : 'Book an assessment'} <ArrowUpLeft size={18} /></a></section>
      </main>
      <footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>DATA AGENTS</span></footer>
    </div>
  );
}

export { services };
