"use client";

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/LanguageContext";

export default function HakkimizdaPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t("aboutPage.heritage")} 
        description={t("about.subtitle")}
        imagePath="/img/kurumsalarka.png"
      />
      
      {/* Our Heritage Section - Immersive Grid */}
      <section className="py-10 md:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary-800" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-800">{t("aboutPage.heritage")}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter leading-[0.95] mb-10 uppercase">
                {t("aboutPage.title")}
              </h2>
              
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium">
                <p>{t("aboutPage.p1")}</p>
                <p>{t("aboutPage.p2")}</p>
                <p>{t("aboutPage.p3")}</p>
                <p>{t("aboutPage.p4")}</p>
              </div>

              <div className="mt-12 flex items-center gap-10">
                <div>
                  <p className="text-5xl font-black text-primary-950 tracking-tighter">8<span className="text-primary-800">+</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">{t("stats.years")}</p>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div>
                  <p className="text-5xl font-black text-primary-950 tracking-tighter">63<span className="text-primary-800">+</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">{t("stats.projects")}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[2/3] relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-50 border border-slate-100">
                <Image 
                  src="/img/hakkimizdaarka01.png" 
                  alt="Yaman Kazan Endüstriyel Miras" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-primary-950 p-10 rounded-3xl shadow-2xl hidden md:block border border-white/10 backdrop-blur-xl">
                <div className="flex flex-col items-center">
                  <Award className="h-12 w-12 text-primary-500 mb-4" />
                  <p className="text-xs font-black text-white text-center uppercase tracking-widest leading-relaxed">
                    {t("cert.subtitle")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Dark Section */}
      <section className="py-20 md:py-40 bg-primary-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest">{t("aboutPage.vision")}</h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-primary-400 transition-colors duration-500">
                {t("aboutPage.visionDesc")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-secondary-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest">{t("aboutPage.mission")}</h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-secondary-400 transition-colors duration-500">
                {t("aboutPage.missionDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple CTA Finish */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight mb-6">
                  {t("aboutPage.ctaTitle")}
                </h2>
                <p className="text-gray-400 text-lg font-medium">
                  {t("aboutPage.ctaDesc")}
                </p>
              </div>
              <Link
                href="/iletisim"
                className="px-12 py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 group shadow-2xl shrink-0"
              >
                {t("ref.btn1")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            {/* Background decorative text */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none">
              <span className="text-[12rem] font-black text-white uppercase tracking-tighter">YAMAN</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
