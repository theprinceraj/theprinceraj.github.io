import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import { aboutSectionId, contactSectionId, heroSectionId, projectsSectionId } from "./constants";
import { twMerge } from "tailwind-merge";

export const Header = ({
    activeSectionId,
    setActiveSectionId,
}: {
    activeSectionId: string;
    setActiveSectionId: Dispatch<SetStateAction<string>>;
}) => {
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetSection = document.getElementById(hash);
            if (targetSection) {
                // Get the element's position and apply an offset (e.g., 100px down)
                const yOffset = -100; // Adjust this value as needed
                const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                
                setActiveSectionId(hash);
            }
        }
    }, []);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("href")?.substring(1);
        const targetSection = targetId ? document.getElementById(targetId) : null;

        if (targetSection) {
            // Get the element's position and apply an offset (e.g., 100px down)
            const yOffset = -100; // Adjust this value as needed
            const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });

            setActiveSectionId(targetId as string);
            window.history.pushState(null, "", `#${targetId}`);
        }
    };
    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-3 p-0.5 border border-white/30 rounded-full bg-white/10 backdrop-blur">
                <a
                    href={"#" + heroSectionId}
                    className={twMerge("nav-item", activeSectionId === heroSectionId && "nav-highlighted")}
                    onClick={handleClick}>
                    Home
                </a>
                <a
                    href={"#" + projectsSectionId}
                    className={twMerge("nav-item", activeSectionId === projectsSectionId && "nav-highlighted")}
                    onClick={handleClick}>
                    Projects
                </a>
                <a
                    href={"#" + aboutSectionId}
                    className={twMerge("nav-item", activeSectionId === aboutSectionId && "nav-highlighted")}
                    onClick={handleClick}>
                    About
                </a>
                <a
                    href={"#" + contactSectionId}
                    className={twMerge("nav-item", activeSectionId === contactSectionId && "nav-highlighted")}
                    onClick={handleClick}>
                    Contact
                </a>
            </nav>
        </div>
    );
};
