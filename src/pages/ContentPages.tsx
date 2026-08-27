import { ArrowUpLeft } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';
import { SiteHeader } from '../components/SiteHeader';
import { Language, localizedPath } from '../lib/seo';

const CALENDAR_URL = 'https://calendar.app.google/P6mjrP2Akirk3zodA';

const content = {
  he: {
    about: {
      title: 'אודות נמרוד פישר | סוכני דאטה לחברות',
      description: 'נמרוד פישר מלווה הנהלות וצוותי דאטה בישראל בייעוץ ובנייה של סוכני דאטה על הדאטה של החברה.',
      h1: 'הטכנולוגיה משתנה מהר. ההחלטה הטובה עדיין מתחילה בהקשר.',
      body: 'אני עובד עם הנהלות וצוותי דאטה שרוצים סוכן שעובד על הדאטה של החברה — לא צ׳אטבוט על האתר, ולא פרויקט נוצץ שלא נכנס לעבודה היומיומית.',
      points: ['מתחילים מהחלטה או תהליך שצריך להשתפר', 'בונים סביב הנתונים, הכלים והאנשים שכבר קיימים', 'הצוות יודע להמשיך בליי: למדוד, להפעיל ולשפר'],
      cta: 'בואו נדבר',
    },
    cases: {
      title: 'מקרי בוחן AI ודאטה | נמרוד פישר',
      description: 'מקרי בוחן ותובנות מעבודה עם צוותי דאטה, שיווק ותפעול: מסוכן דאטה ועד אוטומציה ואנליטיקה.',
      h1: 'מה קורה כשמחברים את הכלים להחלטה',
      intro: 'הסיפורים כאן מתמקדים בדרך העבודה: מוצאים איפה זה נתקע, בונים פתרון, והצוות ממשיך איתו.',
      items: [
        ['צוות אנליטיקה שיווקית', 'מיקוד בשימושים שבאמת זזים, ושפה משותפת סביב AI ואנליזה.'],
        ['צוות דאטה בחברת מוצר', 'מסגרות עבודה שהפכו לחלק מהעבודה השגרתית, ועזרו לעקביות ולמהירות.'],
        ['תפעול, דאטה וסיכון הכנסות', 'בניית מערכת שמחברת תהליכי עבודה, נתונים והחלטות תפעוליות.'],
      ],
      cta: 'רוצים לדבר על המקרה שלכם?',
    },
    guide: {
      title: 'מאיפה מתחילים עם סוכן דאטה | נמרוד פישר',
      description: 'מדריך מעשי להנהלות ולצוותי דאטה בישראל: איפה סוכן דאטה עוזר, ואיפה הוא רק רעש.',
      h1: 'מאיפה מתחילים עם סוכן דאטה',
      intro: 'לא מתחילים מרשימת כלים. מתחילים מהחלטה, תהליך או צוואר בקבוק שעולים לחברה זמן, כסף או איכות — ואז בונים סוכן על הדאטה שכבר יש.',
      sections: [
        ['1. בחרו בעיה שחוזרת', 'חפשו החלטה או משימה שחוזרת בכל שבוע, נשענת על מידע, ויוצרת עיכוב או תלות באדם אחד.'],
        ['2. מדדו את המצב הקיים', 'כמה זמן זה לוקח? כמה טעויות קורות? מי צריך לאשר? בלי קו בסיס אי אפשר לדעת אם זה עזר.'],
        ['3. התחילו בפיילוט קטן', 'בחרו תהליך שאפשר לבדוק בתוך 4–8 שבועות, עם בעלים ברורים ומדד הצלחה אחד או שניים.'],
        ['4. הגדירו שימוש בטוח', 'קבעו מה מותר להזין, מי מאשר תוצאה, איך בודקים איכות, ואיך מתעדים שינוי.'],
        ['5. שהצוות יידע להמשיך', 'הפתרון הראשון צריך ללמד את הצוות איך להפעיל ולשפר, לא לייצר תלות בספק.'],
      ],
      faqTitle: 'שאלות שחוזרות על התחלה עם סוכן דאטה',
    },
  },
  en: {
    about: { title: 'About Nimrod Fisher | Data Agents for Companies', description: 'Nimrod Fisher helps leadership and data teams consult on, then build, data agents on company data.', h1: 'Technology changes quickly. A good decision still starts with context.', body: 'I work with leadership and data teams that want an agent working on company data — not a chatbot on the website, and not a shiny project that never enters daily work.', points: ['Start from a decision or workflow that needs to improve', 'Build around the data, tools, and people already in place', 'Leave internal capability to measure, operate, and improve'], cta: 'Start a conversation' },
    cases: { title: 'AI and Data Case Studies | Nimrod Fisher', description: 'Case studies and practical lessons from AI, automation, and analytics work with data, marketing, and operations teams.', h1: 'What happens when tools connect to a decision', intro: 'These stories focus on the way of working: find leverage, build a useful system, and leave capability behind.', items: [['Marketing analytics team', 'Focused use cases and created shared language around AI and analysis.'], ['Data team at a product company', 'Turned working frameworks into a new normal that improved consistency and speed.'], ['Operations, data, and revenue risk', 'Connected workflows, information, and operational decisions in one system.']], cta: 'Want to discuss your case?' },
    guide: { title: 'How to Start AI in a Small or Mid-Sized Business', description: 'A practical guide for Israeli business leaders starting with AI: choose a problem, run a pilot, measure value, and implement safely.', h1: 'How should a small or mid-sized business start using AI?', intro: 'Do not start with a tool list. Start with a decision, workflow, or bottleneck that costs the business time, money, or quality.', sections: [['1. Choose a repeating problem', 'Find a decision or task that repeats weekly, relies on information, and creates delay or dependence on one person.'], ['2. Measure the baseline', 'How long does it take? How many errors happen? Who approves it? Without a baseline, you cannot know whether AI helped.'], ['3. Start with a small pilot', 'Choose a workflow you can test in 4–8 weeks with clear ownership and one or two success metrics.'], ['4. Define safe usage', 'Set rules for inputs, approvals, quality checks, privacy, and how changes are documented.'], ['5. Build internal capability', 'The first solution should teach the team to operate and improve the system, not create vendor dependency.']], faqTitle: 'Common questions about starting with AI' },
  },
};

function contentSchema(title: string, description: string, path: string, language: Language, faqItems?: { question: string; answer: string }[]) {
  return { '@context': 'https://schema.org', '@graph': [{ '@type': 'Article', headline: title, description, author: { '@type': 'Person', name: 'Nimrod Fisher' }, inLanguage: language === 'he' ? 'he-IL' : 'en-IL', mainEntityOfPage: path }, ...(faqItems ? [{ '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }] : [])] };
}

export function AboutPage({ language }: { language: Language }) {
  const copy = content[language].about;
  const path = '/about';
  return <div className="site-page inner-page" dir={language === 'he' ? 'rtl' : 'ltr'}><SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={language === 'he' ? ['נמרוד פישר', 'סוכני דאטה', 'יועץ סוכני דאטה', 'בניית סוכני דאטה'] : ['nimrod fisher', 'data agents', 'data agent consultant', 'build data agents']} schema={contentSchema(copy.title, copy.description, localizedPath(path, language), language)} /><SiteHeader language={language} currentPath={path} /><main><section className="inner-hero shell"><h1>{copy.h1}</h1><p>{copy.body}</p><a className="ui-button ui-button-primary ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{copy.cta} <ArrowUpLeft size={18} /></a></section><section className="inner-grid shell"><div className="inner-grid-heading"><h2>{language === 'he' ? 'לא מתחילים בטכנולוגיה.' : 'Do not start with technology.'}</h2></div><div className="benefit-list">{copy.points.map((point) => <div className="benefit-item" key={point}><span className="benefit-number">→</span><p>{point}</p></div>)}</div></section></main><footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>DATA AGENTS</span></footer></div>;
}

export function CaseStudiesPage({ language }: { language: Language }) {
  const copy = content[language].cases;
  const path = '/case-studies';
  return <div className="site-page inner-page" dir={language === 'he' ? 'rtl' : 'ltr'}><SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={language === 'he' ? ['מקרי בוחן AI', 'מקרי בוחן דאטה', 'הטמעת AI בארגון', 'אוטומציה עסקית'] : ['ai consulting case studies', 'data transformation case studies', 'ai implementation examples', 'business automation case study']} schema={contentSchema(copy.title, copy.description, localizedPath(path, language), language)} /><SiteHeader language={language} currentPath={path} /><main><section className="inner-hero shell"><h1>{copy.h1}</h1><p>{copy.intro}</p></section><section className="case-grid shell">{copy.items.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p><small>{language === 'he' ? 'מקרה לדוגמה — פרטים מלאים מתווספים באישור הלקוח.' : 'Example engagement — detailed metrics are added with client approval.'}</small></article>)}</section><section className="inner-cta shell"><h2>{copy.cta}</h2><a className="ui-button ui-button-dark ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{language === 'he' ? 'לקבוע שיחה' : 'Book an assessment'} <ArrowUpLeft size={18} /></a></section></main><footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>DATA AGENTS</span></footer></div>;
}

export function GuidePage({ language }: { language: Language }) {
  const copy = content[language].guide;
  const path = '/guides/ai-for-small-business';
  const faqs = language === 'he' ? [{ question: 'האם צריך לקנות כלי AI לפני שמתחילים?', answer: 'לא. קודם מגדירים בעיה ותוצאה רצויה, ואז בוחרים כלי שמתאים לתהליך, לנתונים ולרמת הסיכון.' }, { question: 'איך מודדים אם פיילוט הצליח?', answer: 'מגדירים קו בסיס ומדד אחד או שניים כמו זמן, איכות, טעויות, הכנסות או מהירות קבלת החלטה.' }] : [{ question: 'Do we need to buy an AI tool before starting?', answer: 'No. Define the problem and desired outcome first, then choose a tool that fits the workflow, data, and risk level.' }, { question: 'How do we measure whether a pilot worked?', answer: 'Set a baseline and one or two metrics such as time, quality, errors, revenue, or decision speed.' }];
  return <div className="site-page inner-page" dir={language === 'he' ? 'rtl' : 'ltr'}><SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={language === 'he' ? ['סוכן דאטה', 'איך להתחיל עם סוכן דאטה', 'כלי AI לחברות', 'הטמעת AI'] : ['ai for small business', 'how to implement ai in business', 'ai tools for smbs', 'business ai pilot']} ogType="article" noIndex schema={contentSchema(copy.title, copy.description, localizedPath(path, language), language, faqs)} /><SiteHeader language={language} currentPath={path} /><main><article className="guide-article shell"><h1>{copy.h1}</h1><p className="guide-intro">{copy.intro}</p>{copy.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}</article><FAQSection items={faqs} title={copy.faqTitle} /><section className="inner-cta shell"><h2>{language === 'he' ? 'רוצים להפוך את הצעד הראשון לתכנית?' : 'Want to turn the first step into a plan?'}</h2><a className="ui-button ui-button-dark ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{language === 'he' ? 'לקבוע שיחה' : 'Book an assessment'} <ArrowUpLeft size={18} /></a></section></main><footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>DATA AGENTS</span></footer></div>;
}

export function NotFoundPage({ language }: { language: Language }) {
  const path = '/404';
  return <div className="site-page inner-page" dir={language === 'he' ? 'rtl' : 'ltr'}><SEOHead title={language === 'he' ? 'העמוד לא נמצא | Nimrod Fisher' : 'Page Not Found | Nimrod Fisher'} description={language === 'he' ? 'העמוד שחיפשתם לא נמצא.' : 'The page you requested could not be found.'} path={localizedPath(path, language)} language={language} keywords={[]} noIndex schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: '404' }} /><SiteHeader language={language} currentPath="/" /><main><section className="inner-hero shell"><h1>{language === 'he' ? 'העמוד הזה לא נמצא.' : 'This page took a different turn.'}</h1><p>{language === 'he' ? 'חזרו לדף הבית או התחילו בשיחה חדשה.' : 'Return home or start a new conversation.'}</p><a className="ui-button ui-button-primary ui-button-large" href={localizedPath('/', language)}>{language === 'he' ? 'לדף הבית' : 'Back home'} <ArrowUpLeft size={18} /></a></section></main></div>;
}
