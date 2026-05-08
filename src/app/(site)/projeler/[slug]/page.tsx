import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { Calendar, User, Tag, MapPin, CheckCircle2, Clock } from "lucide-react";

export const revalidate = 60;

export default async function ProjeDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  if (!project) {
    notFound();
  }

  const mainImageUrl = project.mainImage ? urlForImage(project.mainImage).url() : null;

  return (
    <article className="min-h-screen bg-white">
      <PageHeader 
        title={project.title} 
        description={project.description}
        imagePath={mainImageUrl || "/img/islemler.jpeg"}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Sidebar / Info (Mobile'da en üstte görünebilir ama desktopta sağda) */}
            <div className="lg:col-span-4 lg:order-2">
              <div className="sticky top-32 space-y-8">
                <div className="bg-primary-950 text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative group">
                  {/* Decorative background element */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-600/10 rounded-full blur-3xl group-hover:bg-secondary-600/20 transition-all duration-700"></div>
                  
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="w-1.5 h-6 bg-secondary-500 rounded-full"></span>
                    Proje Künyesi
                  </h3>
                  
                  <div className="space-y-8">
                    {[
                      { icon: User, label: "İşveren / Müşteri", value: project.client },
                      { icon: MapPin, label: "Proje Lokasyonu", value: project.location },
                      { icon: Tag, label: "Hizmet Kategorisi", value: 
                        project.category === 'industrial' ? 'Endüstriyel Tesis' :
                        project.category === 'mechanical' ? 'Mekanik Montaj' :
                        project.category === 'boiler' ? 'Kazan & Basınçlı Kaplar' :
                        project.category === 'revision' ? 'Revizyon & Bakım' : project.category 
                      },
                      { icon: Clock, label: "Başlangıç Tarihi", value: project.startDate && new Date(project.startDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' }) },
                      { icon: project.status === 'completed' ? CheckCircle2 : Clock, label: "Durum / Bitiş", value: 
                        project.status === 'completed' 
                          ? `Tamamlandı (${project.completionDate ? new Date(project.completionDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' }) : ''})`
                          : "Devam Ediyor"
                      },
                    ].map((item, idx) => item.value && (
                      <div key={idx} className="flex gap-5 items-start">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-secondary-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{item.label}</p>
                          <p className="text-sm font-bold text-white/90">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <a href="/iletisim" className="block w-full py-5 bg-secondary-600 text-white text-center font-black rounded-2xl hover:bg-secondary-700 transition-all shadow-lg hover:shadow-secondary-600/30 transform hover:-translate-y-1 uppercase tracking-wider text-sm">
                      Benzer Proje İçin Teklif Alın
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:order-1">
              <div className="space-y-12">
                {/* Intro Section */}
                <div className="prose prose-xl prose-primary max-w-none">
                  <h2 className="text-3xl lg:text-4xl font-black text-primary-950 mb-8 leading-tight">
                    Proje <span className="text-secondary-600">Hakkında</span>
                  </h2>
                  <div className="text-gray-600 leading-relaxed font-medium space-y-6">
                    <PortableText value={project.content || []} />
                  </div>
                </div>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="pt-12">
                    <h3 className="text-2xl font-black text-primary-950 mb-10 flex items-center gap-4">
                      Proje <span className="text-secondary-600">Galerisi</span>
                      <div className="h-px bg-gray-100 flex-1"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.gallery.map((img: any, index: number) => (
                        <div key={index} className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100">
                          <Image 
                            src={urlForImage(img).url()} 
                            alt={`${project.title} - ${index + 1}`} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation / Bottom CTA */}
      <section className="bg-zinc-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-primary-950 mb-8">Diğer Projelerimize Göz Atın</h2>
          <Link href="/projeler" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-primary-900 text-primary-900 font-black rounded-2xl hover:bg-primary-900 hover:text-white transition-all transform hover:scale-105 shadow-xl">
            Tüm Projeler <Tag className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
