"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-primary-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/gorsel01.jpeg" 
          alt="Yaman Kazan Fabrika" 
          fill 
          priority 
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-950/60 to-primary-950 z-10" />
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-32 md:pt-40 pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="w-8 md:w-12 h-[3px] bg-secondary-600 rounded-full" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-secondary-500">
                Endüstriyel Güç ve Tecrübe
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] md:leading-[0.9] tracking-tighter mb-10 uppercase">
              AĞIR SANAYİDE <br />
              <span className="text-secondary-500 drop-shadow-2xl">YAMAN</span> ÇÖZÜMLER
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            Rize merkezli Yaman Kazan, kazan üretimi ve endüstriyel tesis kurulumunda 
            çeyrek asırlık tecrübesiyle Türkiye'nin dev projelerine imza atıyor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/projeler"
              className="px-8 md:px-10 py-4 md:py-5 bg-white text-primary-950 font-black uppercase tracking-tighter rounded-2xl hover:bg-secondary-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl"
            >
              Projeleri İnceleyin
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/kurumsal/hakkimizda"
              className="px-8 md:px-10 py-4 md:py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-tighter rounded-2xl hover:bg-white/10 transition-all duration-500 text-center"
            >
              Kurumsal
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Keşfet</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-secondary-500 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}


