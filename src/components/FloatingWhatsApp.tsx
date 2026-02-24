import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat WhatsApp"
    whileHover={{ boxShadow: "0 0 24px rgba(37, 211, 102, 0.5)" }}
  >
    <MessageCircle className="h-6 w-6" />
  </motion.a>
);

export default FloatingWhatsApp;
