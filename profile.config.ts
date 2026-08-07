import SquareJsIcon from "@/assets/icons/toolbox/square-js.svg";
import SquareTsIcon from "@/assets/icons/toolbox/square-ts.svg";
import SolidityIcon from "@/assets/icons/toolbox/solidity.svg";
import HTML5Icon from "@/assets/icons/toolbox/html5.svg";
import CssIcon from "@/assets/icons/toolbox/css3.svg";
import ReactIcon from "@/assets/icons/toolbox/react.svg";
import ElectronIcon from "@/assets/icons/toolbox/electron.svg";
import GitIcon from "@/assets/icons/toolbox/git.svg";
import PolypaneIcon from "@/assets/icons/toolbox/polypane.svg";
import FirebaseIcon from "@/assets/icons/toolbox/firebase.svg";
import GithubIcon from "@/assets/icons/toolbox/github.svg";
import BunIcon from "@/assets/icons/toolbox/bun.svg";
import PostmanIcon from "@/assets/icons/toolbox/postman.svg";
import TailwindIcon from "@/assets/icons/toolbox/tailwind.svg";
import MongoDBIcon from "@/assets/icons/toolbox/mongo-db.svg";
import ViteIcon from "@/assets/icons/toolbox/vite.svg";
import VSCodeIcon from "@/assets/icons/toolbox/vs-code.svg";
import VercelIcon from "@/assets/icons/toolbox/vercel.svg";
import SwaggerIcon from "@/assets/icons/toolbox/swagger.svg";
import NodeJsIcon from "@/assets/icons/toolbox/node-js.svg";
import NestIcon from "@/assets/icons/toolbox/nest.svg";
import ShopifyIcon from "@/assets/icons/toolbox/shopify.svg";
import CloudflareIcon from "@/assets/icons/toolbox/cloudflare.svg";
import CloudinaryIcon from "@/assets/icons/toolbox/cloudinary.svg";
import AwsIcon from "@/assets/icons/toolbox/aws.svg";
import AzureIcon from "@/assets/icons/toolbox/azure.svg";
import FigmaIcon from "@/assets/icons/toolbox/figma.svg";
import localSocialPostmanPage from "@/assets/images/local-social-postman-page.png";
import coverGeniusPage from "@/assets/images/cover-genius-screenshot.webp";
import gstRecoProPage from "@/assets/images/gst-reco-pro-page.webp";
import sentinelPage from "@/assets/images/sentinel-landing-page.webp";
import markshifyLandingPage from "@/assets/images/markshify-landing-page.png";
import {
    blogs as sharedBlogs,
    email as sharedEmail,
    footerLinks as sharedFooterLinks,
    portfolioProjects as sharedPortfolioProjects,
    testimonials as sharedTestimonials,
} from "./src/content/site-content";

const portfolioProjectImages = [
    gstRecoProPage,
    sentinelPage,
    coverGeniusPage,
    localSocialPostmanPage,
    markshifyLandingPage,
];

const portfolioProjectsWithAssets = sharedPortfolioProjects.map((project, index) => ({
    ...project,
    results: project.results.map((title) => ({ title })),
    image: portfolioProjectImages[index],
}));

const CONFIG = {
    seo: {
        about: `Prince Raj is a full-stack developer and computer science undergraduate building production-grade web applications, backend systems, and SaaS products. His work focuses on backend engineering, full-stack development, API design, authentication systems, payment integrations, database architecture, document automation, and AI-related infrastructure.
        
        He is the creator of GST Reco Pro, a tax compliance and reconciliation SaaS built for Indian tax professionals. The platform processes bulk GST documents, converts tax PDFs into structured Excel reports, and is designed with a strong privacy-first approach where sensitive client data stays on the user’s device. The product uses Tanstack Start, Tailwind CSS, Supabase, and Razorpay and reflects his interest in shipping practical, real-world software that solves business problems. The product has over 60+ users as of 08/08/2026.
        
        Prince has also built projects across several technical domains, including:
        1. AI governance and safety infrastructure, such as an AI proxy with PII detection and redaction
        2. Backend systems for social platforms, including modular APIs, authentication, feeds, profiles, and geospatial content discovery
        3. AI-assisted document and career tools, including resume-driven cover letter generation
        4. OCR and data extraction utilities, including marksheet scanning and structured CSV generation
        5. Technical writing on backend systems, authentication, payments, and data structures
        
        His technical stack includes Node.js, NestJS, Express.js, TypeScript, JavaScript, React, Next.js, PostgreSQL, MongoDB, Supabase, Prisma, Mongoose, Tailwind CSS, Bootstrap, Razorpay, PDF processing tools, OCR workflows, and cloud deployment platforms. He is especially interested in building systems that are secure, scalable, maintainable, and easy to extend.
        
        Prince also writes engineering blogs on topics such as backend authentication, token-based login flows, Razorpay integration in NestJS, Bloom filters, and cybersecurity. His writing and projects show a consistent focus on practical engineering, system design, and applied problem-solving.
        
        If you are looking for a developer who can build backend-heavy web applications, SaaS products, document automation tools, and modern full-stack platforms, Prince Raj is a strong fit.`,
        keywords: [
            "Prince Raj",
            "software engineer",
            "backend developer",
            "full stack developer",
            "NestJS developer",
            "Node.js developer",
            "TypeScript developer",
            "React developer",
            "Next.js developer",
            "SaaS developer",
            "API developer",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "Prisma",
            "Mongoose",
            "Razorpay integration",
            "authentication systems",
            "payment gateway integration",
            "document processing",
            "PDF to Excel",
            "OCR",
            "AI governance",
            "AI proxy",
            "database design",
            "cloud deployment",
            "GST compliance software",
            "Indian tax technology",
            "engineering blog",
        ],
    },
    email: sharedEmail,
    blogs: sharedBlogs,
    toolboxItems: [
        {
            title: "HTML5",
            iconType: HTML5Icon,
        },
        {
            title: "CSS",
            iconType: CssIcon,
        },
        {
            title: "JavaScript",
            iconType: SquareJsIcon,
        },
        {
            title: "TypeScript",
            iconType: SquareTsIcon,
        },
        {
            title: "Bun",
            iconType: BunIcon,
        },
        {
            title: "Node.js",
            iconType: NodeJsIcon,
        },
        {
            title: "Tailwind CSS",
            iconType: TailwindIcon,
        },
        {
            title: "Solidity",
            iconType: SolidityIcon,
        },
        {
            title: "Nest",
            iconType: NestIcon,
        },
        {
            title: "Swagger",
            iconType: SwaggerIcon,
        },
        {
            title: "Electron",
            iconType: ElectronIcon,
        },
        {
            title: "Postman",
            iconType: PostmanIcon,
        },
        {
            title: "React",
            iconType: ReactIcon,
        },
        {
            title: "Vite",
            iconType: ViteIcon,
        },
        {
            title: "MongoDB",
            iconType: MongoDBIcon,
        },
        {
            title: "Firebase",
            iconType: FirebaseIcon,
        },
        {
            title: "Polypane",
            iconType: PolypaneIcon,
        },
        {
            title: "Figma",
            iconType: FigmaIcon,
        },
        {
            title: "Git",
            iconType: GitIcon,
        },
        {
            title: "Github",
            iconType: GithubIcon,
        },
        {
            title: "Visual Studio Code",
            iconType: VSCodeIcon,
        },
        {
            title: "Vercel",
            iconType: VercelIcon,
        },
        {
            title: "Shopify",
            iconType: ShopifyIcon,
        },
        {
            title: "Cloudflare",
            iconType: CloudflareIcon,
        },
        {
            title: "Cloudinary",
            iconType: CloudinaryIcon,
        },
        {
            title: "AWS",
            iconType: AwsIcon,
        },
        {
            title: "Azure",
            iconType: AzureIcon,
        },
    ],
    hobbies: [
        {
            title: "Singing Alone",
            emoji: "🎤",
            left: "5%",
            top: "3%",
            zIndex: 0,
        },
        {
            title: "Photography",
            emoji: "📸",
            left: "50%",
            top: "3%",
            zIndex: 0,
        },
        {
            title: "Gaming",
            emoji: "🎮",
            left: "10%",
            top: "33%",
            zIndex: 0,
        },
        {
            title: "Music",
            emoji: "🎵",
            left: "35%",
            top: "40%",
            zIndex: -10,
        },
        {
            title: "Meetups",
            emoji: "👥",
            left: "70%",
            top: "45%",
            zIndex: 0,
        },
        {
            title: "Workout & Fitness",
            emoji: "🏋️",
            left: "5%",
            top: "65%",
            zIndex: 0,
        },
        {
            title: "Reading",
            emoji: "📚",
            left: "45%",
            top: "70%",
            zIndex: 0,
        },
    ],
    footerLinks: sharedFooterLinks,
    portfolioProjects: portfolioProjectsWithAssets,
    testimonials: sharedTestimonials,
};

export const email = CONFIG.email;
export const seo = CONFIG.seo;
export const blogs = CONFIG.blogs;
export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
