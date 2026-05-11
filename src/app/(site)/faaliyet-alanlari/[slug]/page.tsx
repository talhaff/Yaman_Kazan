import { services } from "@/constants/services";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Generate static params for the services we have
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the service in our centralized constant
  const service = services.find(s => s.slug === slug);

  if (!service) {
    // If you still want to support Sanity services, you could add logic here
    // But based on the user's request, they want it to match the homepage services
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
