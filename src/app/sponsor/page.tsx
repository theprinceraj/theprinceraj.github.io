import grainImage from "@/assets/images/grain.jpg";
import GithubIcon from "@/assets/icons/toolbox/github.svg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/content/projects";
import { sponsorLinks } from "@/content/site-content";
import { ContactSection } from "@/sections/Contact";
import { contactSectionId } from "@/sections/constants";
import { Footer } from "@/sections/Footer";
import { ArrowUpRightIcon, BookOpenIcon, HeartIcon, IndianRupeeIcon, ServerIcon, SparklesIcon } from "lucide-react";
import { Metadata } from "next";

const supportAreas = [
    {
        title: "Open-source maintenance",
        description: "Time to fix bugs, review issues and ship new releases of the tools people already rely on.",
        Icon: SparklesIcon,
    },
    {
        title: "Hosting & infrastructure",
        description: "Servers, domains and API credits that keep demos and self-hostable projects running for free.",
        Icon: ServerIcon,
    },
    {
        title: "Writing & teaching",
        description: "Long-form engineering blogs that break down auth, payments, data structures and security.",
        Icon: BookOpenIcon,
    },
];

const openSourceProjects = projects.filter((project) => project.repo);

export default function Page() {
    return (
        <>
            <main className="relative overflow-x-clip pt-24 md:pt-32">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
                    }}>
                    <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                    <div className="size-[620px] hero-ring"></div>
                    <div className="size-[820px] hero-ring"></div>
                </div>

                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm md:text-base">
                            <HeartIcon className="size-4 text-emerald-300 fill-emerald-300" />
                            <span>Sponsor</span>
                        </div>
                        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mt-6">
                            Help me keep building in the open
                        </h1>
                        <p className="mt-4 text-white/75 tracking-wide md:text-lg max-w-xl mx-auto">
                            I build free, open-source tools and write about what I learn along the way. If something I
                            made saved you time, a sponsorship helps me spend more of mine on it.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-12 md:mt-16">
                        <Card className="p-8 flex flex-col">
                            <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-white/10">
                                <GithubIcon className="size-8 text-white" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl mt-6">GitHub Sponsors</h2>
                            <p className="text-white/60 mt-2 flex-1">
                                Monthly or one-time support through GitHub, with sponsor tiers and your name on my
                                profile. Best for supporters outside India.
                            </p>
                            <a href={sponsorLinks.github} target="_blank" className="mt-8">
                                <button className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-white text-gray-900">
                                    <span className="font-semibold">Sponsor on GitHub</span>
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                            </a>
                        </Card>

                        <Card className="p-8 flex flex-col">
                            <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950">
                                <IndianRupeeIcon className="size-7" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl mt-6">Razorpay</h2>
                            <p className="text-white/60 mt-2 flex-1">
                                Pay any amount you like with UPI, cards, net banking or wallets. The quickest option for
                                supporters in India.
                            </p>
                            <a href={sponsorLinks.razorpay} target="_blank" className="mt-8">
                                <button className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950">
                                    <span className="font-semibold">Pay via Razorpay</span>
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                            </a>
                        </Card>
                    </div>

                    <div className="pt-20 md:pt-28">
                        <SectionHeader
                            heading1="Where it goes"
                            heading2="What your support funds"
                            paragraph="Every contribution, big or small, goes straight back into the work."
                        />
                        <div className="grid gap-6 md:grid-cols-3 mt-12">
                            {supportAreas.map(({ title, description, Icon }) => (
                                <Card key={title} className="p-6 md:p-8">
                                    <Icon className="size-8 text-emerald-300" />
                                    <h3 className="font-serif text-xl md:text-2xl mt-4">{title}</h3>
                                    <p className="text-white/60 text-sm md:text-base mt-2">{description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="pt-20 md:pt-28">
                        <SectionHeader
                            heading1="Open source"
                            heading2="Projects you're backing"
                            paragraph="A few of the public projects your sponsorship helps keep alive."
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
                            {openSourceProjects.map((project) => (
                                <a key={project.name} href={project.repo} target="_blank" className="group">
                                    <Card className="h-full p-6 transition duration-300 group-hover:-translate-y-1">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="font-semibold text-lg">{project.name}</h3>
                                            <ArrowUpRightIcon className="size-5 shrink-0 text-white/40 transition group-hover:text-emerald-300" />
                                        </div>
                                        <p className="text-white/60 text-sm mt-2">{project.summary}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.stack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-white/50 mt-16 md:mt-20 max-w-xl mx-auto">
                        Can&apos;t sponsor right now? Starring a repo, reporting a bug or sharing a project with a
                        friend helps just as much. Thank you for being here.
                    </p>
                </div>

                <ContactSection id={contactSectionId} />
            </main>
            <Footer />
        </>
    );
}

export const metadata: Metadata = {
    title: "Sponsor",
    description:
        "Support Prince Raj's open-source projects and writing through GitHub Sponsors or Razorpay (UPI, cards, net banking).",
    alternates: { canonical: "/sponsor" },
};
