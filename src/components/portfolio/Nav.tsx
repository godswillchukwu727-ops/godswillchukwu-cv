import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-background/80 border-b border-primary/10"
  >
    <a href="#home" className="font-display text-xl font-bold text-primary tracking-tight">
      Goddi <span className="italic text-foreground font-normal">Creative</span>
    </a>
    <ul className="hidden md:flex gap-10">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="text-mono-label hover:text-primary transition-colors duration-300">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
    <a
      href="mailto:godswillchukwu727@gmail.com"
      className="font-mono text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary-glow transition-colors duration-300"
    >
      Hire Me
    </a>
  </motion.nav>
);
