import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

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
      <div className="container mx-auto px-6 pt-20 pb-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl mb-8">
              <Image 
                src="/img/logoyaman-1.png" 
                alt="Yaman Kazan" 
                width={180} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Endüstriyel tesis taahhüt, mekanik montaj ve kazan üretimi konularında 
              çeyrek asırlık tecrübemizle küresel standartlarda çözümler sunuyoruz.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-secondary-500 font-black uppercase tracking-widest text-xs mb-6">Kurumsal</h4>
              <ul className="space-y-4">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-secondary-500 font-black uppercase tracking-widest text-xs mb-6">Hızlı Erişim</h4>
              <ul className="space-y-4">
                {footerLinks.hizmetler.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-secondary-500 font-black uppercase tracking-widest text-xs mb-6">İletişim</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-gray-400">
                  <MapPin className="h-5 w-5 text-secondary-500 shrink-0" />
                  <span className="text-sm">Dağsu Mah. 123. Sk. No:45 <br /> Rize, Türkiye</span>
                </li>
                <li className="flex gap-4 text-gray-400">
                  <Phone className="h-5 w-5 text-secondary-500 shrink-0" />
                  <span className="text-sm font-bold">+90 (464) 000 00 00</span>
                </li>
                <li className="flex gap-4 text-gray-400">
                  <Mail className="h-5 w-5 text-secondary-500 shrink-0" />
                  <span className="text-sm font-bold">bilgi@yamankazan.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-bold">Yaman Kazan</span>. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

