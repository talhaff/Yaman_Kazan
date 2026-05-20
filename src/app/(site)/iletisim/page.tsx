import IletisimClient from "./IletisimClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Yaman Kazan ve Makine",
  description: "Yaman Kazan ve Makine Adana Seyhan merkez ofisi iletişim bilgileri, telefon numarası, e-posta adresi, harita konumu ve teklif formu.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yamankazan.com/#localbusiness",
    "name": "Yaman Kazan ve Makine",
    "image": "https://yamankazan.com/img/logoyaman-1.png",
    "telephone": "+905383377701",
    "email": "yaman@yamankazan.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yeşiloba Mah. Şehit Pilot Fehmi Alemdar Bulv. No: 134/Z27 Seyhan",
      "addressLocality": "Adana",
      "addressRegion": "Adana",
      "postalCode": "01110",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.9947,
      "longitude": 35.2536
    },
    "url": "https://yamankazan.com/iletisim",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <IletisimClient />
    </>
  );
}
