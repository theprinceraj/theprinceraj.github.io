// One entry per project. Entries with `featured` appear as cards on the homepage;
// every entry appears in /llms.txt and /llms.full.txt.
import { StaticImageData } from "next/image";
import gstRecoProPage from "@/assets/images/gst-reco-pro-page.webp";
import sentinelPage from "@/assets/images/sentinel-landing-page.webp";
import coverGeniusPage from "@/assets/images/cover-genius-screenshot.webp";
import localSocialPostmanPage from "@/assets/images/local-social-postman-page.png";
import markshifyLandingPage from "@/assets/images/markshify-landing-page.png";

export type FeaturedCard = {
    title: string;
    results: string[];
    link: string;
    linkText: string;
    image: StaticImageData;
};

export type Project = {
    name: string;
    year: string;
    kind: "product" | "project";
    summary: string;
    url?: string;
    repo?: string;
    details: string[];
    stack: string[];
    featured?: FeaturedCard;
};

export const projects: Project[] = [
    {
        name: "GST Reco Pro",
        year: "2026",
        kind: "product",
        url: "https://gstrecopro.in",
        summary: "Zero-data-risk PDF-to-Excel converter and reconciliation tool for Indian tax professionals.",
        details: [
            "Converts GSTR-1, GSTR-3B and TDS challan (ITNS 281) summary PDFs into structured .xlsx workbooks",
            "All PDF parsing, data extraction and Excel generation run client-side in Web Workers, so no taxpayer file is uploaded",
            "Credit-based pricing with free monthly credits and one-time credit packs paid through Razorpay",
            "Over 60 users as of 08/08/2026",
        ],
        stack: ["TanStack Start", "React", "TypeScript", "Supabase", "Razorpay", "pdf.js", "Tailwind CSS"],
        featured: {
            title: "Tax Compliance & Reconciliation SaaS",
            results: [
                "Collaborated with a domain expert to build a production-ready bulk tax document processing platform.",
                "Architected a secure admin dashboard with advanced reporting and client-side data privacy.",
                "Built an end-to-end solution with Supabase, Razorpay, React, and TailwindCSS.",
            ],
            link: "https://www.youtube.com/watch?v=MR8hMd3QWLo",
            linkText: "View Launch Video",
            image: gstRecoProPage,
        },
    },
    {
        name: "wakacraft",
        year: "2026",
        kind: "product",
        url: "https://wakacraft.tech",
        repo: "https://github.com/theprinceraj/wakacraft",
        summary: "Open-source, self-hostable WakaTime alternative that works with every WakaTime editor plugin.",
        details: [
            "Implements the WakaTime API, so existing editor plugins work unchanged",
            "Dashboards, goals, insights, public profiles, leaderboards, teams, invoices and full-history import from WakaTime, all free",
            "Hosted instance at wakacraft.tech, or self-host it",
        ],
        stack: ["Next.js 16", "TypeScript", "MongoDB", "Mongoose", "Zod", "Better Auth", "Tailwind CSS", "shadcn/ui", "Vitest"],
    },
    {
        name: "Project Sentinel",
        year: "2026",
        kind: "product",
        url: "https://sentinel.theprinceraj.in",
        summary: "AI governance proxy that inspects every application-to-LLM request and response.",
        details: [
            "Drop-in Gemini-compatible proxy: inbound policy rules, prompt-injection detection and PII redaction with Microsoft Presidio",
            "Checks model responses against outbound policy and writes every decision to a MongoDB audit log",
            "Live governance log in a Next.js dashboard over Socket.IO",
        ],
        stack: ["NestJS", "MongoDB", "Redis", "Socket.IO", "Transformers.js", "Microsoft Presidio", "Next.js", "Docker"],
        featured: {
            title: "AI Governance Proxy",
            results: [
                "Built a low-latency AI governance proxy to intercept and validate all application-to-LLM API requests",
                "Integrated Microsoft Presidio to automatically detect and redact 50+ PII and sensitive data types",
                "Designed a live governance log providing real-time visibility into semantic intent and safety risks",
            ],
            link: "https://sentinel.theprinceraj.in",
            linkText: "View Live Site",
            image: sentinelPage,
        },
    },
    {
        name: "CoverGenius AI",
        year: "2025",
        kind: "product",
        url: "https://cv.theprinceraj.in",
        repo: "https://github.com/theprinceraj/cover-letter-ai",
        summary: "AI cover letter generator that tailors a letter to a resume PDF and a job description.",
        details: [
            "Resume PDF analysis and generation with Google Gemini",
            "Accounts with email verification plus a guest mode",
            "Credit-based generation with Razorpay and PayPal payments",
        ],
        stack: ["NestJS", "React", "MongoDB", "Gemini", "Turborepo", "TypeScript"],
        featured: {
            title: "AI-Powered Cover Letter Assistant",
            results: [
                "Built an AI-driven system to generate tailored cover letters with resume PDF analysis in seconds",
                "Implemented secure authentication with email verification and guest modes",
                "Developed credit-based generation system with Razorpay and PayPal support",
            ],
            link: "https://cv.theprinceraj.in",
            linkText: "View Live Site",
            image: coverGeniusPage,
        },
    },
    {
        name: "Qoody",
        year: "2026",
        kind: "project",
        url: "https://prince.is-a.dev/qoody/",
        repo: "https://github.com/theprinceraj/qoody",
        summary: "Free Android expense tracker that logs UPI, card and bank payments from notifications and SMS.",
        details: [
            "Reads payment notifications from 64 Indian payment, bank, wallet and card apps and from bank SMS",
            "Categorises spending on the device and learns from corrections; budgets and insights by week, month and category",
            "Everything stays on the phone: no account, no server, no tracking",
        ],
        stack: ["Kotlin", "Jetpack Compose", "Room", "Koin", "Ktor", "TanStack Start (website)"],
    },
    {
        name: "Smart Paste",
        year: "2026",
        kind: "project",
        repo: "https://github.com/theprinceraj/paste-smart",
        summary: "Windows tray app that asks an AI model which copied item fits the active window, then pastes it.",
        details: [
            "Keeps the last 25 copied items in memory; one hotkey (Ctrl+Shift+V)",
            "Pastes silently when confident and opens a picker when not; a smart paste takes about half a second",
        ],
        stack: ["Tauri 2", "Rust", "React", "TypeScript"],
    },
    {
        name: "AI Notes Generator",
        year: "2026",
        kind: "project",
        repo: "https://github.com/theprinceraj/ai-notes-generator",
        summary: "Turns a recorded YouTube class into handwritten-style study notes as PDFs in Hindi, English and Hinglish.",
        details: [
            "Uses both the teacher's speech and on-screen content (slides, tables, whiteboard)",
            "Notebook-style pages with highlights, exam tips, diagrams and timestamps; a 90-minute class becomes 12 to 16 pages per language",
        ],
        stack: ["Bun", "TypeScript", "Groq", "yt-dlp", "ffmpeg", "Playwright"],
    },
    {
        name: "Marketing video pipeline",
        year: "2026",
        kind: "project",
        summary: "Prompt-driven pipeline that produces product launch videos from a website or codebase at no cost.",
        details: [
            "Captures the real product (copy, colours, fonts, screenshots), plans a storyboard on a beat grid and recreates the UI as animated scenes",
            "Composes music and sound effects, checks rendered frames against a quality list, and exports 16:9, 1:1, 4:5 and 9:16 MP4s normalised to -14 LUFS",
            "Used for launch videos of his own products and for client brands",
        ],
        stack: ["Remotion", "React", "GSAP", "Puppeteer", "TypeScript", "Claude Code"],
    },
    {
        name: "The Internet Mind",
        year: "2026",
        kind: "project",
        summary: "A single shared AI whose knowledge is written and contested by its users (in development).",
        details: [
            "Every claim carries a confidence, a popularity score, an evidence tier and its full change history",
            "Users bring their own AI provider key (Anthropic, OpenAI, Gemini or OpenRouter); hardened against prompt injection",
        ],
        stack: ["Next.js", "Supabase (Postgres, Auth, Realtime)", "TypeScript"],
    },
    {
        name: "EchoMate",
        year: "2025",
        kind: "project",
        summary: "AI voice-calling backend that runs outbound lead campaigns for organisations.",
        details: ["Campaign, lead and organisation modules with Twilio calling, Sarvam AI speech and LangGraph agents"],
        stack: ["NestJS", "MongoDB", "Twilio", "Sarvam AI", "LangChain", "LangGraph", "Gemini"],
    },
    {
        name: "Local Social",
        year: "2025",
        kind: "project",
        summary: "Modular backend for a location-aware social media app.",
        details: [
            "30+ production APIs: authentication with Google OAuth and JWT, feeds, profiles, hashtags and connection requests",
            "Geospatial queries for nearby content, Firebase push notifications with deep links, Cloudinary media",
        ],
        stack: ["NestJS", "MongoDB", "Mongoose", "Firebase Admin", "Cloudinary", "Swagger"],
        featured: {
            title: "Scalable Backend for Social Media Platform",
            results: [
                "Engineered a modular NestJS backend powering 30+ production-grade APIs",
                "Built social features including authentication, feeds, profiles, and hashtags",
                "Designed the complete database architecture with geospatial querying for location-aware content discovery",
            ],
            link: "/images/flowchart-local-social.png",
            linkText: "View Flowchart",
            image: localSocialPostmanPage,
        },
    },
    {
        name: "Decentralised uptime monitor",
        year: "2025",
        kind: "project",
        repo: "https://github.com/theprinceraj/uptime-monitor",
        summary: "Website uptime monitor where independent validators sign their checks with Solana keypairs.",
        details: ["Hub, validator, API and frontend apps in a Turborepo; Clerk authentication"],
        stack: ["TypeScript", "Express", "Solana web3.js", "TweetNaCl", "React", "Turborepo"],
    },
    {
        name: "Markshify",
        year: "2024",
        kind: "project",
        repo: "https://github.com/theprinceraj/Markshify",
        summary: "OCR scanner that turns marksheets into structured CSV for college exam cells.",
        details: ["Extracts 20+ fields per marksheet with validation and confidence scoring"],
        stack: ["Node.js", "Express", "Tesseract.js", "Sharp", "Firebase"],
        featured: {
            title: "OCR-Based Marksheet Scanner",
            results: [
                "Automated conversion of scanned marksheets into structured CSV to eliminate manual data entry",
                "Extracts 20+ fields (student details, roll, subject-wise marks, totals) with validation and confidence scoring",
                "Custom and robust utility functions for data extraction",
            ],
            link: "https://github.com/theprinceraj/Markshify",
            linkText: "View Code",
            image: markshifyLandingPage,
        },
    },
];

export const featuredProjects = projects.flatMap((project) => (project.featured ? [{ ...project, ...project.featured }] : []));
