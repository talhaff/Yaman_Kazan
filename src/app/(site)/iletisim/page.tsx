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
                    link: "https://www.google.com/maps/search/?api=1&query=Yeşiloba+Mah.+Şehit+Pilot+Fehmi+Alemdar+Bulv.+No:+134/Z27+Seyhan/ADANA" 
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
          src="https://maps.google.com/maps?q=Yeşiloba%20Mah.%20Şehit%20Pilot%20Fehmi%20Alemdar%20Bulv.%20No:%20134/Z27%20Seyhan/ADANA&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
