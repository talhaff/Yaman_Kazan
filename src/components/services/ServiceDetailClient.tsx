"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Target,
  Award
} from "lucide-react";
import { Service } from "@/constants/services";

export default function ServiceDetailClient({ service }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-white min-h-screen" ref={containerRef}>
      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center overflow-hidden bg-primary-950 pb-20">
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/40 to-white" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <Link 
              href="/faaliyet-alanlari"
              className="relative z-50 inline-flex items-center gap-3 md:gap-4 text-white hover:text-primary-400 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[11px] transition-all mb-12 md:mb-16 group cursor-pointer"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-primary-400 group-hover:border-primary-400 group-hover:text-primary-950 transition-all duration-300">
                <ArrowLeft className="h-3 w-3 md:h-5 md:w-5 transition-transform group-hover:-translate-x-1" />
              </div>
              <span className="drop-shadow-md">TÜM FAALİYET ALANLARI</span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <span className="text-white font-black text-5xl md:text-9xl opacity-20 leading-none select-none">
                0{service.number}
              </span>
              <div className="h-0.5 w-10 md:w-20 bg-primary-400 shadow-[0_0_15px_rgba(96,154,250,0.5)]" />
              <span className="text-white font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[7px] md:text-[10px] drop-shadow-md">Uzmanlık Alanı</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12 max-w-4xl drop-shadow-2xl">
              {service.title}
            </h1>
          </motion.div>
        </div>

        {/* Decorative Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4"
        >
          <span className="text-white/30 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Keşfedin</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-primary-400 to-transparent" />
        </motion.div>
      </section>

      {/* Tamamlanan Projeler - Right After Hero */}
      {service.detailSections && service.detailSections.length > 0 && (
        <section className="relative z-20 -mt-8 md:-mt-16 pb-12 md:pb-20">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary-800/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-800" />
                <span className="text-primary-950 font-black uppercase tracking-[0.3em] text-[9px] md:text-[11px]">Tamamlanan Projeler</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary-800" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-primary-800/30 to-transparent" />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
              {service.detailSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg shadow-primary-950/[0.03] hover:shadow-xl hover:shadow-primary-950/[0.06] transition-all duration-500 hover:-translate-y-0.5"
                >
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-primary-950 font-black text-[10px]">0{idx + 1}</span>
                        </div>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>
                      <h3 className="text-white text-sm md:text-[15px] font-bold leading-snug drop-shadow-lg">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 md:p-5">
                    <div className="space-y-2">
                      {section.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-slate-500 text-[11px] md:text-xs leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Intro Info Section */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-6 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-primary-950/10 border border-slate-50"
            >
              <p className="text-lg md:text-3xl lg:text-4xl text-primary-950 leading-[1.15] font-black tracking-tighter mb-8 md:mb-12">
                {service.description}
              </p>
              
              <div className="prose prose-sm md:prose-lg max-w-none text-slate-500 font-medium leading-relaxed mb-10 md:mb-12">
                <p>
                  Yaman Kazan ve Makine olarak, endüstriyel tesislere yönelik güvenilir ve sürdürülebilir çözümler sunmaktayız. {service.title} süreçlerimizde, sahadaki tecrübemiz ve uygulama gücümüz ile projenize değer katıyoruz.
                </p>
                <p>
                  Her bir adımda güvenlik, hassasiyet ve kaliteyi garanti eden uzman kadromuz, sahadaki en zorlu koşullarda bile kusursuz operasyonlar yürütmektedir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6 p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-3xl group hover:bg-primary-950 transition-all duration-500 border border-slate-100 hover:border-primary-900">
                  <ShieldCheck className="h-10 w-10 text-primary-800 group-hover:text-primary-400 transition-colors" />
                  <div>
                    <h4 className="text-xl font-black text-primary-950 group-hover:text-white uppercase tracking-tighter mb-2">Sertifikalı Güvenlik</h4>
                    <p className="text-sm text-slate-500 group-hover:text-white/60 transition-colors leading-relaxed">Tüm süreçlerimiz ISO ve ASME standartlarında belgelendirilmiştir.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-3xl group hover:bg-primary-950 transition-all duration-500 border border-slate-100 hover:border-primary-900">
                  <Zap className="h-10 w-10 text-primary-800 group-hover:text-primary-400 transition-colors" />
                  <div>
                    <h4 className="text-xl font-black text-primary-950 group-hover:text-white uppercase tracking-tighter mb-2">Teknolojik Altyapı</h4>
                    <p className="text-sm text-slate-500 group-hover:text-white/60 transition-colors leading-relaxed">En son teknoloji ekipmanlar ve yazılımlar ile hata payını sıfıra indiriyoruz.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 pb-12">
              <div className="bg-primary-900 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden group shadow-2xl shadow-primary-900/20">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Proje Başlatın</h3>
                <p className="text-white/70 mb-10 text-sm md:text-base leading-relaxed font-medium">
                  {service.title} ve diğer hizmetlerimiz hakkında detaylı bilgi ve özel fiyat teklifi için mühendislik ekibimizle iletişime geçin.
                </p>
                <Link
                  href="/iletisim"
                  className="flex items-center justify-between px-8 py-5 md:py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-2xl hover:scale-[1.02] transition-all shadow-xl group"
                >
                  TEKLİF ALIN
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="p-8 md:p-10 border border-slate-100 rounded-[2.5rem] space-y-6 bg-white shadow-sm">
                <h4 className="font-black text-primary-950 uppercase tracking-tighter text-lg mb-6 border-b border-slate-50 pb-4">Neden Yaman Kazan?</h4>
                <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                    <Target className="h-4 w-4 text-primary-800" />
                  </div>
                  <span>Hedef Odaklı Çözümler</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                    <Award className="h-4 w-4 text-primary-800" />
                  </div>
                  <span>Üstün İşçilik Garantisi</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Premium Standards Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/industrial_standards.png"
            alt="Endüstriyel Standartlar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-transparent to-primary-950/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-primary-400 font-bold uppercase tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-5">Mühendislik Gücü</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Hizmet <span className="text-primary-400">Standartlarımız</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary-400/50" />
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary-400/50" />
            </div>
          </motion.div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="h-7 w-7" />,
                number: "01",
                title: "Analiz ve Tasarım",
                desc: "Saha keşfi ve teknik analizler ile ihtiyaca en uygun sistem tasarımı gerçekleştiriyoruz."
              },
              {
                icon: <ShieldCheck className="h-7 w-7" />,
                number: "02",
                title: "Kalite Kontrol",
                desc: "ISO ve ASME standartlarında belgelendirilmiş kalite güvence süreçleri uyguluyoruz."
              },
              {
                icon: <Zap className="h-7 w-7" />,
                number: "03",
                title: "Kurulum ve Montaj",
                desc: "Sertifikalı ekipler ve modern ekipmanlar ile hatasız saha operasyonları yürütüyoruz."
              },
              {
                icon: <Award className="h-7 w-7" />,
                number: "04",
                title: "Devreye Alma",
                desc: "Tüm sistemlerin sorunsuz çalışması için kapsamlı test ve devreye alma süreçleri."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/[0.12] hover:border-primary-400/30 transition-all duration-500"
              >
                {/* Number Badge */}
                <span className="absolute top-5 right-5 text-white/[0.07] font-black text-4xl leading-none select-none group-hover:text-primary-400/15 transition-colors">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-400/10 border border-primary-400/20 flex items-center justify-center mb-5 group-hover:bg-primary-400/20 group-hover:border-primary-400/40 transition-all duration-500">
                  <div className="text-primary-400">{item.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs md:text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-400/0 to-transparent group-hover:via-primary-400/30 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-6xl font-black text-primary-950 tracking-tighter uppercase leading-none mb-8 md:mb-12">
              GÜCÜMÜZE <br /> <span className="text-primary-800">ORTAK OLUN.</span>
            </h2>
            <Link
              href="/faaliyet-alanlari"
              className="group flex items-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-xl md:rounded-2xl hover:bg-primary-950 transition-all shadow-2xl w-full sm:w-auto justify-center"
            >
              DİĞER HİZMETLERİMİZİ GÖRÜN
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
