import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageProviderWrapper from "@/components/layout/LanguageProviderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yamankazan.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Yaman Kazan ve Makine | Buhar Kazanları, Mekanik Tesisat ve Çelik Konstrüksiyon",
    template: "%s | Yaman Kazan",
  },
  description: "Yaman Kazan ve Makine, endüstriyel tesislere yönelik buhar kazanları, mekanik tesisat ve çelik konstrüksiyon alanlarında faaliyet gösteren bir imalat ve taahhüt firmasıdır.",
  keywords: [
    "Yunus Yaman",
    "Yaman Kazan",
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
    "Endüstriyel Buhar Kazanı",
    "Yaman Kazan ve Makine",
    "Adana Kazan Fabrikası"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Yunus Yaman" }],
  creator: "Yunus Yaman",
  publisher: "Yaman Kazan ve Makine",
  icons: {
    icon: "/img/logo-emblem-whitebg.png",
    apple: "/img/logo-emblem-whitebg.png",
  },
  openGraph: {
    title: "Yaman Kazan ve Makine | Buhar Kazanları, Mekanik Tesisat ve Çelik Konstrüksiyon",
    description: "Endüstriyel tesislere yönelik buhar kazanları, mekanik tesisat ve çelik konstrüksiyon alanlarında imalat ve taahhüt.",
    url: "https://yamankazan.com",
    siteName: "Yaman Kazan",
    images: [
      {
        url: "/img/about-main.png",
        width: 1200,
        height: 630,
        alt: "Yaman Kazan ve Makine",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@type": "Organization",
    "@id": "https://yamankazan.com/#organization",
    "name": "Yaman Kazan ve Makine",
    "url": "https://yamankazan.com",
    "logo": "https://yamankazan.com/img/logoarkaplansiz.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905383377701",
      "contactType": "sales",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yeşiloba Mah. Şehit Pilot Fehmi Alemdar Bulv. No: 134/Z27 Seyhan",
      "addressLocality": "Adana",
      "addressRegion": "Adana",
      "postalCode": "01110",
      "addressCountry": "TR"
    },
    "founder": {
      "@type": "Person",
      "name": "Yunus Yaman",
      "jobTitle": "Kurucu / Founder"
    },
    "sameAs": [
      "https://www.linkedin.com/company/yaman-kazan-makine/",
      "https://www.instagram.com/yamankazan/"
    ]
  };

  const websiteJsonLd = {
    "@type": "WebSite",
    "@id": "https://yamankazan.com/#website",
    "url": "https://yamankazan.com",
    "name": "Yaman Kazan ve Makine",
    "publisher": {
      "@id": "https://yamankazan.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://yamankazan.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "tr"
  };

  const navigationJsonLd = [
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-home",
      "name": "Ana Sayfa",
      "url": "https://yamankazan.com"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-about",
      "name": "Hakkımızda",
      "url": "https://yamankazan.com/kurumsal/hakkimizda"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-references",
      "name": "Referanslar",
      "url": "https://yamankazan.com/kurumsal/referanslar"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-certificates",
      "name": "Sertifikalar",
      "url": "https://yamankazan.com/kurumsal/sertifikalar"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-quality",
      "name": "Kalite Politikası",
      "url": "https://yamankazan.com/kurumsal/kalite-politikasi"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-services",
      "name": "Faaliyet Alanları",
      "url": "https://yamankazan.com/faaliyet-alanlari"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-projects",
      "name": "Projeler",
      "url": "https://yamankazan.com/projeler"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://yamankazan.com/#nav-contact",
      "name": "İletişim",
      "url": "https://yamankazan.com/iletisim"
    }
  ];

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd,
      websiteJsonLd,
      ...navigationJsonLd
    ]
  };

  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
        <LanguageProviderWrapper>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
