import { buildLlmsTxt } from "@/lib/seo-files";

export const dynamic = "force-static";

export function GET() {
    return new Response(buildLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
