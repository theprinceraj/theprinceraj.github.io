import type { MetadataRoute } from "next";
import { siteOrigin } from "@/content/site-content";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${siteOrigin}/sitemap.xml`,
    };
}
