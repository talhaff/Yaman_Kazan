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
