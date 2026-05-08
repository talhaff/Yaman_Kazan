import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import { ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";
import { CONTACT_INFO } from "@/lib/constants";

export const revalidate = 60;

export default async function Home() {
  const services = await client.fetch(ALL_SERVICES_QUERY);
  
  // Limit to 6 services for the homepage
  const homeServices = services?.slice(0, 6);

  return (
    <>
      <Hero />
      
      {/* About Brief Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-primary-premium">
                <Image 
                  src="/img/gorsel02.jpeg" 
                  alt="Yaman Kazan Atölye" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-64 md:h-64 bg-secondary-600 rounded-[2rem] -z-10 hidden sm:block" />
            </div>
            
            <div className="pt-8 lg:pt-0">
              <span className="text-secondary-600 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs block mb-6">
                Hakkımızda
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-950 tracking-tighter leading-[0.95] mb-10 uppercase">
                GÜVENLE İNŞA EDİLEN <br /> <span className="text-gradient">BİR GELECEK.</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                Rize'nin sanayi gücü Yaman Kazan, endüstriyel tesis kurulumundan kazan üretimine kadar 
                geniş bir yelpazede mühendislik çözümleri sunar. Her projede kalite, güvenlik ve 
                zamanında teslimat prensiplerimizden ödün vermiyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="flex gap-5 p-6 bg-primary-50 rounded-2xl border border-primary-100/50 hover:border-secondary-500/30 transition-colors group">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary-950 tracking-tight">Yüksek Kalite</h4>
                    <p className="text-sm text-gray-500 font-medium">Uluslararası standartlarda üretim.</p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-primary-50 rounded-2xl border border-primary-100/50 hover:border-secondary-500/30 transition-colors group">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/20 group-hover:scale-110 transition-transform">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary-950 tracking-tight">Mühendislik</h4>
                    <p className="text-sm text-gray-500 font-medium">Hassas hesaplama ve tasarım.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection data={homeServices} limit={6} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/img/gorsel03.jpeg" alt="Background" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-12 uppercase">
            PROJENİZ İÇİN BİZE <br /> <span className="text-secondary-500">HEMEN ULAŞIN.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={CONTACT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-tighter rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-[#25D366]/20"
            >
              WhatsApp'tan Teklif İsteyin
            </a>
            <a 
              href="/iletisim" 
              className="px-10 py-5 bg-white text-primary-950 font-black uppercase tracking-tighter rounded-2xl hover:bg-primary-50 transition-all text-center shadow-2xl shadow-black/20"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-primary-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
            <div className="group">
              <p className="text-5xl md:text-6xl font-black text-secondary-500 mb-3 group-hover:scale-110 transition-transform">25+</p>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary-100">Yıllık Tecrübe</p>
            </div>
            <div className="group">
              <p className="text-5xl md:text-6xl font-black text-secondary-500 mb-3 group-hover:scale-110 transition-transform">500+</p>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary-100">Tamamlanan Proje</p>
            </div>
            <div className="group">
              <p className="text-5xl md:text-6xl font-black text-secondary-500 mb-3 group-hover:scale-110 transition-transform">100%</p>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary-100">Müşteri Memnuniyeti</p>
            </div>
            <div className="group">
              <p className="text-5xl md:text-6xl font-black text-secondary-500 mb-3 group-hover:scale-110 transition-transform">24/7</p>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary-100">Teknik Destek</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

