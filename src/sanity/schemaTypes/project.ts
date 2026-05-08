export const project = {
  name: "project",
  title: "Projeler",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Proje Adı",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Uzantısı (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
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
      name: "completionDate",
      title: "Tamamlanma Tarihi",
      type: "date",
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
