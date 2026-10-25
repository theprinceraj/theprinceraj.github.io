// JSON-LD rendered in the root layout. Built from site content so URLs and profiles live in one place.
import { email, mediumProfile, siteOrigin, socialProfiles } from "@/content/site-content";
import { projects } from "@/content/projects";

const personId = `${siteOrigin}#person`;
const gstRecoPro = projects.find((project) => project.name === "GST Reco Pro");

export const shareImagePath = "/images/hero-screenshot.png";

export const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Prince Raj",
    url: siteOrigin,
    sameAs: [...socialProfiles.map((profile) => profile.href), mediumProfile],
    identifier: "@theprinceraj",
    jobTitle: "Full-Stack Developer & SaaS Builder",
    email,
    image: `${siteOrigin}${shareImagePath}`,
    knowsAbout: [
        "Backend Engineering",
        "NestJS",
        "Node.js",
        "TypeScript",
        "API Design",
        "Authentication Systems",
        "Payment Integration",
        "Razorpay",
        "SaaS Products",
        "Database Architecture",
        "AI Governance",
        "Document Automation",
        "OCR",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Prisma",
        "Cloud Deployment",
    ],
    worksFor: {
        "@type": "Organization",
        name: gstRecoPro?.name,
        url: gstRecoPro?.url,
    },
};

export const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteOrigin}#website`,
    url: siteOrigin,
    name: "Prince Raj — Portfolio",
    description: "Prince Raj is a full-stack developer and SaaS builder. Portfolio, projects, and engineering blog.",
    author: { "@id": personId },
    inLanguage: "en-US",
};
