import PageHeader from "@/components/ui/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Faaliyet Alanları",
  description: "Yaman Kazan faaliyet alanları ve uzmanlıkları.",
};

export const revalidate = 60;

export default async function FaaliyetAlanlariPage() {
  const services = await client.fetch(ALL_SERVICES_QUERY);

  return (
    <>
      <PageHeader 
        title="Faaliyet Alanlarımız" 
        description="Endüstriyel tesis kurulumundan ağır ekipman montajına kadar mühendisliğin gücünü sahaya yansıtıyoruz."
        imagePath="/img/sahamontajkurulumu.jpeg"
      />
      
      <div className="bg-white">
        <ServicesSection data={services} />
      </div>
    </>
  );
}
