export const project = {
  name: "project",
  title: "Projeler",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Proje Adı",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Uzantısı (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "description",
      title: "Kısa Açıklama",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Kapak Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gallery",
      title: "Proje Galerisi",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "status",
      title: "Proje Durumu",
      type: "string",
      options: {
        list: [
          { title: "Tamamlandı", value: "completed" },
          { title: "Devam Ediyor", value: "ongoing" },
        ],
        layout: "radio",
      },
      initialValue: "completed",
    },
    {
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Endüstriyel Tesis", value: "industrial" },
          { title: "Mekanik Montaj", value: "mechanical" },
          { title: "Kazan & Basınçlı Kaplar", value: "boiler" },
          { title: "Revizyon & Bakım", value: "revision" },
        ],
      },
    },
    {
      name: "startDate",
      title: "Başlangıç Tarihi",
      type: "date",
    },
    {
      name: "completionDate",
      title: "Tamamlanma Tarihi",
      type: "date",
    },
    {
      name: "location",
      title: "Proje Yeri / Lokasyon",
      type: "string",
    },
    {
      name: "client",
      title: "Müşteri / Kurum",
      type: "string",
    },
    {
      name: "content",
      title: "Proje Detayları",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
