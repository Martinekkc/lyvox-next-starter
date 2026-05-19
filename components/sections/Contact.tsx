import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card" style={{ textAlign: "center", padding: 48 }}>
          <span className="badge">Ready to customize</span>

          <h2 style={{ fontSize: 44, margin: "20px 0 12px" }}>
            Start with the structure. Customize the brand.
          </h2>

          <p
            style={{
              color: "var(--muted)",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.7
            }}
          >
            Use this starter as a clean foundation for landing pages, portfolio
            websites, local business websites and agency client projects.
          </p>

          <div style={{ marginTop: 32 }}>
            <a className="button" href={siteConfig.links.github}>
              Get the starter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
