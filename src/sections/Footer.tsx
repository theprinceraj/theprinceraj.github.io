import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { footerLinks } from "../../profile.config";

export const Footer = () => {
    return (
        <footer className="pt-4 relative z-0 overflow-x-clip lg:pt-8">
            <div
                className="absolute h-[400px] w-[1600px] bottom-0 -z-10 left-1/2 -translate-x-1/2 bg-emerald-300/30"
                style={{
                    maskImage: `radial-gradient(50% 50% at bottom center, black, transparent)`,
                }}></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 md:pb-8 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div className="text-white/40">&copy; 2024. All rights reserved.</div>
                    <nav className="flex flex-col md:flex-row gap-8 items-center">
                        {footerLinks.map((footerLink) => (
                            <a
                                key={footerLink.title}
                                href={footerLink.href}
                                target="_blank"
                                className="inline-flex items-center gap-1.5">
                                <span className="font-semibold">{footerLink.title}</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
