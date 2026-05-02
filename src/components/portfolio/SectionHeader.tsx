import { motion } from "framer-motion";

interface Props {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
}

export const SectionHeader = ({ num, eyebrow, title }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    className="flex items-center gap-6 md:gap-8 mb-16"
  >
    <div className="font-display text-6xl md:text-8xl font-bold text-primary/[0.08] leading-none tracking-tight">
      {num}
    </div>
    <div>
      <div className="text-eyebrow mb-2">{eyebrow}</div>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-none">
        {title}
      </h2>
    </div>
  </motion.div>
);
