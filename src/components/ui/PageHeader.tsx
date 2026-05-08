"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  imagePath?: string;
}

export default function PageHeader({ title, description, imagePath = "/img/gorsel03.jpeg" }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image src={imagePath} alt={title} fill className="object-cover" priority sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-950/60 to-primary-950" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-secondary-600 rounded-full" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-secondary-500">
                Yaman Kazan Sektörel Güç
              </span>
              <div className="w-8 h-[2px] bg-secondary-600 rounded-full" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1] md:leading-[0.9] mb-8 uppercase">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Bottom Curve/Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent" />
    </div>
  );
}


