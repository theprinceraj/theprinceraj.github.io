import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { ContactSection } from "@/sections/Contact";
import { contactSectionId } from "@/sections/constants";
import { Footer } from "@/sections/Footer";

export default function NotFound() {
    return (
        <>
            <main className="relative min-h-screen overflow-x-clip py-24 md:py-32 flex items-center">
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}>
                    <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                    <div className="size-[620px] hero-ring"></div>
                    <div className="size-[820px] hero-ring"></div>
                </div>

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center px-8 py-10 md:px-12 md:py-14">
                        <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm md:text-base">
                            <span>404</span>
                            <span>&bull;</span>
                            <span>Page not found</span>
                        </div>

                        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mt-6">
                            This page drifted off the map
                        </h1>

                        <p className="mt-4 text-white/75 tracking-wide md:text-lg max-w-xl mx-auto">
                            The link may be broken, the page may have moved, or it may never have existed in the first
                            place. The rest of the site is still here.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="/">
                                <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                                    <span className="font-semibold">Back Home</span>
                                </button>
                            </Link>
                            <Link href="/blogs">
                                <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl">
                                    <span className="font-semibold">Read Blogs</span>
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <ContactSection id={contactSectionId} />
                </div>
            </main>
            <Footer />
        </>
    );
}
