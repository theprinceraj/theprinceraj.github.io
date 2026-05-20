import { SectionHeader } from "@/components/SectionHeader";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import { BlogContainer } from "@/sections/blogs/BlogContainer";
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

            <ContactSection id="contact" />
            <Footer />
        </section>
    );
}
