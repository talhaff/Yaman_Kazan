import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GigesServicesGrid from "@/components/services/GigesServicesGrid";

export const metadata: Metadata = {
  title: "Faaliyet Alanları | Yaman Kazan ve Makine",
  description: "Buhar kazanları imalatı, kojenerasyon tesisleri, çelik konstrüksiyon, borulama, mekanik tesisat ve endüstriyel kazan revizyonu faaliyet alanlarımız.",
  alternates: {
    canonical: "/faaliyet-alanlari",
  },
  keywords: [
    "Akışkan Yataklı Kazan",
    "Buhar Kazanı",
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
    "Kazan revizyonu",
    "Kazan İmalatı",
    "Yaman Kazan Faaliyet Alanları"
  ],
};

import FaaliyetAlanlariClient from "./FaaliyetAlanlariClient";

export default function FaaliyetAlanlariPage() {
  return (
    <>
      <FaaliyetAlanlariClient />
      <div className="bg-white">
        <GigesServicesGrid />
      </div>
    </>
  );
}
