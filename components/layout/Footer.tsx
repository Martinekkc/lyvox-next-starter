import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          color: "var(--muted)"
        }}
      >
        <p>© {new Date().getFullYear()} {siteConfig.name}. MIT Licensed.</p>
        <a href={siteConfig.links.github}>GitHub</a>
      </div>
    </footer>
  );
}
