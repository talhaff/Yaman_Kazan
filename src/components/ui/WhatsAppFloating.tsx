"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppFloating() {
  return (
    <motion.a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all"
      title="WhatsApp ile İletişime Geçin"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] font-black items-center justify-center">1</span>
      </span>
    </motion.a>
  );
}
