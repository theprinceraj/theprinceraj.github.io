import { SectionHeader } from "@/components/SectionHeader";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import { BlogContainer } from "@/sections/blogs/BlogContainer";
import { blogs } from "@/../profile.config";
import { Metadata } from "next";
export default function Page() {
    return (
        <section>
            <div className="px-10 pt-20 pb-10">
                <SectionHeader
                    heading1="BLOGS"
                    heading2="Insights & Learnings"
                    paragraph="Thoughts on web dev, design, and the tools I use to build better digital experiences."
                />
            </div>

            <BlogContainer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": blogs.map((b) => ({
                            "@type": "Article",
                            headline: b.title,
                            description: b.description,
                            url: b.link,
                            datePublished: b.date,
                            keywords: b.niche,
                            author: { "@type": "Person", name: "Prince Raj" },
                        })),
                    }),
                }}
            />

            <ContactSection id="contact" />
            <Footer />
        </section>
    );
}

export const metadata: Metadata = {
    title: "Blogs",
    description: "Thoughts on web dev, design, and the tools I use to build better digital experiences.",
    alternates: { canonical: "https://theprinceraj.tech/blogs" },
};
