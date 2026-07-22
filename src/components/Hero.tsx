import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, siteConfig, stats } from "@/data/site";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-32 border-b-2 border-foreground">
    <div className="container relative">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 border-2 border-foreground bg-background px-4 py-2 text-xs font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="h-2 w-2 bg-primary" />
          Tersedia untuk project baru
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {siteConfig.tagline}{" "}
          <span className="text-primary">untuk Project Digital</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          {siteConfig.description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full rounded-none border-2 border-foreground bg-primary text-primary-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all sm:w-auto"
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
            className="w-full rounded-none border-2 border-foreground bg-background text-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all sm:w-auto"
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
          <div
            key={s.label}
            className="border-2 border-foreground bg-card p-4 text-center shadow-brutal-sm"
          >
            <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.value}</div>
            <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
