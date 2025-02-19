import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
    heading,
    description,
    className,
}: {
    heading: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col md:pt-8 md:px-10", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="text-emerald-300 size-9" />
                <h3 className="font-serif text-3xl">{heading}</h3>
            </div>
            <p className="text-sm text-white/60 my-2 max-w-xs lg:text-base">{description}</p>
        </div>
    );
};
