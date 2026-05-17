import PageHeader from "@/components/ui/PageHeader";
import GigesServicesGrid from "@/components/services/GigesServicesGrid";

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
        imagePath="/img/faaliyetarka01.png"
      />
      
      <div className="bg-white">
        <GigesServicesGrid />
      </div>
    </>
  );
}
