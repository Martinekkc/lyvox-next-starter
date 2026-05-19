const features = [
  {
    title: "SEO foundation",
    description:
      "Metadata, sitemap, robots configuration and clean page structure ready for production websites."
  },
  {
    title: "Reusable sections",
    description:
      "Hero, services, process, FAQ, testimonials, contact and footer sections for fast landing page builds."
  },
  {
    title: "Agency workflow",
    description:
      "Built for repeatable client projects where speed, quality and maintainability matter."
  }
];

export function Services() {
  return (
    <section id="features" className="section">
      <div className="container">
        <span className="badge">Features</span>

        <h2 style={{ fontSize: 44, margin: "20px 0 12px" }}>
          A better starting point for client websites.
        </h2>

        <p style={{ color: "var(--muted)", maxWidth: 680, lineHeight: 1.7 }}>
          This starter focuses on the foundations that small business websites
          need most: structure, speed, SEO and clean reusable components.
        </p>

        <div className="grid three" style={{ marginTop: 32 }}>
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3 style={{ marginTop: 0 }}>{feature.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
