import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Referanslar",
  description: "Yaman Kazan iş ortakları ve referansları.",
};

const topReferences = [
  { name: "Çaykur", logo: "/img/caykur.jpeg" },
  { name: "Doğuş Grubu", logo: "/img/dogus.jpeg" },
  { name: "Çimsa", logo: "/img/cimsa.jpeg" },
  { name: "Efor Çay", logo: "/img/efor.jpeg" },
  { name: "Diageo", logo: "/img/diageo.jpeg" },
  { name: "Adana Çimento", logo: "/img/adana.jpeg" },
];

const otherReferences = [
  "TÜPRAŞ",
  "MOL - MACARİSTAN",
  "ETİBAKIR",
  "ENERJİSA",
  "KARDEMİR",
  "ERDEMİR",
  "İSDEMİR",
  "CENGİZ ENERJİ",
  "LİMAK ENERJİ",
  "AKSA",
  "ZORLU ENERJİ"
];

export default function ReferanslarPage() {
  return (
    <>
      <PageHeader 
        title="Referanslarımız" 
        description="Sektörün devleriyle birlikte çalışıyor, Türkiye'nin ve dünyanın en büyük sanayi projelerine imza atıyoruz."
        imagePath="/img/hidroelektriksantral01.jpeg"
      />
      
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-50 rounded-full blur-[120px] -z-10 opacity-40"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-800 font-black tracking-[0.2em] uppercase text-xs block mb-4">Küresel İş Ortaklarımız</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter leading-tight uppercase">
              BİRLİKTE <span className="text-primary-800">GÜÇLÜYÜZ</span>
            </h2>
          </div>

          {/* Premium Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 mb-24">
            {topReferences.map((ref, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 flex items-center justify-center aspect-[4/3] md:aspect-[16/9] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 transform group-hover:scale-110">
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={300}
                    height={150}
                    className="max-h-[75%] md:max-h-[80%] w-auto object-contain px-2 md:px-0"
                  />
                </div>
                {/* Overlay Name on Hover - Hidden on mobile to save space */}
                <div className="hidden md:block absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-950/40">{ref.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 relative">
            <div className="bg-primary-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight uppercase leading-tight">
                  SİZİN PROJENİZİ DE <br /> <span className="text-primary-800">BAŞARIYLA</span> TAMAMLAYALIM
                </h3>
                <p className="text-white/60 text-lg mb-10 font-medium leading-relaxed">
                  Tecrübeli saha kadromuz ve uygulama disiplinimiz ile endüstriyel tesis projelerinizde en güvenilir çözüm ortağınız olmaya hazırız.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/iletisim" className="px-10 py-5 bg-white text-primary-950 font-black uppercase tracking-widest rounded-2xl hover:bg-primary-50 transition-all hover:scale-105 shadow-xl active:scale-95">
                    İLETİŞİME GEÇİN
                  </Link>
                  <Link href="/projeler" className="px-10 py-5 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                    PROJELERİMİZİ İNCELEYİN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

