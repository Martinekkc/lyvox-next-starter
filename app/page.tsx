import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

const sections = [
  "Landing page structure",
  "SEO metadata",
  "Responsive layout",
  "Reusable components",
  "Vercel deployment",
  "MIT license"
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="sections" className="section">
          <div className="container">
            <span className="badge">Included sections</span>

            <h2 style={{ fontSize: 44, margin: "20px 0 24px" }}>
              Everything needed for a simple business website.
            </h2>

            <div className="grid three">
              {sections.map((section) => (
                <div className="card" key={section}>
                  <strong>{section}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
