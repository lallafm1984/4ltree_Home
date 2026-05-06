import type { MetadataRoute } from "next";

const BASE_URL = "https://4ltree.com";
const LAST_MODIFIED = "2026-05-06";
const MELODYGEN_IMAGES = [
  `${BASE_URL}/img/store-slides/feature-graphic.png`,
  `${BASE_URL}/img/kr/main.webp`,
  `${BASE_URL}/img/kr/melody.webp`,
  `${BASE_URL}/img/kr/rhythm.webp`,
  `${BASE_URL}/img/kr/chords.webp`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/melodygen`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: MELODYGEN_IMAGES,
    },
    {
      url: `${BASE_URL}/melodygen/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/melodygen/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/melodygen/delete-account`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
