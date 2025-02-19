import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
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
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    heading1="Real-world Results"
                    heading2="Featured Projects"
                    paragraph="See how I transformed concepts into engaging digital experiences."
                />
                <div className="flex flex-col gap-20 mt-10 md:mt-20">
                    {portfolioProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
                            style={{
                                top: `calc(${64 + index * 40}px)`,
                            }}>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-8">
                                    <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-sm md:text-base">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-4xl lg:max-w-sm mt-2 md:mt-5">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                                    <ul className="mt-4 md:mt-5 flex flex-col gap-4">
                                        {project.results.map((result) => (
                                            <li
                                                key={result.title}
                                                className="inline-flex gap-2 text-white/50 font-light text-sm md:text-base">
                                                <CheckIcon className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 my-8 font-semibold inline-flex items-center justify-center gap-2">
                                            <span>Visit Live Site</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
