"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Genel Bilgi Talebi",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // 1. WhatsApp Mesajını Hazırla
      const wpMessage = `Merhaba, İletişim Formundan Yeni Mesaj:\n\n` +
        `• Ad Soyad: ${formData.name}\n` +
        `• E-Posta: ${formData.email}\n` +
        `• Telefon: ${formData.phone}\n` +
        `• Konu: ${formData.subject}\n\n` +
        `Mesaj:\n${formData.message}`;
      
      const wpUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(wpMessage)}`;

      // 2. Arka Planda E-Posta Gönderimi (Server Action)
      await sendContactEmail(formData);

      // 3. Başarılı Durumu ve WhatsApp'a Yönlendirme
      setStatus("success");
      
      // Kısa bir süre sonra WP'ye yönlendir
      setTimeout(() => {
        window.open(wpUrl, "_blank");
      }, 1000);

    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-green-50 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-black text-primary-950 mb-4">Mesajınız Hazırlandı!</h3>
        <p className="text-gray-600 mb-8 font-medium">
          Bilgileriniz kaydedildi. Şimdi otomatik olarak WhatsApp hattımıza yönlendiriliyorsunuz...
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-8 py-3 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-950 transition-all"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-3xl font-black text-primary-950 mb-10 relative z-10">Bize <span className="text-secondary-600">Yazın.</span></h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Adınız Soyadınız</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-secondary-500 outline-none transition-all font-medium text-primary-950 placeholder:text-gray-300" 
              placeholder="Ahmet Yılmaz" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">E-Posta Adresiniz</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" 
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-secondary-500 outline-none transition-all font-medium text-primary-950 placeholder:text-gray-300" 
              placeholder="ahmet@email.com" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Telefon No</label>
            <input 
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel" 
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-secondary-500 outline-none transition-all font-medium text-primary-950 placeholder:text-gray-300" 
              placeholder="05xx xxx xx xx" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Konu</label>
            <select 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-secondary-500 outline-none transition-all font-medium text-primary-950 appearance-none cursor-pointer"
            >
              <option>Genel Bilgi Talebi</option>
              <option>Teklif İstiyorum</option>
              <option>Teknik Destek</option>
              <option>Diğer</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Mesajınız</label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-secondary-500 outline-none transition-all font-medium text-primary-950 placeholder:text-gray-300 resize-none" 
            placeholder="Mesajınızı buraya yazın..."
          ></textarea>
        </div>

        <button 
          disabled={status === "loading"}
          type="submit" 
          className="w-full py-5 bg-primary-900 text-white font-black rounded-2xl hover:bg-primary-950 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-primary-900/30 transform hover:-translate-y-1"
        >
          {status === "loading" ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <>Mesajı Gönder & WP'ye Yönlen <Send className="h-5 w-5" /></>
          )}
        </button>
      </form>
    </div>
  );
}

