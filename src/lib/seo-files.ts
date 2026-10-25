// Bodies of the build-time text routes: /rss.xml, /llms.txt and /llms.full.txt.
import { blogs, testimonials, siteOrigin, footerLinks, email, keywords } from "@/content/site-content";
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
} from "@/content/llms-content";

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

export function buildRss() {
    const items = blogs
        .map(
            (blog) =>
                `  <item>\n    <title>${escapeXml(blog.title)}</title>\n    <link>${blog.link}</link>\n    <description>${escapeXml(blog.description)}</description>\n    <pubDate>${new Date(blog.date).toUTCString()}</pubDate>\n  </item>`,
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Prince Raj - Blogs</title>\n  <link>${siteOrigin}/blogs</link>\n  <description>Thoughts on web dev and engineering.</description>\n${items}\n</channel>\n</rss>`;
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

export function buildLlmsTxt() {
    return [
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
}

export function buildLlmsFullTxt() {
    return [
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
        keywords.join(", "),
        "",
    ].join("\n");
}
