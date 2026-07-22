import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl brutal-border bg-[var(--teal)] text-white brutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_var(--navy)]"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </motion.a>
);

export default FloatingWhatsApp;
