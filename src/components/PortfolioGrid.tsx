import { useState } from "react";
import { portfolio, portfolioCategories, type PortfolioItem } from "@/data/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const PortfolioGrid = () => {
  const [filter, setFilter] = useState<string>("Semua");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = filter === "Semua" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Portfolio</h2>
          <p className="mb-8 text-center text-muted-foreground">Beberapa project yang sudah kami kerjakan</p>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
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
                className="group w-full rounded-2xl border border-border/50 bg-card/50 p-5 text-left backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-3 h-40 w-full overflow-hidden rounded-xl bg-muted">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <Badge variant="secondary" className="mb-2 text-xs">{item.category}</Badge>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="rounded-2xl border-border/50 bg-card sm:max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle>{selected.title}</DialogTitle>
                  <DialogDescription>{selected.category}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{selected.details}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
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
