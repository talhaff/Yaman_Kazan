import { client } from "@/sanity/lib/client";
import { SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const revalidate = 60;

const fallbackServices = [
  {
    title: "Saha Montaj ve Ekipman Kurulumu",
    description: "Endüstriyel tesislerde ekipman montajı, yapısal entegrasyon ve saha kurulum süreçleri uzman ekiplerimizce yönetilmektedir.",
    image: "/img/sahamontajkurulumu.jpeg",
    category: "Saha Hizmetleri",
    slug: { current: "saha-montaj-ve-ekipman-kurulumu" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Yaman Kazan olarak, endüstriyel tesislerin kalbi sayılan mekanik montaj ve ekipman kurulumu süreçlerinde çeyrek asırlık tecrübemizle hizmet veriyoruz. Enerji santrallerinden petrokimya tesislerine kadar geniş bir yelpazede, ağır ekipmanların hassas yerleşimi ve yapısal entegrasyonu konusunda uzman kadromuzla yanınızdayız." }]
      }
    ]
  },
  {
    title: "Hidroelektrik Santralleri",
    description: "Santral sahasındaki operasyonlar, ağır ekipman montajı ve teknik altyapı kurulumunda tam kapsamlı çözümler.",
    image: "/img/hidroelektriksantral01.jpeg",
    category: "Enerji",
    slug: { current: "hidroelektrik-santralleri" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Hidroelektrik santrallerin (HES) kurulum ve revizyon süreçlerinde uzmanlaşmış ekibimiz, su türbinlerinden jeneratör gruplarına kadar tüm ağır ekipmanların montajını gerçekleştirmektedir. Yenilenebilir enerji projelerinde sürdürülebilir ve verimli çözümler sunuyoruz." }]
      }
    ]
  },
  {
    title: "Çöp Tutucu Izgara Revizyonu",
    description: "HES su giriş sistemlerinin demontaj, temizlik ve revizyon çalışmaları zorlu saha koşullarında gerçekleştirilir.",
    image: "/img/ÇöpTutucuIzgaraRevizyonu.jpeg",
    category: "Revizyon",
    slug: { current: "cop-tutucu-izgara-revizyonu" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "HES su giriş yapılarında kritik öneme sahip olan çöp tutucu ızgaraların periyodik bakımı ve revizyonu, santral verimliliğini doğrudan etkiler. Zorlu su altı ve yüzey koşullarında, ızgara sistemlerinin temizliği, yapısal onarımı ve modernizasyonunu gerçekleştiriyoruz." }]
      }
    ]
  },
  {
    title: "Kızdırıcı Kolektör Revizyonu",
    description: "100 t/h - 45 Bar yüksek basınçlı buhar kazanlarında kolektör yenileme ve hassas montaj işlemleri.",
    image: "/img/BarKızdırıcı.jpeg",
    category: "Kazan Teknolojileri",
    slug: { current: "kizdirici-kolektor-revizyonu" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Yüksek basınçlı buhar kazanlarında aşırı sıcaklık ve basınç altında çalışan kızdırıcı kolektörlerin revizyonu, üst düzey kaynak ve mühendislik becerisi gerektirir. 45 Bar ve üzeri basınç değerlerine sahip sistemlerde sertifikalı kaynak operasyonları yürütüyoruz." }]
      }
    ]
  },
  {
    title: "Multisiklon İmalatı",
    description: "Toz ayrıştırma sistemlerinde yüksek dayanım ve verimlilik esaslı multisiklon ekipman üretimi.",
    image: "/img/Multisiklonİmalatı.jpeg",
    category: "İmalat",
    slug: { current: "multisiklon-imalati" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Endüstriyel emisyon kontrolünde hayati rol oynayan multisiklon sistemleri, tesisinizin hava kalitesini ve çevresel uyumluluğunu sağlar. Yüksek dayanımlı malzemelerden imal edilen siklonlarımız, uzun ömürlü ve düşük bakım maliyetli bir kullanım sunar." }]
      }
    ]
  },
  {
    title: "Membran Duvar İmalatı",
    description: "50 t/h buhar kazanları için yüksek hassasiyetli membran duvar sistemleri ve kaynak prosesleri.",
    image: "/img/membranduvar.jpeg",
    category: "İmalat",
    slug: { current: "membran-duvar-imalati" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Buhar kazanı teknolojilerinin temelini oluşturan membran duvar imalatında, otomatik kaynak makinelerimiz ve uzman personelimizle yüksek sızdırmazlık ve ısı transfer verimliliği sağlıyoruz. Projenize özel panel tasarımları gerçekleştiriyoruz." }]
      }
    ]
  },
  {
    title: "Hava Kanalı ve Toz Emme Sistemleri",
    description: "Endüstriyel tesisler için özel tasarım hava kanalları ve toz emme ünitesi imalatı ve montajı.",
    image: "/img/havakanal.jpeg",
    category: "İmalat",
    slug: { current: "hava-kanali-ve-toz-emme-sistemleri" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Tesis içi hava sirkülasyonu ve toz yönetimi için tasarladığımız kanal sistemleri, aerodinamik hesaplamalar yapılarak imal edilir. Büyük ölçekli toz emme üniteleri ile sağlıklı bir çalışma ortamı kurgulamanıza yardımcı oluyoruz." }]
      }
    ]
  },
  {
    title: "Kanal Geçiş Elemanları",
    description: "Yüksek sıcaklık ve basınç dayanımlı kanal geçiş elemanları ve genleşme parçaları üretimi.",
    image: "/img/kanalgecis.jpeg",
    category: "İmalat",
    slug: { current: "kanal-gecis-elemanlari" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Farklı kesit ve çaplardaki kanalların birleşimi, yüksek ısı genleşmelerinin kompanse edilmesi için özel üretim geçiş elemanları imal ediyoruz. Titreşim ve termal şoklara dayanıklı esnek bağlantı çözümleri sunuyoruz." }]
      }
    ]
  },
  {
    title: "Endüstriyel Tesis Kurulumu",
    description: "Anahtar teslim endüstriyel tesis kurulumu, makine montajı ve devreye alma hizmetleri.",
    image: "/img/kurulumlar.jpeg",
    category: "Kurulum",
    slug: { current: "endustriyel-tesis-kurulumu" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Sıfırdan tesis kurulum projelerinde, proje yönetiminden son devreye almaya kadar tüm aşamalarda Yaman Kazan güvencesiyle yanınızdayız. Makine temellerinden çelik konstrüksiyon montajına kadar komplike süreçleri yönetiyoruz." }]
      }
    ]
  },
  {
    title: "Özel Kaynak ve Metal İşleri",
    description: "Sertifikalı kaynakçılarımızla yüksek basınçlı kaplar ve yapısal çelik kaynak işleri.",
    image: "/img/Kaynakİşleri.jpeg",
    category: "İmalat",
    slug: { current: "ozel-kaynak-ve-metal-isleri" },
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Tüm kaynak operasyonlarımız sertifikalı uzmanlarımız tarafından yürütülmektedir. Paslanmaz çelik, karbon çelik ve özel alaşımlı metallerde hassas kaynak işleri, tahribatsız muayene (NDT) süreçleriyle birlikte sunulur." }]
      }
    ]
  }
];

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });

  // If not in Sanity, check fallbackServices
  if (!service) {
    service = fallbackServices.find(fb => fb.slug.current === slug);
  }

  if (!service) {
    notFound();
  }

  const mainImageUrl = service.mainImage ? urlForImage(service.mainImage).url() : (service.image || null);

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

                {mainImageUrl && (
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                    <Image 
                      src={mainImageUrl} 
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
                    <a 
                      href={CONTACT_INFO.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-5 bg-[#25D366] text-white text-center font-black rounded-2xl hover:bg-opacity-90 transition-all shadow-lg"
                    >
                      <MessageCircle className="h-5 w-5" /> WhatsApp Teklif
                    </a>
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="block w-full py-5 bg-white/10 text-white text-center font-black rounded-2xl hover:bg-white/20 transition-all border border-white/10">
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
