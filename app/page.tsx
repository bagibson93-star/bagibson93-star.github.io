import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, Contact, Footer, Projects, Services } from "@/components/Sections";
import { hero, site } from "@/content";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#f5b041] focus:px-5 focus:py-3 focus:font-semibold focus:text-[#160f05]">
        Skip to main content
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero
          image={hero.image}
          imageAlt={hero.imageAlt}
          video={hero.video}
          eyebrow={hero.eyebrow}
          title={site.tagline}
          subtitle={site.intro}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
