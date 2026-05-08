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
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 1 
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] text-white rounded-full shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(37,211,102,0.8)] transition-all group"
      title="WhatsApp ile İletişime Geçin"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-current group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-white text-[#25D366] text-[10px] font-black items-center justify-center shadow-sm">1</span>
      </span>
    </motion.a>
  );
}
