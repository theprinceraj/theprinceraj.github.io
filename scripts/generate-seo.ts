import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogs, testimonials, siteOrigin, footerLinks } from "../src/content/site-content";
import {
    llmsSummary,
    llmsIntro,
    llmsAbout,
    llmsExpertise,
    llmsProducts,
    llmsProjects,
    llmsProfessionalWork,
    llmsProfessionalStack,
    llmsFreelanceWork,
    llmsEarlierWork,
    llmsPractice,
    type LlmsProject,
} from "../src/content/llms-content";
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

function writeLlmsFile(fileName: string, content: string) {
    mkdirSync(WELL_KNOWN_DIR, { recursive: true });

    writeFileSync(path.join(PUBLIC_DIR, fileName), content, "utf8");
    console.log(`Wrote public/${fileName}`);

    writeFileSync(path.join(WELL_KNOWN_DIR, fileName), content, "utf8");
    console.log(`Wrote public/.well-known/${fileName}`);
}

function linkLine(name: string, summary: string, url?: string) {
    return url ? `- [${name}](${url}): ${summary}` : `- ${name}: ${summary}`;
}

function projectSection(project: LlmsProject) {
    return [
        `### ${project.name} (${project.year})`,
        project.summary,
        "",
        ...(project.url ? [`- Website: ${project.url}`] : []),
        ...(project.repo ? [`- Source: ${project.repo}`] : []),
        ...project.details.map((detail) => `- ${detail}`),
        `- Stack: ${project.stack.join(", ")}`,
        "",
    ];
}

const contactLines = [`- [Email](mailto:${email})`, ...footerLinks.map((link) => `- [${link.title}](${link.href})`)];

function generateLlmstxt() {
    const content = [
        "# Prince Raj",
        "",
        `> ${llmsSummary}`,
        "",
        ...llmsIntro,
        "",
        "## Pages",
        `- [Home](${siteOrigin}/): Portfolio with featured projects, testimonials and contact details`,
        `- [Blogs](${siteOrigin}/blogs): Index of his engineering blog posts`,
        `- [Full profile](${siteOrigin}/llms.full.txt): Long version of this file with project details, professional work and testimonials`,
        "",
        "## Products",
        ...llmsProducts.map((project) => linkLine(project.name, project.summary, project.url ?? project.repo)),
        "",
        "## Projects",
        ...llmsProjects.map((project) => linkLine(project.name, project.summary, project.url ?? project.repo)),
        "",
        "## Professional work",
        ...llmsProfessionalWork.map((work) => `- ${work.title}: ${work.summary}`),
        "",
        "## Writing",
        ...blogs.map((blog) => linkLine(blog.title, blog.description, blog.link)),
        "",
        "## Contact",
        ...contactLines,
        "",
        "## Optional",
        ...llmsEarlierWork.map((item) => `- ${item}`),
        `- ${llmsPractice}`,
        "",
    ].join("\n");

    writeLlmsFile("llms.txt", content);
}

function generateLlmsFullTxt() {
    const content = [
        "# Prince Raj: Full Profile",
        "",
        `> ${llmsSummary}`,
        "",
        "## About",
        llmsAbout.join("\n\n"),
        "",
        "## Expertise",
        ...llmsExpertise.map((item) => `- ${item}`),
        "",
        "## Products",
        "",
        ...llmsProducts.flatMap(projectSection),
        "## Projects",
        "",
        ...llmsProjects.flatMap(projectSection),
        "## Professional work",
        "Client names and product specifics are confidential, so this section describes the type of work only.",
        "",
        ...llmsProfessionalWork.flatMap((work) => [
            `### ${work.title}`,
            work.summary,
            "",
            ...work.details.map((detail) => `- ${detail}`),
            "",
        ]),
        `Common stack: ${llmsProfessionalStack.join(", ")}.`,
        "",
        "## Freelance and collaborative work",
        ...llmsFreelanceWork.map((item) => `- ${item}`),
        "",
        "## Earlier work",
        ...llmsEarlierWork.map((item) => `- ${item}`),
        "",
        "## Data structures and algorithms",
        llmsPractice,
        "",
        "## Writing",
        "",
        ...blogs.flatMap((blog) => [
            `### ${blog.title}`,
            `- Published: ${blog.date}`,
            `- Topic: ${blog.niche}`,
            `- Link: ${blog.link}`,
            `- Summary: ${blog.description}`,
            "",
        ]),
        "## Testimonials",
        "",
        ...testimonials.flatMap((testimonial) => [
            `### ${testimonial.name}, ${testimonial.position}`,
            testimonial.text,
            "",
        ]),
        "## Contact",
        ...contactLines,
        "",
        "## Keywords",
        seo.keywords.join(", "),
        "",
    ].join("\n");

    writeLlmsFile("llms.full.txt", content);
}

function main() {
    generateSitemap();
    generateRss();
    generateLlmstxt();
    generateLlmsFullTxt();
}

main();
