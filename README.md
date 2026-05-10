# 🏗️ Yaman Kazan Web Portal

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A premium, high-performance industrial web portal designed for **Yaman Kazan**. Built with modern web technologies to showcase industrial services, projects, and corporate identity with a focus on visual excellence and dynamic content management.

### 🇹🇷 Proje Hakkında
**Yaman Kazan** için geliştirilen bu modern endüstriyel web portalı, şirketin hizmetlerini, projelerini ve kurumsal kimliğini en üst düzeyde sergilemek amacıyla tasarlanmıştır. Sanity CMS entegrasyonu sayesinde tüm içerikler (projeler, hizmetler, sertifikalar) dinamik olarak yönetilebilir.

---

## ✨ Key Features

- **🚀 Modern Architecture**: Built on Next.js 15+ (App Router) for superior performance and SEO.
- **📦 Headless CMS**: Fully integrated with Sanity CMS for real-time content management (Projects, Services, Certificates).
- **🎨 Premium UI/UX**: 
    - Responsive design using Tailwind CSS 4.
    - Smooth animations powered by Framer Motion.
    - Specialized sidebar layouts for Project and Service detail pages.
- **⚡ Performance Optimized**:
    - Image optimization via Sanity CDN.
    - Incremental Static Regeneration (ISR) for fast updates.
- **📱 Conversion Oriented**:
    - Integrated WhatsApp floating contact button.
    - Dynamic contact forms with validation (React Hook Form + Zod).
    - Email integration via Resend.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js** | React framework for SSR, ISR, and Routing. |
| **Sanity.io** | Headless CMS for structured content. |
| **Tailwind CSS 4** | Utility-first styling for premium design. |
| **Framer Motion** | Advanced UI interactions and animations. |
| **TypeScript** | Type-safe development. |
| **Lucide React** | Modern and consistent iconography. |
| **Resend** | Reliable email delivery for contact forms. |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20+ 
- npm or yarn
- A Sanity.io account

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/yaman-kazan.git
cd yaman-kazan
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
RESEND_API_KEY=your_key
```

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
Access the application at `http://localhost:3000`.  
Access the Sanity Studio at `http://localhost:3000/studio`.

---

## 📁 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Pages & API)
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI elements
│   │   ├── home/       # Homepage sections
│   │   └── ...         # Feature-specific components
│   ├── lib/            # Shared utilities and configurations
│   │   ├── sanity.ts   # Sanity client setup
│   │   └── utils.ts    # Helper functions
│   └── types/          # TypeScript definitions
├── public/             # Static assets
├── sanity/             # CMS Schemas and Studio config
├── tailwind.config.ts  # Styling configuration
└── next.config.ts      # Next.js configuration
```

---

## 📝 License

This project is private and all rights are reserved to **Yaman Kazan**.

---

## 📞 Contact & Support

Developed for Yaman Kazan. For technical inquiries, please contact the development team.

- **Website**: [yamankazan.com](https://yamankazan.com)
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/your-number)

---
<p align="center">
  Made with ❤️ for Yaman Kazan
</p>
