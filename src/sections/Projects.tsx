import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "../../profile.config";
import { ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react";

export const ProjectsSection = ({ id }: { id: string }) => {
    return (
        <section className="pb-16 lg:py-24" id={id}>
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
                                top: `calc(${64 + index * 14}px)`,
                            }}>
                            <div className="grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-8 ">
                                    {/* Company and Year */}
                                    <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-xs sm:text-sm md:text-base">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl lg:max-w-sm mt-2 md:mt-5">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                                    <ul className="mt-4 md:mt-5 flex flex-col gap-4">
                                        {project.results.map((result) => (
                                            <li
                                                key={result.title}
                                                className="inline-flex items-center gap-2 text-white/50 font-light">
                                                <CheckCircle2Icon className="size-8 md:size-5" />
                                                <span className="text-xs md:text-sm lg:text-base">{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link} target="_blank">
                                        <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 my-8 font-semibold inline-flex items-center justify-center gap-2">
                                            <span>{project.linkText}</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        loading="eager"
                                        src={project.image}
                                        alt={project.title}
                                        className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-2 border-white/10 rounded-xl"
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
