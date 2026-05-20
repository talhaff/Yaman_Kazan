import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa | Yaman Kazan ve Makine",
  description: "Yaman Kazan ve Makine, endüstriyel tesislere yönelik yüksek kapasiteli buhar kazanları imalatı, yüksek basınçlı borulama, çelik konstrüksiyon ve mekanik tesisat taahhüt hizmetleri sunmaktadır.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
