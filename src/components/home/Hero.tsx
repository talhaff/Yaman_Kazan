"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-secondary-600" />
              <span className="text-sm font-bold tracking-widest uppercase text-secondary-500">
                Endüstriyel Güç ve Tecrübe
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              AĞIR SANAYİDE <br />
              <span className="text-secondary-500">YAMAN</span> ÇÖZÜMLER
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Rize merkezli Yaman Kazan, kazan üretimi ve endüstriyel tesis kurulumunda 
            çeyrek asırlık tecrübesiyle Türkiye'nin dev projelerine imza atıyor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projeler"
              className="px-8 py-4 bg-white text-primary-950 font-bold rounded-md hover:bg-secondary-500 hover:text-white transition-all flex items-center gap-2 group"
            >
              Projelerimizi İnceleyin
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/kurumsal/hakkimizda"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-all"
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
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Keşfet</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-secondary-500" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-950 to-transparent z-10" />
    </section>
  );
}


