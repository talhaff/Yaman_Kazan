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
    category: "revision",
    image: "/img/hidroelektriksantral02.jpeg",
    status: "ongoing",
    slug: { current: "tupras-izmir-bakim" },
    client: "TÜPRAŞ",
    location: "İzmir",
    description: "Tüpraş İzmir rafinerisinde periyodik bakım ve onarım hizmetleri."
  },
  {
    title: "MOL Macaristan Boru İmalat",
    category: "mechanical",
    image: "/img/Kaynakİşleri.jpeg",
    status: "completed",
    slug: { current: "mol-macaristan-imalat" },
    client: "MOL Group",
    location: "Macaristan",
    description: "Uluslararası standartlarda boru imalat ve montaj projesi."
  },
];

export default async function ProjelerPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ filter?: string }> 
}) {
  const { filter } = await searchParams;
  const sanityProjects = await client.fetch(ALL_PROJECTS_QUERY);
  const sanityData = sanityProjects || [];
  
  // Sanity verileri en başa, fallback verileri arkasına
  let displayProjects = [...sanityData, ...fallbackProjects];

  // Filtreleme mantığı
  if (filter === "completed") {
    displayProjects = displayProjects.filter((p: any) => p.status === "completed" || p.status === "Tamamlandı");
  } else if (filter === "ongoing") {
    displayProjects = displayProjects.filter((p: any) => p.status === "ongoing" || p.status === "Devam Ediyor");
  }

  return (
    <>
      <PageHeader 
        title="Projelerimiz" 
        description="Türkiye'nin sanayi altyapısına güç katan, başarıyla tamamladığımız ve gururla yürüttüğümüz projelerimiz."
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
              Tümü
            </Link>
            <Link 
              href="/projeler?filter=completed" 
              scroll={false}
              className={`px-8 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all ${
                filter === "completed" ? "bg-primary-950 text-white shadow-xl shadow-primary-950/20" : "bg-primary-50 text-primary-900 hover:bg-primary-100"
              }`}
            >
              Tamamlanan Projeler
            </Link>
            <Link 
              href="/projeler?filter=ongoing" 
              scroll={false}
              className={`px-8 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs whitespace-nowrap transition-all ${
                filter === "ongoing" ? "bg-primary-950 text-white shadow-xl shadow-primary-950/20" : "bg-primary-50 text-primary-900 hover:bg-primary-100"
              }`}
            >
              Devam Eden Projeler
            </Link>
          </div>

          {displayProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {displayProjects.map((project: any, index: number) => {
                const projectImage = project.mainImage 
                  ? urlForImage(project.mainImage).url() 
                  : project.image;
                
                const categoryTitle = project.category === 'industrial' ? 'Endüstriyel Tesis' :
                                     project.category === 'mechanical' ? 'Mekanik Montaj' :
                                     project.category === 'boiler' ? 'Kazan & Basınçlı Kaplar' :
                                     project.category === 'revision' ? 'Revizyon & Bakım' : (project.category || "Genel");

                const statusTitle = project.status === 'completed' || project.status === 'Tamamlandı' ? 'Tamamlandı' : 
                                   project.status === 'ongoing' || project.status === 'Devam Ediyor' ? 'Devam Ediyor' : (project.status || "Tamamlandı");

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
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 font-bold">Bu kategoride henüz proje bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

