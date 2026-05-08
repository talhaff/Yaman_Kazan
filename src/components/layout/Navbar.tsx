"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Anasayfa", href: "/" },
  { 
    name: "Kurumsal", 
    href: "/kurumsal/hakkimizda",
    dropdown: [
      { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { name: "Referanslar", href: "/kurumsal/referanslar" },
      { name: "Sertifikalar", href: "/kurumsal/sertifikalar" },
      { name: "Entegre Yönetim Politikası", href: "/kurumsal/kalite-politikasi" },
      { name: "Katalog", href: "/kurumsal/katalog" },
      { name: "Kariyer", href: "/kurumsal/kariyer" },
    ]
  },
  { name: "Faaliyet Alanları", href: "/faaliyet-alanlari" },
  { name: "Projeler", href: "/projeler" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image 
              src="/img/logoyaman-1.png" 
              alt="Yaman Kazan Logo" 
              width={180} 
              height={50} 
              className={cn("h-12 w-auto object-contain transition-all", !scrolled && "brightness-0 invert")}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className={cn("h-6 w-6", scrolled ? "text-gray-900" : "text-white")} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors flex items-center gap-1 py-4",
                  scrolled ? "text-gray-900 hover:text-secondary-500" : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
              </Link>
              
              {item.dropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-secondary-600 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:+905000000000"
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all",
              scrolled 
                ? "bg-primary-900 text-white hover:bg-primary-800" 
                : "bg-white text-primary-900 hover:bg-gray-100"
            )}
          >
            <Phone className="h-4 w-4" />
            Teklif Al
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/img/logoyaman-1.png" 
                alt="Yaman Kazan Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="-block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-4">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-secondary-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="tel:+905000000000"
                  className="-block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
