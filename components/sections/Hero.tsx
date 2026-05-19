import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 860 }}>
        <span className="badge">Open-source Next.js starter</span>

        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 88px)",
            lineHeight: 1,
            margin: "24px 0",
            letterSpacing: "-0.06em"
          }}
        >
          Build clean, SEO-ready websites faster.
        </h1>

        <p
          style={{
            color: "var(--muted)",
            fontSize: 20,
            lineHeight: 1.7,
            maxWidth: 680
          }}
        >
          {siteConfig.name} is a practical starter for agencies, freelancers,
          and small businesses that need a professional website foundation with
          reusable sections and Vercel-ready deployment.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a className="button" href={siteConfig.links.github}>
            View on GitHub
          </a>
          <a className="button secondary" href="#features">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
