"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { usePathname } from "next/navigation";
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

export default function Footer() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const footerLinks = {
    kurumsal: [
      { name: t("nav.about"), href: "/kurumsal/hakkimizda" },
      { name: t("nav.references"), href: "/kurumsal/referanslar" },
      { name: t("nav.certificates"), href: "/kurumsal/sertifikalar" },
      { name: t("nav.policy"), href: "/kurumsal/kalite-politikasi" },
    ],
    hizmetler: [
      { name: t("nav.services"), href: "/faaliyet-alanlari" },
      { name: t("nav.projects"), href: "/projeler" },
      { name: t("nav.contact"), href: "/iletisim" },
    ],
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-950 text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-800/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" onClick={handleLogoClick} className="inline-block mb-8 group">
              <div className="transition-all duration-500 group-hover:scale-105">
                <Image 
                  src="/img/logoarkaplansiz.png" 
                  alt="Yaman Kazan Logo" 
                  width={700} 
                  height={240} 
                  quality={100}
                  unoptimized
                  className="h-14 md:h-20 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md font-medium">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group"
              >
                <WhatsAppIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-800 hover:border-primary-800 transition-all group"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 relative inline-block">
                {t("nav.corporate")}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-800 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-bold text-sm flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 relative inline-block">
                {t("footer.quickLinks")}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-800 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.hizmetler.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-bold text-sm flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 relative inline-block">
                {t("footer.contactInfo")}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-800 rounded-full" />
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 group-hover:border-primary-800 transition-all">
                    <MapPin className="h-4 w-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-[13px] leading-relaxed font-medium">
                    {t("footer.address")}
                  </span>
                </li>
                <li className="flex gap-4 group">
                  <a 
                    href={CONTACT_INFO.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-4 w-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all">
                      <WhatsAppIcon className="h-4 w-4 text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">{t("contact.whatsapp")}</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-black tracking-tight">
                        {t("contact.whatsappDetail")}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Yaman Kazan. <span className="text-gray-700">{t("footer.rights")}</span>
          </p>
          <div className="flex gap-8">
            <Link href="/kurumsal/kalite-politikasi" className="text-gray-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">
              {t("nav.policy")}
            </Link>
            <Link href="/iletisim" className="text-gray-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">
              {t("nav.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
