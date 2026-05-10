"use server";

import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/constants";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY bulunamadı. E-posta simüle ediliyor.");
      return { success: true, message: "Simulated success" };
    }

    const { data, error } = await resend.emails.send({
      from: "Yaman Kazan İletişim <onboarding@resend.dev>",
      to: [CONTACT_INFO.email],
      subject: `Yeni İletişim Formu: ${formData.subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">Yeni İletişim Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${formData.name}</p>
          <p><strong>E-Posta:</strong> ${formData.email}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Konu:</strong> ${formData.subject}</p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #333;">
            <strong>Mesaj:</strong><br>
            ${formData.message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email action error:", error);
    return { success: false, error };
  }
}
