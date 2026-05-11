import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Entegre Yönetim Sistemi Politikası",
  description: "Yaman Kazan entegre yönetim sistemi, iş sağlığı, güvenlik ve kalite politikaları.",
};

const policies = [
  "Müşteri beklenti ve ihtiyaçlarını yasal şartlar çerçevesinde karşılamak.",
  "İş sağlığı ve güvenliği risklerini en aza indirerek güvenli bir çalışma ortamı sağlamak.",
  "Çevresel etkileri azaltmak, doğal kaynakları verimli kullanmak ve kirliliği önlemek.",
  "Tüm çalışanların katılımı ile süreçlerimizi sürekli iyileştirmek.",
  "Kalite, çevre ve İSG performansımızı sürekli olarak artırmak.",
  "Teknolojik gelişmeleri yakından takip ederek üretim verimliliğini maksimize etmek."
];

export default function KalitePolitikasiPage() {
  return (
    <>
      <PageHeader 
        title="Entegre Yönetim Sistemi Politikası" 
        description="Kalite, çevre ve iş güvenliği standartlarına tavizsiz bağlıyız."
        imagePath="/img/gorsel03.jpeg"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-zinc-50 p-10 md:p-16 rounded-3xl border border-gray-100 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-950 mb-8 border-b border-gray-200 pb-6">
              Politikamızın Temel İlkeleri
            </h2>
            
            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{policy}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary-900 rounded-2xl text-white">
              <p className="font-medium italic leading-relaxed text-center">
                &quot;Yaman Kazan olarak vizyonumuz; üstlendiğimiz tüm projelerde uluslararası standartlara uymak, çevreye saygılı olmak ve çalışanlarımızın güvenliğini her şeyin üstünde tutarak sektörde öncü ve kalıcı bir marka olmaktır.&quot;
              </p>
              <div className="text-center mt-4">
                <span className="font-bold block text-secondary-500">Yunus Yaman</span>
                <span className="text-sm text-gray-400">Kurucu & Genel Müdür</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
