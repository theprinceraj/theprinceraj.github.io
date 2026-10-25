// Source for public/llms.txt and public/llms.full.txt (see scripts/generate-seo.ts).
// Professional work is described by type and stack only: client names and product specifics are confidential.

export type LlmsProject = {
    name: string;
    year: string;
    summary: string;
    url?: string;
    repo?: string;
    details: string[];
    stack: string[];
};

export type LlmsWorkItem = {
    title: string;
    summary: string;
    details: string[];
};

export const llmsSummary =
    "Prince Raj is a full-stack developer and computer science undergraduate from India who builds production SaaS products, backend systems and AI infrastructure, mostly in TypeScript with NestJS, Next.js, MongoDB, PostgreSQL and Supabase.";

export const llmsIntro = [
    "He is the creator of GST Reco Pro (gstrecopro.in), a privacy-first SaaS that converts Indian GST portal PDFs into Excel entirely in the browser, and wakacraft (wakacraft.tech), an open-source, self-hostable alternative to WakaTime. He works professionally as a backend engineer on multi-tenant business platforms, takes freelance projects, writes engineering blogs on Medium, and has one published patent.",
];

export const llmsAbout = [
    "Prince Raj is a full-stack developer and computer science undergraduate from India. He builds production-grade web applications, backend systems, SaaS products and AI infrastructure, and he is most at home on the backend: API design, authentication, payments, database design, queues and background jobs.",
    "His main product is GST Reco Pro, a tax compliance SaaS for Chartered Accountants and tax consultants in India. It turns GSTR-1, GSTR-3B and TDS challan PDFs from the GST portal into structured Excel workbooks without uploading any taxpayer data: all parsing and spreadsheet generation runs in the browser. The product had over 60 users as of 08/08/2026.",
    "He also builds open-source and personal tools, among them wakacraft (a WakaTime-compatible coding time tracker), Project Sentinel (a governance proxy that redacts PII and blocks prompt injection before prompts reach an LLM), Qoody (an on-device Android expense tracker for Indian UPI and bank payments) and Smart Paste (a Windows clipboard app that uses AI to pick what to paste).",
    "Professionally he works as a backend engineer on multi-tenant business platforms built with NestJS on Fastify, MongoDB, Zod, RabbitMQ, Redis and AWS S3, and on installable Next.js PWAs. As a freelancer he has built e-commerce, agency and startup backends for clients who describe him as dependable, clear about timelines and quick to learn unfamiliar platforms.",
    "He writes engineering blogs about backend authentication, access and refresh tokens, Razorpay integration in NestJS, Bloom filters and a security flaw he responsibly disclosed in a government portal used by about 3 lakh students. He practises data structures and algorithms in C and C++ on LeetCode, Codeforces and GeeksforGeeks, and he has one published patent.",
];

export const llmsExpertise = [
    "Backend engineering: NestJS (Express and Fastify), Node.js, Bun, Express",
    "API design and authentication: JWT access/refresh tokens with server-side sessions, OAuth (Google, GitHub), OTP and magic-link sign-in, argon2, role-based permissions",
    "Payments: Razorpay, PayPal, credit-based and pay-per-use billing",
    "Databases: MongoDB (Mongoose), PostgreSQL (Supabase, Prisma), Redis, Qdrant",
    "Messaging and jobs: RabbitMQ (delayed queues), Inngest, scheduled jobs, web push, SMS and email notifications",
    "AI engineering: LLM integration (Gemini, OpenAI-compatible APIs, Groq), LangChain and LangGraph, PII redaction, prompt-injection defence, vector search",
    "Frontend: React, Next.js, TanStack Start, Vite, Tailwind CSS, shadcn/ui, PWAs",
    "Document automation: PDF parsing, PDF to Excel, OCR (Tesseract)",
    "Mobile and desktop: Kotlin with Jetpack Compose for Android, Tauri 2 for Windows",
    "Tooling and deployment: Docker, Turborepo monorepos, Vitest, AWS S3, Vercel, Cloudflare, Azure",
];

export const llmsProducts: LlmsProject[] = [
    {
        name: "GST Reco Pro",
        year: "2026",
        url: "https://gstrecopro.in",
        summary: "Zero-data-risk PDF-to-Excel converter and reconciliation tool for Indian tax professionals.",
        details: [
            "Converts GSTR-1, GSTR-3B and TDS challan (ITNS 281) summary PDFs into structured .xlsx workbooks",
            "All PDF parsing, data extraction and Excel generation run client-side in Web Workers, so no taxpayer file is uploaded",
            "Credit-based pricing with free monthly credits and one-time credit packs paid through Razorpay",
            "Over 60 users as of 08/08/2026",
        ],
        stack: ["TanStack Start", "React", "TypeScript", "Supabase", "Razorpay", "pdf.js", "Tailwind CSS"],
    },
    {
        name: "wakacraft",
        year: "2026",
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
        url: "https://sentinel.theprinceraj.in",
        summary: "AI governance proxy that inspects every application-to-LLM request and response.",
        details: [
            "Drop-in Gemini-compatible proxy: inbound policy rules, prompt-injection detection and PII redaction with Microsoft Presidio",
            "Checks model responses against outbound policy and writes every decision to a MongoDB audit log",
            "Live governance log in a Next.js dashboard over Socket.IO",
        ],
        stack: ["NestJS", "MongoDB", "Redis", "Socket.IO", "Transformers.js", "Microsoft Presidio", "Next.js", "Docker"],
    },
    {
        name: "CoverGenius AI",
        year: "2025",
        url: "https://cv.theprinceraj.in",
        repo: "https://github.com/theprinceraj/cover-letter-ai",
        summary: "AI cover letter generator that tailors a letter to a resume PDF and a job description.",
        details: [
            "Resume PDF analysis and generation with Google Gemini",
            "Accounts with email verification plus a guest mode",
            "Credit-based generation with Razorpay and PayPal payments",
        ],
        stack: ["NestJS", "React", "MongoDB", "Gemini", "Turborepo", "TypeScript"],
    },
];

export const llmsProjects: LlmsProject[] = [
    {
        name: "Qoody",
        year: "2026",
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
        summary: "AI voice-calling backend that runs outbound lead campaigns for organisations.",
        details: ["Campaign, lead and organisation modules with Twilio calling, Sarvam AI speech and LangGraph agents"],
        stack: ["NestJS", "MongoDB", "Twilio", "Sarvam AI", "LangChain", "LangGraph", "Gemini"],
    },
    {
        name: "Local Social",
        year: "2025",
        summary: "Modular backend for a location-aware social media app.",
        details: [
            "30+ production APIs: authentication with Google OAuth and JWT, feeds, profiles, hashtags and connection requests",
            "Geospatial queries for nearby content, Firebase push notifications with deep links, Cloudinary media",
        ],
        stack: ["NestJS", "MongoDB", "Mongoose", "Firebase Admin", "Cloudinary", "Swagger"],
    },
    {
        name: "Decentralised uptime monitor",
        year: "2025",
        repo: "https://github.com/theprinceraj/uptime-monitor",
        summary: "Website uptime monitor where independent validators sign their checks with Solana keypairs.",
        details: ["Hub, validator, API and frontend apps in a Turborepo; Clerk authentication"],
        stack: ["TypeScript", "Express", "Solana web3.js", "TweetNaCl", "React", "Turborepo"],
    },
    {
        name: "Markshify",
        year: "2024",
        repo: "https://github.com/theprinceraj/Markshify",
        summary: "OCR scanner that turns marksheets into structured CSV for college exam cells.",
        details: ["Extracts 20+ fields per marksheet with validation and confidence scoring"],
        stack: ["Node.js", "Express", "Tesseract.js", "Sharp", "Firebase"],
    },
];

export const llmsProfessionalWork: LlmsWorkItem[] = [
    {
        title: "Multi-tenant visitor management platform (backend)",
        summary: "Backend for registering, checking in and checking out visitors across many organisations and sites.",
        details: [
            "Tenant, company, region and site hierarchy with per-site policies and settings",
            "OTP sign-in, passes, host approval through one-time codes, and scheduled after-hours reports",
            "In-app and web-push notifications, audit logging, rate limiting",
        ],
    },
    {
        title: "Business operations platform with AI features (backend)",
        summary: "Product and catalogue operations backend for an enterprise client.",
        details: [
            "Product catalogue data with flagging, delegation and role-based permissions",
            "AI-assisted product scanning using OpenAI-compatible models and Qdrant vector search, with streamed responses",
            "Excel exports, image processing, real-time updates over Socket.IO",
        ],
    },
    {
        title: "Organisation management platform (backend)",
        summary: "Backend for managing entities, subsidiaries, departments, positions, openings and people.",
        details: ["Reusable base service for MongoDB CRUD, append-only audit log, notifications by push, SMS and email"],
    },
    {
        title: "Trade-show lead capture app",
        summary: "Installable, mobile-first PWA that booth staff use to turn visitors into follow-up leads.",
        details: [
            "Three capture modes: event badge QR codes, business card photos and manual entry",
            "Multi-event and multi-user with three roles, PIN sign-in for staff and per-event duplicate detection",
            "Lossless card images in S3, Excel exports across events and lead emails over Outlook",
        ],
    },
];

export const llmsProfessionalStack = [
    "NestJS 11 on Fastify",
    "Bun",
    "MongoDB with Mongoose",
    "Zod 4 DTOs with Swagger generated from schemas",
    "JWT access and refresh tokens bound to server-side sessions",
    "argon2",
    "RabbitMQ with delayed messages",
    "Redis",
    "AWS S3",
    "Web push (VAPID), SMS and SMTP email",
    "Socket.IO",
    "Vitest unit and end-to-end tests",
    "Docker",
    "Next.js 16 PWAs with Serwist, TanStack Query and React Hook Form",
];

export const llmsFreelanceWork = [
    "Personalised photo album e-commerce platform: lead contributor (about 70% of commits) to a Turborepo with a Next.js storefront and admin panel and a NestJS API (Prisma, Razorpay, AWS S3, Redis, Inngest, React Email)",
    "Shopify store build for an e-commerce brand, delivered 15 days ahead of schedule",
    "Marketing agency website (Grown Up Marketing)",
    "Backend development for startups including MindMates and studentpreneur.club",
];

export const llmsEarlierWork = [
    "PlayPal: a Discord entertainment bot with many fun commands (discord.js, Firebase, Gemini)",
    "Profile Cards API: an open-source API that renders profile card images",
    "Web3 learning projects in Solidity with Foundry, and a tokenised raw-material supply contract in Move",
    "Early websites: cruise booking, food ordering, hotel management and landing pages",
];

export const llmsPractice =
    "Around 70 C and C++ solutions to LeetCode, Codeforces and GeeksforGeeks problems since December 2023, covering binary search, prefix sums, queues, matrices and pattern problems (https://github.com/theprinceraj/Practice-Questions-in-C-or-CPP).";
