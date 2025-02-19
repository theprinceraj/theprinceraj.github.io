import SquareJsIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NestIcon from "@/assets/icons/nest.svg";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const CONFIG = {
    toolboxItems: [
        {
            title: "JavaScript",
            iconType: SquareJsIcon,
        },
        {
            title: "HTML5",
            iconType: HTML5Icon,
        },
        {
            title: "CSS",
            iconType: CssIcon,
        },
        {
            title: "Nest",
            iconType: NestIcon,
        },
        {
            title: "React",
            iconType: ReactIcon,
        },
        {
            title: "Chrome",
            iconType: ChromeIcon,
        },
        {
            title: "Github",
            iconType: GithubIcon,
        },
    ],
    hobbies: [
        {
            title: "Painting",
            emoji: "🎨",
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
            title: "Hiking",
            emoji: "🥾",
            left: "35%",
            top: "40%",
            zIndex: -10,
        },
        {
            title: "Music",
            emoji: "🎵",
            left: "70%",
            top: "45%",
            zIndex: 0,
        },
        {
            title: "Fitness",
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
            title: "Youtube",
            href: "#",
        },
        {
            title: "Twitter",
            href: "#",
        },
        {
            title: "Instagram",
            href: "#",
        },
        {
            title: "LinkedIn",
            href: "#",
        },
    ],
    portfolioProjects: [
        {
            company: "Acme Corp",
            year: "2022",
            title: "Dark Saas Landing Page",
            results: [
                { title: "Enhanced user experience by 40%" },
                { title: "Improved site speed by 50%" },
                { title: "Increased mobile traffic by 35%" },
            ],
            link: "https://youtu.be/4k7IdSLxh6w",
            image: darkSaasLandingPage,
        },
        {
            company: "Innovative Co",
            year: "2021",
            title: "Light Saas Landing Page",
            results: [
                { title: "Boosted sales by 20%" },
                { title: "Expanded customer reach by 35%" },
                { title: "Increased brand awareness by 15%" },
            ],
            link: "https://youtu.be/7hi5zwO75yc",
            image: lightSaasLandingPage,
        },
        {
            company: "Quantum Dynamics",
            year: "2023",
            title: "AI Startup Landing Page",
            results: [
                { title: "Enhanced user experience by 40%" },
                { title: "Improved site speed by 50%" },
                { title: "Increased mobile traffic by 35%" },
            ],
            link: "https://youtu.be/Z7I5uSRHMHg",
            image: aiStartupLandingPage,
        },
    ],
    testimonials: [
        {
            name: "Alex Turner",
            position: "Marketing Manager @ TechStartups",
            text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
            avatar: memojiAvatar1,
        },
        {
            name: "Olivia Green",
            position: "Head of Design @ GreenLeaf",
            text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
            avatar: memojiAvatar2,
        },
        {
            name: "Daniel White",
            position: "CEO @ InnovateCo",
            text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
            avatar: memojiAvatar3,
        },
        {
            name: "Emily Carter",
            position: "Product Manager @ GlobalTech",
            text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
            avatar: memojiAvatar4,
        },
        {
            name: "Michael Brown",
            position: "Director of IT @ MegaCorp",
            text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
            avatar: memojiAvatar5,
        },
    ],
};

export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
