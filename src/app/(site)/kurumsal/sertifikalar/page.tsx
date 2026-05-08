import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Sertifikalar",
  description: "Yaman Kazan kalite ve yönetim sertifikaları.",
};

const certificates = [
  { name: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
  { name: "ISO 14001:2015", desc: "Çevre Yönetim Sistemi" },
  { name: "ISO 45001:2018", desc: "İş Sağlığı ve Güvenliği Yönetim Sistemi" },
  { name: "EN ISO 3834-2", desc: "Metalik Malzemelerin Ergitme Kaynağı Kalite Şartları" },
  { name: "ASME U-Stamp", desc: "Basınçlı Kaplar Üretim Sertifikası" },
  { name: "CE Mark", desc: "Avrupa Standartlarına Uygunluk" },
];

export default function SertifikalarPage() {
  return (
    <>
      <PageHeader 
        title="Sertifikalarımız" 
        description="Üretimden montaja kadar tüm süreçlerimizde uluslararası kalite standartlarını uyguluyor ve belgelendiriyoruz."
        imagePath="/img/gorsel03.jpeg"
      />
      
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors">
                  <span className="text-2xl font-black text-primary-900 group-hover:text-white">✔</span>
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
