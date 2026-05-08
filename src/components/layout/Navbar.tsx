"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <div className={cn(
                "bg-white p-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg",
                !scrolled ? "bg-white/90" : "bg-white"
              )}>
                <Image 
                  src="/img/logoyaman-1.png" 
                  alt="Yaman Kazan Logo" 
                  width={160} 
                  height={45} 
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn(
                "relative z-[70] flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 active:scale-90",
                mobileMenuOpen 
                  ? "bg-primary-900 text-white" 
                  : scrolled ? "bg-primary-50 text-primary-950" : "bg-white/10 text-white backdrop-blur-md"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menüyü Aç</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Premium Mobile Menu Overlay - Moved outside header to avoid backdrop-blur issues */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-primary-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[60] w-full bg-white shadow-2xl sm:max-w-sm lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/img/logoyaman-1.png" 
                    alt="Yaman Kazan Logo" 
                    width={140} 
                    height={40} 
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                {/* Close button inside the menu for better UX */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-6">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="group">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-2 text-2xl font-black text-primary-950 hover:text-secondary-600 transition-colors"
                          onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                        >
                          {item.name}
                          {item.dropdown && (
                            <ChevronRight 
                              className={cn(
                                "h-6 w-6 transition-transform duration-300",
                                activeDropdown === item.name ? "rotate-90" : ""
                              )}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveDropdown(activeDropdown === item.name ? null : item.name);
                              }}
                            />
                          )}
                        </Link>
                        
                        {item.dropdown && (
                          <motion.div 
                            initial={false}
                            animate={{ 
                              height: activeDropdown === item.name ? "auto" : 0,
                              opacity: activeDropdown === item.name ? 1 : 0
                            }}
                            className="overflow-hidden bg-primary-50/50 rounded-2xl mt-2"
                          >
                            <div className="py-2 px-4 space-y-1">
                              {item.dropdown.map((dropItem) => (
                                <Link
                                  key={dropItem.name}
                                  href={dropItem.href}
                                  className="block py-3 px-2 text-[15px] font-bold text-primary-900/70 hover:text-secondary-600"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-100"
                >
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">İletişim</h4>
                  <div className="space-y-4">
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 text-primary-950 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="font-bold">{CONTACT_INFO.phone}</span>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-primary-950 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="font-bold">{CONTACT_INFO.email}</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full rounded-2xl bg-primary-900 py-4 text-center text-base font-black text-white shadow-xl shadow-primary-900/20 active:scale-95 transition-transform"
                >
                  WHATSAPP'TAN TEKLİF ALIN
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

