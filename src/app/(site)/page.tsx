import Hero from "@/components/home/Hero";
import Link from "next/link";
import { Settings, ShieldCheck, Cpu, Truck } from "lucide-react";

const features = [
  {
    name: "Endüstriyel Tesis Taahhüt",
    description: "Anahtar teslim endüstriyel tesis kurulumu ve proje yönetimi.",
    icon: Settings,
  },
  {
    name: "Mekanik Montaj",
    description: "Ağır sanayi ekipmanlarının hassas mekanik montaj işlemleri.",
    icon: Cpu,
  },
  {
    name: "Kazan Üretimi",
    description: "Yüksek verimli endüstriyel kazan ve basınçlı kap imalatı.",
    icon: ShieldCheck,
  },
  {
    name: "Bakım ve Servis",
    description: "Tesisleriniz için periyodik bakım ve 7/24 teknik servis desteği.",
    icon: Truck,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary-900 text-sm font-bold tracking-widest uppercase mb-4">Faaliyet Alanlarımız</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tighter text-primary-950">
              ENDÜSTRİDE UÇTAN UCA <br /> ÇÖZÜMLER SUNUYORUZ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="group p-8 rounded-2xl border border-gray-100 hover:border-secondary-500 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-900 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-3">{feature.name}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link href="/faaliyet-alanlari" className="text-sm font-bold text-primary-900 hover:text-secondary-500 flex items-center gap-2">
                  Detaylı Bilgi
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
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
