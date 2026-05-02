import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { BrandsMarquee } from "@/components/portfolio/BrandsMarquee";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Chukwu God'swill Okereke — Visual Brand Designer & Cinematographer";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Goddi Creative Hub — Lagos-based visual brand designer, photographer & cinematographer. Brand identity, social media, photography & cinematic storytelling.";
    if (desc) desc.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="grain min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <BrandsMarquee />
      <Portfolio />
      <About />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
