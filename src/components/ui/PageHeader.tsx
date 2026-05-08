import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  imagePath?: string;
}

export default function PageHeader({ title, description, imagePath = "/img/gorsel03.jpeg" }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={imagePath} alt={title} fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
