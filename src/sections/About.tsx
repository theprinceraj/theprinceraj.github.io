import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import SquareJsIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";

const toolboxItems = [
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
];

const hobbies = [
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
];

export const AboutSection = () => {
    return (
        <div className="py-20 md:py-14 lg:py-20 lg:mt-3">
            <div className="container">
                <SectionHeader
                    heading1="About Me"
                    heading2="A Glimpse Into My World"
                    paragraph="Learn more about who I am, what I do, and what inspires me."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                heading="My Reads"
                                description="Explore the books shaping my perspectives."
                                className="md:py-2.5 md:px-4 lg:px-4 lg:mx-0.5 lg:py-1.5"
                            />
                            <Image src={bookImage} alt="Book Cover Image" className="w-40 mx-auto mt-6 md:mt-3" />
                        </Card>
                        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
                            <CardHeader
                                heading="My Toolbox"
                                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                                className="p-6 pb-0 lg:pr-64 lg:mr-8 lg:-mt-0.5"
                            />
                            <ToolboxItemsRow items={toolboxItems} className="mt-4 md:mt-6" />
                            <ToolboxItemsRow
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2"
                            />
                        </Card>
                    </div>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-4 lg:-mt-0.5">
                            <CardHeader
                                heading="Beyond the Code"
                                description="Explore my interests and hobbies beyond the digital realm."
                                className="p-6 md:pb-8 lg:pr-64"
                            />
                            <div className="relative z-0 flex-1 lg:-mt-1">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                            zIndex: hobby.zIndex,
                                        }}>
                                        <span className="font-semibold text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative z-0 md:col-span-2 lg:col-span-2">
                            <Image
                                src={mapImage}
                                alt="Map Image"
                                className="h-full w-full object-cover object-left-top"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
