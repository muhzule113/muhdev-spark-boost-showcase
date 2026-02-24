import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans, addOns, WHATSAPP_URL } from "@/data/site";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const PricingTable = () => (
  <section id="harga" className="py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Paket & Harga</h2>
        <p className="mb-12 text-center text-muted-foreground">Pilih paket yang sesuai kebutuhan dan budget Anda</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all hover:-translate-y-1",
                plan.highlighted
                  ? "border-primary/50 bg-card glow-primary"
                  : "border-border/50 bg-card/50"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Populer
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-2 text-2xl font-bold text-primary">{plan.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="my-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn("w-full rounded-2xl", plan.highlighted && "glow-primary")}
                variant={plan.highlighted ? "default" : "outline"}
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
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold">Add-ons</h3>
          <div className="space-y-2">
            {addOns.map((a) => (
              <div key={a.name} className="flex items-center justify-between text-sm">
                <span>{a.name}</span>
                <span className="text-primary font-medium">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingTable;
