"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PremiumImageProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string | null;
  alt?: string;
  fallbackText?: string;
}

export default function PremiumImage({
  src,
  alt = "Görsel",
  fallbackText = "Görsel Bekleniyor",
  className,
  ...props
}: PremiumImageProps) {
  const [error, setError] = useState(false);

  // Görsel yoksa veya hata aldıysa
  if (!src || error) {
    if (!src && !error) {
       console.warn(`PremiumImage: Eksik görsel kaynağı - alt text: "${alt}"`);
    }

    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-100 text-neutral-500 rounded-md overflow-hidden",
          className
        )}
      >
        <span className="text-sm font-medium">{fallbackText}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        onError={() => {
          console.warn(`PremiumImage: Görsel yüklenemedi - src: ${src}`);
          setError(true);
        }}
        className="object-cover transition-opacity duration-300"
        {...props}
      />
    </div>
  );
}
