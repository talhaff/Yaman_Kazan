import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import { ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const services = await client.fetch(ALL_SERVICES_QUERY);
  
  // Limit to 6 services for the homepage
  const homeServices = services?.slice(0, 6);

  return (
    <>
      <Hero />
      
      {/* About Brief Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/img/gorsel02.jpeg" 
                  alt="Yaman Kazan Atölye" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-600 rounded-2xl -z-10 hidden lg:block" />
            </div>
            
            <div>
              <span className="text-secondary-600 font-bold tracking-widest uppercase text-sm block mb-4">Hakkımızda</span>
              <h2 className="text-5xl font-black text-primary-950 tracking-tighter leading-none mb-8">
                GÜVENLE İNŞA EDİLEN <br /> BİR GELECEK.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Rize'nin sanayi gücü Yaman Kazan, endüstriyel tesis kurulumundan kazan üretimine kadar 
                geniş bir yelpazede mühendislik çözümleri sunar. Her projede kalite, güvenlik ve 
                zamanında teslimat prensiplerimizden ödün vermiyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-950">Yüksek Kalite</h4>
                    <p className="text-sm text-gray-500">Uluslararası standartlarda üretim.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-950">Mühendislik</h4>
                    <p className="text-sm text-gray-500">Hassas hesaplama ve tasarım.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection data={homeServices} />

      {/* CTA Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/img/gorsel03.jpeg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
            PROJENİZ İÇİN BİZE <br /> <span className="text-secondary-500">HEMEN ULAŞIN.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+900000000000" className="px-10 py-4 bg-secondary-600 text-white font-bold rounded-md hover:bg-secondary-700 transition-all">
              Teklif İsteyin
            </a>
            <a href="/iletisim" className="px-10 py-4 bg-white text-primary-950 font-bold rounded-md hover:bg-gray-100 transition-all">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-black text-secondary-500 mb-2">25+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Yıllık Tecrübe</p>
            </div>
            <div>
              <p className="text-5xl font-black text-secondary-500 mb-2">500+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Tamamlanan Proje</p>
            </div>
            <div>
              <p className="text-5xl font-black text-secondary-500 mb-2">100%</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Müşteri Memnuniyeti</p>
            </div>
            <div>
              <p className="text-5xl font-black text-secondary-500 mb-2">24/7</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Teknik Destek</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
