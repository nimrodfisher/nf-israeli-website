import { ArrowDownLeft, ArrowUpLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SiteHeader } from '../components/SiteHeader';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { OptimizedImage } from '../components/OptimizedImage';
import { absoluteUrl, Language, localizedPath, SITE_NAME, SITE_URL } from '../lib/seo';

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
  { src: '/images/artlist-logo.png', alt: 'Artlist' },
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
    { quote: 'נמרוד עובד עם קבוצת הדאטה שלנו כבר כמה חודשים, ונתן לנו כיוון ברור איך לשנות את הדרך שבה אנחנו עובדים עם דאטה באמצעות AI. מעבר לאסטרטגיה, הוא ליווה את האנליסטים שלנו באופן מעשי והשאיר לנו מסגרות עבודה שהצוות עדיין משתמש בהן. הוא באופן עקבי חרג מעבר למה שביקשנו — תמיד זמין, תמיד עם חיוך, וברמת מקצועיות שקשה למצוא.', name: 'Itay Aizik', role: 'Data Platform Team Lead, Artlist', avatar: '/testimonials/itay-aizik.png' },
  ],
  en: [
    { quote: 'The work helped us focus on practical, high-impact use cases and avoid the common pitfalls of building an AI strategy.', name: 'Assaf Levnison', role: 'Director of Marketing Analytics, Gong', avatar: '/testimonials/assaf-levnison.png' },
    { quote: 'The frameworks we built became part of the team’s new normal and created lasting impact on our analysis processes.', name: 'Ran Almog', role: 'Head of Data, Elementor', avatar: '/testimonials/ran-almog.jpeg' },
    { quote: 'The system dramatically accelerated our data-team workflow and delivered measurable impact on resolution speed and revenue risk.', name: 'Yotam Galon', role: 'VP Operations, Bigabid', avatar: '/testimonials/yotam-galon.jpeg' },
    { quote: "Nimrod works with our data group for several months and gave us a clear direction on how to transform the way we work with data using AI. Beyond the strategy, he mentored our analysts hands-on and left us with frameworks the team still uses. He consistently went above and beyond what we asked for - always available, always with a smile, and with a level of professionalism that's rare to find.", name: 'Itay Aizik', role: 'Data Platform Team Lead, Artlist', avatar: '/testimonials/itay-aizik.png' },
  ],
} satisfies Record<Language, { quote: string; name: string; role: string; avatar: string }[]>;

const faq: Record<Language, FAQItem[]> = {
  he: [
    { question: 'מה ההבדל בין סוכן דאטה לצ׳אטבוט?', answer: 'צ׳אטבוט עונה לאנשים באתר או בוואטסאפ. סוכן דאטה חי בתוך החברה: מתחבר ל-CRM, למחסן הנתונים ולמסמכים, ועושה עבודה על הדאטה שכבר יש. זה לא אותו מוצר.' },
    { question: 'איפה סוכן דאטה צריך לחיות בארגון?', answer: 'ליד החלטה או תהליך שחוזר, נשען על מידע, ונתקע היום ב״תבדוק לי רגע״. הייעוץ ממפה את המקום הזה לפני שבונים משהו.' },
    { question: 'למה מתחילים בייעוץ ורק אחר כך בבניה?', answer: 'כי בלי להבין איפה הסוכן צריך לחיות, בונים כלי יפה שאף אחד לא מפעיל. קודם המקום, אחר כך החיבור לדאטה, אחר כך הבניה.' },
  ],
  en: [
    { question: 'How is a data agent different from a chatbot?', answer: 'A chatbot answers visitors on a site or in chat. A data agent lives inside the company: it connects to the CRM, warehouse, and documents, and does work on data you already have. That is not the same product.' },
    { question: 'Where should a data agent live in the company?', answer: 'Next to a repeating decision or workflow that depends on information and currently stalls on “can you check something?” Consulting maps that place before anything is built.' },
    { question: 'Why consult first, then build?', answer: 'Without knowing where the agent should live, you get a polished tool nobody operates. First the place, then the connection to company data, then the build.' },
  ],
};

function schemaFor(language: Language) {
  const isHebrew = language === 'he';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl('/logo-reference.jpg'),
      },
      { '@type': 'WebSite', name: 'Nimrod Fisher | Data Agents', description: isHebrew ? 'סוכני דאטה לחברות: ייעוץ איפה הסוכן צריך לחיות, ואז בניה על הדאטה של הארגון.' : 'Data agents for companies: consult on where an agent should live, then build it on company data.' },
      { '@type': 'Person', name: 'Nimrod Fisher', jobTitle: isHebrew ? 'יועץ ובונה סוכני דאטה' : 'Data agent advisor and builder', sameAs: ['https://www.linkedin.com/in/nimrod-fisher/'] },
      { '@type': 'FAQPage', mainEntity: faq[language].map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ],
  };
}

export function HomePage({ language }: { language: Language }) {
  const isHebrew = language === 'he';
  const CtaArrow = isHebrew ? ArrowUpLeft : ArrowUpRight;
  const HowArrow = isHebrew ? ChevronLeft : ChevronRight;
  const copy = isHebrew ? {
    title: 'סוכני דאטה לחברות | ייעוץ ואז בניה | נמרוד פישר',
    description: 'סוכני דאטה לחברות: ייעוץ איפה הסוכן צריך לחיות בארגון, ואז בניה על הדאטה, ה-CRM והמסמכים שכבר יש. לא צ׳אטבוט. לא עוד דשבורד.',
    eyebrow: 'DATA AGENTS / ISRAEL',
    h1: <>הדאטה כבר שם.<br /><em>השאלה היא מה עושים איתו.</em></>,
    lede: 'אני עוזר לחברות להבין איפה סוכן דאטה צריך לחיות — ואז לבנות אותו על הדאטה של החברה. ייעוץ, ואז בניה. לא צ׳אטבוט על האתר, לא עוד דשבורד שאף אחד לא פותח.',
    cta: 'קביעת ייעוץ ראשוני',
    how: 'איך זה עובד',
    note: <>מה שמעניין אותי הוא לא כמה AI יש לכם.<br />אלא מה הוא מאפשר לכם לעשות.</>,
    proof: 'בניתי, ייעצתי ולימדתי בצוותים של',
    statement: <>רוב החברות לא סובלות מבעיית דאטה.<br /><span>הן סובלות מבעיית החלטות.</span></>,
    statementCopy: 'יש לכם מחסן נתונים. יש לכם כלים. יש לכם אנשים חכמים. ועדיין, הרבה החלטות חשובות מתחילות ב״תבדוק לי רגע…״ ונגמרות אחרי שלושה ימים.',
    statementMuted: 'העבודה שלי מתחילה מההחלטה שצריך לשפר — ורק אז חוזרת לדאטה, לתהליך ולסוכן שיכול לעשות את זה פשוט יותר.',
    approachLead: <>לא מתחילים בטכנולוגיה.<br />מתחילים במה שצריך לקרות.</>,
    cards: [
      ['מוצאים את המנוף', 'ממפים איפה החלטות נתקעות, איפה מידע מתבזבז, ומה ייתן לארגון את הקפיצה הגדולה ביותר.'],
      ['בונים את מה שחסר', 'הקונטקסט, המבנה, החיבורים והגבולות שהופכים סוכן דאטה מתשובה נחמדה למערכת שאפשר לסמוך עליה.'],
      ['משאירים יכולת', 'לא בונים תלות בי. בונים אצלכם את היכולת להפעיל, למדוד ולשפר את הדבר גם אחרי שאני יוצא.'],
    ],
    workTitle: <>מאתגרים עסקיים<br /><em>לסוכנים שעובדים.</em></>,
    services: [
      ['ייעוץ לסוכני דאטה', 'מאתרים איפה סוכן צריך לחיות: איזו החלטה, איזה תהליך, ואיזה מידע כבר קיים בארגון.', localizedPath('/services/ai-agents', 'he')],
      ['בניית סוכני דאטה', 'בונים סוכן על הדאטה, ה-CRM, המחסן והמסמכים של החברה. האוטומציה היא איך הוא פועל — לא שירות בצד.', localizedPath('/services/ai-agents', 'he') + '#build'],
    ],
    assessmentTitle: <>לא בטוחים איפה להתחיל?<br /><em>בואו נתחיל משאלה אחת.</em></>,
    assessmentCopy: 'בייעוץ לסוכני דאטה נבין איפה סוכן צריך לחיות בארגון, אילו מערכות ודאטה כבר קיימים, ומה הצעד הראשון ששווה לבנות.',
    checks: ['מיפוי איפה סוכן דאטה צריך לחיות', 'חיבור ל-CRM, למחסן נתונים ולמסמכים שכבר יש', 'תכנית בניה שאפשר להסביר להנהלה'],
    closing: <>AI בלי הקשר הוא בעיקר<br /><em>דרך מהירה לטעות.</em></>,
    closingCopy: 'הדאטה שלכם לא צריך עוד שכבת באזז. הוא צריך מישהו שיבין מה לעשות איתו.',
    faqTitle: 'שאלות שהנהלות שואלות על סוכני דאטה',
  } : {
    title: 'Data Agents for Companies | Consult, Then Build | Nimrod Fisher',
    description: 'Data agents for companies: consult on where an agent should live, then build it on your CRM, warehouse, and documents. Not a chatbot. Not another dashboard.',
    eyebrow: 'DATA AGENTS / ISRAEL',
    h1: <>Your data is already there.<br /><em>The question is what to do with it.</em></>,
    lede: 'I help companies decide where a data agent should live — then build it on the data you already have. Consultation, then construction. Not a website chatbot, and not another dashboard nobody opens.',
    cta: 'Book an assessment',
    how: 'How it works',
    note: <>The question is not how much AI you have.<br />It is what it enables you to do.</>,
    proof: 'Built, advised, and taught teams at',
    statement: <>Most companies do not have a data problem.<br /><span>They have a decision problem.</span></>,
    statementCopy: 'You have data, tools, and smart people. Still, important decisions begin with “can you check something?” and take three days to answer.',
    statementMuted: 'My work starts from the decision that needs to improve — then returns to the data, workflow, and agent that can make it simpler.',
    approachLead: <>Do not start with technology.<br />Start with what needs to happen.</>,
    cards: [
      ['Find the leverage', 'Map where decisions stall, where information is wasted, and what can create the biggest practical lift.'],
      ['Build what is missing', 'Create the context, structure, connections, and guardrails that make a data agent dependable.'],
      ['Leave capability behind', 'Build your team’s ability to operate, measure, and improve the system after the engagement.'],
    ],
    workTitle: <>From business challenges<br /><em>to agents that work.</em></>,
    services: [
      ['Data agent consulting', 'Find where an agent should live: which decision, which workflow, and which data already exists in the company.', localizedPath('/services/ai-agents', 'en')],
      ['Data agent building', 'Build the agent on your warehouse, CRM, and documents. Automation is how the agent acts — not a separate product.', localizedPath('/services/ai-agents', 'en') + '#build'],
    ],
    assessmentTitle: <>Not sure where to start?<br /><em>Start with one question.</em></>,
    assessmentCopy: 'In a data-agent consultation we clarify where an agent should live, what systems and data already exist, and the first build that is worth doing.',
    checks: ['Map where a data agent should live', 'Connect to the CRM, warehouse, and documents you already have', 'Create a build plan leadership can explain'],
    closing: <>AI without context is mostly<br /><em>a fast way to be wrong.</em></>,
    closingCopy: 'Your data does not need another layer of buzzwords. It needs someone who understands what to do with it.',
    faqTitle: 'Questions leadership teams ask about data agents',
  };

  const path = '/';
  return (
    <div className="site-page" dir={isHebrew ? 'rtl' : 'ltr'}>
      <SEOHead title={copy.title} description={copy.description} path={localizedPath(path, language)} language={language} keywords={isHebrew ? ['סוכני דאטה', 'סוכן דאטה', 'ייעוץ לסוכני דאטה', 'בניית סוכני דאטה', 'סוכן דאטה לחברות', 'data agents'] : ['data agents', 'data agent consulting', 'build data agents', 'ai agents for company data', 'data agent vs chatbot']} schema={schemaFor(language)} />
      <SiteHeader language={language} currentPath={path} />
      <main>
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> {copy.eyebrow}</p>
            <h1>{copy.h1}</h1>
            <p className="hero-lede">{copy.lede}</p>
            <div className="hero-actions">
              <a className="ui-button ui-button-primary ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{copy.cta} <CtaArrow size={18} /></a>
              <a className="text-link" href="#approach">{copy.how} <HowArrow size={17} /></a>
            </div>
            <div className="hero-note"><span>{copy.note}</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <OptimizedImage src="/profile.jpg" alt={isHebrew ? 'נמרוד פישר, יועץ ובונה סוכני דאטה' : 'Nimrod Fisher, data agent advisor and builder'} priority className="portrait" />
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

        <section className="assessment-section shell" id="assessment"><div className="assessment-graphic"><span>ASSESS</span><span>DECIDE</span><span>BUILD</span><span>LEARN</span></div><div className="assessment-copy"><div className="section-kicker"><span>THE FIRST MOVE</span></div><h2>{copy.assessmentTitle}</h2><p>{copy.assessmentCopy}</p><ul className="check-list">{copy.checks.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul><a className="ui-button ui-button-dark ui-button-large" href={CALENDAR_URL} target="_blank" rel="noreferrer">{copy.cta} <CtaArrow size={18} /></a></div></section>

        <FAQSection items={faq[language]} title={copy.faqTitle} />
        <section className="closing-section shell"><div className="closing-meta"><span>ONE LAST THING</span></div><h2>{copy.closing}</h2><div className="closing-bottom"><p>{copy.closingCopy}</p><a href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={17} /></a></div></section>
      </main>
      <footer className="site-footer shell"><span>© 2026 NIMROD FISHER</span><span>DATA AGENTS</span><a href="https://www.linkedin.com/in/nimrod-fisher/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></footer>
    </div>
  );
}
