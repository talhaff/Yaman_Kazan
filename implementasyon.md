# Yaman Kazan - Next.js & Sanity Implementasyon Raporu

Merhaba, ben projenizin Senior Full-Stack Web Geliştiricisi. İlettiğiniz yönergeler doğrultusunda "Yaman Kazan" projesinin temellerini atmış bulunuyorum.

## 🛠️ Gerçekleştirilen Adımlar

1. **Next.js Kurulumu**: Proje `npx create-next-app@latest` ile TypeScript, Tailwind CSS, App Router ve `src` dizini mimarisi kullanılarak oluşturuldu.
2. **Bağımlılıkların Yüklenmesi**: Framer Motion, React Hook Form, Zod, Lucide React, clsx, tailwind-merge, next-sanity ve @sanity/image-url kütüphaneleri kuruldu.
3. **Mimarinin Oluşturulması**: Proje ağacı, belirtilen sitemap'e uygun şekilde oluşturuluyor.

## 📌 Sıradaki İşlemler (Benim Tarafımdan Yapılacaklar)

- Tailwind config dosyasının kurumsal renklere (Lacivert, Kırmızı, Gri) göre ayarlanması.
- Sanity schema yapılarının (project, service, certificate) oluşturulması.
- `PremiumImage` görsel bileşeninin yazılması.
- Next.js Layout ve sayfa yapılarının oluşturulması.

## 👤 Geliştirici Tarafından Manuel Yapılması Gerekenler (Sizin İçin)

Projenin tam anlamıyla çalışır hale gelmesi için sizden şu adımları tamamlamanızı rica ediyorum:

1. **Çevre Değişkenleri (.env.local)**:
   Projenin ana dizininde `.env.local` adlı bir dosya oluşturun ve içine şu bilgileri girin:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="5p59nhnt"
   NEXT_PUBLIC_SANITY_DATASET="production"
   ```

2. **Görsel Dizinlerinin Açılması**:
   Sabit site görselleri için projenin `public/img` klasörü altında şu alt klasörleri oluşturmanız gerekecek:
   - `public/img/kurumsal/`
   - `public/img/projeler/`
   - `public/img/hizmetler/`
   - `public/img/placeholders/` (Hata durumunda PremiumImage tarafından kullanılacak)

3. **Sanity Studio'ya Veri Girişi**:
   Proje çalıştırıldıktan sonra `http://localhost:3000/studio` adresinden Sanity Studio paneline giriş yapın ve en az bir adet **Örnek Proje**, **Hizmet** ve **Sertifika** ekleyin.

Eğer sormak istediğiniz veya eklememi istediğiniz bir detay varsa, lütfen bu dosyaya not düşün.
