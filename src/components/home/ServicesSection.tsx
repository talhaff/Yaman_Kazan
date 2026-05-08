"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Saha Montaj ve Ekipman Kurulumu",
    description: "Endüstriyel tesislerde ekipman montajı, yapısal entegrasyon ve saha kurulum süreçleri uzman ekiplerimizce yönetilmektedir.",
    image: "/img/sahamontajkurulumu.jpeg",
    category: "Saha Hizmetleri"
  },
  {
    title: "Hidroelektrik Santralleri",
    description: "Santral sahasındaki operasyonlar, ağır ekipman montajı ve teknik altyapı kurulumunda tam kapsamlı çözümler.",
    image: "/img/hidroelektriksantral01.jpeg",
    category: "Enerji"
  },
  {
    title: "Çöp Tutucu Izgara Revizyonu",
    description: "HES su giriş sistemlerinin demontaj, temizlik ve revizyon çalışmaları zorlu saha koşullarında gerçekleştirilir.",
    image: "/img/ÇöpTutucuIzgaraRevizyonu.jpeg",
    category: "Revizyon"
  },
  {
    title: "Kızdırıcı Kolektör Revizyonu",
    description: "100 t/h - 45 Bar yüksek basınçlı buhar kazanlarında kolektör yenileme ve hassas montaj işlemleri.",
    image: "/img/BarKızdırıcı.jpeg",
    category: "Kazan Teknolojileri"
  },
  {
    title: "Multisiklon İmalatı",
    description: "Toz ayrıştırma sistemlerinde yüksek dayanım ve verimlilik esaslı multisiklon ekipman üretimi.",
    image: "/img/Multisiklonİmalatı.jpeg",
    category: "İmalat"
  },
  {
    title: "Membran Duvar İmalatı",
    description: "50 t/h buhar kazanları için yüksek hassasiyetli membran duvar sistemleri ve kaynak prosesleri.",
    image: "/img/membranduvar.jpeg",
    category: "İmalat"
  },
  {
    title: "Boru Aynası Kaynak İşleri",
    description: "Isı transfer yüzeylerinde standartlara uygun, kontrollü boru bağlantı kaynakları.",
    image: "/img/Kaynakİşleri.jpeg",
    category: "Teknik İşçilik"
  },
  {
    title: "Kanal Geçişleri ve Montajı",
    description: "Endüstriyel tesis sahasında sızdırmazlık odaklı kanal geçişleri ve bağlantı elemanları montajı.",
    image: "/img/kanalgecis.jpeg",
    category: "Saha Hizmetleri"
  },
  {
    title: "Ağır Ekipman Kurulumu",
    description: "Mühendislik disiplinine uygun, ağır ekipman montajından saha entegrasyonuna tam hizmet.",
    image: "/img/kurulumlar.jpeg",
    category: "Saha Hizmetleri"
  },
  {
    title: "Baca ve Hava Kanalları",
    description: "Endüstriyel baca ve hava kanallarının imalatı, fan bağlantıları ve sistem entegrasyonu.",
    image: "/img/havakanal.jpeg",
    category: "İmalat"
  },
  {
    title: "Shell Boiler & Reküperatör",
    description: "Yüksek tonajlı sistemlerin sahada güvenli kaldırma, yerleştirme ve kontrolü montaj süreçleri.",
    image: "/img/islemler.jpeg",
    category: "Enerji"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary-600 font-bold tracking-widest uppercase text-sm block mb-4"
            >
              Uzmanlık Alanlarımız
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-primary-950 tracking-tighter leading-none"
            >
              TEKNOLOJİ VE MÜHENDİSLİK <br /> <span className="text-primary-900/40 italic">BİR ARADA.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/faaliyet-alanlari" className="inline-flex items-center gap-2 font-bold text-primary-900 hover:text-secondary-500 transition-colors group">
              Tüm Hizmetleri Gör 
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-2xl shadow-primary-900/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-primary-950 mb-3 tracking-tight group-hover:text-secondary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-gray-200 group-hover:w-full group-hover:bg-secondary-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
