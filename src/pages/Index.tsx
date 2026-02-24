import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import PricingTable from "@/components/PricingTable";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import OrderStepper from "@/components/OrderStepper";
import Estimator from "@/components/Estimator";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const Index = () => (
  <main>
    <Hero />
    <ServiceCards />
    <PricingTable />
    <PortfolioGrid />
    <TestimonialsCarousel />
    <OrderStepper />
    <Estimator />
    <FAQAccordion />
    <ContactForm />
  </main>
);

export default Index;
