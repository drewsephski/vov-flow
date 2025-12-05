import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { BLOGS } from "@/constants/blogs";
import { CheckCircle2Icon, XCircleIcon, ClockIcon, UserIcon, TagIcon } from "lucide-react";
import type { Blog } from "@/constants/blogs";

interface BlogPostProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const blog = BLOGS.find(b => b.slug === params.slug);

    if (!blog) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: `${blog.title} | Polar Voice Blog`,
        description: blog.desc,
        keywords: [blog.category, "voice AI", "SaaS", "technology"],
        openGraph: {
            title: blog.title,
            description: blog.desc,
            images: [blog.image],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.desc,
            images: [blog.image],
        },
    };
}

function getRelatedPosts(currentBlog: Blog, allBlogs: Blog[], limit: number = 3): Blog[] {
    // Filter out the current blog and get posts from the same category first
    const sameCategory = allBlogs
        .filter(blog => blog.slug !== currentBlog.slug && blog.category === currentBlog.category)
        .slice(0, limit);

    // If we don't have enough related posts from the same category, get from other categories
    if (sameCategory.length < limit) {
        const otherCategory = allBlogs
            .filter(blog => blog.slug !== currentBlog.slug && blog.category !== currentBlog.category)
            .slice(0, limit - sameCategory.length);

        return [...sameCategory, ...otherCategory];
    }

    return sameCategory;
}

export default function BlogPost({ params }: BlogPostProps) {
    const blog = BLOGS.find(b => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(blog, BLOGS);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 py-16">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/blog" className="hover:text-foreground">Blog</Link>
                        <span>/</span>
                        <span>{blog.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {blog.desc}
                    </p>

                    <div className="flex items-center gap-6">
                        <div>
                            <p className="font-semibold">{blog.author}</p>
                            <p className="text-sm text-muted-foreground">{blog.authorRole} at {blog.authorCompany}</p>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <ClockIcon className="size-4" />
                                <span>8 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TagIcon className="size-4" />
                                <span>{blog.category}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-12">
                    <div className="relative w-full aspect-video bg-muted/50 border border-border/20 rounded-lg overflow-hidden">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Table of Contents */}
                <nav className="bg-muted/70 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2">
                        <li><a href="#overview" className="text-primary hover:underline">Overview</a></li>
                        <li><a href="#key-points" className="text-primary hover:underline">Key Points</a></li>
                        <li><a href="#implementation" className="text-primary hover:underline">Implementation</a></li>
                        <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section id="overview" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>
                        <p className="text-lg mb-6">
                            This comprehensive guide covers everything you need to know about {blog.category.toLowerCase()}.
                            Whether you're a beginner or an experienced professional, this post will provide valuable insights
                            and practical advice.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                                <CheckCircle2Icon className="size-6 text-green-600 mb-4" />
                                <h3 className="font-semibold mb-2">Key Benefits</h3>
                                <ul className="text-sm space-y-2 text-foreground">
                                    <li>• Improved efficiency and productivity</li>
                                    <li>• Enhanced user experience</li>
                                    <li>• Cost savings and ROI</li>
                                    <li>• Future-proof technology</li>
                                </ul>
                            </div>

                            <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                                <XCircleIcon className="size-6 text-red-600 mb-4" />
                                <h3 className="font-semibold mb-2">Common Challenges</h3>
                                <ul className="text-sm space-y-2 text-foreground">
                                    <li>• Implementation complexity</li>
                                    <li>• Integration with existing systems</li>
                                    <li>• Team training and adoption</li>
                                    <li>• Ongoing maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="key-points" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Key Points</h2>

                        <div className="space-y-8">
                            <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">1. Industry Trends</h3>
                                <p className="mb-4">
                                    The {blog.category.toLowerCase()} market is experiencing rapid growth, with projections showing
                                    significant expansion over the next 5 years. Key trends include:
                                </p>
                                <ul className="space-y-2 text-foreground">
                                    <li>• Increasing adoption of AI-powered solutions</li>
                                    <li>• Greater emphasis on user experience</li>
                                    <li>• Integration with existing workflows</li>
                                    <li>• Focus on data security and compliance</li>
                                </ul>
                            </div>

                            <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">2. Best Practices</h3>
                                <p className="mb-4">
                                    To achieve optimal results with {blog.category.toLowerCase()}, follow these proven strategies:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-muted/50 border border-border/20 p-4 rounded">
                                        <h4 className="font-medium mb-2">Planning Phase</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Define clear objectives</li>
                                            <li>• Assess current infrastructure</li>
                                            <li>• Identify key stakeholders</li>
                                            <li>• Create implementation timeline</li>
                                        </ul>
                                    </div>
                                    <div className="bg-muted/50 border border-border/20 p-4 rounded">
                                        <h4 className="font-medium mb-2">Execution Phase</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Start with pilot projects</li>
                                            <li>• Monitor key metrics</li>
                                            <li>• Gather user feedback</li>
                                            <li>• Iterate and improve</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="implementation" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Implementation</h2>

                        <div className="bg-muted/50 border border-border/20 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
                            <p className="mb-4">
                                Here's a step-by-step guide to implementing {blog.category.toLowerCase()} in your organization:
                            </p>
                            <ol className="space-y-3 text-foreground">
                                <li>
                                    <strong>Assessment:</strong> Evaluate your current needs and identify areas where
                                    {blog.category.toLowerCase()} can provide the most value.
                                </li>
                                <li>
                                    <strong>Planning:</strong> Develop a comprehensive implementation plan with clear
                                    milestones and success metrics.
                                </li>
                                <li>
                                    <strong>Execution:</strong> Start with a small-scale implementation to test and refine
                                    your approach before scaling up.
                                </li>
                                <li>
                                    <strong>Optimization:</strong> Continuously monitor performance and make adjustments
                                    based on real-world usage and feedback.
                                </li>
                            </ol>
                        </div>

                        <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Code Example</h3>
                            <pre className="text-sm overflow-x-auto">
                                {`// Example implementation
const config = {
  platform: '${blog.category}',
  features: ['core', 'analytics', 'integration'],
  settings: {
    enableNotifications: true,
    autoUpdate: true
  }
};

// Initialize the system
initializeSystem(config)
  .then(() => console.log('System ready!'))
  .catch(error => console.error('Error:', error));`}</pre>
                        </div>
                    </section>

                    <section id="conclusion" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                        <p className="text-lg mb-6">
                            {blog.category} represents a significant opportunity for organizations looking to improve
                            their operations and stay competitive in today's fast-paced environment. By following the
                            guidelines outlined in this post, you can successfully implement and benefit from this
                            powerful technology.
                        </p>

                        <div className="bg-muted/50 border border-border/20 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
                            <ul className="space-y-2 text-foreground">
                                <li>• {blog.category} offers substantial benefits when implemented correctly</li>
                                <li>• Proper planning and execution are crucial for success</li>
                                <li>• Continuous monitoring and optimization ensure long-term value</li>
                                <li>• Team training and adoption are key to maximizing ROI</li>
                            </ul>
                        </div>
                    </section>

                    {/* Related Posts */}
                    <section id="related-posts" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block"
                                >
                                    <div className="bg-muted/50 border border-border/20 rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300">
                                        <div className="relative aspect-video">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/20 text-xs font-medium text-foreground">
                                                    <TagIcon className="size-3 text-primary" />
                                                    {relatedPost.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3">
                                                {relatedPost.desc}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-primary font-medium group-hover:underline">
                                                    Read more →
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {relatedPost.authorCompany}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="mb-12">
                        <div className="bg-black text-white p-8 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                            <p className="text-lg mb-6 opacity-90">
                                Take the first step towards transforming your {blog.category.toLowerCase()} strategy.
                                Download our comprehensive guide or schedule a consultation with our experts.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors shadow-lg">
                                    Download Guide
                                </button>
                                <button className="border-2 border-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors shadow-lg">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Author Bio */}
                    <section className="mb-12">
                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                            <div>
                                <p className="font-semibold">{blog.author}</p>
                                <p className="text-sm text-muted-foreground">{blog.authorRole} at {blog.authorCompany}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {blog.author} is a seasoned professional with over 10 years of experience in {blog.category.toLowerCase()}.
                                    They specialize in helping organizations implement cutting-edge solutions that drive growth and innovation.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    );
}