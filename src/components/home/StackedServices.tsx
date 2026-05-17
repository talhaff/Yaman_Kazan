"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/constants/services";

export default function StackedServices() {
  return (
    <section className="bg-slate-50 pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center gap-6 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-primary-950 tracking-tighter uppercase leading-none">
            Hizmetler
          </h2>
          <div className="flex-1 h-px bg-slate-200 hidden md:block" />
          <div className="w-6 h-6 rounded-full border-4 border-primary-800 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-800" />
          </div>
        </div>

        <div className="relative space-y-6 md:space-y-8">
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
  
  // Balanced sticky offset for horizontal focus
  const stickyOffset = 80 + (index * 32); 

  return (
    <div 
      ref={containerRef}
      className="sticky mb-2 md:mb-16 w-full"
      style={{ top: `${stickyOffset}px` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] shadow-2xl ${service.color} min-h-[320px] md:min-h-[500px] flex items-center p-8 md:p-20`}
        style={
          service.color.includes('bg-primary-900') ? { backgroundColor: '#1e3a8a' } : 
          service.color.includes('bg-primary-950') ? { backgroundColor: '#172554' } : 
          service.color.includes('bg-slate-900') ? { backgroundColor: '#0f172a' } : 
          service.color.includes('bg-slate-800') ? { backgroundColor: '#1e293b' } : 
          service.color.includes('bg-secondary-600') ? { backgroundColor: '#026dc7' } : {}
        }
      >
        {/* Background Number - Spread across the width */}
        <div className="absolute -left-4 md:left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.12] md:opacity-[0.18]">
          <span className="text-[12rem] md:text-[22rem] font-black leading-none tracking-tighter text-white select-none">
            {service.number}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-center w-full relative z-10">
          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start md:pl-12">
            <div className="mb-4 md:mb-6 flex items-center gap-4">
              <div className="h-px w-10 md:w-16 bg-current opacity-40" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Hizmet Alanı</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[0.95] text-white">
              {service.title}
            </h3>
            
            <p className="text-sm md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl leading-relaxed font-medium">
              {service.description}
            </p>
            
            <Link 
              href={`/faaliyet-alanlari/${service.slug}`}
              className="inline-flex items-center gap-4 md:gap-6 px-10 md:px-14 py-4 md:py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[8px] md:text-[10px] rounded-2xl hover:scale-105 transition-all group shadow-2xl"
            >
              DAHA FAZLA
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary-950/20 flex items-center justify-center group-hover:bg-primary-950 group-hover:text-white transition-all">
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </Link>
          </div>

          {/* Image Side - Visible only on desktop */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/10] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white/10 group"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-700 brightness-100 md:brightness-[0.8] md:group-hover:brightness-110"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
