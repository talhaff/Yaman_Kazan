import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa | Yaman Kazan ve Makine",
  description: "Yaman Kazan ve Makine, endüstriyel tesislere yönelik yüksek kapasiteli buhar kazanları imalatı, yüksek basınçlı borulama, çelik konstrüksiyon ve mekanik tesisat taahhüt hizmetleri sunmaktadır.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Yaman Kazan",
    "Yunus Yaman",
    "Buhar Kazanı",
    "Akışkan Yataklı Kazan",
    "Biomass Kazanı",
    "Kojenerasyon Tesisi",
    "Kojenarasyon Tesisi",
    "Sıcak Su Kazanı",
    "Atık Isı Kazanı",
    "Kat Kaloriferi",
    "Kalorifer Kazanı",
    "Mekanik Tesisat",
    "Proses Borulama",
    "Çelik Konstrüksiyon",
    "Endüstriyel Bakım",
    "Kazan revizyonu"
  ],
};

export default function Home() {
  return <HomeClient />;
}
