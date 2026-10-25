import { buildRss } from "@/lib/seo-files";

export const dynamic = "force-static";

export function GET() {
    return new Response(buildRss(), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
