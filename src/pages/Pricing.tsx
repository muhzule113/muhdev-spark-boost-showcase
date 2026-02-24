import PricingTable from "@/components/PricingTable";
import { policies } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

const Pricing = () => (
  <main className="py-20">
    <div className="container">
      <ScrollReveal>
        <h1 className="mb-2 text-center text-4xl font-bold">Paket & Harga</h1>
        <p className="mb-4 text-center text-muted-foreground">Harga transparan, tanpa biaya tersembunyi</p>
      </ScrollReveal>
    </div>
    <PricingTable />
    <div className="container">
      <ScrollReveal>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-3 font-semibold">{policies.revision.title}</h3>
          <p className="text-sm text-muted-foreground">{policies.revision.content}</p>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default Pricing;
