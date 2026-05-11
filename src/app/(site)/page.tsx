"use client";

import Hero from "@/components/home/Hero";
import StackedServices from "@/components/home/StackedServices";
import { ShieldCheck, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Giges Style About Section - Optimized */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Collage Side */}
            <div className="relative pl-10 pb-10">
              {/* Decorative Frame Behind */}
              <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border-2 border-primary-800/10 rounded-3xl -z-10" />
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-10">
                <Image
                  src="/img/about-main.png"
                  alt="Yaman Kazan Mühendislik"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay AI Detail Image */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-[6px] border-white"
              >
                <Image
                  src="/img/about-detail.png"
                  alt="Mühendislik Detayı"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Giges Style Badge */}
              <div className="absolute top-6 right-6 z-30">
                <div className="relative bg-white shadow-xl px-5 py-2 rounded-lg flex items-center gap-2">
                  <span className="text-primary-800 text-xs">★</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary-950">Endüstriyel Alan Öncü Şirket</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="relative">
              {/* Giges Style Side Dot */}
              <div className="absolute -right-4 top-4 hidden md:flex items-center justify-center w-6 h-6 rounded-full border border-slate-200">
                <div className="w-1 h-1 rounded-full bg-primary-800" />
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter uppercase leading-[0.9] mb-6">
                HOŞGELDİNİZ
              </h2>
              
              <div 
                className="inline-block px-8 py-3 bg-primary-950 text-white font-black uppercase tracking-widest text-[10px] mb-8 shadow-lg"
                style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
              >
                Hakkımızda
              </div>
              
              <div className="space-y-5 text-slate-500 font-medium text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Yaman Kazan Endüstri Tesisleri İmalat ve Bakım Hizmetleri, yer aldığı tüm projelerde; uluslararası standartların gerekliliklerini, müşterinin beklentilerini ve maksimum hizmet kalitesini bir arada sunmaktadır.
                </p>
                <p className="text-sm opacity-80">
                  Çeyrek asırlık tecrübemizle, endüstriyel tesislerin kalbinde sürdürülebilir mühendislik çözümleri üretiyoruz.
                </p>
              </div>

              <Link
                href="/kurumsal/hakkimizda"
                className="inline-flex items-center gap-4 text-primary-950 font-black uppercase tracking-widest text-[10px] group"
              >
                DAHA FAZLA BİLGİ
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-950 group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Stats Grid - Premium Redesign */}
          <div className="mt-12 md:mt-16 relative overflow-hidden">
            {/* Subtle background for the whole section */}
            <div className="absolute inset-0 bg-slate-50/50 rounded-[2rem] md:rounded-[3rem] -z-10" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 relative z-10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center py-10 md:py-16 border-r border-b lg:border-b-0 border-slate-200/60 group transition-colors hover:bg-white/40">
                <div className="relative mb-3 md:mb-4">
                  <span className="text-4xl md:text-7xl font-black text-primary-950 tracking-tighter leading-none block transform group-hover:scale-105 transition-transform duration-500">
                    10<span className="text-primary-600">+</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-600/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-primary-600 transition-all duration-700" />
                  </div>
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary-950/30 group-hover:text-primary-950 transition-colors">Ülkeler</span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center py-10 md:py-16 border-b lg:border-b-0 lg:border-r border-slate-200/60 group transition-colors hover:bg-white/40">
                <div className="relative mb-3 md:mb-4">
                  <span className="text-4xl md:text-7xl font-black text-primary-950 tracking-tighter leading-none block transform group-hover:scale-105 transition-transform duration-500">
                    150<span className="text-primary-600">+</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-600/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-primary-600 transition-all duration-700" />
                  </div>
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary-950/30 group-hover:text-primary-950 transition-colors">Projeler</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center py-10 md:py-16 border-r border-slate-200/60 group transition-colors hover:bg-white/40">
                <div className="relative mb-3 md:mb-4">
                  <span className="text-4xl md:text-7xl font-black text-primary-950 tracking-tighter leading-none block transform group-hover:scale-105 transition-transform duration-500">
                    25<span className="text-primary-600">+</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-600/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-primary-600 transition-all duration-700" />
                  </div>
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary-950/30 group-hover:text-primary-950 transition-colors">Yıllık Deneyim</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center py-10 md:py-16 group transition-colors hover:bg-white/40">
                <div className="relative mb-3 md:mb-4">
                  <span className="text-4xl md:text-7xl font-black text-primary-950 tracking-tighter leading-none block transform group-hover:scale-105 transition-transform duration-500">
                    5K<span className="text-primary-600">+</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-600/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-primary-600 transition-all duration-700" />
                  </div>
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary-950/30 group-hover:text-primary-950 transition-colors">Mutlu Müşteri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - The Stacked Cards */}
      <StackedServices />

      {/* Unified Industrial Power Section - Features & CTA Merged */}
      <section className="relative bg-primary-950 pt-10 pb-12 md:pt-32 md:pb-32 overflow-hidden">
        {/* Immersive Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/hero-premium.png" 
            alt="Yaman Kazan Endüstriyel Çözümler" 
            fill 
            className="object-cover opacity-10 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/5 via-primary-950 to-primary-950 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            
            {/* Left Side: Strategic Advantages */}
            <div className="space-y-12">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary-800/30 border border-primary-400/20 text-primary-400 text-[9px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
                  Neden Biz?
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1] mb-8">
                  TEKNOLOJİ VE <br /> <span className="text-primary-500">GÜVENİN</span> MERKEZİ.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
                  Yaman Kazan, her projede mühendislik hassasiyeti ve sarsılmaz bir iş güvenliği kültürü ile hareket eder.
                </p>
              </div>

              <div className="space-y-8">
                {/* Feature 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-primary-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-2">Yüksek Güvenlik</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-medium">Uluslararası İSG standartlarını tüm operasyonlarımızın merkezine koyuyoruz.</p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                    <Target className="h-6 w-6 text-primary-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-2">Hassas Mühendislik</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-medium">En zorlu toleranslarda bile kusursuz sonuçlar için uzman kadro ve ileri teknoloji.</p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                    <Award className="h-6 w-6 text-primary-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-2">Kalite Belgesi</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-medium">ISO ve ASME standartlarında sertifikalandırılmış sürdürülebilir kalite garantisi.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Direct Action CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-8 uppercase">
                    YENİ BİR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white">PROJE BAŞLATIN.</span>
                  </h3>
                  <p className="text-gray-400 mb-12 leading-relaxed font-medium">
                    Endüstriyel tesisleriniz için profesyonel mühendislik çözümlerine mi ihtiyacınız var? Hemen iletişime geçin.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/iletisim"
                      className="w-full py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary-50 transition-all flex items-center justify-center gap-4 group shadow-2xl"
                    >
                      BİZE ULAŞIN
                      <div className="w-6 h-6 rounded-full bg-primary-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </Link>
                    <Link
                      href="/kurumsal/hakkimizda"
                      className="w-full py-6 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center"
                    >
                      TEKNİK KAPASİTEYİ İNCELEYİN
                    </Link>
                  </div>
                </div>

                {/* Decorative background light */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-800/20 blur-[80px] rounded-full" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
