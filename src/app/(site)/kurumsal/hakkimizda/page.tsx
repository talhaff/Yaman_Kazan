"use client";

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, Users, Zap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValues = [
  {
    title: "Uluslararası Standart",
    desc: "Üretimimizin her aşamasında global kalite ve güvenlik normlarına tam uyum sağlıyoruz.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Sıfır Kaza Vizyonu",
    desc: "İş sağlığı ve güvenliğini bir zorunluluk değil, sarsılmaz bir kültür olarak benimsiyoruz.",
    icon: ShieldCheck,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Mühendislik Dehası",
    desc: "En karmaşık endüstriyel problemleri, ileri teknoloji ve uzman kadromuzla çözüyoruz.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Zamanında Teslim",
    desc: "Her projeyi söz verdiğimiz takvime sadık kalarak, operasyonel sürekliliği garanti ediyoruz.",
    icon: Target,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Uzman Kadro",
    desc: "Sektörün en deneyimli mühendis ve teknisyenleriyle projelerinize değer katıyoruz.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Sürdürülebilirlik",
    desc: "Gelecek nesillere daha temiz bir dünya bırakmak için çevre dostu teknolojiler kullanıyoruz.",
    icon: Award,
    color: "bg-cyan-500/10 text-cyan-500"
  }
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader 
        title="Kurumsal Kimliğimiz" 
        description="Mühendislik mirasını teknolojiyle harmanlayarak endüstrinin geleceğine yön veriyoruz."
        imagePath="/img/kurumsal_vizyon.png"
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
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-800">Mirasımız</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter leading-[0.95] mb-10 uppercase">
                YARIM ASIRLIK <br /> <span className="text-primary-800">TECRÜBE</span> İLE <br /> GELECEĞİ İNŞA EDİYORUZ.
              </h2>
              
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Yaman Kazan, endüstriyel tesislerin her türlü mekanik montajı, ağır ekipman kurulumu ve basınçlı kaplar alanında faaliyet gösteren köklü bir mühendislik markasıdır.
                </p>
                <p>
                  Adana&apos;da temelleri atılan yolculuğumuz, bugün ulusal ve uluslararası arenada stratejik öneme sahip dev projelere imza atan bir mühendislik merkezine dönüşmüştür.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-10">
                <div>
                  <p className="text-5xl font-black text-primary-950 tracking-tighter">25<span className="text-primary-800">+</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Yıllık Deneyim</p>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div>
                  <p className="text-5xl font-black text-primary-950 tracking-tighter">150<span className="text-primary-800">+</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Büyük Proje</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <Image 
                  src="/img/kurumsal_miras.png" 
                  alt="Yaman Kazan Endüstriyel Miras" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-primary-950 p-10 rounded-3xl shadow-2xl hidden md:block border border-white/10 backdrop-blur-xl">
                <div className="flex flex-col items-center">
                  <Award className="h-12 w-12 text-primary-500 mb-4" />
                  <p className="text-xs font-black text-white text-center uppercase tracking-widest leading-relaxed">
                    Uluslararası <br /> Kalite Standartı
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Dark Section */}
      <section className="py-10 md:py-40 bg-primary-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary-400 uppercase tracking-widest mb-8">Vizyonumuz</h3>
              <p className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Global endüstriyel dönüşümde, mühendislik çözümlerimizle dünyanın en çok güvenilen ve tercih edilen teknoloji ortağı olmak.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-black text-primary-400 uppercase tracking-widest mb-8">Misyonumuz</h3>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
                Yenilikçi, sürdürülebilir ve yüksek kaliteli mühendislik hizmetlerini, insan sağlığını ve çevre güvenliğini her şeyin üzerinde tutarak müşterilerimize sunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Grid */}
      <section className="py-10 md:py-40 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-8 md:mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary-800" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-800">Değerlerimiz</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter uppercase leading-[0.95]">
                BİZİ BİZ YAPAN <br /> <span className="text-primary-800">TEMEL</span> İLKELER.
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-sm font-medium leading-relaxed">
              Her projenin temelinde yatan ve bizi sektörde ayrıştıran sarsılmaz değerlerimiz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-black text-primary-950 uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
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
                  SİZİN İÇİN <span className="text-primary-500">DEĞER</span> <br /> ÜRETMEYE HAZIRIZ.
                </h2>
                <p className="text-gray-400 text-lg font-medium">
                  Projelerinizi dünya standartlarında hayata geçirmek için profesyonel ekibimizle tanışın.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="px-12 py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 group shadow-2xl shrink-0"
              >
                İLETİŞİME GEÇİN
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
