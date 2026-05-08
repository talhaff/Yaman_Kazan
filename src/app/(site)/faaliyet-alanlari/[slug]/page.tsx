import { client } from "@/sanity/lib/client";
import { SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });

  if (!service) {
    notFound();
  }

  const mainImageUrl = service.mainImage ? urlForImage(service.mainImage).url() : null;

  return (
    <article className="bg-white min-h-screen">
      <PageHeader 
        title={service.title} 
        description={service.description}
        imagePath={mainImageUrl || "/img/sahamontajkurulumu.jpeg"}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-xl prose-primary max-w-none">
                <h2 className="text-4xl font-black text-primary-950 mb-10 leading-tight">
                  {service.title} <span className="text-secondary-600">Çözümlerimiz</span>
                </h2>
                
                <div className="text-gray-600 leading-relaxed font-medium mb-12">
                  <PortableText value={service.content || []} />
                </div>

                {service.mainImage && (
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                    <Image 
                      src={mainImageUrl!} 
                      alt={service.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Contact Card */}
                <div className="bg-primary-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] -z-0 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <h3 className="text-2xl font-black mb-6 relative z-10">Hızlı Teklif Alın</h3>
                  <p className="text-white/70 mb-10 relative z-10 font-medium">
                    {service.title} ve diğer hizmetlerimiz hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın.
                  </p>
                  
                  <div className="space-y-4 relative z-10">
                    <Link href="/iletisim" className="block w-full py-5 bg-secondary-600 text-white text-center font-black rounded-2xl hover:bg-secondary-700 transition-all shadow-lg hover:shadow-secondary-600/30">
                      Teklif İsteyin
                    </Link>
                    <a href="tel:+900000000000" className="block w-full py-5 bg-white/10 text-white text-center font-black rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                      Bizi Arayın
                    </a>
                  </div>
                </div>

                {/* Why Us? List */}
                <div className="bg-zinc-50 rounded-[2.5rem] p-10 border border-gray-100">
                  <h4 className="text-xl font-black text-primary-950 mb-8">Neden Yaman Kazan?</h4>
                  <ul className="space-y-5">
                    {[
                      "Uluslararası Kalite Standartları",
                      "Uzman Mühendislik Kadrosu",
                      "Zamanında ve Güvenli Teslimat",
                      "Yüksek Müşteri Memnuniyeti",
                      "Sektörel Tecrübe ve Birikim"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary-600 shrink-0" />
                        <span className="font-bold text-primary-900/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA / Navigation */}
      <section className="py-20 bg-primary-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Diğer Faaliyet Alanlarımızı İnceleyin</h2>
            <p className="text-white/60 font-medium">Endüstriyel tesisler için tam kapsamlı mühendislik çözümleri.</p>
          </div>
          <Link href="/faaliyet-alanlari" className="flex items-center gap-3 px-10 py-5 bg-white text-primary-950 font-black rounded-2xl hover:bg-secondary-500 hover:text-white transition-all group shrink-0">
            Tüm Hizmetler <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </article>
  );
}
