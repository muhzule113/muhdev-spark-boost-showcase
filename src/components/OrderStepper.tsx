import { orderSteps } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const OrderStepper = () => (
  <section className="py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Cara Order</h2>
        <p className="mb-12 text-center text-muted-foreground">Proses pemesanan yang simpel dan transparan</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-4">
        {orderSteps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                {s.step}
              </div>
              <h3 className="mb-1 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OrderStepper;
