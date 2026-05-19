"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { usePathname } from "next/navigation";

const footerLinks = {
  kurumsal: [
    { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
    { name: "Referanslar", href: "/kurumsal/referanslar" },
    { name: "Sertifikalar", href: "/kurumsal/sertifikalar" },
    { name: "Entegre Yönetim Politikası", href: "/kurumsal/kalite-politikasi" },
  ],
  hizmetler: [
    { name: "Faaliyet Alanları", href: "/faaliyet-alanlari" },
    { name: "Projeler", href: "/projeler" },
    { name: "İletişim", href: "/iletisim" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

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
              Endüstriyel tesisler için yüksek kapasiteli buhar kazanları imalatı, anahtar teslim kurulumu ve yüksek basınçlı sistemlerin revizyon çalışmalarında güvenilir mühendislik çözümleri sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-800 hover:border-primary-800 transition-all group"
              >
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
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
                Kurumsal
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
                Hizmetler
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
                İletişim
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-800 rounded-full" />
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 group-hover:border-primary-800 transition-all">
                    <MapPin className="h-4 w-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-[13px] leading-relaxed font-medium">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-800 group-hover:border-primary-800 transition-all">
                    <Phone className="h-4 w-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">Bizi Arayın</span>
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-gray-300 hover:text-white transition-colors text-sm font-black tracking-tight">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Yaman Kazan. <span className="text-gray-700">Tüm hakları saklıdır.</span>
          </p>
          <div className="flex gap-8">
            <Link href="/kurumsal/kalite-politikasi" className="text-gray-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">
              Politikalarımız
            </Link>
            <Link href="/iletisim" className="text-gray-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
