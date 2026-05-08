import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projeler",
  description: "Yaman Kazan tamamlanan ve devam eden projeler.",
};

const projects = [
  {
    title: "TÜPRAŞ İzmir Günlük Bakım İşleri",
    category: "Bakım & Revizyon",
    image: "/img/hidroelektriksantral02.jpeg",
    status: "Devam Ediyor"
  },
  {
    title: "MOL Macaristan Boru İmalat",
    category: "İmalat & Montaj",
    image: "/img/Kaynakİşleri.jpeg",
    status: "Tamamlandı"
  },
  {
    title: "Eti Bakır Elazığ Montaj Projesi",
    category: "Saha Kurulumu",
    image: "/img/kurulumlar.jpeg",
    status: "Tamamlandı"
  },
  {
    title: "Çaykur Kazan Dairesi Yenileme",
    category: "Kazan Teknolojileri",
    image: "/img/gorsel01.jpeg",
    status: "Tamamlandı"
  },
];

export default function ProjelerPage() {
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
            {projects.map((project, index) => (
              <Link href="#" key={index} className="group block">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-primary-900 text-xs font-bold uppercase tracking-wider rounded-full">
                      {project.category}
                    </span>
                    <span className={`px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider rounded-full ${project.status === 'Tamamlandı' ? 'bg-green-600/90' : 'bg-secondary-600/90'} backdrop-blur`}>
                      {project.status}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
