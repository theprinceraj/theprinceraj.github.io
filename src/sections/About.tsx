"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/srimad-bhagavad-gita-cover.webp";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";
import { motion } from "framer-motion";
import { useRef } from "react";
import { hobbies, toolBoxItems } from "../../profile.config";

export const AboutSection = ({ id }: { id: string }) => {
    const constraintRef = useRef(null);

    return (
        <div className="py-20 md:py-14 lg:py-20 lg:mt-3">
            <section className="container" id={id}>
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
                                description="Explore the book shaping my perspectives."
                                className="md:py-2.5 md:px-4 lg:px-4 lg:py-1.5"
                            />
                            <Image
                                src={bookImage}
                                alt="Book Cover Image"
                                className="w-40 mx-auto mt-6 md:mt-3 lg:pt-1 rounded-xl"
                            />
                        </Card>
                        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
                            <CardHeader
                                heading="My Toolbox"
                                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                                className="p-6 pb-0 lg:-mt-0.5"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-4 md:mt-6"
                                itemsWrapperClassName="animate-scroll-left [animation-duration:30s]"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-6"
                                itemsWrapperClassName="animate-scroll-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-4 lg:-mt-0.5">
                            <CardHeader
                                heading="Beyond the Code"
                                description="Explore my interests and hobbies beyond the digital realm."
                                className="p-6 md:pb-8"
                            />
                            <div className="relative z-0 flex-1 lg:-mt-1" ref={constraintRef}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                            zIndex: hobby.zIndex,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}>
                                        <span className="font-semibold text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
                            <Image
                                src={mapImage}
                                alt="Map Image"
                                className="h-full w-full object-cover object-left-top"
                                loading="lazy"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
