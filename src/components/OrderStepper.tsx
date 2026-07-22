import { orderSteps } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const OrderStepper = () => (
  <section className="py-20 border-b-2 border-foreground">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Cara Order</h2>
        <p className="mb-12 text-center text-muted-foreground font-medium">Proses pemesanan yang simpel dan transparan</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-4">
        {orderSteps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-foreground bg-primary text-xl font-extrabold text-primary-foreground shadow-brutal-sm">
                {s.step}
              </div>
              <h3 className="mb-1 font-extrabold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OrderStepper;
