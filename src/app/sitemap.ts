import type { MetadataRoute } from "next";
import { blogs, siteOrigin } from "@/content/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${siteOrigin}/`, changeFrequency: "daily", priority: 1 },
        { url: `${siteOrigin}/blogs`, changeFrequency: "weekly", priority: 0.8 },
        ...blogs
            .filter((blog) => blog.link.startsWith(siteOrigin))
            .map((blog) => ({ url: blog.link, changeFrequency: "monthly" as const, priority: 0.6 })),
    ];
}
