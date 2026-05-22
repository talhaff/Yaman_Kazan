import { services } from "@/constants/services";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

// Generate static params for the services we have
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Yaman Kazan",
      description: "Aradığınız faaliyet alanı bulunamadı.",
    };
  }

  const title = `${service.title} | Faaliyet Alanlarımız`;
  const description = service.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/faaliyet-alanlari/${slug}`,
    },
    keywords: [
      service.title,
      "Yaman Kazan",
      "Yunus Yaman",
      "Endüstriyel İmalat",
      "Kazan İmalatı",
      "Mekanik Tesisat",
      "Mühendislik Çözümleri"
    ],
    openGraph: {
      title,
      description,
      url: `https://yamankazan.com/faaliyet-alanlari/${slug}`,
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function HizmetDetayPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://yamankazan.com/faaliyet-alanlari/${slug}/#service`,
    "name": service.title,
    "description": service.description,
    "image": `https://yamankazan.com${service.image}`,
    "provider": {
      "@type": "Organization",
      "name": "Yaman Kazan ve Makine",
      "url": "https://yamankazan.com"
    },
    "areaServed": "TR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
