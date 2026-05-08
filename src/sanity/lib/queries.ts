import { groq } from "next-sanity";

// Tüm projeleri çek
export const ALL_PROJECTS_QUERY = groq`
  *[_type == "project"] | order(completionDate desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    status,
    category,
    startDate,
    completionDate,
    location,
    client
  }
`;

// Belirli bir projeyi slug ile çek
export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    mainImage,
    gallery,
    status,
    category,
    startDate,
    completionDate,
    location,
    client,
    content
  }
`;

// Tüm hizmetleri çek
export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    slug,
    description,
    icon,
    mainImage
  }
`;

// Tüm sertifikaları çek
export const ALL_CERTIFICATES_QUERY = groq`
  *[_type == "certificate"] | order(issueDate desc) {
    _id,
    title,
    issuer,
    issueDate,
    image
  }
`;
