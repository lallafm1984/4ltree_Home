import type { MetadataRoute } from "next";

const SITE_HOST = "www.4ltree.com";
const BASE_URL = `https://${SITE_HOST}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: SITE_HOST,
  };
}
