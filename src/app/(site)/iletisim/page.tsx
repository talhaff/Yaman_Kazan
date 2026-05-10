import PageHeader from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "İletişim",
  description: "Yaman Kazan iletişim bilgileri ve formu.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHeader 
        title="Bize Ulaşın" 
        description="Projeleriniz için teklif almak veya uzman kadromuzla görüşmek için iletişim kanallarımızı kullanabilirsiniz."
        imagePath="/img/islemler.jpeg"
      />
      
      <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute -left-20 top-40 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5">
              <span className="text-secondary-600 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs block mb-6">İletişim Kanalları</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter leading-[0.95] mb-12 uppercase">
                HAYALİNİZDEKİ PROJEYİ <br /> <span className="text-gradient">BİRLİKTE</span> GERÇEKLEŞTİRELİM.
              </h2>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { 
                    icon: MapPin, 
                    title: "Atölye & Ofis", 
                    content: CONTACT_INFO.address,
                    link: "https://maps.google.com" 
                  },
                  { 
                    icon: Phone, 
                    title: "Telefon Hattı", 
                    content: CONTACT_INFO.phone, 
                    link: `tel:${CONTACT_INFO.phoneRaw}` 
                  },
                  { 
                    icon: Mail, 
                    title: "E-Posta Adresi", 
                    content: CONTACT_INFO.email, 
                    link: `mailto:${CONTACT_INFO.email}` 
                  },
                  { 
                    icon: Clock, 
                    title: "Çalışma Saatleri", 
                    content: "Pazartesi - Cumartesi: 08:30 - 18:30", 
                    link: null 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-16 h-16 bg-primary-50 rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:bg-primary-950 group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-950 font-black hover:text-secondary-600 transition-colors block text-lg md:text-xl tracking-tight">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-primary-950 font-black text-lg md:text-xl tracking-tight">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social / Direct Contact */}
              <div className="mt-20 pt-10 border-t border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Hızlı İletişim & Kartvizit</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={CONTACT_INFO.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-tighter rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-[#25D366]/20 flex-1"
                  >
                    <MessageCircle className="h-6 w-6" /> WhatsApp Hattı
                  </a>
                  <a 
                    href="/img/kartvizit.jpeg" 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary-950 text-white font-black uppercase tracking-tighter rounded-2xl hover:bg-secondary-600 transition-all shadow-2xl shadow-primary-950/20 flex-1"
                  >
                    Kartviziti İndir
                  </a>
                </div>

                {/* Business Card Preview */}
                <div className="mt-12 group relative">
                  <div className="absolute inset-0 bg-secondary-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 -z-10 opacity-50"></div>
                  <div className="relative aspect-[1.6/1] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
                    <img 
                      src="/img/kartvizit.jpeg" 
                      alt="Yunus Yaman Kartvizit" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-black text-xs uppercase tracking-widest">Yunus Yaman — Proje Müdürü</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[35rem] w-full relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 border-t border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191195.49845341253!2d40.354133464522434!3d41.02672535728345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40667ab8029d91bd%3A0xe5f8670c53dc30e0!2sRize%2C%20Rize%20Merkez%2FRize!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]"></div>
      </section>
    </>
  );
}
