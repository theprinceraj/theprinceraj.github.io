import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";

const testimonials = [
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
];

export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    heading1="Happy Clients"
                    heading2="What Clients Say About Me"
                    paragraph="Don't just take my word for it. See what my clients have to say about my work."
                />
                <div
                    className="mt-16 lg:mt-24 flex overflow-x-clip"
                    style={{
                        maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
                    }}>
                    <div className="flex gap-8 flex-none">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name}>
                                <Card className="max-w-xs md:max-w-md md:p-8">
                                    <div className="flex items-center gap-4">
                                        <div className="inline-flex items-center justify-center size-14 bg-gray-700 rounded-full flex-shrink-0">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="max-h-full"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-white/40">{testimonial.position}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base mt-4 md:my-6">{testimonial.text}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
