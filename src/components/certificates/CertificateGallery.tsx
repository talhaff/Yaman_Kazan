"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, CheckCircle2, FileText, ChevronLeft, ChevronRight } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  code?: string;
}

interface CertificateGalleryProps {
  certificates: Certificate[];
}

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openLightbox = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(certificates[nextIdx].image);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(certificates[prevIdx].image);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {certificates.map((cert, index) => (
          <div key={index} className="group">
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-700 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-4">
              
              {/* Image Area */}
              <div 
                className="relative aspect-[1/1.4] bg-zinc-100 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(cert.image, index)}
              >
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-20 h-20 bg-white text-primary-950 rounded-full flex items-center justify-center shadow-2xl">
                      <Search className="h-8 w-8" />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-950">ONAYLI</span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    {cert.code || "REG-CERT-104"}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-primary-950 mb-3 tracking-tight group-hover:text-secondary-600 transition-colors uppercase leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                  {cert.issuer}
                </p>
                
                <div 
                  className="pt-6 border-t border-gray-50 flex items-center justify-between cursor-pointer"
                  onClick={() => openLightbox(cert.image, index)}
                >
                  <div className="flex items-center gap-2 text-primary-950 font-black uppercase tracking-tighter text-xs">
                    <FileText className="h-4 w-4 text-secondary-600" />
                    TAM EKRAN GÖR
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-950 group-hover:text-white transition-all">
                    <Search className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <X className="h-10 w-10" />
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all z-[110]"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all z-[110]"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div 
            className="relative w-full h-full max-w-5xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage} 
                alt="Certificate Large View" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <div className="mt-6 text-center">
              <h4 className="text-white text-2xl font-black uppercase tracking-tight">
                {certificates[currentIndex].title}
              </h4>
              <p className="text-white/60 font-medium mt-1">
                {certificates[currentIndex].issuer}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
