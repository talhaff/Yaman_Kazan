import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Hakkımızda",
  description: "Yaman Kazan kurumsal tarihi, misyonu ve vizyonu.",
};

const values = [
  "Uluslararası Standartlarda Üretim",
  "İş Sağlığı ve Güvenliği Önceliği",
  "Çevreye Duyarlı Mühendislik",
  "Zamanında Teslimat",
  "Sürekli Ar-Ge ve İnovasyon",
  "Müşteri Odaklı Çözümler"
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader 
        title="Hakkımızda" 
        description="Ağır sanayinin gücünü mühendislik dehasıyla birleştirerek, Türkiye'nin ve dünyanın dört bir yanına değer katıyoruz."
        imagePath="/img/gorsel02.jpeg"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary-950 tracking-tighter mb-6">
                YARIM ASIRLIK TECRÜBE İLE <br /> GELECEĞİ İNŞA EDİYORUZ
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Yaman Kazan, endüstriyel tesislerin her türlü mekanik montajı, ağır ekipman kurulumu, basınçlı kaplar ve buhar kazanı imalatı alanında faaliyet gösteren köklü bir mühendislik firmasıdır. Adana'da başlayan yolculuğumuz, bugün ulusal ve uluslararası arenada dev projelere imza atan bir markaya dönüşmüştür.
                </p>
                <p>
                  Yer aldığımız tüm projelerde; yüksek kalite standartlarının gerekliliklerini, müşterilerimizin beklentilerini ve sahaya özel mühendislik çözümlerini bir arada sunuyoruz. Modern atölyelerimizde gerçekleştirdiğimiz imalat süreçlerinden, zorlu şantiye koşullarındaki montaj operasyonlarına kadar her aşamada profesyonel ekibimizle çalışıyoruz.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/img/gorsel01.jpeg" alt="Yaman Kazan Atölye Çalışması" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary-600 p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-black text-white mb-2">25+</p>
                <p className="text-white/90 font-medium">Yıllık Endüstriyel Sektör Deneyimi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-primary-950 mb-6">Değerlerimiz</h2>
            <p className="text-gray-600">Her projemizin temelinde yatan ve bizi biz yapan sarsılmaz ilkelerimiz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle2 className="text-secondary-500 h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-primary-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
