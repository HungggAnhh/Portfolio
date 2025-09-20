import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal(); // <— chỉ cần gọi 1 lần ở root

  return (
    <Layout>
      <main>
        <section id="home" className="section-spacing" data-reveal>
          <Hero />
        </section>

        <section
          id="about"
          className="section-spacing"
          data-reveal
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <About />
        </section>

        <section
          id="skills"
          className="section-spacing"
          data-reveal
          style={{ "--delay": "150ms" } as React.CSSProperties}
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="section-spacing"
          data-reveal
          style={{ "--delay": "180ms" } as React.CSSProperties}
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="section-spacing"
          data-reveal
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          <Contact />
        </section>
      </main>
    </Layout>
  );
}
