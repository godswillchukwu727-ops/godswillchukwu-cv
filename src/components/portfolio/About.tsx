import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { label: "Brand Design", tags: ["Logo Design", "Brand Identity", "Packaging", "Brand Guidelines", "Mockups"] },
  { label: "Social & Digital", tags: ["Social Media Design", "Content Strategy", "Visual Storytelling", "SMM"] },
  { label: "Photography", tags: ["Product", "Portrait", "Event", "Street & Fashion", "Photo Editing"] },
  { label: "Video & Cinematography", tags: ["Video Production", "Cinematic Shooting", "Event Coverage", "Editing", "Live"] },
  { label: "Tech", tags: ["HTML / CSS", "JavaScript", "WordPress", "Bootstrap"] },
];

export const About = () => (
  <section id="about" className="bg-card/40 px-6 md:px-12 py-24 md:py-32">
    <SectionHeader num="02" eyebrow="Who I Am" title={<>The <em className="italic text-primary">Creative</em> Mind</>} />

    <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-5 text-[15px] leading-loose text-muted-foreground font-light"
      >
        <p>
          I'm <strong className="text-foreground font-medium">Chukwu God'swill Okereke</strong> — a visual brand designer,
          photographer, and cinematographer based in Lagos, Nigeria, and the founder of{" "}
          <strong className="text-foreground font-medium">Goddi Creative Hub</strong>.
        </p>
        <p>
          With over 6 years of hands-on creative work, I've helped brands from{" "}
          <strong className="text-foreground font-medium">law offices to declutter platforms</strong>,{" "}
          <strong className="text-foreground font-medium">gadget stores to shortlet apartments</strong> build distinctive visual
          identities that actually convert. I don't just make things look good — I make things work.
        </p>
        <p>
          My background spans brand identity, social media design, product photography, event cinematography, and everything in
          between. I also bring a foundation in <strong className="text-foreground font-medium">web development</strong>, giving
          me a unique bridge between design and tech.
        </p>
        <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed border-l-2 border-primary pl-6 mt-8">
          "Design is not just what it looks like. Design is how it works — and how it makes people feel."
        </blockquote>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        {skills.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-accent">{cat.label}</span>
              <span className="flex-1 h-px bg-accent/20" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-muted-foreground px-3 py-1.5 border border-border font-light hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
