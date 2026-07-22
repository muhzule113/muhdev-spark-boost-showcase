import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, siteConfig, stats } from "@/data/site";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="container relative">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {siteConfig.tagline}{" "}
          <span style={{ color: 'var(--teal)' }}>untuk Project Digital</span>
        </h1>
        <p className="mb-8 text-lg font-medium text-foreground/80 md:text-xl">
          {siteConfig.description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full rounded-xl brutal-border bg-[var(--teal)] text-white brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_var(--navy)] transition-all sm:w-auto"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-xl brutal-border bg-[var(--cream)] text-foreground brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_var(--navy)] transition-all sm:w-auto"
          >
            <Link to="/pricing">
              Lihat Paket
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {stats.map((s, i) => {
          const bg = ['var(--teal)', 'var(--indigo)', 'var(--yellow)', 'var(--purple)'][i % 4];
          const text = i === 2 ? 'var(--foreground)' : 'white';
          return (
            <div
              key={s.label}
              className="glass-card rounded-2xl brutal-border p-4 text-center brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_var(--navy)] transition-all"
              style={{ backgroundColor: bg, color: text }}
            >
              <div className="text-2xl font-extrabold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.value}</div>
              <div className="mt-1 text-xs font-extrabold uppercase tracking-wider">{s.label}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Hero;
