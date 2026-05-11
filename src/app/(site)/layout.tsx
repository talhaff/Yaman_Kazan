import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yaman Kazan | Endüstriyel Taahhüt ve Kazan Üretimi",
    template: "%s | Yaman Kazan",
  },
  description: "Adana'da faaliyet gösteren Yaman Kazan, ağır sanayi, kazan üretimi ve endüstriyel tesis kurulumu, mekanik montaj ve bakım hizmetlerinde güvenilir çözüm ortağınızdır.",
  icons: {
    icon: "/img/logoyaman-1.png",
    apple: "/img/logoyaman-1.png",
  },
  openGraph: {
    title: "Yaman Kazan | Endüstriyel Taahhüt ve Kazan Üretimi",
    description: "Ağır sanayi, kazan üretimi ve endüstriyel tesis kurulumunda lider marka.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
