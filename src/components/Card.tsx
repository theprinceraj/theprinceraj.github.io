import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
    return (
        <div>
            <div
                className={twMerge(
                    `bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none p-6`,
                    className
                )}>
                <div
                    className="absolute inset-0 -z-10 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}></div>
                {children}
            </div>
        </div>
    );
};
