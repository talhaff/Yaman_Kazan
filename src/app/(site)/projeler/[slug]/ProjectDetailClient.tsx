"use client";

import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "@/lib/LanguageContext";
import { urlForImage } from "@/sanity/lib/image";

interface Project {
  title: string;
  titleEn?: string;
  category?: string;
  image?: string;
  mainImage?: any;
  status?: string;
  slug?: { current: string };
  client?: string;
  clientEn?: string;
  location?: string;
  locationEn?: string;
  description?: string;
  descriptionEn?: string;
  content?: any;
  contentEn?: any;
  gallery?: any[];
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { t, language } = useTranslation();

  const isEn = language === "en";
  const title = isEn ? (project.titleEn || project.title) : project.title;
  const description = isEn ? (project.descriptionEn || project.description) : project.description;

  const content = isEn && project.contentEn ? project.contentEn : (project.content || []);

  const mainImageUrl = project.mainImage?.asset?._ref?.startsWith("fallback") 
    ? project.mainImage.url 
    : project.mainImage ? urlForImage(project.mainImage).url() : null;

  return (
    <article className="min-h-screen bg-white">
      <PageHeader 
        title={title} 
        description={description}
        imagePath={mainImageUrl || "/img/islemler.jpeg"}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {/* Intro Section */}
            <div className="prose prose-xl prose-primary max-w-none">
              <h2 className="text-3xl lg:text-4xl font-black text-primary-950 mb-8 leading-tight">
                {t("prj.about")}
              </h2>
              <div className="text-gray-600 leading-relaxed font-medium space-y-6">
                <PortableText value={content} />
              </div>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-12">
                <h3 className="text-2xl font-black text-primary-950 mb-10 flex items-center gap-4">
                  {t("prj.gallery")}
                  <div className="h-px bg-gray-100 flex-1"></div>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img: { asset?: { _ref: string }, url: string }, index: number) => {
                    const galleryImgUrl = img.asset?._ref?.startsWith("fallback") 
                      ? img.url 
                      : urlForImage(img).url();

                    return (
                      <div key={index} className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100">
                        <Image 
                          src={galleryImgUrl} 
                          alt={`${title} - ${index + 1}`} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation / Bottom CTA */}
      <section className="bg-zinc-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-primary-950 mb-8">{t("prj.other")}</h2>
          <Link href="/projeler" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-primary-900 text-primary-900 font-black rounded-2xl hover:bg-primary-900 hover:text-white transition-all transform hover:scale-105 shadow-xl">
            {t("prj.allProjectsBtn")} <Tag className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
