import PageHeader from "@/components/ui/PageHeader";
import { Briefcase, Users, GraduationCap, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Kariyer",
  description: "Yaman Kazan kariyer fırsatları ve iş başvurusu.",
};

const benefits = [
  { icon: Users, title: "Dinamik Ekip", desc: "Alanında uzman, tecrübeli ve yenilikçi bir takımın parçası olun." },
  { icon: TrendingUp, title: "Kariyer Gelişimi", desc: "Büyük projelerde yer alarak yeteneklerinizi ulusal ve uluslararası çapta geliştirin." },
  { icon: GraduationCap, title: "Sürekli Eğitim", desc: "Mesleki ve kişisel gelişim eğitimleri ile her zaman bir adım önde olun." },
  { icon: Briefcase, title: "Güvenli Çalışma Ortamı", desc: "İş sağlığı ve güvenliğini en üst seviyede tutan tesislerde çalışın." },
];

export default function KariyerPage() {
  return (
    <>
      <PageHeader 
        title="Kariyer (İş Başvurusu)" 
        description="Ağır sanayinin dev projelerinde bizimle birlikte çalışmak, büyüyen ailemizin bir parçası olmak ister misiniz?"
        imagePath="/img/gorsel01.jpeg"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-primary-950 mb-6">Neden Yaman Kazan?</h2>
            <p className="text-gray-600 leading-relaxed">
              Yaman Kazan olarak en büyük gücümüzün çalışanlarımız olduğuna inanıyoruz. Güvenli, adil ve gelişime açık bir çalışma ortamı sunarak, her bir ekip üyemizin potansiyelini en üst seviyeye çıkarmasını destekliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary-900" />
                </div>
                <h3 className="font-bold text-primary-950 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-zinc-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-2">Genel İş Başvurusu</h2>
              <p className="text-gray-500 text-sm">Özgeçmişinizi bize ileterek uygun pozisyonlar için değerlendirmeye alınabilirsiniz.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="ornek@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="05XX XXX XX XX" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ön Yazı</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all resize-none" placeholder="Kısaca kendinizden bahsedin..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CV / Özgeçmiş Yükle</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-900 hover:file:bg-primary-100 transition-all cursor-pointer" accept=".pdf,.doc,.docx" />
                <p className="mt-2 text-xs text-gray-500">Sadece PDF, DOC, DOCX formatları. Max 5MB.</p>
              </div>

              <button type="button" className="w-full py-4 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-950 transition-colors">
                Başvuruyu Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
