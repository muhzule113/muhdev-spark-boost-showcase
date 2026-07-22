import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans, addOns, WHATSAPP_URL } from "@/data/site";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const PricingTable = () => (
  <section id="harga" className="py-20 border-b-2 border-foreground">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Paket & Harga</h2>
        <p className="mb-12 text-center text-muted-foreground font-medium">Pilih paket yang sesuai kebutuhan dan budget Anda</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={cn(
                "relative flex h-full flex-col border-2 border-foreground p-8 transition-all hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px]",
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-brutal"
                  : "bg-card shadow-brutal"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-foreground bg-secondary px-5 py-1.5 text-xs font-extrabold uppercase text-secondary-foreground shadow-brutal-sm">
                  Populer
                </div>
              )}
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{plan.name}</h3>
              <div className={cn(
                "mt-3 text-3xl font-extrabold",
                plan.highlighted ? "text-primary-foreground" : "text-primary"
              )} style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                {plan.price}
              </div>
              <p className={cn(
                "mt-2 text-sm font-medium",
                plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>{plan.description}</p>
              <ul className="my-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-medium">
                    <Check className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      plan.highlighted ? "text-secondary" : "text-primary"
                    )} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "w-full rounded-none border-2 border-foreground font-bold transition-all",
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
                    : "bg-foreground text-background hover:bg-foreground/90 hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
                )}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Add-ons */}
      <ScrollReveal>
        <div className="mx-auto mt-12 max-w-2xl border-2 border-foreground bg-card p-8 shadow-brutal">
          <h3 className="mb-4 text-xl font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Add-ons</h3>
          <div className="space-y-3">
            {addOns.map((a) => (
              <div key={a.name} className="flex items-center justify-between border-b-2 border-dashed border-muted-foreground/30 pb-2 text-sm font-medium">
                <span>{a.name}</span>
                <span className="text-primary font-extrabold">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingTable;
