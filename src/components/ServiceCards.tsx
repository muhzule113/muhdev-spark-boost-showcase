import { Globe, GraduationCap, Smartphone } from "lucide-react";
import { services } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Smartphone: <Smartphone className="h-8 w-8" />,
};

const ServiceCards = () => (
  <section id="layanan" className="py-20 border-b-2 border-foreground">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Layanan Kami</h2>
        <p className="mb-12 text-center text-muted-foreground font-medium">Solusi lengkap untuk kebutuhan digital dan akademik Anda</p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.id} delay={i * 0.1}>
            <div className="group h-full border-2 border-foreground bg-card p-8 shadow-brutal transition-all hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px]">
              <div className="mb-6 inline-flex border-2 border-foreground bg-primary p-4 text-primary-foreground shadow-brutal-sm">
                {iconMap[s.icon]}
              </div>
              <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground font-medium">{s.description}</p>
              <ul className="space-y-2">
                {s.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-medium">
                    <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
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
