import { useState } from "react";
import { portfolio, portfolioCategories, type PortfolioItem } from "@/data/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const catColors = ['var(--pink)', 'var(--teal)', 'var(--purple)'];

const PortfolioGrid = () => {
  const [filter, setFilter] = useState<string>("Semua");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = filter === "Semua" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Portfolio</h2>
          <p className="mb-8 text-center font-medium text-foreground/80">Beberapa project yang sudah kami kerjakan</p>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "border-2 border-foreground px-5 py-2 text-sm font-bold transition-all",
                  filter === cat
                    ? "bg-foreground text-[var(--cream)]"
                    : "text-foreground hover:bg-muted"
                )}
                style={filter !== cat ? { backgroundColor: 'var(--cream)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <button
                onClick={() => setSelected(item)}
                className="group w-full border-2 border-foreground bg-card p-0 text-left shadow-brutal-sm transition-all hover:shadow-brutal hover:-translate-x-[2px] hover:-translate-y-[2px]"
              >
                <div className="h-44 w-full overflow-hidden border-b-2 border-foreground bg-muted">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <Badge
                    variant="default"
                    className="mb-2 rounded-none border border-foreground text-xs font-extrabold text-white"
                    style={{ backgroundColor: catColors[i % catColors.length] }}
                  >
                    {item.category}
                  </Badge>
                  <h3 className="font-extrabold text-lg" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80 line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="border border-foreground px-2 py-0.5 text-xs font-extrabold text-foreground" style={{ backgroundColor: 'var(--cream)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="rounded-none border-2 border-foreground bg-card shadow-brutal sm:max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{selected.title}</DialogTitle>
                  <DialogDescription>{selected.category}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground/80">{selected.details}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tech.map((t) => (
                      <Badge key={t} variant="default" className="rounded-none border border-foreground text-xs font-extrabold">{t}</Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioGrid;
