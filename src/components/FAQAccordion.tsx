import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const FAQAccordion = () => (
  <section id="faq" className="py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">FAQ</h2>
        <p className="mb-12 text-center text-muted-foreground">Pertanyaan yang sering ditanyakan</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-sm hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQAccordion;
