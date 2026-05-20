import { client } from "@/sanity/lib/client";
import { ALL_CERTIFICATES_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import SertifikalarClient from "./SertifikalarClient";

export const metadata = {
  title: "Kalite & Sertifikalar | Yaman Kazan",
  description: "Yaman Kazan kalite ve yönetim sertifikaları. Quality & Management Certificates.",
};

export const revalidate = 60;

const fallbackCertificates = [
  { 
    title: "ISO 45001:2018", 
    issuer: "İş Sağlığı ve Güvenliği Yönetim Sistemi Sertifikası", 
    issuerKey: "cert.fb.45001.issuer",
    image: "/img/sertifika1.png", 
    code: "OHS-2026-YK"
  },
  { 
    title: "ISO 9001:2015", 
    issuer: "Kalite Yönetim Sistemi Sertifikası", 
    issuerKey: "cert.fb.9001.issuer",
    image: "/img/sertifika2.png", 
    code: "QMS-2026-YK"
  },
  { 
    title: "ISO 14001:2015", 
    issuer: "Çevre Yönetim Sistemi Sertifikası", 
    issuerKey: "cert.fb.14001.issuer",
    image: "/img/sertifika3.png",
    code: "ENV-2026-YK"
  },
];

export default async function SertifikalarPage() {
  const sanityCertificates = await client.fetch(ALL_CERTIFICATES_QUERY);
  const sanityData = sanityCertificates || [];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const displayCerts = (sanityData.length > 0 ? sanityData : fallbackCertificates).map((cert: any) => ({
    title: cert.title,
    issuer: cert.issuer,
    issuerKey: cert.issuerKey || (cert.title.includes("45001") ? "cert.fb.45001.issuer" : cert.title.includes("9001") ? "cert.fb.9001.issuer" : cert.title.includes("14001") ? "cert.fb.14001.issuer" : null),
    image: cert.image?.asset ? urlForImage(cert.image).url() : cert.image,
    code: cert.code
  }));

  return (
    <SertifikalarClient certificates={displayCerts} />
  );
}
