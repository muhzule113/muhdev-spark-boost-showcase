import { orderSteps } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const stepColors = ['var(--teal)', 'var(--indigo)', 'var(--yellow)', 'var(--purple)'];

const OrderStepper = () => (
  <section className="py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Cara Order</h2>
        <p className="mb-12 text-center font-medium text-foreground/80">Proses pemesanan yang simpel dan transparan</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-4">
        {orderSteps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl brutal-border text-xl font-extrabold brutal-shadow-sm"
                style={{ backgroundColor: stepColors[i % stepColors.length], color: i === 2 ? 'var(--foreground)' : 'white' }}
              >
                {s.step}
              </div>
              <h3 className="mb-1 font-extrabold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
              <p className="text-sm font-medium text-foreground/80">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OrderStepper;
