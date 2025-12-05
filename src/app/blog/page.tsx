import BlogHero from "@/components/blog/blog-hero";
import BlogSection from "@/components/blog/blog-section";
import Navbar from "@/components/marketing/navbar";

const BlogPage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <Navbar />
            <div className="pt-16">
                <BlogHero />
                <BlogSection />
            </div>
        </div>
    );
};

export default BlogPage;