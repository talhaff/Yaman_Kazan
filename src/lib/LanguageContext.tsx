"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { services } from "@/constants/services";

export type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navbar
    "nav.home": "Anasayfa",
    "nav.corporate": "Kurumsal",
    "nav.about": "Hakkımızda",
    "nav.references": "Referanslar",
    "nav.certificates": "Sertifikalar",
    "nav.policy": "Entegre Yönetim Politikası",
    "nav.services": "Faaliyet Alanları",
    "nav.projects": "Projeler",
    "nav.completedProjects": "Tamamlanan Projeler",
    "nav.ongoingProjects": "Devam Eden Projeler",
    "nav.contact": "İletişim",
    "nav.quickProposal": "HIZLI TEKLİF",
    "nav.emailProposal": "E-POSTA İLE TEKLİF AL",
    "nav.openMenu": "Menüyü Aç",
    "nav.contactUs": "BİZE ULAŞIN",
    "nav.phone": "Telefon",
    "nav.email": "E-Posta",

    // Hero
    "hero.trustedPartner": "ENDÜSTRİYEL TESİSLERİN GÜVENİLİR ÇÖZÜM ORTAĞI",
    "hero.description": "Yaman Kazan ve Makine, yüksek kapasiteli buhar sistemlerinden endüstriyel tesis kurulumlarına kadar her aşamada yenilikçi mühendislik çözümleri sunar. Deneyimli kadromuz ve kalite odaklı yaklaşımımızla, projelerinizde verimliliği ve güvenliği en üst düzeye taşıyoruz.",
    "hero.contact": "İletişim",
    "hero.discover": "Keşfedin",
    "hero.yearsExp": "Yıllık Deneyim",
    "hero.hqAddress": "Merkez Adres",
    "hero.corpComm": "Kurumsal İletişim",

    // About Collage
    "about.welcome": "HOŞGELDİNİZ",
    "about.title": "Hakkımızda",
    "about.subtitle": "Endüstriyel Alanda Öncü Şirket",
    "about.p1": "Yaman Kazan ve Makine, endüstriyel tesislerin ihtiyaç duyduğu yüksek teknolojili buhar sistemleri ve mekanik çözümler konusunda uzmanlaşmış, sektörün güvenilir mühendislik partneridir.",
    "about.p2": "Mühendislik disiplini ve yenilikçi üretim tekniklerini bir araya getirerek, anahtar teslim projelerden periyodik bakımlara kadar geniş bir spektrumda kesintisiz hizmet sağlıyoruz.",
    "about.moreInfo": "DAHA FAZLA BİLGİ",

    // Stats
    "stats.countries": "Ülkeler",
    "stats.projects": "Projeler",
    "stats.years": "Yıllık Deneyim",
    "stats.clients": "Mutlu Müşteri",

    // Sectors
    "sectors.subtitle": "Sektörel Çözümler",
    "sectors.title1": "HİZMET VERDİĞİMİZ",
    "sectors.title2": "SEKTÖRLER",
    "sectors.description": "Yaman Kazan ve Makine, yüksek mühendislik disiplini ve teknik imalat gücüyle gıdadan enerjiye, çimentodan ağır sanayiye kadar birçok farklı endüstriyel sektöre anahtar teslim çözümler sunmaktadır.",
    "sectors.1": "Çay Fabrikaları",
    "sectors.2": "Şeker Fabrikaları",
    "sectors.3": "Enerji Santralleri",
    "sectors.4": "Biyokütle Enerji Tesisleri",
    "sectors.5": "Gıda Sanayi Tesisleri",
    "sectors.6": "Çimento Fabrikaları",
    "sectors.7": "Endüstriyel Üretim Tesisleri",
    "sectors.8": "Buhar ve Proses Tesisleri",
    "sectors.9": "Ağır Sanayi Tesisleri",
    "sectors.10": "Organize Sanayi Bölgesi Fabrikaları",

    // Home Features
    "features.whyUs": "Neden Biz?",
    "features.title": "TEKNOLOJİ VE GÜVENİN MERKEZİ",
    "features.description": "Yaman Kazan ve Makine, her projede kaliteli işçilik, iş güvenliği ve zamanında teslim anlayışı ile hareket eder.",
    "features.1.title": "Yüksek Güvenlik",
    "features.1.desc": "Uluslararası İSG standartlarını tüm operasyonlarımızın merkezine koyuyoruz.",
    "features.2.title": "Hassas Mühendislik",
    "features.2.desc": "En zorlu toleranslarda bile kusursuz sonuçlar için uzman kadro ve ileri teknoloji.",
    "features.3.title": "Kalite Belgesi",
    "features.3.desc": "ISO ve EN standartlarında sertifikalandırılmış sürdürülebilir kalite garantisi.",
    "features.cta.title": "YENİ BİR PROJE BAŞLATIN",
    "features.cta.desc": "Endüstriyel tesisleriniz için profesyonel mühendislik çözümlerine mi ihtiyacınız var? Hemen iletişime geçin.",
    "features.cta.btn1": "BİZE ULAŞIN",
    "features.cta.btn2": "TEKNİK KAPASİTEYİ İNCELEYİN",

    // Footer
    "footer.desc": "Endüstriyel buhar kazanları, basınçlı kaplar ve mekanik tesisat alanında mühendislik kalitesiyle sürdürülebilir çözümler sunuyoruz.",
    "footer.address": "Yeşiloba Mah. Şehit Pilot Fehmi Alemdar Bulv. No: 134/Z27 Seyhan/ADANA",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.contactInfo": "İletişim Bilgileri",
    "footer.rights": "Tüm Hakları Saklıdır.",

    // About Page
    "aboutPage.heritage": "Mirasımız",
    "aboutPage.title": "GÜÇLÜ MÜHENDİSLİK İLE GELECEĞİ İNŞA EDİYORUZ.",
    "aboutPage.p1": "Yaman Kazan ve Makine, endüstriyel tesislerin ihtiyaç duyduğu yüksek kapasiteli buhar kazanları, basınçlı kaplar ve mekanik sistemlerin tasarımı, imalatı ve kurulumunda uzmanlaşmış öncü bir mühendislik firmasıdır. Kuruluşumuzdan bu yana, teknolojik gelişmeleri ve küresel standartları yakından takip ederek ağır sanayi tesislerine güvenli, verimli ve uzun ömürlü mühendislik çözümleri sunmaktayız.",
    "aboutPage.p2": "Firmamız; yüksek kapasiteli buhar üretim tesislerinin anahtar teslim kurulumlarından, mevcut sistemlerin yüksek basınç dayanımlı revizyon çalışmalarına kadar tüm süreçleri tek bir çatı altında başarıyla yürütmektedir. Tasarımdan üretime, saha montajından devreye almaya kadar her aşamada üstün mühendislik disiplini ve kusursuz işçilik standartlarını uygulamaktayız.",
    "aboutPage.p3": "Geniş faaliyet alanlarımız kapsamında; endüstriyel tesis taahhüt hizmetleri, yüksek basınçlı borulama ve proses hatları, çelik konstrüksiyon imalatları ile mekanik tesisat uygulamalarında uzmanlaşmış durumdayız. Gıda, çimento, enerji ve ağır sanayi sektörlerindeki üreticilerin güvenilir çözüm ortağı olarak, tesislerin operasyonel sürekliliğini ve enerji verimliliğini maksimize etmekteyiz.",
    "aboutPage.p4": "Yürüttüğümüz tüm projelerde temel önceliğimiz; iş sağlığı ve güvenliği ilkelerinden taviz vermemek, uluslararası kalite normlarında üretim yapmak ve taahhütlerimizi zamanında eksiksiz teslim etmektir. Mühendislik gücümüzü modern üretim tesisimiz ve sahada tecrübeli uzman ekiplerimizle birleştirerek, imza attığımız her projede güvenilirliğin simgesi olmaya devam ediyoruz.",
    "aboutPage.vision": "Vizyonumuz",
    "aboutPage.visionDesc": "Endüstriyel kazan, basınçlı kaplar ve mekanik tesisat alanlarında; mühendislik kalitesi, güvenilir uygulama anlayışı ve sürdürülebilir çözümlerimizle sektörün tercih edilen firmaları arasında yer almak.",
    "aboutPage.mission": "Misyonumuz",
    "aboutPage.missionDesc": "Yenilikçi, sürdürülebilir ve yüksek kaliteli mühendislik hizmetlerini, insan sağlığını ve çevre güvenliğini her şeyin üzerinde tutarak müşterilerimize sunmak.",
    "aboutPage.ctaTitle": "SİZİN İÇİN DEĞER ÜRETMEYE HAZIRIZ.",
    "aboutPage.ctaDesc": "Projelerinizi dünya standartlarında hayata geçirmek için profesyonel ekibimizle tanışın.",

    // Quality Policy
    "policy.title": "Entegre Yönetim Sistemi Politikası",
    "policy.desc": "Kalite, çevre ve iş güvenliği standartlarına tavizsiz bağlıyız.",
    "policy.principles": "Politikamızın Temel İlkeleri",
    "policy.1": "Müşteri beklenti ve ihtiyaçlarını yasal şartlar çerçevesinde karşılamak.",
    "policy.2": "İş sağlığı ve güvenliği risklerini en aza indirerek güvenli bir çalışma ortamı sağlamak.",
    "policy.3": "Çevresel etkileri azaltmak, doğal kaynakları verimli kullanmak ve kirliliği önlemek.",
    "policy.4": "Tüm çalışanların katılımı ile süreçlerimizi sürekli iyileştirmek.",
    "policy.5": "Kalite, çevre ve İSG performansımızı sürekli olarak artırmak.",
    "policy.6": "Teknolojik gelişmeleri yakından takip ederek üretim verimliliğini maksimize etmek.",
    "policy.quote": "\"Yaman Kazan olarak vizyonumuz; üstlendiğimiz tüm projelerde uluslararası standartlara uymak, çevreye saygılı olmak ve çalışanlarımızın güvenliğini her şeyin üstünde tutarak sektörde öncü ve kalıcı bir marka olmaktır.\"",
    "policy.founder": "Yunus Yaman",
    "policy.role": "Kurucu & Genel Müdür",

    // References
    "ref.subtitle": "Küresel İş Ortaklarımız",
    "ref.title1": "BİRLİKTE",
    "ref.title2": "GÜÇLÜYÜZ",
    "ref.ctaTitle": "SİZİN PROJENİZİ DE BAŞARIYLA TAMAMLAYALIM",
    "ref.ctaDesc": "Tecrübeli saha kadromuz ve uygulama disiplinimiz ile endüstriyel tesis projelerinizde en güvenilir çözüm ortağınız olmaya hazırız.",
    "ref.btn1": "İLETİŞİME GEÇİN",
    "ref.btn2": "PROJELERİMİZİ İNCELEYİN",

    // Certificates
    "cert.title": "Kalite & Sertifikalar",
    "cert.desc": "Uluslararası standartlarda üretim kalitemizi belgeleyen sertifikalarımız.",
    "cert.subtitle": "Kalite Standartlarımız",
    "cert.title1": "GÜVENİLİR VE SERTİFİKALI ÇÖZÜMLER",
    "cert.title1.part1": "GÜVENİLİR VE",
    "cert.title1.part2": "SERTİFİKALI",
    "cert.title1.part3": "ÇÖZÜMLER",
    "cert.p1": "Yaman Kazan, tüm imalat süreçlerinde EN standartlarına ve ISO yönetim sistemlerine tam uyum sağlar. Sertifikalarımız, teknik uzmanlığımızın ve kaliteye olan bağlılığımızın birer kanıtıdır.",
    "cert.qmsTitle": "KYS Politikamız Hakkında",
    "cert.qmsDesc": "Kalite yönetim sistemlerimizin detayları ve üretim süreçlerimizdeki standartlarımız hakkında daha fazla bilgi almak için politikamızı inceleyebilirsiniz.",
    "cert.qmsBtn": "KALİTE POLİTİKAMIZ",
    
    // Fallback Certificates
    "cert.fb.45001.issuer": "İş Sağlığı ve Güvenliği Yönetim Sistemi Sertifikası",
    "cert.fb.9001.issuer": "Kalite Yönetim Sistemi Sertifikası",
    "cert.fb.14001.issuer": "Çevre Yönetim Sistemi Sertifikası",

    // Contact
    "contact.title": "Bize Ulaşın",
    "contact.desc": "Projeleriniz için teklif almak veya uzman kadromuzla görüşmek için iletişim kanallarımızı kullanabilirsiniz.",
    "contact.subtitle": "İletişim Kanalları",
    "contact.title1": "HAYALİNİZDEKİ PROJEYİ BİRLİKTE GERÇEKLEŞTİRELİM.",
    "contact.address": "Atölye & Ofis",
    "contact.phone": "Telefon Hattı",
    "contact.email": "E-Posta Adresi",
    "contact.hours": "Çalışma Saatleri",
    "contact.hoursDetail": "Pazartesi - Cumartesi: 08:30 - 18:30",
    "contact.form.title": "Bize Yazın.",
    "contact.form.name": "Adınız Soyadınız",
    "contact.form.namePh": "Ahmet Yılmaz",
    "contact.form.email": "E-Posta Adresiniz",
    "contact.form.phone": "Telefon No",
    "contact.form.subject": "Konu",
    "contact.form.sub1": "Genel Bilgi Talebi",
    "contact.form.sub2": "Teklif İstiyorum",
    "contact.form.sub3": "Teknik Destek",
    "contact.form.sub4": "Diğer",
    "contact.form.message": "Mesajınız",
    "contact.form.messagePh": "Mesajınızı buraya yazın...",
    "contact.form.submit": "Mesajı Gönder",
    "contact.form.success": "Mesajınız Alındı!",
    "contact.form.successDesc": "Mesajınız başarıyla iletildi. Uzman ekibimiz en kısa sürede belirttiğiniz e-posta adresi üzerinden size dönüş yapacaktır.",
    "contact.form.newMsg": "Yeni Mesaj Gönder",

    // Services
    "srv.title": "Faaliyet Alanlarımız",
    "srv.desc": "Endüstriyel tesis kurulumundan ağır ekipman montajına kadar mühendisliğin gücünü sahaya yansıtıyoruz.",
    "srv.viewDetails": "Detayları Gör",
    "srv.otherServices": "DİĞER HİZMETLERİMİZİ GÖRÜN",
    "srv.partner": "GÜCÜMÜZE ORTAK OLUN.",
    "srv.startProject": "Proje Başlatın",
    "srv.getProposal": "TEKLİF ALIN",
    "srv.why": "Neden Yaman Kazan?",
    "srv.goalOriented": "Hedef Odaklı Çözümler",
    "srv.superiorWork": "Üstün İşçilik Garantisi",
    "srv.appDetails": "Uygulama Detayları",
    "srv.engPower": "Mühendislik Gücü",
    "srv.standards": "Hizmet Standartlarımız",
    "srv.std1.title": "Analiz ve Tasarım",
    "srv.std1.desc": "Saha keşfi ve teknik analizler ile ihtiyaca en uygun sistem tasarımı gerçekleştiriyoruz.",
    "srv.std2.title": "Kalite Kontrol",
    "srv.std2.desc": "ISO ve ASME standartlarında belgelendirilmiş kalite güvence süreçleri uyguluyoruz.",
    "srv.std3.title": "Kurulum ve Montaj",
    "srv.std3.desc": "Sertifikalı ekipler ve modern ekipmanlar ile hatasız saha operasyonları yürütüyoruz.",
    "srv.std4.title": "Devreye Alma",
    "srv.std4.desc": "Tüm sistemlerin sorunsuz çalışması için kapsamlı test ve devreye alma süreçleri.",
    "srv.allServices": "TÜM FAALİYET ALANLARI",
    "srv.area": "Uzmanlık Alanı",
    "srv.productGrp": "Ürün Grubu",
    "srv.safe": "Sertifikalı Güvenlik",
    "srv.safeDesc": "Tüm operasyonlarımızın EN standartları ve ISO yönetim sistemlerine uygun yürütüldüğünü garanti ediyoruz.",
    "srv.tech": "Teknolojik Altyapı",
    "srv.techDesc": "En son teknoloji ekipmanlar ve yazılımlar ile hata payını sıfıra indiriyoruz.",

    // Projects
    "prj.title": "Projelerimiz",
    "prj.desc": "Türkiye'nin sanayi altyapısına güç katan, başarıyla tamamladığımız ve gururla yürüttüğümüz projelerimiz.",
    "prj.all": "Tümü",
    "prj.completed": "Tamamlanan Projeler",
    "prj.ongoing": "Devam Eden Projeler",
    "prj.empty": "Bu kategoride henüz proje bulunmamaktadır.",
    "prj.details": "Proje Detayları",
    "prj.statusCompleted": "Tamamlandı",
    "prj.statusOngoing": "Devam Ediyor",
    "prj.cat.industrial": "Endüstriyel Tesis",
    "prj.cat.mechanical": "Mekanik Montaj",
    "prj.cat.boiler": "Kazan & Basınçlı Kaplar",
    "prj.cat.revision": "Revizyon & Bakım",
    "prj.cat.general": "Genel",
    "prj.about": "Proje Hakkında",
    "prj.gallery": "Proje Galerisi",
    "prj.other": "Diğer Projelerimize Göz Atın",
    "prj.allProjectsBtn": "Tüm Projeler",
    "pageHeader.subtitle": "Yaman Kazan Sektörel Güç",
    "hero.title": "ENDÜSTRİYEL TESİSLERİN GÜVENİLİR ÇÖZÜM ORTAĞI",
    "sectors.title": "HİZMET VERDİĞİMİZ SEKTÖRLER",
    "services.serviceArea": "FAALİYET ALANI",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.corporate": "Corporate",
    "nav.about": "About Us",
    "nav.references": "References",
    "nav.certificates": "Certificates",
    "nav.policy": "Integrated Management Policy",
    "nav.services": "Fields of Activity",
    "nav.projects": "Projects",
    "nav.completedProjects": "Completed Projects",
    "nav.ongoingProjects": "Ongoing Projects",
    "nav.contact": "Contact",
    "nav.quickProposal": "QUICK PROPOSAL",
    "nav.emailProposal": "GET PROPOSAL BY EMAIL",
    "nav.openMenu": "Open Menu",
    "nav.contactUs": "CONTACT US",
    "nav.phone": "Phone",
    "nav.email": "Email",

    // Hero
    "hero.trustedPartner": "THE TRUSTED SOLUTION PARTNER OF INDUSTRIAL PLANTS",
    "hero.description": "Yaman Kazan & Makine offers innovative engineering solutions at every stage, from high-capacity steam systems to industrial plant installations. With our experienced staff and quality-oriented approach, we maximize efficiency and safety in your projects.",
    "hero.contact": "Contact",
    "hero.discover": "Discover",
    "hero.yearsExp": "Years of Experience",
    "hero.hqAddress": "Head Office Address",
    "hero.corpComm": "Corporate Communication",

    // About Collage
    "about.welcome": "WELCOME",
    "about.title": "About Us",
    "about.subtitle": "Pioneer Company in the Industrial Field",
    "about.p1": "Yaman Kazan & Makine is the trusted engineering partner of the sector, specializing in high-tech steam systems and mechanical solutions required by industrial plants.",
    "about.p2": "By combining engineering discipline and innovative production techniques, we provide uninterrupted service in a wide spectrum from turnkey projects to periodic maintenance.",
    "about.moreInfo": "MORE INFORMATION",

    // Stats
    "stats.countries": "Countries",
    "stats.projects": "Projects",
    "stats.years": "Years of Experience",
    "stats.clients": "Happy Clients",

    // Sectors
    "sectors.subtitle": "Sectoral Solutions",
    "sectors.title1": "SECTORS",
    "sectors.title2": "WE SERVE",
    "sectors.description": "Yaman Kazan & Makine offers turnkey solutions to many different industrial sectors from food to energy, cement to heavy industry with high engineering discipline and technical manufacturing power.",
    "sectors.1": "Tea Factories",
    "sectors.2": "Sugar Factories",
    "sectors.3": "Power Plants",
    "sectors.4": "Biomass Energy Plants",
    "sectors.5": "Food Industry Plants",
    "sectors.6": "Cement Factories",
    "sectors.7": "Industrial Production Plants",
    "sectors.8": "Steam and Process Plants",
    "sectors.9": "Heavy Industry Plants",
    "sectors.10": "Organized Industrial Zone Factories",

    // Home Features
    "features.whyUs": "Why Us?",
    "features.title": "THE CENTER OF TECHNOLOGY AND TRUST",
    "features.description": "Yaman Kazan & Makine acts with the understanding of quality workmanship, occupational safety and on-time delivery in every project.",
    "features.1.title": "High Security",
    "features.1.desc": "We put international OHS standards at the center of all our operations.",
    "features.2.title": "Precision Engineering",
    "features.2.desc": "Expert staff and advanced technology for flawless results even in the tightest tolerances.",
    "features.3.title": "Quality Certificate",
    "features.3.desc": "Certified sustainable quality guarantee in ISO and EN standards.",
    "features.cta.title": "START A NEW PROJECT",
    "features.cta.desc": "Do you need professional engineering solutions for your industrial plants? Contact us now.",
    "features.cta.btn1": "CONTACT US",
    "features.cta.btn2": "EXAMINE TECHNICAL CAPACITY",

    // Footer
    "footer.desc": "We offer sustainable solutions with engineering quality in the fields of industrial steam boilers, pressure vessels, and mechanical installation.",
    "footer.address": "Yeşiloba Mah. Şehit Pilot Fehmi Alemdar Bulv. No: 134/Z27 Seyhan/ADANA",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Information",
    "footer.rights": "All Rights Reserved.",

    // About Page
    "aboutPage.heritage": "Our Heritage",
    "aboutPage.title": "BUILDING THE FUTURE WITH STRONG ENGINEERING.",
    "aboutPage.p1": "Yaman Kazan & Makine is a leading engineering company specializing in the design, manufacture, and installation of high-capacity steam boilers, pressure vessels, and mechanical systems required by industrial plants. Since our establishment, we have been closely following technological developments and global standards to provide safe, efficient, and long-lasting engineering solutions to heavy industrial facilities.",
    "aboutPage.p2": "Our company successfully carries out all processes under a single roof, from turnkey installations of high-capacity steam generation plants to high-pressure resistant revision works of existing systems. We apply superior engineering discipline and flawless workmanship standards at every stage, from design to production, field installation to commissioning.",
    "aboutPage.p3": "Within the scope of our wide fields of activity, we specialize in industrial plant contracting services, high-pressure piping and process lines, steel construction manufacturing, and mechanical installation applications. As a reliable solution partner of producers in the food, cement, energy, and heavy industry sectors, we maximize the operational continuity and energy efficiency of facilities.",
    "aboutPage.p4": "In all projects we carry out, our primary priority is not to compromise on occupational health and safety principles, to manufacture in international quality norms, and to deliver our commitments completely on time. By combining our engineering power with our modern production facility and experienced field specialist teams, we continue to be the symbol of reliability in every project we sign.",
    "aboutPage.vision": "Our Vision",
    "aboutPage.visionDesc": "To be among the preferred companies in the sector with our engineering quality, reliable application understanding, and sustainable solutions in the fields of industrial boilers, pressure vessels, and mechanical installations.",
    "aboutPage.mission": "Our Mission",
    "aboutPage.missionDesc": "To provide innovative, sustainable, and high-quality engineering services to our customers, keeping human health and environmental safety above all else.",
    "aboutPage.ctaTitle": "WE ARE READY TO GENERATE VALUE FOR YOU.",
    "aboutPage.ctaDesc": "Meet our professional team to bring your projects to life at world standards.",

    // Quality Policy
    "policy.title": "Integrated Management System Policy",
    "policy.desc": "We are uncompromisingly committed to quality, environmental, and occupational safety standards.",
    "policy.principles": "Basic Principles of Our Policy",
    "policy.1": "Meeting customer expectations and needs within the framework of legal requirements.",
    "policy.2": "Minimizing occupational health and safety risks to provide a safe working environment.",
    "policy.3": "Reducing environmental impacts, using natural resources efficiently, and preventing pollution.",
    "policy.4": "Continuously improving our processes with the participation of all employees.",
    "policy.5": "Continuously increasing our quality, environmental, and OHS performance.",
    "policy.6": "Maximizing production efficiency by closely following technological developments.",
    "policy.quote": "\"As Yaman Kazan, our vision is to comply with international standards in all projects we undertake, to respect the environment, and to be a pioneer and permanent brand in the sector by keeping the safety of our employees above everything else.\"",
    "policy.founder": "Yunus Yaman",
    "policy.role": "Founder & General Manager",

    // References
    "ref.subtitle": "Our Global Partners",
    "ref.title1": "STRONG",
    "ref.title2": "TOGETHER",
    "ref.ctaTitle": "LET US SUCCESSFULLY COMPLETE YOUR PROJECT TOO",
    "ref.ctaDesc": "We are ready to be your most reliable solution partner in your industrial facility projects with our experienced field staff and application discipline.",
    "ref.btn1": "GET IN TOUCH",
    "ref.btn2": "EXAMINE OUR PROJECTS",

    // Certificates
    "cert.title": "Quality & Certificates",
    "cert.desc": "Our certificates documenting our production quality at international standards.",
    "cert.subtitle": "Our Quality Standards",
    "cert.title1": "RELIABLE & CERTIFIED SOLUTIONS",
    "cert.title1.part1": "RELIABLE &",
    "cert.title1.part2": "CERTIFIED",
    "cert.title1.part3": "SOLUTIONS",
    "cert.p1": "Yaman Kazan ensures full compliance with EN standards and ISO management systems in all manufacturing processes. Our certificates are proof of our technical expertise and commitment to quality.",
    "cert.qmsTitle": "About Our QMS Policy",
    "cert.qmsDesc": "You can review our policy to get more information about the details of our quality management systems and our standards in our production processes.",
    "cert.qmsBtn": "OUR QUALITY POLICY",
    
    // Fallback Certificates
    "cert.fb.45001.issuer": "Occupational Health and Safety Management System Certificate",
    "cert.fb.9001.issuer": "Quality Management System Certificate",
    "cert.fb.14001.issuer": "Environmental Management System Certificate",

    // Contact
    "contact.title": "Contact Us",
    "contact.desc": "You can use our communication channels to get a proposal for your projects or to meet with our expert staff.",
    "contact.subtitle": "Communication Channels",
    "contact.title1": "LET'S REALIZE YOUR DREAM PROJECT TOGETHER.",
    "contact.address": "Workshop & Office",
    "contact.phone": "Phone Line",
    "contact.email": "E-Mail Address",
    "contact.hours": "Working Hours",
    "contact.hoursDetail": "Monday - Saturday: 08:30 - 18:30",
    "contact.form.title": "Write to Us.",
    "contact.form.name": "Your Full Name",
    "contact.form.namePh": "John Doe",
    "contact.form.email": "Your E-Mail Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.sub1": "General Information Request",
    "contact.form.sub2": "I Want a Proposal",
    "contact.form.sub3": "Technical Support",
    "contact.form.sub4": "Other",
    "contact.form.message": "Your Message",
    "contact.form.messagePh": "Write your message here...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message Received!",
    "contact.form.successDesc": "Your message has been successfully sent. Our expert team will get back to you as soon as possible via the e-mail address you specified.",
    "contact.form.newMsg": "Send New Message",

    // Services
    "srv.title": "Our Fields of Activity",
    "srv.desc": "We reflect the power of engineering to the field, from industrial plant installation to heavy equipment assembly.",
    "srv.viewDetails": "View Details",
    "srv.otherServices": "SEE OUR OTHER SERVICES",
    "srv.partner": "PARTNER IN OUR STRENGTH.",
    "srv.startProject": "Start a Project",
    "srv.getProposal": "GET A PROPOSAL",
    "srv.why": "Why Yaman Kazan?",
    "srv.goalOriented": "Goal-Oriented Solutions",
    "srv.superiorWork": "Superior Workmanship Guarantee",
    "srv.appDetails": "Application Details",
    "srv.engPower": "Engineering Power",
    "srv.standards": "Our Service Standards",
    "srv.std1.title": "Analysis and Design",
    "srv.std1.desc": "We design the most suitable system for your needs through site inspection and technical analysis.",
    "srv.std2.title": "Quality Control",
    "srv.std2.desc": "We implement quality assurance processes certified in ISO and ASME standards.",
    "srv.std3.title": "Installation and Assembly",
    "srv.std3.desc": "We conduct flawless field operations with certified teams and modern equipment.",
    "srv.std4.title": "Commissioning",
    "srv.std4.desc": "Comprehensive testing and commissioning processes to ensure all systems run smoothly.",
    "srv.allServices": "ALL FIELDS OF ACTIVITY",
    "srv.area": "Area of Expertise",
    "srv.productGrp": "Product Group",
    "srv.safe": "Certified Safety",
    "srv.safeDesc": "We guarantee that all our operations are carried out in compliance with EN standards and ISO management systems.",
    "srv.tech": "Technological Infrastructure",
    "srv.techDesc": "We reduce the margin of error to zero with the latest technology equipment and software.",

    // Projects
    "prj.title": "Our Projects",
    "prj.desc": "Our projects that add strength to Turkey's industrial infrastructure, successfully completed and proudly ongoing.",
    "prj.all": "All",
    "prj.completed": "Completed Projects",
    "prj.ongoing": "Ongoing Projects",
    "prj.empty": "There are no projects in this category yet.",
    "prj.details": "Project Details",
    "prj.statusCompleted": "Completed",
    "prj.statusOngoing": "Ongoing",
    "prj.cat.industrial": "Industrial Plant",
    "prj.cat.mechanical": "Mechanical Installation",
    "prj.cat.boiler": "Boiler & Pressure Vessels",
    "prj.cat.revision": "Revision & Maintenance",
    "prj.cat.general": "General",
    "prj.about": "About the Project",
    "prj.gallery": "Project Gallery",
    "prj.other": "Browse Our Other Projects",
    "prj.allProjectsBtn": "All Projects",
    "pageHeader.subtitle": "Yaman Kazan Sectoral Power",
    "hero.title": "THE TRUSTED SOLUTION PARTNER OF INDUSTRIAL PLANTS",
    "sectors.title": "SECTORS WE SERVE",
    "services.serviceArea": "FIELD OF ACTIVITY",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("yk_lang") as Language;
    if (storedLang === "en" || storedLang === "tr") {
      setLanguageState(storedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("yk_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    if (!mounted) {
      return translations["tr"][key as keyof typeof translations["tr"]] || key;
    }
    return translations[language][key as keyof typeof translations["tr"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div key={language} style={{ display: 'contents' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
