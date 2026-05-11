"use client";

import Hero from "@/components/home/Hero";
import StackedServices from "@/components/home/StackedServices";
import { ShieldCheck, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Welcome / About Section - Refined & Elegant */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-primary-800" />
                <span className="text-primary-950 font-bold tracking-[0.3em] uppercase text-[9px]">
                  Kurumsal Kimlik
                </span>
                <div className="h-px w-8 bg-primary-800" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter leading-tight mb-8 uppercase">
                GÜVENLE İNŞA EDİLEN <br /> <span className="text-primary-800">BİR GELECEK.</span>
              </h2>
              
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-12 max-w-2xl font-medium">
                Yaman Kazan olarak, çeyrek asırlık tecrübemizle endüstriyel tesislerin kalbinde yer alıyoruz. Mühendislik tutkumuz ve kalite odaklı yaklaşımımızla sınırları zorluyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-24 border-t border-gray-100 pt-12 w-full max-w-2xl">
                <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-6xl font-black text-primary-950 mb-1 tracking-tighter">150<span className="text-primary-800">+</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Proje</span>
                </div>
                <div className="w-px h-12 bg-gray-100 hidden sm:block" />
                <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-6xl font-black text-primary-950 mb-1 tracking-tighter">50<span className="text-primary-800">+</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Uzman</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - The Stacked Cards */}
      <StackedServices />

      {/* Trust & Quality Section - Minimalist Engineering */}
      <section className="py-32 bg-primary-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-[2rem] overflow-hidden">
            <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/5 transition-colors group text-center md:text-left">
              <ShieldCheck className="h-12 w-12 text-primary-400 mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Yüksek Güvenlik</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Sıfır kaza vizyonuyla, uluslararası İSG standartlarını tüm operasyonlarımızın merkezine koyuyoruz.</p>
            </div>
            <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/5 transition-colors group text-center md:text-left">
              <Target className="h-12 w-12 text-primary-400 mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Hassas Mühendislik</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">En zorlu toleranslarda bile kusursuz sonuçlar için ileri teknoloji mühendislik yazılımları ve uzman kadro.</p>
            </div>
            <div className="p-12 md:p-16 hover:bg-white/5 transition-colors group text-center md:text-left">
              <Award className="h-12 w-12 text-primary-400 mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Kalite Belgesi</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">ISO ve ASME standartlarında sertifikalandırılmış süreçlerimizle sürdürülebilir kaliteyi garanti ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Refined & High Impact */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter leading-tight mb-12 uppercase">
              ENDÜSTRİYEL <br /> <span className="text-primary-800">GÜCÜNÜZÜ ARTIRIN.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/iletisim"
                className="px-12 py-5 bg-primary-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-primary-900 transition-all shadow-xl flex items-center gap-4 group"
              >
                PROJE BAŞLATIN
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
