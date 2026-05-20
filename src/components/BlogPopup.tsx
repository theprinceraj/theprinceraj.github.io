"use client";

import { useState } from "react";
import { useEffect } from "react";
import ReadingGif from "@/assets/animated/reading.webp";
import ReadingStatic from "@/assets/images/reading.webp";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

export default function BlogHomepagePopup() {
    const [imageSrc, setImageSrc] = useState(ReadingStatic);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // show popup only if the user stays on the page for 1-3 seconds
        const delay = 1000 + Math.floor(Math.random() * 2000); // 1000-3000ms
        const t = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            className={`px-2 py-1 fixed bottom-5 right-5 md:bottom-10 cursor-pointer z-20 rounded-md transform transition-all duration-300 ease-out ${
                visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-50 pointer-events-none"
            }`}
            aria-hidden={!visible}>
            <a href="/blogs" target="_blank" className="size-full flex items-center justify-center gap-y-2 flex-col">
                <Image
                    src={imageSrc}
                    alt="Reading"
                    className="size-20 md:size-28 object-cover overflow-clip rounded-full"
                    onLoad={() => setImageSrc(ReadingGif)}
                    onError={() => setImageSrc(ReadingStatic)}
                />
                <div className="text-lg md:text-2xl font-bold px-3 py-1 flex items-center justify-center gap-x-1 border-white/30 rounded-full bg-white/10 backdrop-blur-3xl">
                    <span>Blogs</span> <ArrowUpRightIcon />
                </div>
            </a>
        </div>
    );
}
