import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview", "/api/"],
      },
    ],
    sitemap: "https://biodata-mate.vercel.app/sitemap.xml",
  };
}
