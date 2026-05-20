"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import { useTranslation } from "@/lib/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";

interface Project {
  title: string;
  category?: string;
  image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any;
  status?: string;
  slug?: { current: string };
  client?: string;
  location?: string;
  description?: string;
}

export default function ProjelerClient({ 
  projects, 
  filter 
}: { 
  projects: Project[]; 
  filter?: string 
}) {
  const { t } = useTranslation();

  const getCategoryTitle = (category?: string) => {
    switch (category) {
      case 'industrial': return t("prj.cat.industrial");
      case 'mechanical': return t("prj.cat.mechanical");
      case 'boiler': return t("prj.cat.boiler");
      case 'revision': return t("prj.cat.revision");
      default: return category || t("prj.cat.general");
    }
  };

  const getStatusTitle = (status?: string) => {
    if (status === 'completed' || status === 'Tamamlandı') return t("prj.statusCompleted");
    if (status === 'ongoing' || status === 'Devam Ediyor') return t("prj.statusOngoing");
    return status || t("prj.statusCompleted");
  };

  return (
    <>
      <PageHeader 
        title={t("prj.title")} 
        description={t("prj.desc")}
        imagePath="/img/islemler.jpeg"
      />
      <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-16">
          <Link 
            href="/projeler" 
            scroll={false}
            className={`px-8 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all ${
              !filter ? "bg-primary-950 text-white shadow-xl shadow-primary-950/20" : "bg-primary-50 text-primary-900 hover:bg-primary-100"
            }`}
          >
            {t("prj.all")}
          </Link>
          <Link 
            href="/projeler?filter=completed" 
            scroll={false}
            className={`px-8 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all ${
              filter === "completed" ? "bg-primary-950 text-white shadow-xl shadow-primary-950/20" : "bg-primary-50 text-primary-900 hover:bg-primary-100"
            }`}
          >
            {t("prj.completed")}
          </Link>
          <Link 
            href="/projeler?filter=ongoing" 
            scroll={false}
            className={`px-8 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all ${
              filter === "ongoing" ? "bg-primary-950 text-white shadow-xl shadow-primary-950/20" : "bg-primary-50 text-primary-900 hover:bg-primary-100"
            }`}
          >
            {t("prj.ongoing")}
          </Link>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project: Project, index: number) => {
              const projectImage = project.mainImage 
                ? urlForImage(project.mainImage).url() 
                : project.image;
              
              const categoryTitle = getCategoryTitle(project.category);
              const statusTitle = getStatusTitle(project.status);
              const isCompleted = project.status === 'completed' || project.status === 'Tamamlandı';

              return (
                <Link href={`/projeler/${project.slug?.current}`} key={index} className="group block relative">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-primary-premium">
                    <Image 
                      src={projectImage || "/img/gorsel01.jpeg"} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                        {categoryTitle}
                      </span>
                      <span className={`px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm ${isCompleted ? 'bg-green-600/90' : 'bg-secondary-600/90'} backdrop-blur-md`}>
                        {statusTitle}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <h3 className="text-2xl md:text-3xl font-black text-primary-950 mb-4 tracking-tighter leading-tight group-hover:text-secondary-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-primary-900 font-black uppercase tracking-tighter text-sm group-hover:text-secondary-600 transition-all">
                      {t("prj.details")}
                      <div className="w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center group-hover:bg-secondary-600 group-hover:border-secondary-600 transition-all">
                        <ArrowRight className="h-4 w-4 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-bold">{t("prj.empty")}</p>
          </div>
        )}
      </div>
    </section>
  </>
);
}
