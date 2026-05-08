import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Referanslar",
  description: "Yaman Kazan iş ortakları ve referansları.",
};

const references = [
  "TÜPRAŞ",
  "MOL - MACARİSTAN",
  "ETİBAKIR",
  "ENERJİSA",
  "KARDEMİR",
  "ÇAYKUR",
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
      
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {references.map((ref, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-center aspect-[3/2] hover:shadow-lg hover:border-secondary-500 transition-all duration-300 group cursor-pointer"
              >
                <span className="font-black text-xl text-primary-900/60 group-hover:text-primary-950 transition-colors">
                  {ref}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-950 mb-4">Yeni Projelerde Buluşalım</h3>
            <p className="text-gray-600 mb-8">
              Siz de güçlü referanslarımız arasına katılmak ve projelerinizde Yaman Kazan güvencesini hissetmek için bizimle iletişime geçin.
            </p>
            <a href="/iletisim" className="inline-block px-8 py-4 bg-secondary-600 text-white font-bold rounded-md hover:bg-secondary-700 transition-colors">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
