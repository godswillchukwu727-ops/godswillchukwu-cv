import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { year: "2026", name: "Digital Design & Marketing Course", org: "Nerdz Factory" },
  { year: "2025", name: "Cinematography & Film Making Course", org: "Praxis Academy" },
  { year: "2023", name: "NYSC Discharge Certificate", org: "National Youth Service Corps" },
  { year: "2023", name: "Graphics Design Challenge 11 & 12", org: "Miunify" },
  { year: "2022", name: "Solar Energy System Design & Installation", org: "Certification Program" },
  { year: "EDU", name: "B.Sc Computer Science", org: "ESM — École Supérieure de Management, Benin", featured: true },
];

export const Credentials = () => (
  <section id="certs" className="bg-card/40 px-6 md:px-12 py-24 md:py-32">
    <SectionHeader num="04" eyebrow="Education & Credentials" title={<>Always <em className="italic text-primary">Learning</em></>} />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
      {certs.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className={`p-8 ${c.featured ? "bg-primary/5 border border-primary/20" : "bg-card"}`}
        >
          <div className={`font-display text-5xl font-bold leading-none mb-4 ${c.featured ? "text-primary/30 text-3xl" : "text-primary/10"}`}>
            {c.year}
          </div>
          <div className="text-sm text-foreground font-normal leading-snug mb-2">{c.name}</div>
          <div className="text-mono-label text-primary">{c.org}</div>
        </motion.div>
      ))}
    </div>
  </section>
);
