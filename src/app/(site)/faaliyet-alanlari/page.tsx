import PageHeader from "@/components/ui/PageHeader";
import GigesServicesGrid from "@/components/services/GigesServicesGrid";

export const metadata = {
  title: "Faaliyet Alanları",
  description: "Yaman Kazan faaliyet alanları ve uzmanlıkları.",
};

import FaaliyetAlanlariClient from "./FaaliyetAlanlariClient";

export default function FaaliyetAlanlariPage() {
  return (
    <>
      <FaaliyetAlanlariClient />
      <div className="bg-white">
        <GigesServicesGrid />
      </div>
    </>
  );
}
