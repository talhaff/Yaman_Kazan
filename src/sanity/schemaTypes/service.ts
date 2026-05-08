export const service = {
  name: "service",
  title: "Hizmetler",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Hizmet Adı",
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
      name: "icon",
      title: "İkon (SVG veya URL)",
      type: "string",
    },
    {
      name: "content",
      title: "Hizmet Detayları",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
