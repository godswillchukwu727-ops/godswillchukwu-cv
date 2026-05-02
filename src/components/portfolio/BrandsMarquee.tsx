const brands = [
  ["OJB", "Declutter"],
  ["Bells", "Gadget Store"],
  ["Perry", "Shortlet"],
  ["Purrissmarita", "Law Office"],
  ["Silverbird", "Film Distribution"],
  ["Favvy's", "Essentials"],
  ["Preloved", "By Dammy"],
  ["Raiz", "Apartments"],
  ["Frankferon", "Gadget"],
  ["KLGM", "Holy Ghost Arena"],
];

export const BrandsMarquee = () => (
  <div className="bg-card/60 py-10 overflow-hidden border-y border-border">
    <div className="flex w-max animate-marquee">
      {[...brands, ...brands].map(([name, sub], i) => (
        <div
          key={i}
          className="flex items-baseline gap-3 px-8 font-display text-2xl md:text-3xl font-normal text-foreground/15 whitespace-nowrap"
        >
          <span>{name}</span>
          <span className="italic text-primary/30 text-lg">{sub}</span>
          <span className="text-primary/40 mx-4">✦</span>
        </div>
      ))}
    </div>
  </div>
);
