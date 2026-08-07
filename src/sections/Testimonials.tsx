import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { testimonials } from "../../profile.config";
import { testimonialsSectionId } from "./constants";
import { ExternalLinkIcon, UserIcon } from "lucide-react";
export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <section className="container" id={testimonialsSectionId}>
                <SectionHeader
                    heading1="Endorsements"
                    heading2="What It's Like Working With Me"
                    paragraph="I value the connections I make. See what my network has to say."
                />
                <div
                    className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
                    style={{
                        maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
                    }}>
                    <div className="flex gap-8 pr-8 flex-none animate-scroll-left [animation-duration:30s] lg:[animation-duration:40s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.name}
                                        className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                                        <a
                                            href={testimonial.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4">
                                            <div className="inline-flex items-center justify-center size-14 bg-gray-700 rounded-full flex-shrink-0 overflow-hidden">
                                                {testimonial.avatar ? (
                                                    <Image
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="max-h-full"
                                                        unoptimized
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center size-14 bg-gray-700 rounded-full">
                                                        <UserIcon className="size-6 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-white/40">{testimonial.position}</div>
                                            </div>
                                            {testimonial.href && (
                                                <ExternalLinkIcon className="size-4 text-white/40 ml-auto" />
                                            )}
                                        </a>
                                        <p className="text-sm md:text-base mt-4 md:my-6">
                                            {testimonial.text.substring(0, 250)}...
                                        </p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
