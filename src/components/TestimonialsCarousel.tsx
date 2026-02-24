import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[idx];

  return (
    <section className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Testimoni</h2>
          <p className="mb-12 text-center text-muted-foreground">Apa kata mereka yang sudah menggunakan jasa kami</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="mb-6 text-muted-foreground italic">"{t.content}"</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.role}</div>

            <div className="mt-6 flex justify-center gap-2">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full" aria-label="Previous">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-3 flex justify-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
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
