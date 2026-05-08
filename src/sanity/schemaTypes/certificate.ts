export const certificate = {
  name: "certificate",
  title: "Sertifikalar",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Sertifika Adı",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issuer",
      title: "Veren Kurum",
      type: "string",
    },
    {
      name: "issueDate",
      title: "Alınma Tarihi",
      type: "date",
    },
    {
      name: "image",
      title: "Sertifika Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
