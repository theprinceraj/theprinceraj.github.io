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
import theLoudWardrobePage from "@/assets/images/the-loud-wardrobe-page.webp";
import sentinelPage from "@/assets/images/sentinel-landing-page.webp";
import markshifyLandingPage from "@/assets/images/markshify-landing-page.png";
import ayushYadavAvatar from "@/assets/images/ayush-yadav-avatar.webp";
import rohanSinghAvatar from "@/assets/images/rohan-singh-avatar.webp";
import grownUpMarketingAvatar from "@/assets/images/grown-up-marketing.webp";
import deepakKumarAvatar from "@/assets/images/deepak-kumar-avatar.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";

const CONFIG = {
    email: "profile.princeraj@gmail.com",
    blogs: [
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
    ],
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
    footerLinks: [
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
    ],
    portfolioProjects: [
        {
            company: "Project Sentinel",
            year: "2026",
            title: "AI Governance Proxy",
            results: [
                {
                    title: "Built a low-latency AI governance proxy to intercept and validate all application-to-LLM API requests",
                },
                {
                    title: "Integrated Microsoft Presidio to automatically detect and redact 50+ PII and sensitive data types",
                },
                {
                    title: "Designed a live governance log providing real-time visibility into semantic intent and safety risks",
                },
            ],
            link: "https://sentinel.theprinceraj.tech",
            image: sentinelPage,
            linkText: "View Live Site",
        },
        {
            company: "The Loud Wardrobe",
            year: "2026",
            title: "Fashion E-commerce Store (Freelance)",
            results: [
                { title: "Built a scalable Shopify storefront for a fashion brand" },
                { title: "Integrated payment, shipping, and order fulfillment workflows" },
                { title: "Configured analytics and conversion tracking infrastructure" },
            ],
            link: "https://theloudwardrobe.com",
            image: theLoudWardrobePage,
            linkText: "View Live Site",
        },
        {
            company: "Cover Genius",
            year: "2025",
            title: "AI-Powered Cover Letter Assistant",
            results: [
                { title: "Built an AI-driven system to generate tailored cover letters with resume PDF analysis in seconds" },
                { title: "Implemented secure authentication with email verification and guest modes" },
                { title: "Developed credit-based generation system with Razorpay and PayPal support" },
            ],
            link: "https://cv.theprinceraj.tech",
            image: coverGeniusPage,
            linkText: "View Live Site",
        },
        {
            company: "Local Social",
            year: "2025",
            title: "Scalable Backend for Social Media Platform",
            results: [
                { title: "Engineered a modular NestJS backend powering 30+ production-grade APIs" },
                { title: "Built social features including authentication, feeds, profiles, and hashtags" },
                { title: "Designed the complete database architecture with geospatial querying for location-aware content discovery" },
            ],
            link: "/images/flowchart-local-social.png",
            image: localSocialPostmanPage,
            linkText: "View Flowchart",
        },
        {
            company: "Markshify",
            year: "2024",
            title: "OCR-Based Marksheet Scanner",
            results: [
                { title: "Automated conversion of scanned marksheets into structured CSV to eliminate manual data entry" },
                { title: "Extracts 20+ fields (student details, roll, subject-wise marks, totals) with validation and confidence scoring" },
                { title: "Custom and robust utility functions for data extraction" },
            ],
            link: "https://github.com/theprinceraj/Markshify",
            image: markshifyLandingPage,
            linkText: "View Code",
        },
    ],
    testimonials: [
        {
            name: "Shanzil",
            position: "Marketing Head @ TotalEdge",
            text: "Prince has been one of the best backend developers we found, he is a really great person to work with and treats our work as his own. Amazing guy, love from studentpreneur.club",
            avatar: shanzilAvatar,
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
            avatar: rohanSinghAvatar,
        },
        {
            name: "Ayush Yadav",
            position: "Prince's College Friend",
            text: "Prince is someone who always stands out for his problem solving skills and creativity. He takes on challenges with a lot of determination. More than that, he is a supportive friend and a great teammate to work with.",
            avatar: ayushYadavAvatar,
        },
        {
            name: "Deepak Kumar",
            position: "Prince's College Friend",
            text: "It's rare to come across someone like Prince , a developer who not only writes exceptional code but also brings humility, patience, and genuine passion into every project.",
            avatar: deepakKumarAvatar,
        },
    ],
};

export const email = CONFIG.email;
export const blogs = CONFIG.blogs;
export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
