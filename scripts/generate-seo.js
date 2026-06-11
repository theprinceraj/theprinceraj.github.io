const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(__dirname, "..", "profile.config.ts");
const PUBLIC_PATH = path.join(__dirname, "..", "public");
const SITE_ORIGIN = "https://theprinceraj.tech";

function loadBlogs() {
  const configContent = fs.readFileSync(CONFIG_PATH, "utf8");
  const blogsMatch = configContent.match(/blogs: (\[[\s\S]*?\]),/);
  if (!blogsMatch) throw new Error("Could not parse blogs from profile.config.ts");
  try {
    return eval(`(${blogsMatch[1]})`);
  } catch (e) {
    throw new Error(`Failed to parse blogs: ${e.message}`);
  }
}

function generateSitemap(blogs) {
  const urls = [
    { loc: `${SITE_ORIGIN}/`, changefreq: "daily", priority: 1.0 },
    { loc: `${SITE_ORIGIN}/blogs`, changefreq: "weekly", priority: 0.8 },
  ];
  for (const b of blogs) {
    if (b.link.startsWith(SITE_ORIGIN)) {
      urls.push({ loc: b.link, changefreq: "monthly", priority: 0.6 });
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join("\n")}\n</urlset>`;
  fs.writeFileSync(path.join(PUBLIC_PATH, "sitemap.xml"), xml, "utf8");
  console.log("Wrote public/sitemap.xml");
}

function generateRSS(blogs) {
  const items = blogs
    .map(
      (b) => `  <item>\n    <title>${escapeXml(b.title)}</title>\n    <link>${b.link}</link>\n    <description>${escapeXml(b.description)}</description>\n    <pubDate>${new Date(b.date).toUTCString()}</pubDate>\n  </item>`
    )
    .join("\n");
  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Prince Raj - Blogs</title>\n  <link>https://theprinceraj.tech/blogs</link>\n  <description>Thoughts on web dev and engineering.</description>\n${items}\n</channel>\n</rss>`;
  fs.writeFileSync(path.join(PUBLIC_PATH, "rss.xml"), rss, "utf8");
  console.log("Wrote public/rss.xml");
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'\"]/g, function (c) {
    switch (c) {
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
    }
  });
}

function generateAIIndex(blogs) {
  const pages = [
    { slug: "/", title: "Home", description: "Portfolio and projects by Prince Raj" },
    { slug: "/blogs", title: "Blogs", description: "List of blog articles" },
    ...blogs.map((b) => ({ slug: b.link, title: b.title, description: b.description, date: b.date })),
  ];
  fs.writeFileSync(path.join(PUBLIC_PATH, "ai-index.json"), JSON.stringify(pages, null, 2), "utf8");
  console.log("Wrote public/ai-index.json");
}

function main() {
  const blogs = loadBlogs();
  generateSitemap(blogs);
  generateRSS(blogs);
  generateAIIndex(blogs);
}

main();
