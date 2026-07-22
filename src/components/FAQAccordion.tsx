import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const FAQAccordion = () => (
  <section id="faq" className="py-20 border-b-2 border-foreground">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>FAQ</h2>
        <p className="mb-12 text-center text-muted-foreground font-medium">Pertanyaan yang sering ditanyakan</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-2xl border-2 border-foreground bg-card p-8 shadow-brutal-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b-2 border-foreground last:border-b-0">
                <AccordionTrigger className="text-left text-sm font-bold hover:no-underline hover:text-primary py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-medium pb-4">
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
