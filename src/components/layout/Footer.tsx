import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const footerLinks = {
  kurumsal: [
    { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
    { name: "Referanslar", href: "/kurumsal/referanslar" },
    { name: "Sertifikalar", href: "/kurumsal/sertifikalar" },
    { name: "Katalog", href: "/kurumsal/katalog" },
  ],
  hizmetler: [
    { name: "Faaliyet Alanları", href: "/faaliyet-alanlari" },
    { name: "Projeler", href: "/projeler" },
    { name: "Kariyer", href: "/kurumsal/kariyer" },
    { name: "İletişim", href: "/iletisim" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10 group">
              <div className="bg-white p-3 rounded-2xl transition-transform duration-500 group-hover:scale-105 shadow-xl">
                <Image 
                  src="/img/logoyaman-1.png" 
                  alt="Yaman Kazan Logo" 
                  width={200} 
                  height={56} 
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-medium">
              Endüstriyel tesis taahhüt, mekanik montaj ve kazan üretimi konularında 
              çeyrek asırlık tecrübemizle küresel standartlarda çözümler sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary-600 hover:border-secondary-600 transition-all group"
              >
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary-600 hover:border-secondary-600 transition-all group"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 relative inline-block">
                Kurumsal
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-600 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-bold text-sm flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 relative inline-block">
                Hizmetler
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-600 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.hizmetler.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-bold text-sm flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 relative inline-block">
                İletişim
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-600 rounded-full" />
              </h4>
              <ul className="space-y-8">
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-600 group-hover:border-secondary-600 transition-all">
                    <MapPin className="h-5 w-5 text-secondary-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed font-medium">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-600 group-hover:border-secondary-600 transition-all">
                    <Phone className="h-5 w-5 text-secondary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Bizi Arayın</span>
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-gray-300 hover:text-white transition-colors text-base font-black tracking-tight">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Yaman Kazan. <span className="text-gray-700">Tüm hakları saklıdır.</span>
          </p>
          <div className="flex gap-8">
            <Link href="/kurumsal/kalite-politikasi" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
              Kalite Politikası
            </Link>
            <Link href="/iletisim" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
