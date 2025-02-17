import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

export const HeroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}></div>
            <div className="size-[620px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1020px] hero-ring"></div>
            <div className="size-[1220px] hero-ring"></div>
            <div className="absolute">
                <StarIcon className="size-2 text-emeral-300" />
            </div>
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3.5">
                        <div className="bg-green-500 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Building Exceptional User Experiences
                    </h1>
                    <p className="mt-4 text-center font-light text-white/80 tracking-wide md:text-lg">
                        I specialize in transforming designs into functional, high-performing web-applications.
                        Let&apos;s dicuss your next project.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                    <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span className="font-semibold">Explore My Work</span>
                        <ArrowDown className="size-4" />
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl">
                        <span>👋</span>
                        <span className="font-semibold">Let&apos;s Connect</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
