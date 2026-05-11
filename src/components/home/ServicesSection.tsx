"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

const fallbackServices = [
  {
    title: "Saha Montaj ve Ekipman Kurulumu",
    description: "Endüstriyel tesislerde ekipman montajı, yapısal entegrasyon ve saha kurulum süreçleri uzman ekiplerimizce yönetilmektedir.",
    image: "/img/sahamontajkurulumu.jpeg",
    category: "Saha Hizmetleri",
    slug: { current: "saha-montaj-ve-ekipman-kurulumu" }
  },
  {
    title: "Hidroelektrik Santralleri",
    description: "Santral sahasındaki operasyonlar, ağır ekipman montajı ve teknik altyapı kurulumunda tam kapsamlı çözümler.",
    image: "/img/hidroelektriksantral01.jpeg",
    category: "Enerji",
    slug: { current: "hidroelektrik-santralleri" }
  },
  {
    title: "Çöp Tutucu Izgara Revizyonu",
    description: "HES su giriş sistemlerinin demontaj, temizlik ve revizyon çalışmaları zorlu saha koşullarında gerçekleştirilir.",
    image: "/img/ÇöpTutucuIzgaraRevizyonu.jpeg",
    category: "Revizyon",
    slug: { current: "cop-tutucu-izgara-revizyonu" }
  },
  {
    title: "Kızdırıcı Kolektör Revizyonu",
    description: "100 t/h - 45 Bar yüksek basınçlı buhar kazanlarında kolektör yenileme ve hassas montaj işlemleri.",
    image: "/img/BarKızdırıcı.jpeg",
    category: "Kazan Teknolojileri",
    slug: { current: "kizdirici-kolektor-revizyonu" }
  },
  {
    title: "Multisiklon İmalatı",
    description: "Toz ayrıştırma sistemlerinde yüksek dayanım ve verimlilik esaslı multisiklon ekipman üretimi.",
    image: "/img/Multisiklonİmalatı.jpeg",
    category: "İmalat",
    slug: { current: "multisiklon-imalati" }
  },
  {
    title: "Membran Duvar İmalatı",
    description: "50 t/h buhar kazanları için yüksek hassasiyetli membran duvar sistemleri ve kaynak prosesleri.",
    image: "/img/membranduvar.jpeg",
    category: "İmalat",
    slug: { current: "membran-duvar-imalati" }
  },
  {
    title: "Hava Kanalı ve Toz Emme Sistemleri",
    description: "Endüstriyel tesisler için özel tasarım hava kanalları ve toz emme ünitesi imalatı ve montajı.",
    image: "/img/havakanal.jpeg",
    category: "İmalat",
    slug: { current: "hava-kanali-ve-toz-emme-sistemleri" }
  },
  {
    title: "Kanal Geçiş Elemanları",
    description: "Yüksek sıcaklık ve basınç dayanımlı kanal geçiş elemanları ve genleşme parçaları üretimi.",
    image: "/img/kanalgecis.jpeg",
    category: "İmalat",
    slug: { current: "kanal-gecis-elemanlari" }
  },
  {
    title: "Endüstriyel Tesis Kurulumu",
    description: "Anahtar teslim endüstriyel tesis kurulumu, makine montajı ve devreye alma hizmetleri.",
    image: "/img/kurulumlar.jpeg",
    category: "Kurulum",
    slug: { current: "endustriyel-tesis-kurulumu" }
  },
  {
    title: "Özel Kaynak ve Metal İşleri",
    description: "Sertifikalı kaynakçılarımızla yüksek basınçlı kaplar ve yapısal çelik kaynak işleri.",
    image: "/img/Kaynakİşleri.jpeg",
    category: "İmalat",
    slug: { current: "ozel-kaynak-ve-metal-isleri" }
  }
];

interface ServicesSectionProps {
  data?: any[];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function ServicesSection({ data, title, subtitle, limit }: ServicesSectionProps) {
  const sanityData = data || [];
  const mergedServices = [
    ...sanityData,
    ...fallbackServices.filter(fb => !sanityData.some(sd => sd.title === fb.title))
  ];
  
  const displayServices = limit ? mergedServices.slice(0, limit) : mergedServices;

  return (
    <section className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary-600 font-black tracking-[0.2em] uppercase text-[10px] md:text-sm block mb-6"
            >
              {subtitle || "Uzmanlık Alanlarımız"}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-950 tracking-tighter leading-[0.9] uppercase"
            >
              {title || <>TEKNOLOJİ VE MÜHENDİSLİK <br /> <span className="text-primary-900/20 italic">BİR ARADA.</span></>}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/faaliyet-alanlari" className="inline-flex items-center gap-3 font-black uppercase tracking-tighter text-primary-900 hover:text-secondary-600 transition-colors group">
              Tüm Hizmetleri Gör 
              <div className="w-10 h-10 rounded-full border border-primary-100 flex items-center justify-center group-hover:bg-secondary-600 group-hover:border-secondary-600 transition-all">
                <ArrowUpRight className="h-5 w-5 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
          {displayServices.map((service, index) => {
            const serviceImage = service.mainImage ? urlForImage(service.mainImage).url() : service.image;
            const serviceSlug = service.slug?.current ? `/faaliyet-alanlari/${service.slug.current}` : "#";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group h-full"
              >
                <Link href={serviceSlug} className="block relative h-full">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-primary-premium h-full min-h-[450px]">
                    <Image
                      src={serviceImage || "/img/gorsel01.jpeg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent opacity-40 md:opacity-70 md:group-hover:opacity-30 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-4 py-1 bg-secondary-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-4">
                        {service.category || "Hizmet"}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="w-12 h-1 bg-secondary-500 group-hover:w-full transition-all duration-700 rounded-full" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


