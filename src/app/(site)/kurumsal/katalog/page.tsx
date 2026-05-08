import PageHeader from "@/components/ui/PageHeader";
import { Download } from "lucide-react";

export const metadata = {
  title: "Katalog",
  description: "Yaman Kazan kurumsal tanıtım kataloğu.",
};

export default function KatalogPage() {
  return (
    <>
      <PageHeader 
        title="Kurumsal Katalog" 
        description="Ürünlerimiz, hizmetlerimiz ve imza attığımız projeler hakkında detaylı bilgiye kataloğumuzdan ulaşabilirsiniz."
        imagePath="/img/gorsel02.jpeg"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto bg-zinc-50 p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-8">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-primary-950 mb-4">2024-2025 Ürün ve Hizmet Kataloğu</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tüm teknik detaylar, kapasite bilgileri ve referans projelerimizin yer aldığı güncel kataloğumuzu PDF formatında indirebilirsiniz.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-600 text-white font-bold rounded-lg hover:bg-secondary-700 transition-colors">
              <Download className="h-5 w-5" />
              Kataloğu İndir (PDF, 15MB)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
