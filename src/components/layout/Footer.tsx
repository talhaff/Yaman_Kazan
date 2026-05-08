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
    <footer className="bg-primary-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10">
              <div className="bg-white p-3 rounded-2xl">
                <Image 
                  src="/img/logoyaman-1.png" 
                  alt="Yaman Kazan Logo" 
                  width={200} 
                  height={56} 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Endüstriyel tesis taahhüt, mekanik montaj ve kazan üretimi konularında 
              çeyrek asırlık tecrübemizle küresel standartlarda çözümler sunuyoruz.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Kurumsal</h4>
              <ul className="space-y-4">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-secondary-500 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Hizmetler</h4>
              <ul className="space-y-4">
                {footerLinks.hizmetler.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-secondary-500 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">İletişim</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 text-secondary-500 shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-secondary-500 shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 text-secondary-500 shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium">
            © {new Date().getFullYear()} Yaman Kazan. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8">
            <Link href="/kurumsal/kalite-politikasi" className="text-gray-500 hover:text-white text-xs font-medium transition-colors">
              Kalite Politikası
            </Link>
            <Link href="/iletisim" className="text-gray-500 hover:text-white text-xs font-medium transition-colors">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
