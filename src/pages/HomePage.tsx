import { ArrowDownLeft, ArrowUpLeft, ArrowUpRight, Check, ChevronLeft, Linkedin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SiteHeader } from '../components/SiteHeader';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { OptimizedImage } from '../components/OptimizedImage';
import { Button } from '../components/ui/button';
import { Language, localizedPath } from '../lib/seo';

const CALENDAR_URL = 'https://calendar.app.google/P6mjrP2Akirk3zodA';
const EMAIL = 'nimrod@ai-analytics-hub.com';

const logos = [
  { src: '/images/remitly-logo.png', alt: 'Remitly' },
  { src: '/images/gett-logo.png', alt: 'Gett' },
  { src: '/images/lusha-logo.png', alt: 'Lusha' },
  { src: '/images/similarweb-logo.svg', alt: 'Similarweb' },
  { src: '/images/gong-logo.png', alt: 'Gong' },
  { src: '/images/flare-transparent.png', alt: 'Flare' },
  { src: '/images/wsc-sports-logo.png', alt: 'WSC Sports' },
  { src: '/images/elementor-logo.svg', alt: 'Elementor' },
  { src: '/images/perion-logo.svg', alt: 'Perion' },
  { src: '/images/ivix-logo.png', alt: 'IVIX' },
  { src: '/images/unity-logo.png', alt: 'Unity' },
  { src: '/images/neema-logo.png', alt: 'Neema' },
  { src: '/images/investing-logo.png', alt: 'Investing.com' },
  { src: '/images/bigabid-logo.png', alt: 'Bigabid' },
];

const testimonials = {
  he: [
    { quote: 'העבודה המשותפת עזרה לנו להתמקד במקרי שימוש פרקטיים ובעלי השפעה, ולהימנע מהמלכודות הנפוצות בדרך לאסטרטגיית AI.', name: 'Assaf Levnison', role: 'Director of Marketing Analytics, Gong', avatar: '/testimonials/assaf-levnison.png' },
    { quote: 'המסגרות שבנינו הפכו לחלק מהשגרה החדשה של הצוות ויצרו השפעה מתמשכת על תהליכי האנליזה שלנו.', name: 'Ran Almog', role: 'Head of Data, Elementor', avatar: '/testimonials/ran-almog.jpeg' },
    { quote: 'בנינו מערכת שהאיצה משמעותית את תהליכי העבודה של צוות הדאטה ויצרה השפעה מדידה על מהירות הטיפול ועל סיכון ההכנסות.', name: 'Yotam Galon', role: 'VP Operations, Bigabid', avatar: '/testimonials/yotam-galon.jpeg' },
  ],
  en: [
    { quote: 'The work helped us focus on practical, high-impact use cases and avoid the common pitfalls of building an AI strategy.', name: 'Assaf Levnison', role: 'Director of Marketing Analytics, Gong', avatar: '/testimonials/assaf-levnison.png' },
    { quote: 'The frameworks we built became part of the team’s new normal and created lasting impact on our analysis processes.', name: 'Ran Almog', role: 'Head of Data, Elementor', avatar: '/testimonials/ran-almog.jpeg' },
    { quote: 'The system dramatically accelerated our data-team workflow and delivered measurable impact on resolution speed and revenue risk.', name: 'Yotam Galon', role: 'VP Operations, Bigabid', avatar: '/testimonials/yotam-galon.jpeg' },
  ],
} satisfies Record<Language, { quote: string; name: string; role: string; avatar: string }[]>;

const faq: Record<Language, FAQItem[]> = {
  he: [
    { question: 'מי נותן ייעוץ AI לעסקים קטנים בישראל?', answer: 'נמרוד פישר מלווה הנהלות וצוותי דאטה בישראל בתכנון, בחירה והטמעה של מערכות AI שמחוברות לצרכים העסקיים ולנתונים הקיימים בארגון.' },
    { question: 'איך עסק בינוני יכול להתחיל להשתמש בבינה מלאכותית?', answer: 'מתחילים מאבחון ממוקד של החלטה או תהליך יקר, בוחרים פיילוט שניתן למדוד בתוך 4–8 שבועות, ובונים יכולת פנימית לצד הפתרון.' },
    { question: 'איזה כלי AI מתאימים לחברה עם 10–100 עובדים?', answer: 'הבחירה תלויה במקורות הנתונים, בהרשאות, בתהליכי העבודה ובמטרה העסקית. ההמלצה היא לבחור כלי לפי הבעיה והאימפקט, לא לפי רשימת טרנדים.' },
  ],
  en: [
    { question: 'Who provides AI consulting for small businesses in Israel?', answer: 'Nimrod Fisher helps Israeli leadership and data teams plan, select, and implement AI systems connected to business goals and existing data.' },
    { question: 'How can a mid-sized company start using AI?', answer: 'Start with a focused assessment of an expensive decision or workflow, choose a measurable 4–8 week pilot, and build internal capability alongside it.' },
    { question: 'Which AI tools suit a 10–100 employee company?', answer: 'The answer depends on data sources, permissions, workflows, and the business outcome. Choose tools around the problem and expected impact, not a trend list.' },
  ],
};

function schemaFor(language: Language) {
  const isHebrew = language === 'he';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: 'Nimrod Fisher | AI & Data Transformation', description: isHebrew ? 'ייעוץ AI, דאטה ואנליטיקה לעסקים קטנים ובינוניים בישראל.' : 'AI, data, and analytics consulting for small and medium-sized businesses in Israel.' },
      { '@type': 'Person', name: 'Nimrod Fisher', jobTitle: isHebrew ? 'יועץ AI ודאטה' : 'AI and data consultant', sameAs: ['https://www.linkedin.com/in/nimrod-fisher/'] },
      { '@type': 'FAQPage', mainEntity: faq[language].map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ],
  };
}

export function HomePage({ language }: { language: Language }) {
  const isHebrew = language === 'he';
  const copy = isHebrew ? {
    title: 'ייעוץ AI לעסקים בישראל | אסטרטגיה, דאטה והטמעה',
    description: 'ייעוץ AI, דאטה ואנליטיקה להנהלות ולעסקים קטנים ובינוניים בישראל. מוצאים את ההזדמנות, בונים פיילוט ומטמיעים מערכת שעובדת.',
    eyebrow: 'AI & DATA TRANSFORMATION / ISRAEL',
    h1: <>הדאטה כבר שם.<br /><em>השאלה היא מה עושים איתו.</em></>,
    lede: 'אני עוזר להנהלות להפוך את הדאטה של החברה למערכות AI שעובדות בפועל — לא עוד מצגת, לא עוד דשבורד שאף אחד לא פותח.',
    cta: 'קביעת ייעוץ ראשוני',
    how: 'איך זה עובד',
    note: <>מה שמעניין אותי הוא לא כמה AI יש לכם.<br />אלא מה הוא מאפשר לכם לעשות.</>,
    proof: 'בניתי, ייעצתי ולימדתי בצוותים של',
    statement: <>רוב החברות לא סובלות מבעיית דאטה.<br /><span>הן סובלות מבעיית החלטות.</span></>,
    statementCopy: 'יש לכם מחסן נתונים. יש לכם כלים. יש לכם אנשים חכמים. ועדיין, הרבה החלטות חשובות מתחילות ב״תבדוק לי רגע…״ ונגמרות אחרי שלושה ימים.',
    statementMuted: 'העבודה שלי מתחילה מההחלטה שצריך לשפר — ורק אז חוזרת לדאטה, לתהליך ול-AI שיכול לעשות את זה פשוט יותר.',
    approachLead: <>לא מתחילים בטכנולוגיה.<br />מתחילים במה שצריך לקרות.</>,
    cards: [
      ['מוצאים את המנוף', 'ממפים איפה החלטות נתקעות, איפה מידע מתבזבז, ומה ייתן לארגון את הקפיצה הגדולה ביותר.'],
      ['בונים את מה שחסר', 'הקונטקסט, המבנה, החיבורים והגבולות שהופכים AI מתשובה נחמדה למערכת שאפשר לסמוך עליה.'],
      ['משאירים יכולת', 'לא בונים תלות בי. בונים אצלכם את היכולת להפעיל, למדוד ולשפר את הדבר גם אחרי שאני יוצא.'],
    ],
    workTitle: <>מאתגרים עסקיים<br /><em>למערכות שעובדות.</em></>,
    services: [
      ['AI & Data Transformation', 'מזהים, מתעדפים ומוציאים לפועל את הפרויקטים שיכולים לשנות איך החברה עובדת.', '/services/ai-adoption'],
      ['אוטומציה עסקית עם AI', 'מפחיתים עבודה ידנית ומחברים את המידע, התהליכים והכלים שכבר קיימים אצלכם.', '/services/business-automation'],
      ['דאטה, BI ודשבורדים', 'הופכים נתונים מפוזרים לתמונה ניהולית שאפשר לפעול לפיה.', '/services/data-bi-dashboards'],
      ['סדנאות AI מעשיות', 'מייצרים שפה משותפת, שימוש בטוח ותכנית פעולה שהצוות יכול להפעיל.', '/services/ai-workshops'],
    ],
    assessmentTitle: <>לא בטוחים איפה להתחיל?<br /><em>בואו נתחיל משאלה אחת.</em></>,
    assessmentCopy: 'באבחון AI ודאטה נבין מה אתם מנסים לשפר, אילו אפשרויות קיימות כבר בתוך הארגון, ומה הצעד הקטן ביותר שיכול להוכיח ערך אמיתי.',
    checks: ['מיפוי של הזדמנויות AI אמיתיות', 'בחירה של פרויקט ראשון עם סיכוי גבוה להצליח', 'תכנית פעולה שאפשר להסביר להנהלה'],
    closing: <>AI בלי הקשר הוא בעיקר<br /><em>דרך מהירה לטעות.</em></>,
    closingCopy: 'הדאטה שלכם לא צריך עוד שכבת באזז. הוא צריך מישהו שיבין מה לעשות איתו.',
    faqTitle: 'שאלות שבעלי עסקים והנהלות שואלים',
  } : {
    title: 'AI Consulting Israel | Strategy, Data and Implementation',
    description: 'AI, data, and analytics consulting for Israeli small and medium-sized businesses. Find the opportunity, prove value, and implement what works.',
    eyebrow: 'AI & DATA TRANSFORMATION / ISRAEL',
    h1: <>Your data is already there.<br /><em>The question is what to do with it.</em></>,
    lede: 'I help leadership teams turn company data into AI systems that work in practice — not another deck, and not another dashboard nobody opens.',
    cta: 'Book an assessment',
    how: 'How it works',
    note: <>The question is not how much AI you have.<br />It is what it enables you to do.</>,
    proof: 'Built, advised, and taught teams at',
    statement: <>Most companies do not have a data problem.<br /><span>They have a decision problem.</span></>,
    statementCopy: 'You have data, tools, and smart people. Still, important decisions begin with “can you check something?” and take three days to answer.',
    statementMuted: 'My work starts from the decision that needs to improve — then returns to the data, workflow, and AI that can make it simpler.',
    approachLead: <>Do not start with technology.<br />Start with what needs to happen.</>,
    cards: [
      ['Find the leverage', 'Map where decisions stall, where information is wasted, and what can create the biggest practical lift.'],
      ['Build what is missing', 'Create the context, structure, connections, and guardrails that make AI dependable.'],
      ['Leave capability behind', 'Build your team’s ability to operate, measure, and improve the system after the engagement.'],
    ],
    workTitle: <>From business challenges<br /><em>to systems that work.</em></>,
    services: [
      ['AI & Data Transformation', 'Identify, prioritize, and deliver the projects that can change how your company works.', '/en/services/ai-adoption'],
      ['AI Business Automation', 'Reduce manual work by connecting the information, workflows, and tools you already have.', '/en/services/business-automation'],
      ['Data, BI and Dashboards', 'Turn scattered data into a management view your team can act on.', '/en/services/data-bi-dashboards'],
      ['Practical AI Workshops', 'Create shared language, safe usage, and a plan your team can put into practice.', '/en/services/ai-workshops'],
    ],
    assessmentTitle: <>Not sure where to start?<br /><em>Start with one question.</em></>,
    assessmentCopy: 'In an AI and data assessment, we clarify what you want to improve, what already exists inside the business, and the smallest step that can prove real value.',
    checks: ['Map practical AI opportunities', 'Choose a first project with a high chance of success', 'Create an action plan leadership can explain'],
    closing: <>AI without context is mostly<br /><em>a fast way to be wrong.</em></>,
    closingCopy: 'Your data does not need another layer of buzzwords. It needs someone who understands what to do with it.',
    faqTitle: 'Questions business leaders ask',
  };

  const path = '/';
  return (
    <div className="site-page" dir={isHebrew ? 'rtl' : 'ltr'}>
      <SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={isHebrew ? ['ייעוץ בינה מלאכותית לעסקים', 'הטמעת AI בעסק', 'בינה מלאכותית לעסקים קטנים ובינוניים', 'אוטומציה עסקית עם AI', 'ניתוח נתונים לעסקים', 'ייעוץ דאטה ואנליטיקה', 'בינה עסקית לעסקים', 'דשבורד ניהולי', 'מערכת BI לעסקים', 'סדנת AI לעובדים'] : ['ai consulting israel', 'ai implementation services israel', 'ai consulting for small business', 'business intelligence consulting israel', 'data analytics consulting israel', 'ai automation for smbs', 'ai workshop for businesses', 'ai adoption consulting', 'bi dashboard consulting']} schema={schemaFor(language)} />
      <SiteHeader language={language} currentPath={path} />
      <main>
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> {copy.eyebrow}</p>
            <h1>{copy.h1}</h1>
            <p className="hero-lede">{copy.lede}</p>
            <div className="hero-actions">
              <a className="ui-button ui-button-primary ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{copy.cta} <ArrowUpLeft size={18} /></a>
              <a className="text-link" href="#approach">{copy.how} <ChevronLeft size={17} /></a>
            </div>
            <div className="hero-note"><span>{copy.note}</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <OptimizedImage src="/profile.jpg" alt={isHebrew ? 'נמרוד פישר, יועץ AI ודאטה' : 'Nimrod Fisher, AI and data consultant'} priority className="portrait" />
              <div className="portrait-caption"><span>NIMROD FISHER</span><span>BUILDER / ADVISOR</span></div>
            </div>
            <div className="signal-card"><span className="signal-label">THE REAL QUESTION</span><strong>{isHebrew ? <>מה הייתם עושים<br />אם התשובה הייתה<br /><span>מגיעה עכשיו?</span></> : <>What would you do<br />if the answer<br /><span>arrived now?</span></>}</strong><div className="signal-line"><span /><span /><span /><span /><span /></div></div>
          </div>
        </section>

        <section className="proof-section shell" aria-label={isHebrew ? 'חברות שעבדתי איתן והמלצות' : 'Selected clients and testimonials'}>
          <div className="proof-heading"><p>{copy.proof}</p><span>CLIENT SIGNAL</span></div>
          <div className="logo-marquee" aria-label="Selected clients">
            <div className="logo-marquee-track">{[0, 1].map((set) => <div className="logo-marquee-group" key={set} aria-hidden={set === 1}>{logos.map((logo) => <OptimizedImage key={`${set}-${logo.alt}`} src={logo.src} alt={set === 0 ? logo.alt : ''} />)}</div>)}</div>
          </div>
          <div className="testimonials-heading"><div className="section-kicker"><span>WHAT STAYS</span></div><h2>{isHebrew ? <>לא רק פרויקט.<br /><em>יכולת שנשארת.</em></> : <>Not just a project.<br /><em>Capability that stays.</em></>}</h2></div>
          <div className="testimonials-grid">{testimonials[language].map((testimonial) => <article className="testimonial-card" key={testimonial.name}><p>“{testimonial.quote}”</p><div className="testimonial-author"><OptimizedImage src={testimonial.avatar} alt={testimonial.name} /><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></div></article>)}</div>
        </section>

        <section className="statement-section"><div className="shell statement-grid"><div className="section-kicker"><span>THE POINT</span></div><div><h2>{copy.statement}</h2><p className="statement-copy">{copy.statementCopy}</p><p className="statement-copy muted">{copy.statementMuted}</p></div><div className="decision-card"><div className="decision-card-top"><span>BACKWARDS FROM VALUE</span><ArrowDownLeft size={18} /></div><div className="decision-step"><strong>{isHebrew ? 'איזו החלטה?' : 'Which decision?'}</strong></div><ArrowDownLeft className="decision-arrow" size={22} /><div className="decision-step"><strong>{isHebrew ? 'איזה מידע?' : 'Which information?'}</strong></div><ArrowDownLeft className="decision-arrow" size={22} /><div className="decision-step active"><strong>{isHebrew ? 'מה הדרך הפשוטה ביותר?' : 'What is the simplest path?'}</strong></div></div></div></section>

        <section className="approach-section shell" id="approach"><div className="section-heading-row"><div className="section-kicker"><span>THE APPROACH</span></div><p>{copy.approachLead}</p></div><div className="approach-grid">{copy.cards.map(([title, body], index) => <article className={`approach-card ${index === 0 ? 'approach-dark' : index === 1 ? 'approach-light' : 'approach-orange'}`} key={title}><h3>{title}</h3><p>{body}</p><div className="card-mark">{index === 0 ? '↗' : index === 1 ? '◌' : '✓'}</div></article>)}</div></section>

        <section className="work-section shell" id="work"><div className="section-heading-row work-heading"><div className="section-kicker"><span>WHAT I DO</span></div><h2>{copy.workTitle}</h2></div><div className="service-list">{copy.services.map(([title, body, href]) => <a className="service-row" href={href} key={title}><div><h3>{title}</h3><p>{body}</p></div><ArrowUpLeft className="service-arrow" size={24} /></a>)}</div></section>

        <section className="assessment-section shell" id="assessment"><div className="assessment-graphic"><span>ASSESS</span><span>DECIDE</span><span>BUILD</span><span>LEARN</span></div><div className="assessment-copy"><div className="section-kicker"><span>THE FIRST MOVE</span></div><h2>{copy.assessmentTitle}</h2><p>{copy.assessmentCopy}</p><ul className="check-list">{copy.checks.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul><a className="ui-button ui-button-dark ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{copy.cta} <ArrowUpLeft size={18} /></a></div></section>

        <FAQSection items={faq[language]} title={copy.faqTitle} />
        <section className="closing-section shell"><div className="closing-meta"><span>ONE LAST THING</span></div><h2>{copy.closing}</h2><div className="closing-bottom"><p>{copy.closingCopy}</p><a href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={17} /></a></div></section>
      </main>
      <footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>AI & DATA TRANSFORMATION</span><a href="https://www.linkedin.com/in/nimrod-fisher/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></footer>
    </div>
  );
}
