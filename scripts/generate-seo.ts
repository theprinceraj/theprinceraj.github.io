import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogs, portfolioProjects, testimonials, siteOrigin, footerLinks } from "../src/content/site-content";
import { seo, email } from "../profile.config";

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
        ...blogs
            .filter((blog) => blog.link.startsWith(siteOrigin))
            .map((blog) => ({
                loc: blog.link,
                changefreq: "monthly",
                priority: 0.6,
            })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
            (url) =>
                `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`,
        )
        .join("\n")}\n</urlset>`;

    writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");
    console.log("Wrote public/sitemap.xml");
}

function generateRss() {
    const items = blogs
        .map(
            (blog) =>
                `  <item>\n    <title>${escapeXml(blog.title)}</title>\n    <link>${blog.link}</link>\n    <description>${escapeXml(blog.description)}</description>\n    <pubDate>${new Date(blog.date).toUTCString()}</pubDate>\n  </item>`,
        )
        .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Prince Raj - Blogs</title>\n  <link>${siteOrigin}/blogs</link>\n  <description>Thoughts on web dev and engineering.</description>\n${items}\n</channel>\n</rss>`;

    writeFileSync(path.join(PUBLIC_DIR, "rss.xml"), rss, "utf8");
    console.log("Wrote public/rss.xml");
}

// seo.about is an indented template literal; strip the indent so it isn't rendered as Markdown code blocks
const about = seo.about
    .split("\n")
    .map((line) => line.trim())
    .join("\n");

function generateSummary(): string {
    return about.split(/\n\s*\n/)[0];
}

function writeLlmsFile(fileName: string, content: string) {
    mkdirSync(WELL_KNOWN_DIR, { recursive: true });

    writeFileSync(path.join(PUBLIC_DIR, fileName), content, "utf8");
    console.log(`Wrote public/${fileName}`);

    writeFileSync(path.join(WELL_KNOWN_DIR, fileName), content, "utf8");
    console.log(`Wrote public/.well-known/${fileName}`);
}

function buildLlmsContent({
    title,
    intro,
    pages,
    blogsHeading,
    testimonialsHeading,
}: {
    title: string;
    intro: string[];
    pages: string[];
    blogsHeading: string;
    testimonialsHeading: string;
}) {
    return [
        `# ${title}`,
        "",
        ...intro,
        "",
        "## Pages",
        ...pages,
        "",
        "## Expertise",
        ...seo.expertise.map((item) => `- ${item}`),
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
        `## ${blogsHeading}`,
        ...blogs.flatMap((blog) => [
            `- ${blog.title}`,
            `  - Date: ${blog.date}`,
            `  - Niche: ${blog.niche}`,
            `  - Link: ${blog.link}`,
            `  - Summary: ${blog.description}`,
            "",
        ]),
        `## ${testimonialsHeading}`,
        ...testimonials.flatMap((testimonial) => [
            `- ${testimonial.name}`,
            `  - Role: ${testimonial.position}`,
            `  - Review: ${testimonial.text}`,
            "",
        ]),
        "## Contact",
        `- Email: ${email}`,
        ...footerLinks.map((link) => `- ${link.title}: ${link.href}`),
        "",
        "## Keywords",
        "",
        seo.keywords.join(", "),
    ].join("\n");
}

function generateLlmstxt() {
    const content = buildLlmsContent({
        title: "Prince Raj",
        intro: [`> ${generateSummary()}`],
        pages: [`- [Home](${siteOrigin}/)`, `- [Blogs](${siteOrigin}/blogs)`],
        blogsHeading: "Blogs",
        testimonialsHeading: "Reviews",
    });

    writeLlmsFile("llms.txt", content);
}

function generateLlmsFullTxt() {
    const content = buildLlmsContent({
        title: "Prince Raj - Full Profile",
        intro: ["## About", about],
        pages: [`- Home: ${siteOrigin}/`, `- Blogs: ${siteOrigin}/blogs`],
        blogsHeading: "Full Blog Descriptions",
        testimonialsHeading: "Full Testimonials",
    });

    writeLlmsFile("llms.full.txt", content);
}

function main() {
    generateSitemap();
    generateRss();
    generateLlmstxt();
    generateLlmsFullTxt();
}

main();
