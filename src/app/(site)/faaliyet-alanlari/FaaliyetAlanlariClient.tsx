"use client";

import PageHeader from "@/components/ui/PageHeader";
import { useTranslation } from "@/lib/LanguageContext";

export default function FaaliyetAlanlariClient() {
  const { t } = useTranslation();

  return (
    <PageHeader 
      title={t("srv.title")} 
      description={t("srv.desc")}
      imagePath="/img/faaliyetarka01.png"
    />
  );
}
