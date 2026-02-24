import { Globe, GraduationCap, Smartphone } from "lucide-react";
import { services } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Smartphone: <Smartphone className="h-8 w-8" />,
};

const Services = () => (
  <main className="py-20">
    <div className="container">
      <ScrollReveal>
        <h1 className="mb-2 text-center text-4xl font-bold">Detail Layanan</h1>
        <p className="mb-16 text-center text-muted-foreground">Penjelasan lengkap setiap layanan yang kami tawarkan</p>
      </ScrollReveal>

      <div className="space-y-12">
        {services.map((s, i) => (
          <ScrollReveal key={s.id} delay={i * 0.1}>
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">{iconMap[s.icon]}</div>
                <h2 className="text-2xl font-bold">{s.title}</h2>
              </div>
              <p className="mb-6 text-muted-foreground">{s.description}</p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-primary">Fitur</h3>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-destructive">Batasan</h3>
                  <ul className="space-y-2">
                    {s.limitations.map((l) => (
                      <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {s.faq.length > 0 && (
                <div className="mt-6 border-t border-border/50 pt-6">
                  <h3 className="mb-3 text-sm font-semibold">FAQ Layanan</h3>
                  <Accordion type="single" collapsible>
                    {s.faq.map((f, fi) => (
                      <AccordionItem key={fi} value={`${s.id}-faq-${fi}`} className="border-border/50">
                        <AccordionTrigger className="text-left text-sm hover:no-underline hover:text-primary">{f.q}</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </main>
);

export default Services;
