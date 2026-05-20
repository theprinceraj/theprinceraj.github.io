import { BlogCard } from "@/components/blogs/BlogCard";
import { blogs } from "../../../profile.config";

export const BlogContainer = () => {
    return (
        <>
            <div className="px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 relative z-10 min-h-screen">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        link={blog.link}
                        niche={blog.niche}
                    />
                ))}
            </div>
        </>
    );
};
