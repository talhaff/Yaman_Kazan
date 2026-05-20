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
  icons: {
    icon: "/img/logoyaman-1.png",
    apple: "/img/logoyaman-1.png",
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://yamankazan.com/#organization",
    "name": "Yaman Kazan ve Makine",
    "url": "https://yamankazan.com",
    "logo": "https://yamankazan.com/img/logoyaman-1.png",
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

  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
