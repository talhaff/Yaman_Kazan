import PageHeader from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "İletişim",
  description: "Yaman Kazan iletişim bilgileri ve formu.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHeader 
        title="İletişim" 
        description="Projeleriniz için teklif almak, hizmetlerimiz hakkında detaylı bilgi edinmek veya aklınızdaki sorular için bizimle iletişime geçin."
        imagePath="/img/gorsel02.jpeg"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-primary-950 mb-8 border-b border-gray-100 pb-6">İletişim Bilgilerimiz</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-950 mb-1">Merkez Ofis / Atölye</h3>
                    <p className="text-gray-600 leading-relaxed">Rize, Türkiye (Örnek Adres, Rize Merkez / Rize)</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-950 mb-1">Telefon</h3>
                    <p className="text-gray-600"><a href="tel:+900000000000" className="hover:text-secondary-500">+90 000 000 00 00</a></p>
                    <p className="text-gray-600"><a href="tel:+900000000001" className="hover:text-secondary-500">+90 000 000 00 01</a> (Faks)</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-950 mb-1">E-Posta</h3>
                    <p className="text-gray-600"><a href="mailto:info@yamankazan.com" className="hover:text-secondary-500">info@yamankazan.com</a></p>
                    <p className="text-gray-600"><a href="mailto:satis@yamankazan.com" className="hover:text-secondary-500">satis@yamankazan.com</a></p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-950 mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600">Pazartesi - Cuma: 08:30 - 18:00</p>
                    <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 p-10 rounded-3xl border border-gray-100 shadow-xl">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Bize Mesaj Gönderin</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="Adınız Soyadınız" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="E-Posta Adresiniz" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all" placeholder="Telefon Numaranız" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all bg-white">
                    <option>Genel Bilgi Talebi</option>
                    <option>Teklif İstiyorum</option>
                    <option>Teknik Destek / Servis</option>
                    <option>İnsan Kaynakları</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none transition-all resize-none" placeholder="Lütfen mesajınızı buraya yazın..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-950 transition-colors">
                  Mesajı Gönder
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191195.49845341253!2d40.354133464522434!3d41.02672535728345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40667ab8029d91bd%3A0xe5f8670c53dc30e0!2sRize%2C%20Rize%20Merkez%2FRize!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
