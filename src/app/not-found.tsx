import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Briefcase, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white relative overflow-hidden px-6 py-24">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl w-full text-center">
        {/* Huge aesthetic 404 outline */}
        <h1 className="text-[12rem] md:text-[16rem] font-black text-slate-900/5 leading-none tracking-tighter select-none">
          404
        </h1>

        <div className="relative -mt-16 md:-mt-24 z-10">
          <h2 className="text-3xl md:text-5xl font-black text-primary-950 uppercase tracking-tight mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">
            Page Not Found
          </p>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg mx-auto">
            Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir. 
            <span className="block mt-2 text-sm text-slate-400 italic">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </span>
          </p>

          {/* Navigation Links Grid for Crawl Equity */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-xl mx-auto">
            <Link
              href="/"
              className="flex flex-col items-center justify-center p-5 bg-zinc-50 border border-slate-100 rounded-2xl hover:bg-primary-950 hover:text-white hover:border-primary-950 transition-all duration-300 group shadow-sm"
            >
              <Home className="h-6 w-6 text-slate-400 group-hover:text-white mb-2 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-wider">Ana Sayfa</span>
              <span className="text-[8px] opacity-60 uppercase font-medium">Home</span>
            </Link>

            <Link
              href="/faaliyet-alanlari"
              className="flex flex-col items-center justify-center p-5 bg-zinc-50 border border-slate-100 rounded-2xl hover:bg-primary-950 hover:text-white hover:border-primary-950 transition-all duration-300 group shadow-sm"
            >
              <BookOpen className="h-6 w-6 text-slate-400 group-hover:text-white mb-2 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-wider">Hizmetlerimiz</span>
              <span className="text-[8px] opacity-60 uppercase font-medium">Services</span>
            </Link>

            <Link
              href="/projeler"
              className="flex flex-col items-center justify-center p-5 bg-zinc-50 border border-slate-100 rounded-2xl hover:bg-primary-950 hover:text-white hover:border-primary-950 transition-all duration-300 group shadow-sm"
            >
              <Briefcase className="h-6 w-6 text-slate-400 group-hover:text-white mb-2 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-wider">Projelerimiz</span>
              <span className="text-[8px] opacity-60 uppercase font-medium">Projects</span>
            </Link>

            <Link
              href="/iletisim"
              className="flex flex-col items-center justify-center p-5 bg-zinc-50 border border-slate-100 rounded-2xl hover:bg-primary-950 hover:text-white hover:border-primary-950 transition-all duration-300 group shadow-sm"
            >
              <Phone className="h-6 w-6 text-slate-400 group-hover:text-white mb-2 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-wider">İletişim</span>
              <span className="text-[8px] opacity-60 uppercase font-medium">Contact</span>
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary-850 hover:scale-105 transition-all shadow-lg active:scale-95 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Geri Dön / Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
