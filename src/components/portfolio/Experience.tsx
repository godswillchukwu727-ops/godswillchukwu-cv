import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const exp = [
  {
    company: "OJB Declutter",
    date: "Sep 2025 – Present",
    role: "Graphics Designer, Photographer & Videographer",
    bullets: [
      "Designed marketing materials including flyers, banners, and digital ads",
      "Shot & edited social media content alongside the content team",
      "Maintained visual consistency across all branding materials",
      "Created video content that increased social media reach",
    ],
  },
  {
    company: "Perry Shortlet Apartments",
    date: "Mar 2025 – Mar 2026",
    role: "Graphics Designer & Social Media Manager",
    bullets: [
      "Designed 150+ social media graphics for brand visibility",
      "Rebranded company logo and all marketing materials from scratch",
      "Shot & edited apartment photos and videos for promotion",
    ],
    highlight: "150+ Graphics Delivered",
  },
  {
    company: "Bells Gadget Store",
    date: "Aug 2024 – Present",
    role: "Graphics Designer & Social Media Manager",
    bullets: [
      "Designed promotional graphics for marketing and social media",
      "Managed content posting and audience engagement across platforms",
      "Increased engagement by 40% through consistent content design",
    ],
    highlight: "40% Engagement Lift",
  },
  {
    company: "Purrissmarita Law Office",
    date: "May 2024 – Sep 2025",
    role: "Graphics Designer & Social Media Manager",
    bullets: [
      "Designed and branded company logo from scratch",
      "Produced 150+ social media graphics for brand visibility",
      "Improved brand visibility through consistent visual branding",
    ],
  },
  {
    company: "Silverbird Film Distribution",
    date: "Mar 2023 – Nov 2024",
    role: "Technical Support & Graphics Designer",
    bullets: [
      "Managed DCP hard drive logistics across West African cinemas",
      "Designed event graphics, media walls, and backdrops",
      "Managed company website and external NFVCB communications",
      "Handled DCP movie downloads and censorship processes",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="px-6 md:px-12 py-24 md:py-32">
    <SectionHeader num="03" eyebrow="Work History" title={<>Where I've <em className="italic text-primary">Created</em></>} />

    <div className="flex flex-col">
      {exp.map((e, i) => (
        <motion.div
          key={e.company}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
          className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-b-0 group hover:bg-card/30 px-4 -mx-4 transition-colors duration-500"
        >
          <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground leading-loose">
            <span className="block text-primary text-[11px] mb-1 font-medium">{e.company}</span>
            {e.date}
          </div>
          <div>
            <div className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {e.role}
            </div>
            <ul className="space-y-2">
              {e.bullets.map((b) => (
                <li key={b} className="text-sm text-muted-foreground font-light pl-5 relative leading-relaxed">
                  <span className="absolute left-0 top-1 text-primary text-xs">→</span>
                  {b}
                </li>
              ))}
            </ul>
            {e.highlight && (
              <span className="inline-block mt-4 font-mono text-[10px] tracking-[0.1em] text-accent border border-accent/30 px-3 py-1">
                {e.highlight}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
