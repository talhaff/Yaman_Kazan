import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjelerClient from "./ProjelerClient";

export const metadata: Metadata = {
  title: "Projelerimiz | Yaman Kazan ve Makine",
  description: "Yaman Kazan ve Makine tarafından başarıyla tamamlanan ve devam eden endüstriyel kazan montaj, demontaj, revizyon ve çelik konstrüksiyon projelerimiz.",
  alternates: {
    canonical: "/projeler",
  },
  keywords: [
    "Yaman Kazan Projeleri",
    "Buhar Kazanı Montajı",
    "Akışkan Yataklı Kazan Kurulumu",
    "Kazan Demontajı",
    "Çelik Konstrüksiyon İmalatı",
    "Steam Drum İmalatı",
    "Yunus Yaman Projeler",
    "Adana Kazan Montajı"
  ],
};

export const revalidate = 60;

const fallbackProjects = [
  {
    title: "50 t/h Bölünmüş Ocak Buhar Kazanı Montajı",
    category: "boiler",
    image: "/img/bolunmusolc.jpeg",
    status: "completed",
    slug: { current: "50-th-bolunmus-ocak" },
    client: "Endüstriyel Çay Fabrikası",
    location: "Türkiye",
    description: "50 t/h kapasiteli, bölünmüş ocak akışkan yataklı buhar kazanının tüm saha montajı, mekanik kurulumları ve yardımcı ekipman entegrasyonları uzman teknik kadromuz tarafından başarıyla tamamlanmıştır."
  },
  {
    title: "40 t/h Akışkan Yataklı Buhar Kazanı Montajı",
    category: "boiler",
    image: "/img/kurulumlar.jpeg",
    status: "completed",
    slug: { current: "akiskan-yatakli-buhar-kazani-montaji" },
    client: "Şeker Üretim Tesisleri",
    location: "Türkiye",
    description: "40 t/h bölünmüş ocak akışkan yataklı buhar kazanı montaj sürecimiz başarıyla tamamlanmıştır."
  },
  {
    title: "25 t/h Akışkan Yataklı Buhar Kazanı Demontajı",
    category: "boiler",
    image: "/img/buharkazan_01.jpeg",
    status: "completed",
    slug: { current: "25-th-akiskan-yatakli-buhar-kazani-demontaji" },
    client: "Çay Sanayisi Tesisleri",
    location: "Türkiye",
    description: "Endüstriyel çay üretim tesisi bünyesinde yürütülen bu proje kapsamında, kullanım ömrünü tamamlamış olan 25 t/h kapasiteli akışkan yataklı buhar kazanının ve bağlı mekanik ekipmanların demontaj çalışmaları başarıyla tamamlanmıştır."
  },
  {
    title: "Endüstriyel Kazan Revizyonu ve Modernizasyonu",
    category: "revision",
    image: "/img/buharkazan_02.jpeg",
    status: "completed",
    slug: { current: "endustriyel-kazan-revizyonu" },
    client: "Buhar Üretim Tesisleri",
    location: "Türkiye",
    description: "100 t/h kapasiteli buhar kazanı membran duvar değişimi ve kapsamlı revizyon projesi."
  },
  {
    title: "Endüstriyel Çelik Konstrüksiyon İmalatı",
    category: "industrial",
    image: "/img/celik_01.jpeg",
    status: "ongoing",
    slug: { current: "endustriyel-celik-konstruksiyon" },
    client: "Sanayi Tesisi Yatırımcısı",
    location: "Türkiye",
    description: "1.250 m² endüstriyel çelik konstrüksiyon imalat ve montaj çalışmaları."
  },
  {
    title: "Doğalgaz Yakıtlı Kazan Projesi",
    category: "boiler",
    image: "/img/gorsel02.jpeg",
    status: "ongoing",
    slug: { current: "dogalgaz-yakitli-kazan" },
    client: "Enerji Tesisleri",
    location: "Türkiye",
    description: "Endüstriyel proseslerde yüksek verimlilik sağlamak amacıyla projelendirilen 10 t/h kapasiteli doğalgaz yakıtlı buhar kazanının imalat çalışmaları devam etmektedir."
  },
  {
    title: "50 t/h Steam Drum İmalatı",
    category: "boiler",
    image: "/img/buharkazan_05.jpeg",
    status: "ongoing",
    slug: { current: "50-th-steam-drum-imalati" },
    client: "Endüstriyel Tesis",
    location: "Saha Uygulaması",
    description: "50 t/h kapasiteli yeni nesil buhar kazanı sistemi için kullanılan Steam Drum ünitesinin imalat çalışmaları devam etmektedir."
  },
  {
    title: "Hidroelektrik Santrali Çöp Tutucu Izgara Revizyonu",
    category: "revision",
    image: "/img/hidroelektriksantral02.jpeg",
    status: "completed",
    slug: { current: "hidroelektrik-santrali-izgara-revizyonu" },
    client: "Enerji Üretim Şirketi",
    location: "Türkiye",
    description: "Hidroelektrik santrali çöp tutucu ızgara sistemlerinin demontaj, revizyon ve yeniden montaj çalışmaları başarıyla tamamlanmıştır."
  }
];

interface Project {
  title: string;
  category?: string;
  image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any;
  status?: string;
  slug?: { current: string };
  client?: string;
  location?: string;
  description?: string;
}

export default async function ProjelerPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ filter?: string }> 
}) {
  const { filter } = await searchParams;
  const sanityProjects = await client.fetch(ALL_PROJECTS_QUERY);
  const sanityData = sanityProjects || [];
  
  let displayProjects = [...sanityData, ...fallbackProjects];

  if (filter === "completed") {
    displayProjects = displayProjects.filter((p: Project) => p.status === "completed" || p.status === "Tamamlandı");
  } else if (filter === "ongoing") {
    displayProjects = displayProjects.filter((p: Project) => p.status === "ongoing" || p.status === "Devam Ediyor");
  }

  return (
    <ProjelerClient projects={displayProjects} filter={filter} />
  );
}
