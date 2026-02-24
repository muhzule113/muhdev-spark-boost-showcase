import { policies } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

const Legal = () => (
  <main className="py-20">
    <div className="container">
      <ScrollReveal>
        <h1 className="mb-12 text-center text-4xl font-bold">Kebijakan</h1>
      </ScrollReveal>

      <div className="mx-auto max-w-2xl space-y-8">
        {Object.values(policies).map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="mb-3 text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.content}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </main>
);

export default Legal;
