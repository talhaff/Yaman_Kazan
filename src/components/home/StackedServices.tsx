"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "1",
    title: "Baca Kurulumu",
    description: "Endüstriyel tesisler ve enerji santralleri için yüksek dayanımlı baca sistemleri tasarımı, imalatı ve profesyonel kurulum hizmetleri sunuyoruz.",
    image: "/img/kurulumlar.jpeg",
    slug: "baca-kurulumu",
    color: "bg-slate-900 text-white"
  },
  {
    number: "2",
    title: "Endüstriyel Tesis Taahhüt Hizmetleri",
    description: "Anahtar teslim endüstriyel tesis projelerinde mühendislik, tedarik ve yapım süreçlerini kapsayan kapsamlı taahhüt çözümleri sağlıyoruz.",
    image: "/img/sahamontajkurulumu.jpeg",
    slug: "endustriyel-tesis-taahhut-hizmetleri",
    color: "bg-primary-950 text-white"
  },
  {
    number: "3",
    title: "Mekanik Montaj Hizmetleri",
    description: "Karmaşık makine parkurları, borulama sistemleri ve çelik konstrüksiyon yapılar için hassas mekanik montaj ve devreye alma hizmetleri.",
    image: "/img/Kaynakİşleri.jpeg",
    slug: "mekanik-montaj-hizmetleri",
    color: "bg-primary-900 text-white" // Lacivert
  },
  {
    number: "4",
    title: "Tesis Kurulumu",
    description: "Yeni üretim hatları ve endüstriyel tesislerin planlanmasından fiziksel kurulumuna kadar tüm aşamalarda uzman kadromuzla yanınızdayız.",
    image: "/img/gorsel01.jpeg",
    slug: "tesis-kurulumu",
    color: "bg-slate-900 text-white"
  },
  {
    number: "5",
    title: "Endüstriyel Proje Yönetimi",
    description: "Projelerinizin zamanında, bütçesinde ve hedeflenen kalitede tamamlanması için profesyonel yönetim ve denetim süreçleri yürütüyoruz.",
    image: "/img/gorsel02.jpeg",
    slug: "endustriyel-proje-yonetimi",
    color: "bg-primary-950 text-white"
  },
  {
    number: "6",
    title: "Bakım Hizmetleri",
    description: "Endüstriyel tesislerin sürdürülebilirliği için periyodik bakım, onarım ve revizyon hizmetleri ile işletme verimliliğinizi koruyoruz.",
    image: "/img/islemler.jpeg",
    slug: "bakim-hizmetleri",
    color: "bg-primary-900 text-white"
  }
];

export default function StackedServices() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-6 mb-12 md:mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-primary-950 tracking-tighter uppercase leading-none">
            Hizmetler
          </h2>
          <div className="flex-1 h-px bg-gray-200 hidden md:block" />
          <div className="h-3 w-3 rounded-full bg-primary-800" />
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, total }: { service: typeof services[0], index: number, total: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sticky with offset for stacking effect
  const stickyOffset = 80 + (index * 20); // Each card stays slightly below the previous one

  return (
    <div 
      ref={containerRef}
      className="sticky top-24 mb-10 last:mb-0 w-full"
      style={{ top: `${stickyOffset}px` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl ${service.color} min-h-[400px] md:min-h-[500px] flex items-center p-8 md:p-20`}
        style={
          service.color.includes('bg-primary-900') ? { backgroundColor: '#1e3a8a' } : 
          service.color.includes('bg-primary-950') ? { backgroundColor: '#172554' } : 
          service.color.includes('bg-slate-900') ? { backgroundColor: '#0f172a' } : {}
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Number */}
          <div className="lg:col-span-2">
            <span className="text-8xl md:text-[12rem] font-black opacity-20 leading-none tracking-tighter select-none">
              {service.number.split('').map((char, i) => (
                <span key={i} className="inline-block">{char}</span>
              ))}
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-10 flex flex-col items-start w-full">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-8 md:w-12 bg-current opacity-30" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-60">Hizmet Alanı</span>
            </div>
            <h3 className="text-2xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-8 uppercase tracking-tighter leading-tight md:leading-[0.85]">
              {service.title}
            </h3>
            <p className="text-sm md:text-xl lg:text-2xl opacity-70 mb-8 md:mb-12 max-w-4xl leading-relaxed font-medium">
              {service.description}
            </p>
            <Link 
              href={`/faaliyet-alanlari/${service.slug}`}
              className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-xl md:rounded-2xl hover:scale-105 transition-all group shadow-xl"
            >
              KEŞFEDİN
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary-950 flex items-center justify-center group-hover:bg-primary-950 group-hover:border-primary-950 group-hover:text-white transition-all">
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
