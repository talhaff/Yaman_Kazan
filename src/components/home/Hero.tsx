"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/hero-premium.png" 
          alt="Yaman Kazan Endüstriyel Tesis" 
          fill 
          priority 
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-32 pb-96 md:pb-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase">
              GÜVENLİ YAPILAR, <br />
              <span className="text-primary-400" style={{ color: '#609afa' }}>GÜÇLÜ</span> ÇÖZÜMLER
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
              Yaman Kazan; endüstriyel tesislerin her türlü mekanik montajı, ekipman montajı, boru imalatı ve montajı, çelik konstrüksiyon imalatı ve montajı, kumlama, boya, izolasyon, test devreye alma ve bakım işlerini yapmaktadır.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/iletisim"
                className="px-10 py-5 bg-primary-800 text-white font-black uppercase tracking-tighter rounded-2xl hover:bg-primary-900 transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl"
              >
                İletişim
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary-900 transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Bar - Giges Style */}
      <div className="absolute bottom-0 left-0 w-full z-30 pb-6 md:pb-10 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-white/20"
          >
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-primary-950 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Play className="h-6 w-6 md:h-8 md:w-8 text-white relative z-10 fill-white" />
              </div>
              <div>
                <span className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter leading-none">25<span className="text-secondary-600">+</span></span>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">Yıllık Deneyim</p>
              </div>
            </div>

            <div className="h-px w-full bg-gray-100 md:hidden" />
            <div className="h-12 w-px bg-gray-100 hidden lg:block" />

            <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-lg md:rounded-xl flex items-center justify-center text-primary-950 shrink-0">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">Adres</p>
                <p className="text-xs md:text-sm font-black text-primary-950 leading-tight">Yeşiloba Mah. No:134/Z27 <br className="hidden md:block" /> Seyhan / ADANA</p>
              </div>
            </div>

            <div className="h-px w-full bg-gray-100 md:hidden" />
            <div className="h-12 w-px bg-gray-100 hidden lg:block" />

            <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-lg md:rounded-xl flex items-center justify-center text-primary-950 shrink-0">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="truncate">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">E-Posta</p>
                <p className="text-xs md:text-sm font-black text-primary-950 leading-tight truncate">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



