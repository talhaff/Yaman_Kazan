import KalitePolitikasiClient from "./KalitePolitikasiClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalite Politikası | Kurumsal",
  description: "Yaman Kazan ve Makine kalite politikaları, standartları ve iş prensipleri. Uluslararası kalite standartlarında üretim ve mühendislik.",
  alternates: {
    canonical: "/kurumsal/kalite-politikasi",
  },
  keywords: [
    "Yaman Kazan Kalite Politikası",
    "Yunus Yaman Kalite Standartları",
    "Mühendislik Kalite Standartları",
    "Endüstriyel Üretim Kalitesi",
    "Kazan İmalatı Standartları"
  ],
};

export default function KalitePolitikasiPage() {
  return <KalitePolitikasiClient />;
}
