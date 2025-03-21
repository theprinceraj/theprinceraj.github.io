import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { email } from "../../profile.config";

export const ContactSection = ({ id }: { id: string }) => {
    return (
        <div className="py-12 md:pt-16 md:mt-2.5 lg:pt-24 lg:mt-3.5">
            <section className="container" id={id}>
                <div className="rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 text-center md:text-left relative z-10 overflow-clip">
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help
                                you achieve your goals.
                            </p>
                        </div>
                        <a href={`mailto:${email}`}>
                            <button className="bg-gray-900 text-white inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
