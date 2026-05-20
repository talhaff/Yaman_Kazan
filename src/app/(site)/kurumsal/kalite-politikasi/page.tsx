"use client";

import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

export default function KalitePolitikasiPage() {
  const { t } = useTranslation();

  const policies = [
    t("policy.1"),
    t("policy.2"),
    t("policy.3"),
    t("policy.4"),
    t("policy.5"),
    t("policy.6"),
  ];

  return (
    <>
      <PageHeader 
        title={t("policy.title")} 
        description={t("policy.desc")}
        imagePath="/img/kurumsalarka.png"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-zinc-50 p-10 md:p-16 rounded-3xl border border-gray-100 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-950 mb-8 border-b border-gray-200 pb-6">
              {t("policy.principles")}
            </h2>
            
            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{policy}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary-900 rounded-2xl text-white">
              <p className="font-medium italic leading-relaxed text-center">
                {t("policy.quote")}
              </p>
              <div className="text-center mt-4">
                <span className="font-bold block text-secondary-500">{t("policy.founder")}</span>
                <span className="text-sm text-gray-400">{t("policy.role")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
