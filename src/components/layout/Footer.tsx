import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-2xl font-black tracking-tighter">YAMAN KAZAN</span>
            <p className="mt-4 max-w-xs text-gray-400">
              Endüstriyel tesis taahhüt, mekanik montaj ve kazan üretimi konularında uzman kadromuzla yanınızdayız.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-500">Hızlı Linkler</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><Link href="/kurumsal/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/faaliyet-alanlari" className="hover:text-white">Faaliyet Alanları</Link></li>
              <li><Link href="/projeler" className="hover:text-white">Projeler</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-500">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Rize, Türkiye</li>
              <li>bilgi@yamankazan.com</li>
              <li>+90 (464) 000 00 00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yaman Kazan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
