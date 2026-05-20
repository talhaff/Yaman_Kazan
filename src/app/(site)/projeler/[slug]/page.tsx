import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export const revalidate = 60;

const fallbackProjects = [
  {
    title: "50 t/h Bölünmüş Ocak Buhar Kazanı Montajı",
    titleEn: "50 t/h Split Furnace Steam Boiler Installation",
    category: "boiler",
    mainImage: { asset: { _ref: "fallback-bolunmus-ocak" }, url: "/img/bolunmusolc.jpeg" },
    status: "completed",
    slug: { current: "50-th-bolunmus-ocak" },
    client: "Endüstriyel Çay Fabrikası",
    clientEn: "Industrial Tea Factory",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "50 t/h kapasiteli, bölünmüş ocak akışkan yataklı buhar kazanının tüm saha montajı, mekanik kurulumları ve yardımcı ekipman entegrasyonları uzman teknik kadromuz tarafından başarıyla tamamlanmıştır.",
    descriptionEn: "All field installation, mechanical setup, and auxiliary equipment integration of the 50 t/h split furnace fluid bed steam boiler have been successfully completed by our expert technical team.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Endüstriyel çay fabrikası tesisleri bünyesinde gerçekleştirdiğimiz bu kapsamlı proje kapsamında; 50 t/h kapasiteli, bölünmüş ocak akışkan yataklı buhar kazanının tüm saha montajı, mekanik kurulumları ve yardımcı ekipman entegrasyonları uzman teknik kadromuz tarafından başarıyla tamamlanmıştır. Yüksek mühendislik disiplini ve kalite standartları doğrultusunda yürütülen montaj süreci sonrasında sistem devreye alınarak başarıyla işletmeye teslim edilmiştir." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Within the scope of this comprehensive project carried out at the industrial tea factory facilities, all field assembly, mechanical installation, and auxiliary equipment integration of the 50 t/h capacity split furnace fluidized bed steam boiler have been successfully completed by our expert technical staff. Following the installation process carried out in accordance with high engineering discipline and quality standards, the system was commissioned and successfully delivered to the management." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-bolunmus-ocak-1" }, url: "/img/bolunmusolc.jpeg" },
      { asset: { _ref: "fallback-gal-bolunmus-ocak-2" }, url: "/img/bolunmusolc2.jpeg" },
      { asset: { _ref: "fallback-gal-bolunmus-ocak-3" }, url: "/img/bolunmusolc3.jpeg" }
    ]
  },
  {
    title: "40 t/h Akışkan Yataklı Buhar Kazanı Montajı",
    titleEn: "40 t/h Fluidized Bed Steam Boiler Installation",
    category: "boiler",
    mainImage: { asset: { _ref: "fallback-afyon-montaj" }, url: "/img/kurulumlar.jpeg" },
    status: "completed",
    slug: { current: "akiskan-yatakli-buhar-kazani-montaji" },
    client: "Şeker Üretim Tesisleri",
    clientEn: "Sugar Production Plants",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "40 t/h bölünmüş ocak akışkan yataklı buhar kazanı montaj sürecimiz başarıyla tamamlanmıştır.",
    descriptionEn: "Our installation process for the 40 t/h split furnace fluidized bed steam boiler has been successfully completed.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Endüstriyel şeker fabrikası tesisleri bünyesinde gerçekleştirdiğimiz bu kapsamlı proje kapsamında; 40 t/h kapasiteli, bölünmüş ocak akışkan yataklı buhar kazanının tüm saha montajı, mekanik kurulumları ve yardımcı ekipman entegrasyonları uzman teknik kadromuz tarafından başarıyla tamamlanmıştır. Yüksek mühendislik disipliniyle yürütülen montaj süreci sonrasında tüm sistem başarıyla test edilerek devreye alınmıştır." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Within the scope of this comprehensive project carried out at the industrial sugar factory facilities, all field assembly, mechanical installation, and auxiliary equipment integration of the 40 t/h capacity split furnace fluidized bed steam boiler have been successfully completed by our expert technical staff. After the assembly process carried out with high engineering discipline, the entire system was successfully tested and commissioned." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-afyon-montaj-1" }, url: "/img/kurulumlar.jpeg" }
    ]
  },
  {
    title: "25 t/h Akışkan Yataklı Buhar Kazanı Demontajı",
    titleEn: "25 t/h Fluidized Bed Steam Boiler Dismantling",
    category: "boiler",
    mainImage: { asset: { _ref: "fallback-afyon-ins" }, url: "/img/buharkazan_01.jpeg" },
    status: "completed",
    slug: { current: "25-th-akiskan-yatakli-buhar-kazani-demontaji" },
    client: "Çay Sanayisi Tesisleri",
    clientEn: "Tea Industry Facilities",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "Endüstriyel çay üretim tesisi bünyesinde yürütülen bu proje kapsamında, kullanım ömrünü tamamlamış olan 25 t/h kapasiteli akışkan yataklı buhar kazanının ve bağlı mekanik ekipmanların demontaj çalışmaları başarıyla tamamlanmıştır. Süreç boyunca gerçekleştirilen yüksek tonajlı kaldırma, söküm ve saha içi taşıma operasyonları; uzman ekiplerimiz tarafından iş sağlığı ve güvenliği standartlarına uygun şekilde, planlanan iş programı doğrultusunda sorunsuz olarak yürütülmüştür.",
    descriptionEn: "Within the scope of this project carried out at the industrial tea production facility, dismantling of the 25 t/h capacity fluidized bed steam boiler and connected mechanical equipment that completed its service life was successfully finished. High-tonnage lifting, dismantling, and on-site transport operations carried out during the process were smoothly executed by our expert teams in accordance with occupational health and safety standards.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Endüstriyel çay üretim tesisi bünyesinde yürütülen bu proje kapsamında, kullanım ömrünü tamamlamış olan 25 t/h kapasiteli akışkan yataklı buhar kazanının ve bağlı mekanik ekipmanların demontaj çalışmaları başarıyla tamamlanmıştır. Süreç boyunca gerçekleştirilen yüksek tonajlı kaldırma, söküm ve saha içi taşıma operasyonları; uzman ekiplerimiz tarafından iş sağlığı ve güvenliği standartlarına uygun şekilde, planlanan iş programı doğrultusunda sorunsuz olarak yürütülmüştür." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Within the scope of this project carried out at the industrial tea production facility, dismantling of the 25 t/h capacity fluidized bed steam boiler and connected mechanical equipment that completed its service life was successfully finished. High-tonnage lifting, dismantling, and on-site transport operations carried out during the process were smoothly executed by our expert teams in accordance with occupational health and safety standards." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-afyon-ins-1" }, url: "/img/buharkazan_01.jpeg" }
    ]
  },
  {
    title: "Endüstriyel Kazan Revizyonu ve Modernizasyonu",
    titleEn: "Industrial Boiler Revision and Modernization",
    category: "revision",
    mainImage: { asset: { _ref: "fallback-afyon-rev" }, url: "/img/buharkazan_02.jpeg" },
    status: "completed",
    slug: { current: "endustriyel-kazan-revizyonu" },
    client: "Buhar Üretim Tesisleri",
    clientEn: "Steam Production Plants",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "100 t/h kapasiteli buhar kazanı membran duvar değişimi ve kapsamlı revizyon projesi.",
    descriptionEn: "100 t/h capacity steam boiler membrane wall replacement and comprehensive revision project.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Endüstriyel şeker fabrikası tesisleri bünyesinde bulunan 100 t/h kapasiteli ve 45 bar işletme basıncına sahip buhar kazanının membran duvar panellerinin yenilenmesi ve genel revizyon çalışmaları başarıyla tamamlanmıştır." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Replacement of membrane wall panels and general revision works of the steam boiler with 100 t/h capacity and 45 bar operating pressure located within the industrial sugar factory facilities have been successfully completed." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-afyon-rev-1" }, url: "/img/buharkazan_02.jpeg" }
    ]
  },
  {
    title: "Endüstriyel Çelik Konstrüksiyon İmalatı",
    titleEn: "Industrial Steel Structure Manufacturing",
    category: "industrial",
    mainImage: { asset: { _ref: "fallback-efor" }, url: "/img/celik_01.jpeg" },
    status: "ongoing",
    slug: { current: "endustriyel-celik-konstruksiyon" },
    client: "Sanayi Tesisi Yatırımcısı",
    clientEn: "Industrial Plant Investor",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "1.250 m² endüstriyel çelik konstrüksiyon imalat ve montaj çalışmaları.",
    descriptionEn: "1,250 m² industrial steel structure fabrication and installation works.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "1.250 m² kapalı alana sahip modern bir endüstriyel tesisin tüm çelik konstrüksiyon imalat ve montaj süreçleri Yaman Kazan uzmanlığıyla başarıyla sürdürülmektedir." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "All steel structure fabrication and assembly processes of a modern industrial facility with 1,250 m² closed area are being successfully carried out with the expertise of Yaman Kazan." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-efor-1" }, url: "/img/celik_01.jpeg" }
    ]
  },
  {
    title: "Doğalgaz Yakıtlı Kazan Projesi",
    titleEn: "Natural Gas Fired Boiler Project",
    category: "boiler",
    mainImage: { asset: { _ref: "fallback-eforcay" }, url: "/img/gorsel02.jpeg" },
    status: "ongoing",
    slug: { current: "dogalgaz-yakitli-kazan" },
    client: "Enerji Tesisleri",
    clientEn: "Energy Facilities",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "Endüstriyel proseslerde yüksek verimlilik sağlamak amacıyla projelendirilen 10 t/h kapasiteli doğalgaz yakıtlı buhar kazanının imalat çalışmaları, uzman üretim ekibimiz tarafından kalite ve mühendislik standartları doğrultusunda titizlikle yürütülmektedir.",
    descriptionEn: "The manufacturing works of the 10 t/h capacity natural gas fired steam boiler, designed to provide high efficiency in industrial processes, are being meticulously carried out by our expert production team.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Endüstriyel proseslerde yüksek verimlilik sağlamak amacıyla projelendirilen 10 t/h kapasiteli doğalgaz yakıtlı buhar kazanının imalat çalışmaları, uzman üretim ekibimiz tarafından kalite ve mühendislik standartları doğrultusunda titizlikle yürütülmektedir." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "The manufacturing works of the 10 t/h capacity natural gas fired steam boiler, designed to provide high efficiency in industrial processes, are being meticulously carried out by our expert production team." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-eforcay-1" }, url: "/img/buharkazan_04.jpeg" }
    ]
  },
  {
    title: "50 t/h Steam Drum İmalatı",
    titleEn: "50 t/h Steam Drum Manufacturing",
    category: "boiler",
    mainImage: { asset: { _ref: "fallback-dom" }, url: "/img/buharkazan_05.jpeg" },
    status: "ongoing",
    slug: { current: "50-th-steam-drum-imalati" },
    client: "Endüstriyel Tesis",
    clientEn: "Industrial Plant",
    location: "Saha Uygulaması",
    locationEn: "Field Application",
    description: "50 t/h kapasiteli yeni nesil buhar kazanı sistemi için kullanılan Steam Drum (Buhar Tamburu) ünitesinin imalat çalışmaları; yüksek mühendislik standartları, hassas kaynak uygulamaları ve kontrollü üretim süreçleriyle uzman ekibimiz tarafından gerçekleştirilmektedir.",
    descriptionEn: "Manufacturing works of the Steam Drum unit used for the new generation steam boiler system with 50 t/h capacity are carried out by our expert team with high engineering standards, precise welding applications and controlled production processes.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "50 t/h kapasiteli yeni nesil buhar kazanı sistemi için kullanılan Steam Drum (Buhar Tamburu) ünitesinin imalat çalışmaları; yüksek mühendislik standartları, hassas kaynak uygulamaları ve kontrollü üretim süreçleriyle uzman ekibimiz tarafından gerçekleştirilmektedir." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Manufacturing works of the Steam Drum unit used for the new generation steam boiler system with 50 t/h capacity are carried out by our expert team with high engineering standards, precise welding applications and controlled production processes." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-dom-1" }, url: "/img/buharkazan_05.jpeg" }
    ]
  },
  {
    title: "Hidroelektrik Santrali Çöp Tutucu Izgara Revizyonu",
    titleEn: "Hydroelectric Power Plant Trash Rack Revision",
    category: "revision",
    mainImage: { asset: { _ref: "fallback-entek" }, url: "/img/hidroelektriksantral02.jpeg" },
    status: "completed",
    slug: { current: "hidroelektrik-santrali-izgara-revizyonu" },
    client: "Enerji Üretim Şirketi",
    clientEn: "Energy Production Company",
    location: "Türkiye",
    locationEn: "Turkey",
    description: "Hidroelektrik santrali çöp tutucu ızgara sistemlerinin demontaj, revizyon ve yeniden montaj çalışmaları; uzman ekiplerimiz tarafından güvenli, kontrollü ve planlı şekilde başarıyla tamamlanmıştır.",
    descriptionEn: "Dismantling, revision, and re-assembly of trash rack systems at the hydroelectric power plant have been successfully completed by our expert teams in a safe, controlled, and planned manner.",
    content: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Hidroelektrik santrali çöp tutucu ızgara sistemlerinin demontaj, revizyon ve yeniden montaj çalışmaları; uzman ekiplerimiz tarafından güvenli, kontrollü ve planlı şekilde başarıyla tamamlanmıştır." }],
        style: "normal"
      }
    ],
    contentEn: [
      {
        _key: "1",
        _type: "block",
        children: [{ _key: "1a", _type: "span", text: "Dismantling, revision, and re-assembly of trash rack systems at the hydroelectric power plant have been successfully completed by our expert teams in a safe, controlled, and planned manner." }],
        style: "normal"
      }
    ],
    gallery: [
      { asset: { _ref: "fallback-gal-entek-1" }, url: "/img/ÇöpTutucuIzgaraRevizyonu.jpeg" },
      { asset: { _ref: "fallback-gal-entek-2" }, url: "/img/hidroelektriksantral03.jpeg" }
    ]
  },
];

export default async function ProjeDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  // Eğer Sanity'de yoksa fallbacklerde ara
  if (!project) {
    project = fallbackProjects.find(fp => fp.slug.current === slug);
  }

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailClient project={project} />
  );
}
