// Source for /llms.txt and /llms.full.txt (built in src/lib/seo-files.ts). Projects live in projects.ts.
// Professional work is described by type and stack only: client names and product specifics are confidential.
import { siteOrigin } from "@/content/site-content";

export type LlmsWorkItem = {
    title: string;
    summary: string;
    details: string[];
};

export const llmsSummary =
    "Prince Raj is a full-stack developer and computer science undergraduate from India who builds production SaaS products, backend systems and AI infrastructure, mostly in TypeScript with NestJS, Next.js, MongoDB, PostgreSQL and Supabase.";

export const llmsIntro = [
    "He is the creator of GST Reco Pro (gstrecopro.in), a privacy-first SaaS that converts Indian GST portal PDFs into Excel entirely in the browser, and wakacraft (wakacraft.tech), an open-source, self-hostable alternative to WakaTime. He works professionally as a backend engineer on multi-tenant business platforms, takes freelance projects, writes engineering blogs on Medium, and is a co-inventor on a published Indian patent application for an IoT-enabled predictive farming system.",
];

export const llmsAbout = [
    "Prince Raj is a full-stack developer and computer science undergraduate from India. He builds production-grade web applications, backend systems, SaaS products and AI infrastructure, and he is most at home on the backend: API design, authentication, payments, database design, queues and background jobs.",
    "His main product is GST Reco Pro, a tax compliance SaaS for Chartered Accountants and tax consultants in India. It turns GSTR-1, GSTR-3B and TDS challan PDFs from the GST portal into structured Excel workbooks without uploading any taxpayer data: all parsing and spreadsheet generation runs in the browser. The product had over 60 users as of 08/08/2026.",
    "He also builds open-source and personal tools, among them wakacraft (a WakaTime-compatible coding time tracker), Project Sentinel (a governance proxy that redacts PII and blocks prompt injection before prompts reach an LLM), Qoody (an on-device Android expense tracker for Indian UPI and bank payments) and Smart Paste (a Windows clipboard app that uses AI to pick what to paste).",
    "Professionally he works as a backend engineer on multi-tenant business platforms built with NestJS on Fastify, MongoDB, Zod, RabbitMQ, Redis and AWS S3, and on installable Next.js PWAs. As a freelancer he has built e-commerce, agency and startup backends for clients who describe him as dependable, clear about timelines and quick to learn unfamiliar platforms.",
    "He writes engineering blogs about backend authentication, access and refresh tokens, Razorpay integration in NestJS, Bloom filters and a security flaw he responsibly disclosed in a government portal used by about 3 lakh students. He practises data structures and algorithms in C and C++ on LeetCode, Codeforces and GeeksforGeeks.",
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

export const llmsPatent = {
    title: "IoT-Enabled Predictive Farming System with Resource Optimization",
    url: `${siteOrigin}/patent.pdf`,
    summary:
        "Indian patent application 202531042207 A, filed on 01/05/2025 by Narula Institute of Technology and published in the Patent Office Journal (No. 21/2025) on 23/05/2025. Prince Raj is one of eight co-inventors.",
    details: [
        "An IoT sensor network monitors soil and environmental conditions; a preprocessing module cleans and normalises the data",
        "Random Forest and neural-network models recommend the best crops for a location from soil, temperature, humidity, rainfall and past yield data",
        "Farmers enter location details in a user interface and get personalised recommendations; a feedback loop keeps retraining the model",
        "Adds hyper-local insight from satellite imaging and drone monitoring, with several connectivity modes for remote farmland",
    ],
};

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
