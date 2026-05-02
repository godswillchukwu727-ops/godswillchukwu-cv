import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const stats = [
  { num: "150+", label: "Graphics Created" },
  { num: "40%", label: "Avg. Engagement Lift" },
  { num: "6+", label: "Years Crafting" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 radial-gold-bg" />
      <div className="absolute inset-0 grid-lines-bg opacity-70" />

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-[280px] md:w-[420px] h-[400px] md:h-[580px] border border-primary/20 overflow-hidden hidden sm:block"
      >
        <img
          src={heroPortrait}
          alt="Chukwu God'swill — visual brand designer and cinematographer"
          width={832}
          height={1152}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(15%) contrast(1.05)" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade-right)" }} />
      </motion.div>

      {/* Floating tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 flex items-center gap-3 mb-6"
      >
        <span className="w-10 h-px bg-primary" />
        <span className="text-eyebrow">Visual Brand Designer · Lagos, Nigeria</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="relative z-10 font-display font-bold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,8rem)] max-w-[850px]"
      >
        Chukwu<br />
        <span className="italic text-gradient-gold">God'swill</span><br />
        Okereke
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-8 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground max-w-md leading-loose"
      >
        Founder, Goddi Creative Hub<br />
        Brand Identity · Photography · Cinematography
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 flex gap-8 md:gap-12 mt-12 pt-8 border-t border-primary/15 max-w-xl"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">{s.num}</div>
            <div className="text-mono-label mt-2">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-mono-label">Scroll</span>
        <span className="w-px h-10 bg-primary animate-scroll-line" />
      </div>
    </section>
  );
};
