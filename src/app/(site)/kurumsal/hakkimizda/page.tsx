import HakkimizdaClient from "./HakkimizdaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Kurumsal",
  description: "Yaman Kazan ve Makine kurumsal tarihi, değerleri, vizyonu ve misyonu. Endüstriyel imalat alanındaki mirasımız ve tecrübemiz.",
  alternates: {
    canonical: "/kurumsal/hakkimizda",
  },
  keywords: [
    "Yaman Kazan Hakkımızda",
    "Yunus Yaman",
    "Yaman Kazan Tarihçe",
    "Kazan İmalat Sektörü",
    "Endüstriyel İmalat Mirası",
    "Kazan ve Makine Sanayi"
  ],
};

export default function HakkimizdaPage() {
  return <HakkimizdaClient />;
}
