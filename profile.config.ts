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
import {
    blogs as sharedBlogs,
    email as sharedEmail,
    footerLinks as sharedFooterLinks,
    portfolioProjects as sharedPortfolioProjects,
    testimonials as sharedTestimonials,
} from "./src/content/site-content";

const portfolioProjectImages = [
    sentinelPage,
    theLoudWardrobePage,
    coverGeniusPage,
    localSocialPostmanPage,
    markshifyLandingPage,
];

const testimonialAvatars = [
    shanzilAvatar,
    grownUpMarketingAvatar,
    rohanSinghAvatar,
    ayushYadavAvatar,
    deepakKumarAvatar,
];

const portfolioProjectsWithAssets = sharedPortfolioProjects.map((project, index) => ({
    ...project,
    results: project.results.map((title) => ({ title })),
    image: portfolioProjectImages[index],
}));

const testimonialsWithAvatars = sharedTestimonials.map((testimonial, index) => ({
    ...testimonial,
    avatar: testimonialAvatars[index],
}));

const CONFIG = {
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
    testimonials: testimonialsWithAvatars,
};

export const email = CONFIG.email;
export const blogs = CONFIG.blogs;
export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
