import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import branding from "@/assets/work-branding-1.jpg";
import event from "@/assets/work-event.jpg";
import product from "@/assets/work-product.jpg";
import fashion from "@/assets/work-fashion.jpg";
import social from "@/assets/work-social.jpg";
import apartment1 from "@/assets/work-apartment-1.png";
import apartment2 from "@/assets/work-apartment-2.png";
import apartment3 from "@/assets/work-apartment-3.png";
import apartment4 from "@/assets/work-apartment-4.png";
import cinema from "@/assets/work-cinema.jpg";

const apartmentImages = [apartment1, apartment2, apartment3, apartment4];

type Cat = "all" | "branding" | "social" | "photo" | "event" | "cinema";

const works = [
  { id: 1, src: branding, tag: "Logo Animation", title: "S&T Logo Animation", sub: "Animation", cat: "branding", span: "md:col-span-2" },
  { id: 2, src: fashion, tag: "Photography", title: "Creative Visual", sub: "Editorial", cat: "photo", span: "md:row-span-2" },
  { id: 3, src: product, tag: "Photography", title: "Mockup designs", sub: "Product Story", cat: "photo" },
  { id: 4, src: social, tag: "Social Media", title: "Frill Branding design", sub: "Product Design", cat: "social" },
  { id: 5, src: event, tag: "Event Coverage", title: "Holy Ghost Arena", sub: "Live Production", cat: "event", span: "md:col-span-2" },
  { id: 6, src: cinema, tag: "Cinematography", title: "The Hacker Movie trailer", sub: "Short Film", cat: "cinema" },
  { id: 7, src: apartment1, images: apartmentImages, tag: "Brand & Photo", title: "Social media designs.", sub: "Social Media Graphics", cat: "branding", span: "md:col-span-2" },
] as const;

const filters: { label: string; value: Cat }[] = [
  { label: "All Work", value: "all" },
  { label: "Brand Identity", value: "branding" },
  { label: "Photography", value: "photo" },
  { label: "Social Media", value: "social" },
  { label: "Events", value: "event" },
  { label: "Cinema", value: "cinema" },
];

export const Portfolio = () => {
  const [active, setActive] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = works.filter((w) => active === "all" || w.cat === active);

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <SectionHeader num="01" eyebrow="Selected Work" title={<>Creative <em className="italic text-primary">Portfolio</em></>} />

      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-300 ${
              active === f.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 auto-rows-[280px]">
        <AnimatePresence mode="popLayout">
          {filtered.map((w, i) => (
            <motion.div
              layout
              key={w.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              onClick={() => setLightbox(w.src)}
              className={`group relative overflow-hidden bg-card cursor-pointer ${("span" in w && w.span) || ""}`}
            >
              {"images" in w && w.images ? (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full h-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scrollbar-hide"
                >
                  {w.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${w.title} ${idx + 1}`}
                      loading="lazy"
                      onClick={() => setLightbox(img)}
                      className="w-full h-full flex-shrink-0 object-cover snap-center transition-all duration-700 hover:brightness-75"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="text-eyebrow mb-2">{w.tag}</div>
                <div className="font-display text-xl font-bold leading-tight">{w.title}</div>
                <div className="text-xs text-muted-foreground mt-1 font-light">{w.sub}</div>
              </div>
              <div className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity">
                /{String(w.id).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightbox}
              alt="Selected work"
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-cinematic"
            />
            <button className="fixed top-6 right-8 text-mono-label hover:text-primary">Close ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
