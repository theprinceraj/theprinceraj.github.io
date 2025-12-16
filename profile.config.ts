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
import localSocialPostmanPage from "@/assets/images/local-social-postman-page.png";
import coverGeniusPage from "@/assets/images/cover-genius-screenshot.webp";
import profileCardsGeneratorPage from "@/assets/images/profile-cards-generator-page.png";
import markshifyLandingPage from "@/assets/images/markshify-landing-page.png";
import ayushYadavAvatar from "@/assets/images/ayush-yadav-avatar.png";
import grownUpMarketingAvatar from "@/assets/images/grown-up-marketing.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";

const CONFIG = {
    email: "profile.princeraj@gmail.com",
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
            company: "Cover Genius",
            year: "2025",
            title: "AI-Powered Cover Letter Assistant",
            results: [
                { title: "Built an AI-driven system to generate tailored cover letters in seconds" },
                { title: "Integrated PDF resume analysis for personalized content generation" },
                { title: "Implemented secure authentication with email verification and guest modes" },
                { title: "Developed credit-based generation system with Razorpay and PayPal support" },
            ],
            link: "https://covergenius.is-a.software",
            image: coverGeniusPage,
            linkText: "View Live Site",
        },
        {
            company: "Local Social",
            year: "2025",
            title: "Backend for Social Media Platform",
            results: [
                { title: "Encompassing 30+ endpoints" },
                { title: "Implemented 5+ core features" },
                { title: "Database incorporating geospatial data" },
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
                { title: "Automated marksheet to CSV conversion" },
                { title: "Extracts 20+ fields of data" },
                { title: "Custom utility functions for data extraction" },
            ],
            link: "https://github.com/theprinceraj/Markshify",
            image: markshifyLandingPage,
            linkText: "View Code",
        },
        {
            company: "Profile Cards API",
            year: "2023",
            title: "Dynamic Profile Cards",
            results: [
                { title: "Sharable and personalized profile cards" },
                { title: "With debouncing and field validation" },
                { title: "99.95% uptime leveraging Vercel" },
            ],
            link: "https://prince.is-a.dev/Profile-Cards-API/",
            image: profileCardsGeneratorPage,
            linkText: "View Live Site",
        },
    ],
    testimonials: [
        {
            name: "Savan",
            position: "Owner @ Grown Up Marketing",
            text: "I just wanted to take a moment to say a big thank you for creating my marketing agency's website. It’s live now and I absolutely love your work — it's even better than I imagined! I really appreciate the effort and creativity you put into it. From now on, whatever projects I get through my agency, I would love to work with you. Looking forward to doing some amazing work together!",
            avatar: grownUpMarketingAvatar,
        },
        {
            name: "Shanzil",
            position: "Marketing Head @ TotalEdge",
            text: "Prince has been one of the best backened developers we found, he is a really great person to work with and treats our work as his own. Amazing guy, love from studentpreneur.club",
            avatar: shanzilAvatar,
        },
        {
            name: "Ayush Yadav",
            position: "Prince's College Friend",
            text: "Prince is someone who always stands out for his problem solving skills and creativity. He takes on challenges with a lot of determination. More than that, he is a supportive friend and a great teammate to work with.",
            avatar: ayushYadavAvatar,
        },
    ],
};

export const email = CONFIG.email;
export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
