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
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            <button className="px-6 py-2 bg-primary-900 text-white rounded-full font-medium whitespace-nowrap">Tümü</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap transition-colors">Tamamlanan Projeler</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap transition-colors">Devam Eden Projeler</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                <Link href={`/projeler/${project.slug?.current}`} key={index} className="group block">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image 
                      src={projectImage || "/img/gorsel01.jpeg"} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-primary-900 text-xs font-bold uppercase tracking-wider rounded-full">
                        {categoryTitle}
                      </span>
                      <span className={`px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider rounded-full ${statusTitle === 'Tamamlandı' ? 'bg-green-600/90' : 'bg-secondary-600/90'} backdrop-blur`}>
                        {statusTitle}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-primary-950 mb-3 group-hover:text-secondary-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-900 font-bold group-hover:text-secondary-600 transition-colors">
                    Proje Detayları <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
