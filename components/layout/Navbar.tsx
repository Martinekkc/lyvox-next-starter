import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Sections", href: "#sections" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid var(--border)" }}>
      <div
        className="container"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <a href="/" style={{ fontWeight: 800 }}>
          {siteConfig.name}
        </a>

        <nav style={{ display: "flex", gap: 20, color: "var(--muted)" }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
