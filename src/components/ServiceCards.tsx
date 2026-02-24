import { Globe, GraduationCap, Smartphone } from "lucide-react";
import { services } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Smartphone: <Smartphone className="h-8 w-8" />,
};

const ServiceCards = () => (
  <section id="layanan" className="py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Layanan Kami</h2>
        <p className="mb-12 text-center text-muted-foreground">Solusi lengkap untuk kebutuhan digital dan akademik Anda</p>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.id} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:glow-primary">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                {iconMap[s.icon]}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{s.description}</p>
              <ul className="space-y-1.5">
                {s.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCards;
