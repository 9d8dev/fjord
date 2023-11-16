import { MetadataRoute } from "next";
import fjord from "@/fjord.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${fjord.site_domain}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${fjord.site_domain}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${fjord.site_domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${fjord.site_domain}/all`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${fjord.site_domain}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
