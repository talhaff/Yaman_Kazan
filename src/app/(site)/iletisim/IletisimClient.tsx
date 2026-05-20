"use client";

import PageHeader from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageContext";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.851-4.403 9.854-9.842.002-2.635-1.02-5.11-2.885-6.974C16.376 1.947 13.9 .924 11.27.924c-5.44 0-9.858 4.406-9.86 9.848-.001 1.702.449 3.361 1.309 4.815L1.616 21.6l6.031-1.582zM18.06 14.93c-.33-.165-1.937-.957-2.234-1.063-.3-.11-.517-.165-.73.165-.213.33-.825 1.063-1.012 1.28-.187.217-.375.242-.705.077c-.33-.165-1.393-.513-2.653-1.64-1-.89-1.674-1.99-1.872-2.33-.198-.33-.022-.508.143-.672.15-.147.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.73-1.76-1-.242-.265-.605-.56-1.2-.56-.63 0-1.155-.03-1.265-.083-.11-.055-.22-.083-.33-.083-.11 0-.275.04-.413.193-.138.15-.523.51-.523 1.24s.536 1.43.612 1.54c.077.11 1.055 1.612 2.556 2.26.357.155.636.248.854.318.36.113.686.097.944.06.288-.04.88-.36 1.004-.707.125-.347.125-.644.088-.707-.037-.063-.165-.1-.495-.265z" />
  </svg>
);

export default function IletisimClient() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t("contact.title")} 
        description={t("contact.desc")}
        imagePath="/img/islemler.jpeg"
      />
      
      <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute -left-20 top-40 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5">
              <span className="text-secondary-600 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs block mb-6">{t("contact.subtitle")}</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter leading-[0.95] mb-12 uppercase">
                {t("contact.title1")}
              </h2>
              
              <div className="space-y-10 md:space-y-14">
                {[
                  { 
                    icon: MapPin, 
                    title: t("contact.address"), 
                    content: CONTACT_INFO.address,
                    link: "https://www.google.com/maps/search/?api=1&query=Yeşiloba+Mah.+Şehit+Pilot+Fehmi+Alemdar+Bulv.+No:+134/Z27+Seyhan/ADANA" 
                  },
                  { 
                    icon: WhatsAppIcon, 
                    title: t("contact.whatsapp"), 
                    content: t("contact.whatsappDetail"), 
                    link: CONTACT_INFO.whatsapp 
                  },
                  { 
                    icon: Mail, 
                    title: t("contact.email"), 
                    content: CONTACT_INFO.email, 
                    link: `mailto:${CONTACT_INFO.email}` 
                  },
                  { 
                    icon: Clock, 
                    title: t("contact.hours"), 
                    content: t("contact.hoursDetail"), 
                    link: null 
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 group items-start"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-950 group-hover:text-white transition-all duration-500 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-slate-100">
                      <item.icon className="h-6 w-6 text-primary-950 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-black text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-3">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-950 font-black hover:text-primary-800 transition-colors block text-lg md:text-xl tracking-tight leading-snug max-w-sm">
                          {item.content}
                          </a>
                      ) : (
                        <p className="text-primary-950 font-black text-lg md:text-xl tracking-tight leading-snug">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
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
