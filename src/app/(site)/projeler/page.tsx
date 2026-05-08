import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = {
  title: "Projeler",
  description: "Yaman Kazan tamamlanan ve devam eden projeler.",
};

export const revalidate = 60; // Revalidate every 60 seconds

const fallbackProjects = [
  {
    title: "TÜPRAŞ İzmir Günlük Bakım İşleri",
    category: "Bakım & Revizyon",
    image: "/img/hidroelektriksantral02.jpeg",
    status: "Devam Ediyor",
    slug: { current: "#" }
  },
  {
    title: "MOL Macaristan Boru İmalat",
    category: "İmalat & Montaj",
    image: "/img/Kaynakİşleri.jpeg",
    status: "Tamamlandı",
    slug: { current: "#" }
  },
];

export default async function ProjelerPage() {
  const sanityProjects = await client.fetch(ALL_PROJECTS_QUERY);
  const hasSanityData = sanityProjects && sanityProjects.length > 0;
  
  const displayProjects = hasSanityData ? sanityProjects : fallbackProjects;

  return (
    <>
      <PageHeader 
        title="Projelerimiz" 
        description="Türkiye'nin sanayi altyapısına güç katan, başarıyla tamamladığımız ve gururla yürüttüğümüz projelerimiz."
        imagePath="/img/islemler.jpeg"
      />
      
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
            <button className="px-8 py-3 bg-primary-950 text-white rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap shadow-xl shadow-primary-950/20">Tümü</button>
            <button className="px-8 py-3 bg-primary-50 text-primary-900 hover:bg-primary-100 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all">Tamamlanan Projeler</button>
            <button className="px-8 py-3 bg-primary-50 text-primary-900 hover:bg-primary-100 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all">Devam Eden Projeler</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {displayProjects.map((project: any, index: number) => {
              const projectImage = project.mainImage 
                ? urlForImage(project.mainImage).url() 
                : project.image;
              
              const categoryTitle = project.category === 'industrial' ? 'Endüstriyel Tesis' :
                                   project.category === 'mechanical' ? 'Mekanik Montaj' :
                                   project.category === 'boiler' ? 'Kazan & Basınçlı Kaplar' :
                                   project.category === 'revision' ? 'Revizyon & Bakım' : (project.category || "Genel");

              const statusTitle = project.status === 'completed' ? 'Tamamlandı' : 
                                 project.status === 'ongoing' ? 'Devam Ediyor' : (project.status || "Tamamlandı");

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
                      <span className={`px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm ${statusTitle === 'Tamamlandı' ? 'bg-green-600/90' : 'bg-secondary-600/90'} backdrop-blur-md`}>
                        {statusTitle}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <h3 className="text-2xl md:text-3xl font-black text-primary-950 mb-4 tracking-tighter leading-tight group-hover:text-secondary-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-primary-900 font-black uppercase tracking-tighter text-sm group-hover:text-secondary-600 transition-all">
                      Proje Detayları 
                      <div className="w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center group-hover:bg-secondary-600 group-hover:border-secondary-600 transition-all">
                        <ArrowRight className="h-4 w-4 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
