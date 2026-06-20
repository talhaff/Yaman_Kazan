"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/constants/services";
import { useTranslation } from "@/lib/LanguageContext";
import { 
  Wind, 
  Building2, 
  Settings, 
  Wrench,
  Construction,
  Gauge,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "1": Wind,
  "2": Building2,
  "3": Construction,
  "4": Settings,
  "5": Wrench,
  "6": Gauge,
};

export default function GigesServicesGrid() {
  const { t, language } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.number] || Settings;
            const serviceTitle = language === 'en' && service.titleEn ? service.titleEn : service.title;
            const serviceDesc = language === 'en' && service.descriptionEn ? service.descriptionEn : service.description;
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <Link href={`/faaliyet-alanlari/${service.slug}`} className="block h-full">
                  <div className="relative bg-white pt-16 pb-12 px-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(23,37,84,0.15)] transition-all duration-500 flex flex-col items-center text-center h-full group border border-slate-100/50">
                    
                    {/* Hexagon Icon Container */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div 
                        className="absolute inset-0 bg-primary-900 group-hover:bg-primary-800 transition-colors" 
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                      />
                      <div 
                        className="absolute inset-[3px] bg-white" 
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                      />
                      <Icon className="relative z-10 w-10 h-10 text-primary-900" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-primary-950 mb-6 uppercase tracking-tighter leading-tight group-hover:text-primary-800 transition-colors mt-4">
                      {serviceTitle}
                    </h3>
                    
                    <p className="text-slate-500 text-[13px] leading-relaxed mb-8 line-clamp-3 px-2 font-medium">
                      {serviceDesc}
                    </p>

                    <div className="mt-auto flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-950 group-hover:gap-4 transition-all pb-6">
                      {t("srv.viewDetails")} <ArrowRight className="w-4 h-4 text-primary-800" />
                    </div>

                    {/* Bottom Brand Accent - Angled Shape */}
                    <div 
                      className="absolute bottom-0 right-0 w-[40%] h-1.5 bg-primary-900 transition-all duration-700 group-hover:w-full" 
                    />
                    <div 
                      className="absolute bottom-1.5 right-0 w-[20%] h-[2px] bg-primary-200 transition-all duration-1000 group-hover:w-[60%]" 
                    />
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
