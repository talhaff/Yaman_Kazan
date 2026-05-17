"use client";

import { motion } from "framer-motion";
import { 
  Leaf, 
  Factory, 
  Zap, 
  Flame, 
  Apple, 
  Layers, 
  Cpu, 
  Wind, 
  Hammer, 
  Building2 
} from "lucide-react";

const sectors = [
  { id: "01", name: "Çay Fabrikaları", icon: Leaf },
  { id: "02", name: "Şeker Fabrikaları", icon: Factory },
  { id: "03", name: "Enerji Santralleri", icon: Zap },
  { id: "04", name: "Biyokütle Enerji Tesisleri", icon: Flame },
  { id: "05", name: "Gıda Sanayi Tesisleri", icon: Apple },
  { id: "06", name: "Çimento Fabrikaları", icon: Layers },
  { id: "07", name: "Endüstriyel Üretim Tesisleri", icon: Cpu },
  { id: "08", name: "Buhar ve Proses Tesisleri", icon: Wind },
  { id: "09", name: "Ağır Sanayi Tesisleri", icon: Hammer },
  { id: "10", name: "Organize Sanayi Bölgesi Fabrikaları", icon: Building2 },
];

export default function Sectors() {
  return (
    <section className="py-24 md:py-32 bg-[#091224] relative overflow-hidden border-t border-slate-900">
      {/* Soft Ambient Glow in the background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-900/10 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Modern Title Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-secondary-950/60 border border-secondary-500/20 text-secondary-400 text-[9px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Sektörel Çözümler
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              HİZMET VERDİĞİMİZ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-white">SEKTÖRLER</span>
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-secondary-800/30 pl-6 lg:pl-8">
            <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">
              Yaman Kazan ve Makine, yüksek mühendislik disiplini ve teknik imalat gücüyle gıdadan enerjiye, çimentodan ağır sanayiye kadar Türkiye'nin lokomotif sektörlerine anahtar teslim çözümler sunmaktadır.
            </p>
          </div>
        </div>

        {/* 10-Item Grid (5 columns on desktop, beautifully balanced into 2 rows of 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/[0.07] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.3)] hover:border-secondary-500/30 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Accent light border strip on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-400 to-secondary-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <div className="flex items-center justify-between">
                  {/* Digital-style index number */}
                  <span className="text-2xl font-black text-white/10 group-hover:text-secondary-400/20 transition-colors duration-500 select-none">
                    {sector.id}
                  </span>
                  
                  {/* Dynamic Sector Icon */}
                  <div className="p-3 rounded-2xl bg-white/[0.05] group-hover:bg-secondary-500/20 text-white/60 group-hover:text-secondary-400 transition-all duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Sector Name */}
                <h4 className="text-md font-black text-white tracking-tight leading-snug group-hover:text-secondary-400 transition-colors uppercase mt-12">
                  {sector.name}
                </h4>
                
                {/* Subtle Brand Dot on hover */}
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
