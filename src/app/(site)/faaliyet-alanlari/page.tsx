import PageHeader from "@/components/ui/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";

export const metadata = {
  title: "Faaliyet Alanları",
  description: "Yaman Kazan faaliyet alanları ve uzmanlıkları.",
};

export default function FaaliyetAlanlariPage() {
  return (
    <>
      <PageHeader 
        title="Faaliyet Alanlarımız" 
        description="Endüstriyel tesis kurulumundan ağır ekipman montajına kadar mühendisliğin gücünü sahaya yansıtıyoruz."
        imagePath="/img/sahamontajkurulumu.jpeg"
      />
      
      {/* We reuse the ServicesSection from home, but we can wrap it or modify it slightly if needed. */}
      {/* For now, reusing the high-quality component is best. */}
      <div className="bg-white">
        <ServicesSection />
      </div>
    </>
  );
}
