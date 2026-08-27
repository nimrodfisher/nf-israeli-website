export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ items, title, kicker = 'FAQ' }: { items: FAQItem[]; title: string; kicker?: string }) {
  return (
    <section className="faq-section shell" aria-labelledby="faq-title">
      <div className="section-kicker"><span>{kicker}</span></div>
      <h2 id="faq-title">{title}</h2>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
