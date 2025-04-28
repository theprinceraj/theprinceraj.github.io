import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { testimonials } from "../../profile.config";
import { testimonialsSectionId } from "./constants";
export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <section className="container" id={testimonialsSectionId}>
                <SectionHeader
                    heading1="Happy Clients"
                    heading2="What Clients Say About Me"
                    paragraph="Don't just take my word for it. See what my clients have to say about my work."
                />
                <div
                    className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
                    style={{
                        maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
                    }}>
                    <div className="flex gap-8 pr-8 flex-none animate-scroll-left [animation-duration:90s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.name}
                                        className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="inline-flex items-center justify-center size-14 bg-gray-700 rounded-full flex-shrink-0 overflow-hidden">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="max-h-full"
                                                    unoptimized
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-white/40">{testimonial.position}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base mt-4 md:my-6">{testimonial.text}</p>
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
