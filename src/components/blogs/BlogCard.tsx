import { Card } from "../Card";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

export const BlogCard = ({
    title,
    niche,
    description,
    date,
    link,
}: {
    title: string;
    niche: string;
    description: string;
    date: string;
    link: string;
}) => {
    return (
        <Card key={title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-16 lg:pt-16">
            <div className="flex flex-col justify-between h-full lg:pb-8">
                <div>
                    <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-sm md:text-base">
                        <span>{niche}</span>
                        <span>&bull;</span>
                        <span>{date}</span>
                    </div>
                    <h3 className="font-serif text-md md:text-xl lg:text-2xl lg:max-w-sm mt-2 md:mt-5">{title}</h3>
                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                    <div className="mt-4 md:mt-5 flex">
                        <li key={title} className="inline-flex gap-2 text-white/50 font-light text-sm md:text-base">
                            <span>{description}</span>
                        </li>
                    </div>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 my-8 font-semibold inline-flex items-center justify-center gap-2">
                        <span>Read More</span>
                        <ArrowUpRightIcon className="size-4" />
                    </button>
                </a>
            </div>
        </Card>
    );
};
