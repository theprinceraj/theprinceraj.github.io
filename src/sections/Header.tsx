import { Dispatch, MouseEvent, SetStateAction, useEffect, useCallback, useMemo, useRef } from "react";
import { aboutSectionId, heroSectionId, projectsSectionId, testimonialsSectionId } from "./constants";
import { twMerge } from "tailwind-merge";
import { HomeIcon } from "lucide-react";

// Inline SVG components for icon-only nav on very small screens
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z" />
        <path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" />
    </svg>
);

const FeedbackReviewIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="m17.829,10.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm-8-3c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113ZM1.829,10.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011L.235,6.595c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm15.17,3.238h-4.183l.58-3.265c.057-.334.029-.519.007-.599-.188-.69-.75-1.136-1.432-1.136-.213,0-.428.044-.64.132-.254.105-.503.367-.682.719l-2.193,4.149h-1.456c-1.657,0-3,1.343-3,3v4c0,1.657,1.343,3,3,3h0v-7c0-.552.448-1,1-1s1,.448,1,1v7h6.379c1.907,0,3.548-1.346,3.922-3.216l.639-3.196c.371-1.856-1.049-3.588-2.942-3.588Z" />
    </svg>
);

const IdBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="m19 4h-4v-1a3 3 0 0 0 -6 0v1h-4a5.006 5.006 0 0 0 -5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5zm-9 14a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm2-12a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1zm6 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm2-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-15 0h3v6h-3z" />
    </svg>
);

export const Header = ({
    activeSectionId,
    setActiveSectionId,
}: {
    activeSectionId: string;
    setActiveSectionId: Dispatch<SetStateAction<string>>;
}) => {
    const yOffset = -100;

    // Ref to track if a navigation link was recently clicked
    const recentlyClicked = useRef(false);
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Memoize the section ids array to avoid recreating it on each render
    const sectionIds = useMemo(() => [heroSectionId, projectsSectionId, testimonialsSectionId, aboutSectionId], []);

    const scrollToSection = useCallback(
        (sectionId: string) => {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setActiveSectionId(sectionId);

                // Set the recently clicked flag to prevent auto-switching
                recentlyClicked.current = true;

                // Clear any existing timeout
                if (clickTimeoutRef.current) {
                    clearTimeout(clickTimeoutRef.current);
                }

                // Reset the flag after a delay (after scroll animation completes)
                clickTimeoutRef.current = setTimeout(() => {
                    recentlyClicked.current = false;
                }, 1000); // 1 second delay should cover most scroll animations
            }
        },
        [setActiveSectionId, yOffset],
    );

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            scrollToSection(hash);
        }

        // Clean up timeout on unmount
        return () => {
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
            }
        };
    }, [scrollToSection]);

    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll detection if a navigation link was recently clicked
            if (recentlyClicked.current) return;

            const scrollPosition = window.scrollY + 150;
            const sections = sectionIds
                .map((id) => {
                    const element = document.getElementById(id);
                    if (!element) return null;

                    // Calculate the section's boundaries
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    const bottom = top + height;

                    return { id, element, top, bottom };
                })
                .filter(Boolean) as Array<{ id: string; element: HTMLElement; top: number; bottom: number }>;

            // Find the section that the user is currently viewing
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];

                // Check if the scroll position is within this section
                // For the last section (Contact), be more lenient with the boundary check
                const isLastSection = i === sections.length - 1;
                const inSection = isLastSection
                    ? scrollPosition >= section.top - 50 // More forgiving for the last section
                    : scrollPosition >= section.top && scrollPosition < section.bottom;

                if (inSection) {
                    if (section.id !== activeSectionId) {
                        setActiveSectionId(section.id);
                    }
                    break;
                }
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Set initial active section

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSectionId, sectionIds, setActiveSectionId]);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href")?.substring(1);
            if (targetId) {
                scrollToSection(targetId);
                window.history.pushState(null, "", `#${targetId}`);
            }
        },
        [scrollToSection],
    );

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-20">
            <nav className="flex gap-3 p-0.5 border border-white/30 rounded-full bg-white/10 backdrop-blur">
                {sectionIds.map((sectionId) => {
                    const labels = {
                        [heroSectionId]: "Home",
                        [projectsSectionId]: "Projects",
                        [testimonialsSectionId]: "Impressions",
                        [aboutSectionId]: "About",
                    };

                    const renderIcon = (id: string) => {
                        switch (id) {
                            case heroSectionId:
                                return <HomeIcon className="size-5 sm:hidden md:block" />;
                            case projectsSectionId:
                                return <BriefcaseIcon className="size-5 sm:hidden md:block" />;
                            case testimonialsSectionId:
                                return <FeedbackReviewIcon className="size-5 sm:hidden md:block" />;
                            case aboutSectionId:
                                return <IdBadgeIcon className="size-5 sm:hidden md:block" />;
                            default:
                                return null;
                        }
                    };

                    return (
                        <a
                            key={sectionId}
                            href={`#${sectionId}`}
                            onClick={handleClick}
                            title={labels[sectionId as keyof typeof labels]}
                            aria-label={labels[sectionId as keyof typeof labels]}
                            className={twMerge(
                                "nav-item flex items-center gap-2 px-3 py-1",
                                activeSectionId === sectionId && "nav-highlighted",
                            )}>
                            {renderIcon(sectionId)}
                            <span className="sr-only">{labels[sectionId as keyof typeof labels]}</span>
                            <span className="hidden sm:inline ml-1">{labels[sectionId as keyof typeof labels]}</span>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
};
