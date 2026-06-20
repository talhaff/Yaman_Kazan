"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Target,
  Award
} from "lucide-react";
import { Service } from "@/constants/services";
import { useTranslation } from "@/lib/LanguageContext";

interface TabData {
  id: string;
  title: string;
  titleEn?: string;
  content: string;
  contentEn?: string;
  images?: string[];
}

const buharKazaniTabs: TabData[] = [
  { 
    id: 'buhar-kazani', 
    title: 'Buhar Kazanı', 
    titleEn: 'Steam Boiler',
    contentEn: `Steam Boilers are advanced engineering pressurized systems designed to meet the high-capacity, continuous, and high-efficiency steam needs of industrial facilities.

Manufactured project-specifically with compatibility for solid, liquid, gas, and biomass fuel types according to needs, with high operational safety, maximum heat transfer, and minimum fuel consumption standards.

As Yaman Kazan, we provide steam boiler manufacturing, assembly, revision, and maintenance services in accordance with international EN standards and ISO management systems to meet the energy requirements of factories and industrial processes.`,
    content: `Buhar Kazanları, endüstriyel tesislerin yüksek kapasiteli, kesintisiz ve yüksek verimli buhar ihtiyacını karşılamak amacıyla tasarlanmış ileri mühendislik ürünü basınçlı sistemlerdir.

İhtiyaca göre katı, sıvı, gaz ve biyokütle yakıt tiplerine uyumlu; yüksek işletme güvenliği, maksimum ısı transferi ve minimum yakıt tüketimi standartlarıyla projeye özel olarak imal edilir.

Yaman Kazan olarak fabrikaların ve endüstriyel proseslerin enerji gereksinimlerini karşılamak üzere uluslararası EN standartları ve ISO yönetim sistemlerine uygun şekilde buhar kazanı imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.`,
    images: ['/img/buharkazan_04.jpeg', '/img/buharkazan_06.jpeg']
  },
  { 
    id: 'sicak-su-kazani', 
    title: 'Sıcak Su Kazanı', 
    titleEn: 'Hot Water Boiler',
    contentEn: `Hot water boilers are pressurized systems that safely, efficiently, and continuously produce the hot water needed in industrial facilities and heating systems.

Hot water boilers, designed according to fuel type and capacity, are used in many areas such as factories, hotels, hospitals, residential projects, industrial facilities, and process lines.

Systems are designed according to the principles of high efficiency, low fuel consumption, and safe operation; and can be produced with natural gas, solid fuel, liquid fuel, and biomass fuel.

As Yaman Kazan, we provide project-specific hot water boiler manufacturing, assembly, revision, and maintenance services.`,
    content: `Sıcak su kazanları, endüstriyel tesislerde ve ısıtma sistemlerinde ihtiyaç duyulan sıcak suyun güvenli, verimli ve sürekli şekilde üretilmesini sağlayan basınçlı sistemlerdir.

Yakıt türüne ve kapasiteye göre projelendirilen sıcak su kazanları; fabrikalar, oteller, hastaneler, konut projeleri, endüstriyel tesisler ve proses hatları gibi birçok alanda kullanılmaktadır.

Sistemler yüksek verim, düşük yakıt tüketimi ve güvenli işletme prensibine göre tasarlanmakta olup; doğalgazlı, katı yakıtlı, sıvı yakıtlı ve biyokütle yakıtlı olarak üretilebilmektedir.

Yaman Kazan olarak projeye özel sıcak su kazanı imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.`,
    images: ['/img/sicaksukazani.jpeg']
  },
  { 
    id: 'ekonomizer', 
    title: 'Ekonomizer', 
    titleEn: 'Economizer',
    contentEn: `The economizer is a high-efficiency heat recovery equipment that recovers the waste heat energy in the flue gas in steam boiler systems and pre-heats the boiler feed water.

The heat energy in the high-temperature flue   gas coming out of the system is passed through the economizer surfaces and heat transfer is provided to the feed water in a controlled manner. In this way, the fuel consumption is reduced by increasing the boiler inlet water temperature, the thermal efficiency is increased and the operating costs are minimized. Economizer systems are widely used especially in steam boilers, high-pressure systems, solid fuel and biomass boilers, power generation facilities and industrial processes.

Main advantages; reducing fuel consumption, increasing boiler efficiency, reducing flue gas temperature, minimizing energy losses, reducing operating costs and increasing system performance.

As Yaman Kazan, we provide project-specific economizer manufacturing, assembly, revision, and maintenance services.`,
    content: `Ekonomizer, buhar kazanı sistemlerinde baca gazı içerisinde bulunan atık ısı enerjisinin geri kazanılarak kazan besi suyunun ön ısıtılmasını sağlayan yüksek verimli ısı geri kazanım ekipmanıdır.

Sistemden çıkan yüksek sıcaklıktaki baca gazı ekonomizer yüzeylerinden geçirilerek besi suyuna kontrollü şekilde ısı transferi sağlanır. Bu sayede kazan giriş suyu sıcaklığı artırılarak yakıt tüketimi düşürülür, termal verimlilik yükseltilir ve işletme maliyetleri minimize edilir. Ekonomizer sistemleri özellikle buhar kazanları, yüksek basınçlı sistemler, katı yakıtlı ve biyokütle kazanları, enerji üretim tesisleri ve endüstriyel proseslerde yaygın olarak kullanılmaktadır.

Başlıca avantajları; yakıt tüketimini azaltması, kazan verimini artırması, baca gazı sıcaklığını düşürmesi, enerji kayıplarını minimize etmesi, işletme maliyetlerini düşürmesi ve sistem performansını artırmasıdır.

Yaman Kazan olarak projeye özel ekonomizer imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.` 
  },
  { 
    id: 'degazor', 
    title: 'Degazör', 
    titleEn: 'Deaerator',
    contentEn: `The deaerator is a piece of equipment that removes dissolved gases such as oxygen and carbon dioxide from the boiler feed water.

Harmful gases in boiler systems are separated at high temperature, reducing the risk of corrosion and extending the system life. Deaerator systems extend boiler life, reduce corrosion in pipes and equipment, increase system safety, improve feed water quality and contribute to energy efficiency.

The use of a deaerator is of great importance especially in high-pressure steam systems. As Yaman Kazan, we provide project-specific deaerator manufacturing, assembly, revision, and maintenance services.`,
    content: `Degazör, kazan besi suyunda bulunan çözünmüş oksijen ve karbondioksit gibi gazların sistemden uzaklaştırılmasını sağlayan ekipmandır.

Kazan sistemlerinde bulunan zararlı gazlar yüksek sıcaklık altında ayrıştırılarak korozyon riski azaltılır ve sistem ömrü artırılır. Degazör sistemleri; kazan ömrünü uzatır, boru ve ekipmanlarda korozyonu azaltır, sistem güvenliğini artırır, besi suyu kalitesini iyileştirir ve enerji verimliliğine katkı sağlar.

Özellikle yüksek basınçlı buhar sistemlerinde degazör kullanımı büyük önem taşımaktadır. Yaman Kazan olarak projeye özel degazör imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.` 
  },
  { 
    id: 'kondens', 
    title: 'Kondens Tankı', 
    titleEn: 'Condensate Tank',
    contentEn: `The condensate tank is a piece of equipment that collects the condensation water (condensate) formed in steam systems and returns it to the system.

The hot condensate water formed at steam usage points is collected in the tank and sent back to the feed water system, providing energy savings.

Condensate systems reduce fuel consumption, increase energy efficiency, reduce water losses and enable the system to operate more efficiently. As Yaman Kazan, we provide project-specific condensate tank manufacturing, assembly, revision, and maintenance services.`,
    content: `Kondens tankı, buhar sistemlerinde oluşan yoğuşma suyunun (kondens) toplanarak tekrar sisteme kazandırılmasını sağlayan ekipmandır.

Buhar kullanım noktalarında oluşan sıcak kondens suyu tank içerisinde toplanır ve besi suyu sistemine geri gönderilerek enerji tasarrufu sağlanır.

Kondens sistemleri; yakıt tüketimini azaltır, enerji verimliliğini artırır, su kayıplarını azaltır ve sistemin daha verimli çalışmasını sağlar. Yaman Kazan olarak projeye özel kondens tankı imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.` 
  },
  { 
    id: 'elektrostatik-filtre', 
    title: 'Elektrostatik Filtre', 
    titleEn: 'Electrostatic Filter',
    images: ['/img/filtre.jpeg'],
    contentEn: `The electrostatic filter is an emission control system that highly efficiently captures dust and particles in flue gas in industrial facilities.

The system separates the particles in the flue gas by the principle of electrical charging and accumulates them on the collection plates, providing clean gas output to the environment. It is widely used in coal-fired boilers, biomass plants, steam boilers, thermal systems and processes with high emissions.

Electrostatic filter systems reduce dust emissions to a minimum level, ensure compliance with environmental regulations, increase flue gas outlet quality, provide high filtration efficiency and ensure continuous, efficient operation.

As Yaman Kazan, we provide project-specific electrostatic filter manufacturing, assembly, revision, and maintenance services.`,
    content: `Elektrostatik filtre, endüstriyel tesislerde baca gazı içerisindeki toz ve partiküllerin yüksek verimle tutulmasını sağlayan emisyon kontrol sistemidir.

Sistem, baca gazı içerisindeki partikülleri elektriksel yükleme prensibi ile ayrıştırarak toplama plakalarında biriktirir ve çevreye temiz gaz çıkışı sağlar. Kömürlü kazanlar, biyokütle tesisleri, buhar kazanları, termik sistemler ve yüksek emisyon oluşan proseslerde yaygın olarak kullanılmaktadır.

Elektrostatik filtre sistemleri; toz emisyonunu minimum seviyeye indirir, çevre mevzuatına uyum sağlar, baca çıkış kalitesini artırır, yüksek filtreleme verimi sunar ve sürekli, verimli çalışma sağlar.

Yaman Kazan olarak projeye özel elektrostatik filtre imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.` 
  },
  { 
    id: 'rekuperator', 
    title: 'Reküperatör', 
    titleEn: 'Recuperator',
    contentEn: `The recuperator is a heat recovery equipment that recovers the flue gas temperature in boiler and industrial combustion systems, increasing energy efficiency.

The heat energy in the high-temperature flue gas coming out of the system is recovered and used to pre-heat the combustion air or process air. In this way, fuel consumption is reduced and system efficiency is increased. It is widely used in steam boilers, thermal oil boilers, solid fuel systems, biomass plants and industrial process lines.

Recuperator systems save fuel, reduce flue gas temperature, increase combustion efficiency, reduce energy losses and reduce operating costs.

As Yaman Kazan, we provide project-specific recuperator manufacturing, revision, assembly, and maintenance services.`,
    content: `Reküperatör, kazan ve endüstriyel yanma sistemlerinde baca gazı sıcaklığını geri kazanarak enerji verimliliğini artıran ısı geri kazanım ekipmanıdır.

Sistemden çıkan yüksek sıcaklıktaki baca gazı içerisindeki ısı enerjisi geri kazanılarak yanma havasının veya proses havasının ön ısıtılmasında kullanılır. Bu sayede yakıt tüketimi azaltılır ve sistem verimi artırılır. Buhar kazanları, termik yağ kazanları, katı yakıtlı sistemler, biyokütle tesisleri ve endüstriyel proses hatlarında yaygın olarak kullanılmaktadır.

Reküperatör sistemleri; yakıt tasarrufu sağlar, baca gazı sıcaklığını düşürür, yanma verimini artırır, enerji kayıplarını azaltır ve işletme maliyetlerini düşürür.

Yaman Kazan olarak projeye özel reküperatör imalatı, revizyonu, montajı ve bakım hizmetleri sunmaktayız.`, 
    images: ['/img/rekuperator1.png', '/img/rekuperator2.png.jpeg'] 
  },
  { 
    id: 'multisiklon', 
    title: 'Multisiklon', 
    titleEn: 'Multicyclone',
    contentEn: `The multicyclone is a mechanical filtering equipment that captures dust and large particles in the flue gas in solid fuel boiler systems.

Thanks to special cyclone cells and centrifugal force, it separates the ash in the flue gas, reducing environmental emissions and reducing the load on the main filter systems.

As Yaman Kazan, we provide multicyclone manufacturing, assembly and maintenance services specific to coal, biomass and industrial steam boilers.`,
    content: `Multisiklon, katı yakıtlı kazan sistemlerinde baca gazı içerisindeki toz ve iri partiküllerin tutulmasını sağlayan mekanik filtreleme ekipmanıdır.

Özel siklon hücreleri ve merkezkaç kuvveti sayesinde baca gazındaki külleri ayrıştırarak çevre emisyonlarını azaltır ve ana filtre sistemlerinin yükünü düşürür.

Yaman Kazan olarak kömür, biyokütle ve endüstriyel buhar kazanlarına özel multisiklon imalatı, montajı ve bakım hizmetleri sunmaktayız.`, 
    images: ['/img/multisiklon.jpeg', '/img/multisiklon2.jpeg', '/img/multisiklonimalati.jpeg'] 
  },
  { 
    id: 'shell-boiler', 
    title: 'Shell Boiler', 
    titleEn: 'Shell Boiler',
    contentEn: `Shell Boiler, also known as "Fire Tube Boiler", is a high-efficiency boiler system widely used in industrial steam production where hot gases pass through tubes and water is inside the boiler body.

In these systems, the hot gases resulting from combustion pass through the smoke tubes and transfer heat to the water in the body, producing steam. Shell boiler systems are preferred in many industrial facilities due to their advantages such as compact structure, high operational safety, easy maintenance, efficient heat transfer and stable steam production.

Systems are designed and produced project-specifically; based on steam capacity, operating pressure, fuel type, thermal efficiency values and process requirements.

As Yaman Kazan, we provide project-specific shell boiler manufacturing, assembly, revision, and maintenance services.`,
    content: `Shell Boiler, sıcak gazların borular içerisinden geçtiği ve suyun kazan gövdesi içerisinde bulunduğu, endüstriyel buhar üretiminde yaygın olarak kullanılan yüksek verimli kazan sistemidir.

“Fire Tube Boiler” olarak da bilinen bu sistemlerde yanma sonucu oluşan sıcak gazlar duman boruları içerisinden geçirilerek gövde içerisindeki suya ısı transferi sağlar ve buhar üretimi gerçekleştirilir. Shell boiler sistemleri; kompakt yapısı, yüksek işletme güvenliği, kolay bakım imkanı, verimli ısı transferi ve stabil buhar üretimi gibi avantajları sayesinde birçok endüstriyel tesiste tercih edilmektedir.

Sistemler projeye özel olarak; buhar kapasitesi, çalışma basıncı, yakıt tipi, ısıl verim değerleri ve proses ihtiyaçları esas alınarak tasarlanmakta ve üretilmektedir.

Yaman Kazan olarak projeye özel shell boiler imalatı, montajı, revizyonu ve bakım hizmetleri sunmaktayız.`,
    images: ['/img/kaynakisleri.jpeg'] 
  },
  { 
    id: 'steam-drum', 
    title: 'Steam Drum', 
    titleEn: 'Steam Drum',
    contentEn: `The Steam Drum is the main pressurized equipment that safely separates water and steam in water-tube steam boilers.

It is designed and manufactured project-specifically, equipped with level control, safety, blowdown, and feed water lines according to process requirements.

As Yaman Kazan, we provide high-strength steam drum manufacturing, revision, assembly, and maintenance services for industrial facilities.`,
    content: `Steam Drum, su borulu buhar kazanlarında su ve buharın güvenli şekilde ayrıştırılmasını sağlayan ana basınçlı ekipmandır.

Proses gereksinimlerine göre seviye kontrol, emniyet, blöf ve besi suyu hatlarıyla donatılarak projeye özel tasarlanıp imal edilir.

Yaman Kazan olarak endüstriyel tesisler için yüksek dayanımlı steam drum imalatı, revizyonu, montajı ve bakım hizmetleri sunmaktayız.` 
  }
];

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { t, language } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const activeTabItem = buharKazaniTabs[activeTab];
  const hasImages = !!(activeTabItem.images && activeTabItem.images.length > 0);

  useEffect(() => {
    setCurrentImageIdx(0);
    const images = buharKazaniTabs[activeTab].images || [];
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const isBuharKazani = service.slug === 'buhar-kazani-imalat-ve-kurulumu';
  const serviceTitle = language === 'en' && service.titleEn ? service.titleEn : service.title;
  const serviceDesc = language === 'en' && service.descriptionEn ? service.descriptionEn : service.description;

  return (
    <div className="bg-white min-h-screen" ref={containerRef}>
      {/* Premium Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[90vh] flex items-center overflow-hidden bg-primary-950 pb-16 md:pb-20">
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={service.image}
            alt={serviceTitle}
            fill
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/40 to-white" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <Link 
              href="/faaliyet-alanlari"
              className="relative z-50 inline-flex items-center gap-3 md:gap-4 text-white hover:text-primary-400 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[11px] transition-all mb-6 md:mb-16 group cursor-pointer"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-primary-400 group-hover:border-primary-400 group-hover:text-primary-950 transition-all duration-300">
                <ArrowLeft className="h-3 w-3 md:h-5 md:w-5 transition-transform group-hover:-translate-x-1" />
              </div>
              <span className="drop-shadow-md">{t("srv.allServices")}</span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
              <span className="text-white font-black text-5xl md:text-9xl opacity-20 leading-none select-none">
                0{service.number}
              </span>
              <div className="h-0.5 w-10 md:w-20 bg-primary-400 shadow-[0_0_15px_rgba(96,154,250,0.5)]" />
              <span className="text-white font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[7px] md:text-[10px] drop-shadow-md">{t("srv.area")}</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-4 md:mb-12 max-w-4xl drop-shadow-2xl">
              {serviceTitle}
            </h1>
          </motion.div>
        </div>

        {/* Decorative Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4"
        >
          <span className="text-white/30 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{t("hero.discover")}</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-primary-400 to-transparent" />
        </motion.div>
      </section>


      {/* Intro Info Section */}
      {isBuharKazani ? (
        <section className="relative z-10 pb-24 -mt-16 md:-mt-24">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-primary-950/10 border border-slate-50 overflow-hidden">
              
              {/* Desktop Tabs Navigation (Hidden on Mobile) */}
              <div className="hidden md:flex flex-wrap justify-center border-b border-slate-100 bg-slate-50/50">
                {buharKazaniTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-5 lg:px-7 py-5 text-[10px] lg:text-[11px] font-black uppercase tracking-widest transition-all ${
                      activeTab === idx 
                        ? 'text-primary-600 border-b-2 border-primary-600 bg-white' 
                        : 'text-slate-400 hover:text-primary-900 hover:bg-white border-b-2 border-transparent'
                    }`}
                  >
                    {language === 'en' && tab.titleEn ? tab.titleEn : tab.title}
                  </button>
                ))}
              </div>

              {/* Mobile Grid Navigation (Hidden on Desktop) */}
              <div className="md:hidden grid grid-cols-2 gap-2.5 p-4 bg-slate-50/50 border-b border-slate-100">
                {buharKazaniTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-3 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 border ${
                      idx === buharKazaniTabs.length - 1 ? 'col-span-2' : ''
                    } ${
                      activeTab === idx 
                        ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/10' 
                        : 'bg-white text-slate-600 border-slate-200/80 active:bg-slate-50'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-black shrink-0 ${
                      activeTab === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="truncate">{language === 'en' && tab.titleEn ? tab.titleEn : tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-16 lg:p-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-6xl mx-auto"
                  >
                    {hasImages ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary-600" />
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-600">{t("srv.productGrp")}</span>
                          </div>
                          <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter uppercase mb-6 md:mb-8 leading-[1.1]">
                            {language === 'en' && activeTabItem.titleEn ? activeTabItem.titleEn : activeTabItem.title}
                          </h2>
                          <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium mb-8 md:mb-12 whitespace-pre-line">
                            {language === 'en' && activeTabItem.contentEn ? activeTabItem.contentEn : activeTabItem.content}
                          </p>
                          
                          <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                              <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                <ShieldCheck className="h-6 w-6 text-primary-600" />
                              </div>
                              <div>
                                <h4 className="text-sm font-black text-primary-950 uppercase tracking-tight">{t("srv.safe")}</h4>
                                <p className="text-xs font-medium text-slate-500 mt-1">{t("srv.safeDesc")}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                              <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                <Zap className="h-6 w-6 text-primary-600" />
                              </div>
                              <div>
                                <h4 className="text-sm font-black text-primary-950 uppercase tracking-tight">{t("srv.tech")}</h4>
                                <p className="text-xs font-medium text-slate-500 mt-1">{t("srv.techDesc")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 relative overflow-hidden shadow-2xl shadow-primary-950/10 border border-slate-50">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentImageIdx}
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className="absolute inset-0"
                            >
                              <Image 
                                src={activeTabItem.images![currentImageIdx]} 
                                alt={`${activeTabItem.title} ${currentImageIdx + 1}`} 
                                fill 
                                className="object-contain" 
                              />
                            </motion.div>
                          </AnimatePresence>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent pointer-events-none" />
                          
                          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-10 flex flex-col gap-3 pointer-events-none">
                            <p className="text-white font-bold text-base md:text-lg drop-shadow-md">
                              {language === 'en' && activeTabItem.titleEn ? `${activeTabItem.titleEn} Systems` : activeTabItem.title}
                            </p>
                            
                            {/* Carousel Indicators */}
                            {activeTabItem.images!.length > 1 && (
                              <div className="flex items-center gap-1.5">
                                {activeTabItem.images!.map((_, idx) => (
                                  <div 
                                    key={idx} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${currentImageIdx === idx ? 'w-6 bg-primary-400' : 'w-1.5 bg-white/40'}`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-px w-12 bg-primary-600" />
                          <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-600">{t("srv.productGrp")}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-primary-950 tracking-tighter uppercase mb-6 md:mb-8 leading-[1.1]">
                          {language === 'en' && activeTabItem.titleEn ? activeTabItem.titleEn : activeTabItem.title}
                        </h2>
                        <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium mb-8 md:mb-12 whitespace-pre-line">
                          {language === 'en' && activeTabItem.contentEn ? activeTabItem.contentEn : activeTabItem.content}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                          <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                              <ShieldCheck className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-primary-950 uppercase tracking-tight">{t("srv.safe")}</h4>
                              <p className="text-xs font-medium text-slate-500 mt-1">{t("srv.safeDesc")}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                              <Zap className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-primary-950 uppercase tracking-tight">{t("srv.tech")}</h4>
                              <p className="text-xs font-medium text-slate-500 mt-1">{t("srv.techDesc")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      ) : (
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-white p-6 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-primary-950/10 border border-slate-50"
              >
                <p className="text-lg md:text-3xl lg:text-4xl text-primary-950 leading-[1.15] font-black tracking-tighter mb-8 md:mb-12">
                  {serviceDesc}
                </p>
                
                <div className="prose prose-sm md:prose-lg max-w-none text-slate-500 font-medium leading-relaxed mb-10 md:mb-12">
                  {language === 'en' ? (
                    <>
                      <p>
                        As Yaman Kazan and Machinery, we offer reliable and sustainable solutions for industrial facilities. In our {serviceTitle} processes, we add value to your project with our experience in the field and our implementation power.
                      </p>
                      <p>
                        Our expert staff, guaranteeing safety, precision and quality at every step, carries out flawless operations even under the most demanding field conditions.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Yaman Kazan ve Makine olarak, endüstriyel tesislere yönelik güvenilir ve sürdürülebilir çözümler sunmaktayız. {serviceTitle} süreçlerimizde, sahadaki tecrübemiz ve uygulama gücümüz ile projenize değer katıyoruz.
                      </p>
                      <p>
                        Her bir adımda güvenlik, hassasiyet ve kaliteyi garanti eden uzman kadromuz, sahadaki en zorlu koşullarda bile kusursuz operasyonlar yürütmektedir.
                      </p>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-6 p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-3xl group hover:bg-primary-950 transition-all duration-500 border border-slate-100 hover:border-primary-900">
                    <ShieldCheck className="h-10 w-10 text-primary-800 group-hover:text-primary-400 transition-colors" />
                    <div>
                      <h4 className="text-xl font-black text-primary-950 group-hover:text-white uppercase tracking-tighter mb-2">{t("srv.safe")}</h4>
                      <p className="text-sm text-slate-500 group-hover:text-white/60 transition-colors leading-relaxed">{t("srv.safeDesc")}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-3xl group hover:bg-primary-950 transition-all duration-500 border border-slate-100 hover:border-primary-900">
                    <Zap className="h-10 w-10 text-primary-800 group-hover:text-primary-400 transition-colors" />
                    <div>
                      <h4 className="text-xl font-black text-primary-950 group-hover:text-white uppercase tracking-tighter mb-2">{t("srv.tech")}</h4>
                      <p className="text-sm text-slate-500 group-hover:text-white/60 transition-colors leading-relaxed">{t("srv.techDesc")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 pb-12">
                <div className="bg-primary-900 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden group shadow-2xl shadow-primary-900/20">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">{t("srv.startProject")}</h3>
                  <p className="text-white/70 mb-10 text-sm md:text-base leading-relaxed font-medium">
                    {language === 'en'
                       ? `For detailed information and special price quotation about ${serviceTitle} and our other services, please contact our engineering team.`
                       : `${serviceTitle} ve diğer hizmetlerimiz hakkında detaylı bilgi ve özel fiyat teklifi için mühendislik ekibimizle iletişime geçin.`
                    }
                  </p>
                  <Link
                    href="/iletisim"
                    className="flex items-center justify-between px-8 py-5 md:py-6 bg-white text-primary-950 font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-2xl hover:scale-[1.02] transition-all shadow-xl group"
                  >
                    {t("srv.getProposal")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="p-8 md:p-10 border border-slate-100 rounded-[2.5rem] space-y-6 bg-white shadow-sm">
                  <h4 className="font-black text-primary-950 uppercase tracking-tighter text-lg mb-6 border-b border-slate-50 pb-4">{t("srv.why")}</h4>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                      <Target className="h-4 w-4 text-primary-800" />
                    </div>
                    <span>{t("srv.goalOriented")}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4 text-primary-800" />
                    </div>
                    <span>{t("srv.superiorWork")}</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* Hizmet Detayları - Moved Below Intro */}
      {service.detailSections && service.detailSections.length > 0 && !isBuharKazani && (
        <section className="relative z-20 pb-12 md:pb-20 mt-12 md:mt-16">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary-800/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-800" />
                <span className="text-primary-950 font-black uppercase tracking-[0.3em] text-[9px] md:text-[11px]">{t("srv.appDetails")}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary-800" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-primary-800/30 to-transparent" />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
              {service.detailSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg shadow-primary-950/[0.03] hover:shadow-xl hover:shadow-primary-950/[0.06] transition-all duration-500 hover:-translate-y-0.5"
                >
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-primary-950 font-black text-[10px]">0{idx + 1}</span>
                        </div>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>
                      <h3 className="text-white text-sm md:text-[15px] font-bold leading-snug drop-shadow-lg">
                        {language === 'en' && section.titleEn ? section.titleEn : section.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 md:p-5">
                    <div className="space-y-2">
                      {(language === 'en' && section.paragraphsEn ? section.paragraphsEn : section.paragraphs).map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-slate-500 text-[11px] md:text-xs leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premium Standards Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/industrial_standards.png"
            alt={t("srv.standards")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-transparent to-primary-950/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-primary-400 font-bold uppercase tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-5">{t("srv.engPower")}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              {t("srv.standards").split(' ').slice(0, -1).join(' ')} <span className="text-primary-400">{t("srv.standards").split(' ').slice(-1)[0]}</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary-400/50" />
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary-400/50" />
            </div>
          </motion.div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="h-7 w-7" />,
                number: "01",
                title: t("srv.std1.title"),
                desc: t("srv.std1.desc")
              },
              {
                icon: <ShieldCheck className="h-7 w-7" />,
                number: "02",
                title: t("srv.std2.title"),
                desc: t("srv.std2.desc")
              },
              {
                icon: <Zap className="h-7 w-7" />,
                number: "03",
                title: t("srv.std3.title"),
                desc: t("srv.std3.desc")
              },
              {
                icon: <Award className="h-7 w-7" />,
                number: "04",
                title: t("srv.std4.title"),
                desc: t("srv.std4.desc")
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/[0.12] hover:border-primary-400/30 transition-all duration-500"
              >
                {/* Number Badge */}
                <span className="absolute top-5 right-5 text-white/[0.07] font-black text-4xl leading-none select-none group-hover:text-primary-400/15 transition-colors">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-400/10 border border-primary-400/20 flex items-center justify-center mb-5 group-hover:bg-primary-400/20 group-hover:border-primary-400/40 transition-all duration-500">
                  <div className="text-primary-400">{item.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs md:text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-400/0 to-transparent group-hover:via-primary-400/30 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-6xl font-black text-primary-950 tracking-tighter uppercase leading-none mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: t("srv.partner").replace('ORTAK OLUN.', '<br /> <span class="text-primary-800">ORTAK OLUN.</span>').replace('IN OUR STRENGTH.', '<br /> <span class="text-primary-800">IN OUR STRENGTH.</span>') }}>
            </h2>
            <Link
              href="/faaliyet-alanlari"
              className="group flex items-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-xl md:rounded-2xl hover:bg-primary-950 transition-all shadow-2xl w-full sm:w-auto justify-center"
            >
              {t("srv.otherServices")}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
