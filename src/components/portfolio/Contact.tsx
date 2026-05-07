import { motion } from "framer-motion";

export const Contact = () => (
  <section id="contact" className="relative text-center py-32 md:py-40 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 radial-gold-bg" />
    <div className="absolute inset-0 grid-lines-bg opacity-40" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <div className="text-eyebrow mb-6">Available for Projects · 2026</div>
      <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] mb-6 tracking-tight">
        Let's Build<br />
        Something <em className="italic text-gradient-gold">Great</em>
      </h2>
      <p className="text-sm md:text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed mb-12">
        Whether it's a brand identity, a social media campaign, event coverage, or a full visual strategy — I'm ready to bring
        your vision to cinematic life.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="mailto:godswillchukwu727@gmail.com"
          className="font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-3.5 bg-primary text-primary-foreground hover:bg-primary-glow transition-all hover:shadow-gold-glow"
        >
          Send an Email
        </a>
        <a
          href="https://www.behance.net/godswillchukwu_cre8"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-3.5 border border-border text-foreground hover:border-primary hover:text-primary transition-all"
        >
          View Behance
        </a>
        <a
          href="tel:+2348088352546"
          className="font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-3.5 border border-border text-foreground hover:border-primary hover:text-primary transition-all"
        >
          +234 808 835 2546
        </a>
      </div>
    </motion.div>
  </section>
);
