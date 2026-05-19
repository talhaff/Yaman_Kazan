import PageHeader from "@/components/ui/PageHeader";
import { client } from "@/sanity/lib/client";
import { ALL_CERTIFICATES_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import CertificateGallery from "@/components/certificates/CertificateGallery";
import Link from "next/link";

export const metadata = {
  title: "Sertifikalar",
  description: "Yaman Kazan kalite ve yönetim sertifikaları.",
};

export const revalidate = 60;

const fallbackCertificates = [
  { 
    title: "ISO 45001:2018", 
    issuer: "Kalite Yönetim Sistemi Sertifikası", 
    image: "/img/sertifika1.png", 
    code: "OHS-2026-YK"
  },
  { 
    title: "ISO 9001:2015", 
    issuer: "Kalite Yönetim Sistemi Sertifikası", 
    image: "/img/sertifika2.png", 
    code: "QMS-2026-YK"
  },
  { 
    title: "ISO 14001:2015", 
    issuer: "Çevre Yönetim Sistemi Sertifikası", 
    image: "/img/sertifika3.png",
    code: "ENV-2026-YK"
  },
];

export default async function SertifikalarPage() {
  const sanityCertificates = await client.fetch(ALL_CERTIFICATES_QUERY);
  const sanityData = sanityCertificates || [];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const displayCerts = (sanityData.length > 0 ? sanityData : fallbackCertificates).map((cert: any) => ({
    title: cert.title,
    issuer: cert.issuer,
    image: cert.image?.asset ? urlForImage(cert.image).url() : cert.image,
    code: cert.code
  }));

  return (
    <article className="bg-white min-h-screen">
      <PageHeader 
        title="Kalite & Sertifikalar" 
        description="Uluslararası standartlarda üretim kalitemizi belgeleyen sertifikalarımız."
        imagePath="/img/kurumsalarka.png"
      />
      
      <section className="py-24 md:py-32 bg-zinc-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-primary-800 font-black tracking-[0.3em] uppercase text-xs block mb-6">Kalite Standartlarımız</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary-950 mb-8 tracking-tighter leading-tight uppercase">
              GÜVENİLİR VE <span className="text-primary-800">SERTİFİKALI</span> ÇÖZÜMLER
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
              Yaman Kazan, tüm imalat süreçlerinde EN standartlarına ve ISO yönetim sistemlerine tam uyum sağlar. 
              Sertifikalarımız, teknik uzmanlığımızın ve kaliteye olan bağlılığımızın birer kanıtıdır.
            </p>
          </div>

          <CertificateGallery certificates={displayCerts} />

          <div className="mt-24 pt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-2xl font-black text-primary-950 mb-4 uppercase tracking-tight">KYS Politikamız Hakkında</h4>
              <p className="text-gray-500 font-medium leading-relaxed">
                Kalite yönetim sistemlerimizin detayları ve üretim süreçlerimizdeki standartlarımız hakkında daha fazla bilgi almak için politikamızı inceleyebilirsiniz.
              </p>
            </div>
            <Link href="/kurumsal/kalite-politikasi" className="px-10 py-5 bg-primary-950 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-primary-800 transition-all shadow-2xl shadow-primary-950/20 active:scale-95 whitespace-nowrap">
              KALİTE POLİTİKAMIZ
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}


