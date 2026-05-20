import ReferanslarClient from "./ReferanslarClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız | Kurumsal",
  description: "Yaman Kazan ve Makine olarak çalıştığımız lider sanayi kuruluşları, çay fabrikaları, enerji üretim tesisleri ve taahhüt referanslarımız.",
  alternates: {
    canonical: "/kurumsal/referanslar",
  },
};

export default function ReferanslarPage() {
  return <ReferanslarClient />;
}
