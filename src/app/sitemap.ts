import { MetadataRoute } from "next";
import { services } from "@/constants/services";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 86400; // Revalidate at most once a day

const BASE_URL = "https://yamankazan.com";

const fallbackProjects = [
  "50-th-bolunmus-ocak",
  "akiskan-yatakli-buhar-kazani-montaji",
  "25-th-akiskan-yatakli-buhar-kazani-demontaji",
  "endustriyel-kazan-revizyonu",
  "endustriyel-celik-konstruksiyon",
  "dogalgaz-yakitli-kazan",
  "50-th-steam-drum-imalati",
  "hidroelektrik-santrali-izgara-revizyonu",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes = [
    "",
    "/kurumsal/hakkimizda",
    "/kurumsal/kalite-politikasi",
    "/kurumsal/referanslar",
    "/iletisim",
    "/faaliyet-alanlari",
    "/projeler",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Services (Faaliyet Alanları) Routes
  const serviceRoutes = services.map((service) => ({
    url: `${BASE_URL}/faaliyet-alanlari/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Projects Routes (Sanity + Fallback)
  let sanityProjects: any[] = [];
  try {
    sanityProjects = await client.fetch(ALL_PROJECTS_QUERY);
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
  }

  const sanitySlugs = (sanityProjects || [])
    .map((p: any) => p.slug?.current)
    .filter(Boolean);

  // Combine and deduplicate project slugs
  const allProjectSlugs = Array.from(new Set([...sanitySlugs, ...fallbackProjects]));

  const projectRoutes = allProjectSlugs.map((slug) => ({
    url: `${BASE_URL}/projeler/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
