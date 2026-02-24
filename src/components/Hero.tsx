import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, siteConfig, stats } from "@/data/site";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    {/* Subtle glow */}
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container relative">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Tersedia untuk project baru
        </motion.div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          {siteConfig.tagline}{" "}
          <span className="text-gradient">untuk Project Digital</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          {siteConfig.description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full rounded-2xl glow-primary animate-glow-pulse sm:w-auto"
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
            className="w-full rounded-2xl sm:w-auto"
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
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
