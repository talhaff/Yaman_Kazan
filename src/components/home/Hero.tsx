"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import { useTranslation } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/faaliyetarka01.png" 
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase" dangerouslySetInnerHTML={{ __html: t("hero.title").replace('GÜVENİLİR ÇÖZÜM ORTAĞI', '<br /> <span class="text-primary-400" style="color: #609afa">GÜVENİLİR ÇÖZÜM ORTAĞI</span>').replace('TRUSTED SOLUTION PARTNER', '<br /> <span class="text-primary-400" style="color: #609afa">TRUSTED SOLUTION PARTNER</span>').replace('RELIABLE SOLUTION PARTNER', '<br /> <span class="text-primary-400" style="color: #609afa">RELIABLE SOLUTION PARTNER</span>') }}>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/iletisim"
                className="px-10 py-5 bg-primary-800 text-white font-black uppercase tracking-tighter rounded-2xl hover:bg-primary-900 transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl"
              >
                {t("nav.contact")}
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary-900 transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Bar - White Frosted Glass Redesign */}
      <div className="absolute bottom-0 left-0 w-full z-30 pb-6 md:pb-12 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-white/10 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 border border-white/20 relative overflow-hidden"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-400/10 blur-[100px] -z-0" />
            
            <div className="flex items-center gap-6 md:gap-8 w-full lg:w-auto group relative z-10">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-primary-500/10 border border-white/20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <Play className="h-6 w-6 md:h-10 md:w-10 text-primary-400 group-hover:text-white relative z-10 fill-current" />
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none block">8<span className="text-primary-400">+</span></span>
                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-white/50 mt-2">{t("stats.years")}</p>
              </div>
            </div>

            <div className="hidden lg:block h-16 w-px bg-white/20" />

            <div className="flex items-center gap-5 md:gap-7 w-full lg:w-auto relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/20 rounded-2xl md:rounded-3xl flex items-center justify-center text-primary-300 shrink-0">
                <MapPin className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <div>
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-1.5">{t("hero.hqAddress")}</p>
                <p className="text-xs md:text-sm lg:text-base font-black text-white leading-tight uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: CONTACT_INFO.address.replace('Seyhan / ADANA', '<br class="hidden md:block" /> Seyhan / ADANA') }} />
              </div>
            </div>

            <div className="hidden lg:block h-16 w-px bg-white/20" />

            <div className="flex items-center gap-5 md:gap-7 w-full lg:w-auto relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/20 rounded-2xl md:rounded-3xl flex items-center justify-center text-primary-300 shrink-0">
                <Mail className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <div className="truncate">
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-1.5">{t("footer.contactInfo")}</p>
                <p className="text-xs md:text-sm lg:text-base font-black text-white leading-tight truncate lowercase tracking-tight">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



