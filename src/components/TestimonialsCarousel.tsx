import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[idx];

  return (
    <section className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Testimoni</h2>
          <p className="mb-12 text-center font-medium text-foreground/80">Apa kata mereka yang sudah menggunakan jasa kami</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-xl glass-card rounded-2xl brutal-border brutal-shadow p-10 text-center">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < t.rating ? "fill-[var(--yellow)] text-[var(--yellow)]" : "text-muted"}`} />
              ))}
            </div>
            <p className="mb-6 font-medium italic text-lg text-foreground/90">"{t.content}"</p>
            <div className="font-extrabold text-lg" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{t.name}</div>
            <div className="text-sm font-bold text-foreground/80">{t.role}</div>

            <div className="mt-8 flex justify-center gap-3">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-xl brutal-border text-foreground hover:bg-[var(--teal)] hover:text-white" aria-label="Previous" style={{ backgroundColor: 'var(--cream)' }}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className="rounded-xl brutal-border text-foreground hover:bg-[var(--teal)] hover:text-white" aria-label="Next" style={{ backgroundColor: 'var(--cream)' }}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "h-3 rounded-full transition-all border",
                    i === idx ? "w-8 bg-[var(--navy)]" : "w-3"
                  )}
                  style={i !== idx ? { backgroundColor: 'var(--cream)', borderColor: 'var(--navy)' } : { borderColor: 'var(--navy)' }}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
