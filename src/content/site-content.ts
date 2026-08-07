import ayushYadavAvatar from "@/assets/images/ayush-yadav-avatar.webp";
import rohanSinghAvatar from "@/assets/images/rohan-singh-avatar.webp";
import grownUpMarketingAvatar from "@/assets/images/grown-up-marketing.webp";
import deepakKumarAvatar from "@/assets/images/deepak-kumar-avatar.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";
import { StaticImageData } from "next/image";

export const siteOrigin = "https://theprinceraj.in";

export type BlogItem = {
    title: string;
    description: string;
    date: string;
    link: string;
    niche: string;
};

export type FooterLinkItem = {
    title: string;
    href: string;
};

export type PortfolioProjectItem = {
    company: string;
    year: string;
    title: string;
    results: string[];
    link: string;
    linkText: string;
};

export type TestimonialItem = {
    name: string;
    position: string;
    text: string;
    href?: string;
    avatar?: StaticImageData;
};

export const email = "profile.princeraj@gmail.com";

export const blogs: BlogItem[] = [
    {
        title: "How I Discovered and Helped Fix a Security Flaw in a Government Portal?",
        description:
            "While using a government portal serving over 3 lakh students and beneficiaries, I discovered a Broken Access Control vulnerability that could expose sensitive information to unauthorized users. This article documents the complete journey—from discovery and validation to responsible disclosure with CERT-In and eventual remediation.",
        date: "12 Jun '26",
        link: "https://medium.com/@theprinceraj/discovering-a-security-flaw-in-a-government-portal-used-by-3-lakh-students-ad3bf67a0513",
        niche: "Cybersecurity",
    },
    {
        title: "How Access Token and Refresh Token Work in Authentication Flows in Modern Backend Systems?",
        description:
            "Almost any application you use today, uses access tokens and refresh tokens to handle its authentication flows. Have you ever wondered how you stay logged into your favorite apps for days without re-entering your password? The secret lies in two special tokens working behind the scenes: access tokens and refresh tokens.",
        date: "1 Jan '26",
        link: "https://medium.com/@theprinceraj/how-access-token-and-refresh-token-work-in-authentication-flows-in-modern-backend-systems-1ef6e498e217",
        niche: "Backend Auth",
    },
    {
        title: "NestJS Payments Setup Made Simple: Implementing Razorpay in Your Backend API",
        description:
            "A practical, step-by-step guide to integrating Razorpay with a NestJS backend. This article explains some payment concepts you need to know (orders, payments, and security), shows how to configure Razorpay credentials, implements server-side payment creation and verification. Ideal for backend developers looking to add payment flows to their APIs without getting lost in the docs.",
        date: "6 Dec '25",
        link: "https://medium.com/@theprinceraj/nestjs-payments-setup-made-simple-implementing-razorpay-in-your-backend-api-49f68b41c462",
        niche: "Payment Setup",
    },
    {
        title: "How Most Social Media Check Your Username in Milliseconds: A Gentle Guide to Bloom Filters",
        description:
            "On popular social media platforms like Instagram, checking whether a username is available has to happen almost instantly, even when the system is handling millions or billions of accounts. Instead of searching linearly, Bloom Filters are used to quickly rule out usernames that definitely do not exist and narrow the search. This makes availability checks much faster and more efficient. Let's explore how this probabilistic data structure works!",
        date: "30 Aug '25",
        link: "https://medium.com/@theprinceraj/how-most-social-media-check-your-username-in-milliseconds-a-gentle-guide-to-bloom-filters-94d89ca40973",
        niche: "Data Structures",
    },
];

export const footerLinks: FooterLinkItem[] = [
    {
        title: "Twitter",
        href: "https://x.com/theprinceraj",
    },
    {
        title: "Github",
        href: "https://github.com/theprinceraj",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/theprinceraj",
    },
    {
        title: "Sponsor Me ❤️",
        href: "https://razorpay.me/@theprinceraj",
    },
];

export const portfolioProjects: PortfolioProjectItem[] = [
    {
        "company": "GST Reco Pro",
        "year": "2026",
        "title": "Tax Compliance & Reconciliation SaaS",
        "results": [
            "Collaborated with a domain expert to build a production-ready bulk tax document processing platform.",
            "Architected a secure admin dashboard with advanced reporting and client-side data privacy.",
            "Built an end-to-end solution with Supabase, Razorpay, React, and TailwindCSS.",
        ],
        "link": "https://www.youtube.com/watch?v=MR8hMd3QWLo",
        "linkText": "View Launch Video",
    },
    {
        company: "Project Sentinel",
        year: "2026",
        title: "AI Governance Proxy",
        results: [
            "Built a low-latency AI governance proxy to intercept and validate all application-to-LLM API requests",
            "Integrated Microsoft Presidio to automatically detect and redact 50+ PII and sensitive data types",
            "Designed a live governance log providing real-time visibility into semantic intent and safety risks",
        ],
        link: "https://sentinel.theprinceraj.in",
        linkText: "View Live Site",
    },
    {
        company: "Cover Genius",
        year: "2025",
        title: "AI-Powered Cover Letter Assistant",
        results: [
            "Built an AI-driven system to generate tailored cover letters with resume PDF analysis in seconds",
            "Implemented secure authentication with email verification and guest modes",
            "Developed credit-based generation system with Razorpay and PayPal support",
        ],
        link: "https://cv.theprinceraj.in",
        linkText: "View Live Site",
    },
    {
        company: "Local Social",
        year: "2025",
        title: "Scalable Backend for Social Media Platform",
        results: [
            "Engineered a modular NestJS backend powering 30+ production-grade APIs",
            "Built social features including authentication, feeds, profiles, and hashtags",
            "Designed the complete database architecture with geospatial querying for location-aware content discovery",
        ],
        link: "/images/flowchart-local-social.png",
        linkText: "View Flowchart",
    },
    {
        company: "Markshify",
        year: "2024",
        title: "OCR-Based Marksheet Scanner",
        results: [
            "Automated conversion of scanned marksheets into structured CSV to eliminate manual data entry",
            "Extracts 20+ fields (student details, roll, subject-wise marks, totals) with validation and confidence scoring",
            "Custom and robust utility functions for data extraction",
        ],
        link: "https://github.com/theprinceraj/Markshify",
        linkText: "View Code",
    },
];

export const testimonials: TestimonialItem[] = [
    {
        name: "Shanzil",
        position: "Marketing Head @ TotalEdge",
        text: "Prince has been one of the best backend developers we found, he is a really great person to work with and treats our work as his own. Amazing guy, love from studentpreneur.club",
        href: "https://www.linkedin.com/in/shanzil-x-37b9981a9",
        avatar: shanzilAvatar,
    },
    {
        name: "Sundara Gandhi",
        position: "Senior Digital Marketing Specialist",
        text: "I brought Prince Raj in to build out Shopify for The Loud Wardrobe, an ecommerce client of mine. Shopify was new territory for him — and he said so upfront, no false confidence. He then figured it out fast enough to outpace developers who claimed years of Shopify experience. What set him apart wasn't just the technical work — it was how he ran the project. Every step was broken down clearly, doubts cleared quickly, nothing left vague. And on communication: if something was going to take longer than planned, he flagged it and gave a new timeline before I had to ask. That's rare. Most freelancers go quiet when they're behind, and you're left wondering if your project even crossed their mind that week. He delivered the store live 15 days ahead of schedule. When extra work came up outside scope, he took it on for a fair additional fee — and it was worth every rupee, because by that point I trusted him completely. I've worked with 3-5 web developers on client projects. Prince Raj is the one I keep coming back to, and the one I refer out. If you need a Shopify build done right — and done by someone who'll actually own the timeline instead of waiting on you to chase it — he's who I'd call.",
        href: "https://www.linkedin.com/in/sundara-gandhi-muthu-shyam-8a6357234",
    },
    {
        name: "Savan",
        position: "Owner @ Grown Up Marketing",
        text: "I just wanted to take a moment to say a big thank you for creating my marketing agency's website. It’s live now and I absolutely love your work — it's even better than I imagined! I really appreciate the effort and creativity you put into it. From now on, whatever projects I get through my agency, I would love to work with you. Looking forward to doing some amazing work together!",
        avatar: grownUpMarketingAvatar,
    },
    {
        name: "Rohan Singh",
        position: "Founder @ MindMates.in",
        text: "Prince is an exceptionally skilled and dependable backend developer. He tackles complex systems with ease and always delivers clean, scalable solutions. Beyond his technical strengths, he consistently supports the team and steps in whenever needed, making him a truly reliable and collaborative teammate. I’d highly recommend working with him.",
        href: "https://www.linkedin.com/in/rohan3001",
        avatar: rohanSinghAvatar,
    },
    {
        name: "Ayush Yadav",
        position: "Prince's College Friend",
        text: "Prince is someone who always stands out for his problem solving skills and creativity. He takes on challenges with a lot of determination. More than that, he is a supportive friend and a great teammate to work with.",
        href: "https://www.linkedin.com/in/ayush215mb",
        avatar: ayushYadavAvatar,
    },
    {
        name: "Deepak Kumar",
        position: "Prince's College Friend",
        text: "It's rare to come across someone like Prince , a developer who not only writes exceptional code but also brings humility, patience, and genuine passion into every project.",
        href: "https://www.linkedin.com/in/deepak-kumar62066",
        avatar: deepakKumarAvatar,
    },
];
