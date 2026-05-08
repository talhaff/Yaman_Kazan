import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_CERTIFICATES_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { Award, ShieldCheck, FileCheck, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Sertifikalar",
  description: "Yaman Kazan kalite ve yönetim sertifikaları.",
};

export const revalidate = 60;

const fallbackCertificates = [
  { title: "ISO 9001:2015", issuer: "Kalite Yönetim Sistemi", icon: ShieldCheck },
  { title: "ISO 14001:2015", issuer: "Çevre Yönetim Sistemi", icon: FileCheck },
  { title: "ISO 45001:2018", issuer: "İş Sağlığı ve Güvenliği", icon: Award },
  { title: "EN ISO 3834-2", issuer: "Metalik Malzemelerin Ergitme Kaynağı", icon: ShieldCheck },
  { title: "ASME U-Stamp", issuer: "Basınçlı Kaplar Üretim", icon: FileCheck },
  { title: "CE Mark", issuer: "Avrupa Standartları Uygunluk", icon: Award },
];

export default async function SertifikalarPage() {
  const sanityCertificates = await client.fetch(ALL_CERTIFICATES_QUERY);
  
  // Merge sanity with fallback
  const sanityData = sanityCertificates || [];
  const displayCerts = [
    ...sanityData,
    ...fallbackCertificates.filter(fb => !sanityData.some((sd: any) => sd.title === fb.title))
  ];

  return (
    <article className="bg-white min-h-screen">
      <PageHeader 
        title="Kalite & Sertifikalar" 
        description="Sektörel yetkinliğimizi ve kalite standartlarımızı belgeleyen uluslararası sertifikalarımız."
        imagePath="/img/gorsel03.jpeg"
      />
      
      <section className="py-32 bg-zinc-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-black text-primary-950 mb-6">STANDARTLARIN <span className="text-secondary-600">ÖTESİNDE</span> ÜRETİM.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Yaman Kazan olarak tüm imalat ve montaj süreçlerimizde en güncel uluslararası yönetmelikleri ve 
              kalite yönetim sistemlerini titizlikle uyguluyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {displayCerts.map((cert: any, index: number) => {
              const Icon = cert.icon || FileCheck;
              const hasImage = !!cert.image;

              return (
                <div key={index} className="relative group">
                  {/* Premium Card Base */}
                  <div className="h-full bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col justify-between">
                    
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-primary-900 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 shadow-inner">
                          <Icon className="h-8 w-8" />
                        </div>
                        {hasImage && (
                          <div className="relative w-20 h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                            <Image 
                              src={urlForImage(cert.image).url()} 
                              alt={cert.title} 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-black text-primary-950 mb-3 group-hover:text-secondary-600 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-500 font-medium leading-relaxed">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                      {cert.issueDate ? (
                        <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                          {new Date(cert.issueDate).getFullYear()} • GÜNCEL
                        </span>
                      ) : (
                        <span className="text-xs font-black uppercase tracking-widest text-gray-400">SÜRESİZ • GEÇERLİ</span>
                      )}
                      
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-secondary-500 group-hover:text-white transition-all">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary-500/10 to-transparent rounded-tr-[2rem] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
