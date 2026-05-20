"use client";

import Link from "next/link";
import CertificateGallery from "@/components/certificates/CertificateGallery";
import { useTranslation } from "@/lib/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";

interface Certificate {
  title: string;
  issuer: string;
  issuerKey?: string;
  image: string;
  code: string;
}

export default function SertifikalarClient({ certificates }: { certificates: Certificate[] }) {
  const { t } = useTranslation();

  const localizedCertificates = certificates.map(cert => ({
    ...cert,
    issuer: cert.issuerKey ? t(cert.issuerKey) : cert.issuer
  }));

  return (
    <>
      <PageHeader 
        title={t("cert.title")} 
        description={t("cert.desc")}
        imagePath="/img/kurumsalarka.png"
      />
      <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-primary-800 font-black tracking-[0.3em] uppercase text-xs block mb-6">{t("cert.subtitle")}</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary-950 mb-8 tracking-tighter leading-tight uppercase">
            {t("cert.title1.part1")} <span className="text-primary-800">{t("cert.title1.part2")}</span> {t("cert.title1.part3")}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
            {t("cert.p1")}
          </p>
        </div>

        <CertificateGallery certificates={localizedCertificates} />

        <div className="mt-24 flex justify-center">
          <div className="w-full rounded-[2.5rem] md:rounded-[3rem] bg-primary-950 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 px-10 md:px-20 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            {/* Hafif arka plan efekti */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-400/10 blur-[100px] -z-0" />
            <div className="max-w-xl text-center md:text-left z-10">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">{t("cert.qmsTitle")}</h4>
              <p className="text-gray-100 font-medium leading-relaxed text-lg md:text-xl">
                {t("cert.qmsDesc")}
              </p>
            </div>
            <Link href="/kurumsal/kalite-politikasi" className="px-10 py-5 bg-white text-primary-950 font-black uppercase tracking-widest rounded-2xl hover:bg-primary-800 hover:text-white transition-all shadow-2xl shadow-primary-950/20 active:scale-95 whitespace-nowrap z-10">
              {t("cert.qmsBtn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
