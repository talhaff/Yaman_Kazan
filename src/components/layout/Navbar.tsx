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
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-premium py-2" 
            : "bg-transparent py-6"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <div className={cn(
                "p-2 rounded-2xl transition-all duration-500 group-hover:scale-105",
                scrolled ? "bg-white shadow-sm" : "bg-white/90 shadow-xl"
              )}>
                <Image 
                  src="/img/logoyaman-1.png" 
                  alt="Yaman Kazan Logo" 
                  width={160} 
                  height={45} 
                  className="h-9 md:h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1 py-4",
                    scrolled ? "text-primary-950 hover:text-secondary-600" : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.dropdown && (
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden p-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-3 text-sm font-bold text-primary-900 hover:bg-primary-50 hover:text-secondary-600 rounded-xl transition-all"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
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
                "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-lg",
                scrolled 
                  ? "bg-primary-950 text-white hover:bg-primary-900 shadow-primary-950/20" 
                  : "bg-white text-primary-900 hover:bg-gray-50 shadow-white/10"
              )}
            >
              <Phone className="h-4 w-4" />
              HIZLI TEKLİF
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn(
                "relative z-[70] flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 active:scale-90 shadow-lg",
                mobileMenuOpen 
                  ? "bg-secondary-600 text-white" 
                  : scrolled ? "bg-primary-950 text-white" : "bg-white text-primary-950"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menüyü Aç</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-primary-950/60 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm bg-white lg:hidden flex flex-col shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between px-8 py-8">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/img/logoyaman-1.png" 
                    alt="Yaman Kazan Logo" 
                    width={140} 
                    height={40} 
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-4">
                <nav className="space-y-4">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div>
                        <div className="flex items-center justify-between group">
                          <Link
                            href={item.href}
                            className="flex-1 py-3 text-2xl font-black text-primary-950 hover:text-secondary-600 transition-colors tracking-tighter"
                            onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                          {item.dropdown && (
                            <button 
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="p-3 bg-primary-50 rounded-xl text-primary-900 active:scale-90 transition-transform"
                            >
                              <ChevronRight 
                                className={cn(
                                  "h-5 w-5 transition-transform duration-300",
                                  activeDropdown === item.name ? "rotate-90" : ""
                                )}
                              />
                            </button>
                          )}
                        </div>
                        
                        {item.dropdown && (
                          <motion.div 
                            initial={false}
                            animate={{ 
                              height: activeDropdown === item.name ? "auto" : 0,
                              opacity: activeDropdown === item.name ? 1 : 0
                            }}
                            className="overflow-hidden bg-primary-50/50 rounded-2xl mt-2"
                          >
                            <div className="py-2 px-2 space-y-1">
                              {item.dropdown.map((dropItem) => (
                                <Link
                                  key={dropItem.name}
                                  href={dropItem.href}
                                  className="block py-4 px-4 text-sm font-bold text-primary-900/80 hover:text-secondary-600 hover:bg-white rounded-xl transition-all"
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
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-gray-100"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">BİZE ULAŞIN</p>
                  <div className="space-y-4">
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 text-primary-950 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 group-hover:bg-primary-950 group-hover:text-white transition-all shadow-sm">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Telefon</p>
                        <span className="font-black text-lg tracking-tighter">{CONTACT_INFO.phone}</span>
                      </div>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-primary-950 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 group-hover:bg-primary-950 group-hover:text-white transition-all shadow-sm">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">E-Posta</p>
                        <span className="font-black text-lg tracking-tighter">{CONTACT_INFO.email}</span>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="p-8 space-y-3">
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full rounded-2xl bg-secondary-600 py-5 text-center text-base font-black text-white shadow-xl shadow-secondary-600/20 active:scale-95 transition-transform uppercase tracking-tighter"
                >
                  WHATSAPP'TAN TEKLİF AL
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

