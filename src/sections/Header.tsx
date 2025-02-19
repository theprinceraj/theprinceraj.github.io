import { useEffect, useState } from "react";
import { aboutSectionId, contactSectionId, heroSectionId, projectsSectionId } from "./constants";

export const Header = () => {
    const [activeSection, setActiveSection] = useState(heroSectionId);

    useEffect(() => {
        
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-3 p-0.5 border border-white/30 rounded-full bg-white/10 backdrop-blur">
                <a href={"#" + heroSectionId} className="nav-item nav-highlighted">
                    Home
                </a>
                <a href={"#" + projectsSectionId} className="nav-item">
                    Projects
                </a>
                <a href={"#" + aboutSectionId} className="nav-item">
                    About
                </a>
                <a href={"#" + contactSectionId} className="nav-item">
                    Contact
                </a>
            </nav>
        </div>
    );
};
