import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border-2 border-foreground bg-[var(--pink)] text-white shadow-brutal transition-all hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </motion.a>
);

export default FloatingWhatsApp;
