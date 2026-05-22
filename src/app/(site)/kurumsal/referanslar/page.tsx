import ReferanslarClient from "./ReferanslarClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız | Kurumsal",
  description: "Yaman Kazan ve Makine olarak çalıştığımız lider sanayi kuruluşları, çay fabrikaları, enerji üretim tesisleri ve taahhüt referanslarımız.",
  alternates: {
    canonical: "/kurumsal/referanslar",
  },
  keywords: [
    "Yaman Kazan Referansları",
    "Kazan Montajı Referanslar",
    "Endüstriyel Tesis Referansları",
    "Çay Fabrikası Taahhüt İşleri",
    "Yunus Yaman Referans Listesi"
  ],
};

export default function ReferanslarPage() {
  return <ReferanslarClient />;
}
