import type { MetadataRoute } from "next";

const BASE_URL = "https://www.4ltree.com";
const LAST_MODIFIED = "2026-05-13";
const WINK_TIMER_LAST_MODIFIED = "2026-05-27";
const MELODYGEN_IMAGES = [
  `${BASE_URL}/img/store-slides/feature-graphic.png`,
  `${BASE_URL}/img/kr/main.webp`,
  `${BASE_URL}/img/kr/melody.webp`,
  `${BASE_URL}/img/kr/rhythm.webp`,
  `${BASE_URL}/img/kr/chords.webp`,
];
const WINK_TIMER_IMAGES = [
  `${BASE_URL}/img/winktimer/TimerMain.png`,
  `${BASE_URL}/img/winktimer/main.png`,
  `${BASE_URL}/img/winktimer/wink.png`,
  `${BASE_URL}/img/winktimer/look.png`,
  `${BASE_URL}/img/winktimer/flip.png`,
  `${BASE_URL}/img/winktimer/smile.png`,
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
    {
      url: `${BASE_URL}/winktimer`,
      lastModified: WINK_TIMER_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: WINK_TIMER_IMAGES,
    },
    {
      url: `${BASE_URL}/winktimer/privacy`,
      lastModified: WINK_TIMER_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
