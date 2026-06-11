import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
    blogs,
    portfolioProjects,
    testimonials,
    siteOrigin,
} from "../src/content/site-content";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(SCRIPT_DIR, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const WELL_KNOWN_DIR = path.join(PUBLIC_DIR, ".well-known");

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, (character) => {
        switch (character) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "'":
                return "&apos;";
            case '"':
                return "&quot;";
            default:
                return character;
        }
    });
}

function generateSitemap() {
    const urls = [
        { loc: `${siteOrigin}/`, changefreq: "daily", priority: 1 },
        { loc: `${siteOrigin}/blogs`, changefreq: "weekly", priority: 0.8 },
        ...blogs.filter((blog) => blog.link.startsWith(siteOrigin)).map((blog) => ({
            loc: blog.link,
            changefreq: "monthly",
            priority: 0.6,
        })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
            (url) => `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
        )
        .join("\n")}\n</urlset>`;

    writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");
    console.log("Wrote public/sitemap.xml");
}

function generateRss() {
    const items = blogs
        .map(
            (blog) => `  <item>\n    <title>${escapeXml(blog.title)}</title>\n    <link>${blog.link}</link>\n    <description>${escapeXml(blog.description)}</description>\n    <pubDate>${new Date(blog.date).toUTCString()}</pubDate>\n  </item>`
        )
        .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Prince Raj - Blogs</title>\n  <link>${siteOrigin}/blogs</link>\n  <description>Thoughts on web dev and engineering.</description>\n${items}\n</channel>\n</rss>`;

    writeFileSync(path.join(PUBLIC_DIR, "rss.xml"), rss, "utf8");
    console.log("Wrote public/rss.xml");
}

function generateLlmstxt() {
    mkdirSync(WELL_KNOWN_DIR, { recursive: true });

    const content = [
        "# Prince Raj",
        "",
        "## About",
        "Portfolio and engineering blog for Prince Raj.",
        "",
        "## Pages",
        `- [Home](${siteOrigin}/)`,
        `- [Blogs](${siteOrigin}/blogs)`,
        "",
        "## Projects",
        ...portfolioProjects.flatMap((project) => [
            `- ${project.title}`,
            `  - Company: ${project.company}`,
            `  - Year: ${project.year}`,
            `  - Link: ${project.link}`,
            `  - Highlights: ${project.results.join("; ")}`,
            "",
        ]),
        "## Blogs",
        ...blogs.flatMap((blog) => [
            `- ${blog.title}`,
            `  - Date: ${blog.date}`,
            `  - Niche: ${blog.niche}`,
            `  - Link: ${blog.link}`,
            `  - Summary: ${blog.description}`,
            "",
        ]),
        "## Reviews",
        ...testimonials.flatMap((testimonial) => [
            `- ${testimonial.name}`,
            `  - Role: ${testimonial.position}`,
            `  - Review: ${testimonial.text}`,
            "",
        ]),
    ].join("\n");

    writeFileSync(path.join(WELL_KNOWN_DIR, "llms.txt"), content, "utf8");
    console.log("Wrote public/.well-known/llms.txt");
}

function main() {
    generateSitemap();
    generateRss();
    generateLlmstxt();
}

main();
