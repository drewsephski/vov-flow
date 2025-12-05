import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { BLOGS } from "@/constants/blogs";
import { CheckCircle2Icon, TrendingUpIcon, ZapIcon } from "lucide-react";
import type { Blog } from "@/constants/blogs";

export default function SaaSVoiceTechnologyGuide() {
    const blog = BLOGS.find(b => b.slug === "saas-voice-technology-guide");

    if (!blog) {
        notFound();
    }

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

                    <div className="flex items-center gap-4">
                        <Image
                            src={blog.authorImage || "/icons/icon.svg"}
                            alt={blog.author}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold">{blog.author}</p>
                            <p className="text-sm text-muted-foreground">{blog.authorRole}</p>
                            <a
                                href={blog.authorCompanyUrl}
                                className="text-sm text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {blog.authorCompany}
                            </a>
                        </div>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav className="bg-muted/70 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2">
                        <li><a href="#why-voice" className="text-primary hover:underline">Why Voice Now</a></li>
                        <li><a href="#implementation" className="text-primary hover:underline">Implementation Strategy</a></li>
                        <li><a href="#technical-stack" className="text-primary hover:underline">Technical Stack</a></li>
                        <li><a href="#success-stories" className="text-primary hover:underline">Success Stories</a></li>
                        <li><a href="#avoiding-pitfalls" className="text-primary hover:underline">Avoiding Pitfalls</a></li>
                        <li><a href="#future-trends" className="text-primary hover:underline">Future Trends</a></li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section id="why-voice" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Voice Now: The Perfect Storm for SaaS Innovation</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <TrendingUpIcon className="size-8 text-blue-400 mb-4" />
                                <h3 className="font-semibold mb-2">Market Timing</h3>
                                <p className="text-sm text-muted-foreground">
                                    73% of consumers prefer voice interactions. The market is ready and waiting.
                                </p>
                            </div>
                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <ZapIcon className="size-8 text-green-400 mb-4" />
                                <h3 className="font-semibold mb-2">Technology Maturity</h3>
                                <p className="text-sm text-muted-foreground">
                                    AI accuracy at 95%+, latency under 200ms, and affordable APIs.
                                </p>
                            </div>
                            <div className="bg-purple-950/50 border border-purple-800 p-6 rounded-lg">
                                <CheckCircle2Icon className="size-8 text-purple-400 mb-4" />
                                <h3 className="font-semibold mb-2">Consumer Readiness</h3>
                                <p className="text-sm text-muted-foreground">
                                    Smart speakers in 50% of homes, voice search growing 35% annually.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">The Voice-First Opportunity</h3>
                            <p className="mb-4">
                                Voice technology isn't just another feature—it's a paradigm shift in how users interact with software. For SaaS founders, this represents the largest untapped opportunity since mobile apps.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-muted/50 p-4 rounded border">
                                    <h4 className="font-medium mb-2">Current State</h4>
                                    <ul className="text-sm space-y-1 text-foreground">
                                        <li>• 15% of searches are voice-based</li>
                                        <li>• $10B+ invested in voice tech</li>
                                        <li>• Early adopters seeing 300% ROI</li>
                                    </ul>
                                </div>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <h4 className="font-medium mb-2">Near Future</h4>
                                    <ul className="text-sm space-y-1 text-foreground">
                                        <li>• 50% of searches will be voice</li>
                                        <li>• $50B+ market opportunity</li>
                                        <li>• Voice commerce exploding</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="implementation" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Implementation Strategy: From Concept to Scale</h2>

                        <div className="space-y-8">
                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Phase 1: Foundation (Weeks 1-4)</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Market Research</p>
                                            <p className="text-sm text-muted-foreground">Identify your niche and voice use cases</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Technical Planning</p>
                                            <p className="text-sm text-muted-foreground">Choose platforms and architecture</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Team Assembly</p>
                                            <p className="text-sm text-muted-foreground">Get voice AI expertise on board</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Phase 2: MVP Development (Weeks 5-12)</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h4 className="font-medium mb-2">Core Features</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Basic voice recognition</li>
                                            <li>• Intent classification</li>
                                            <li>• Response generation</li>
                                            <li>• Error handling</li>
                                        </ul>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h4 className="font-medium mb-2">Integration Points</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• API connections</li>
                                            <li>• Database integration</li>
                                            <li>• User authentication</li>
                                            <li>• Analytics setup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Phase 3: Testing & Refinement (Weeks 13-16)</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h4 className="font-medium mb-2">Technical Testing</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Load testing</li>
                                            <li>• Accuracy validation</li>
                                            <li>• Latency optimization</li>
                                            <li>• Security auditing</li>
                                        </ul>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h4 className="font-medium mb-2">User Testing</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Beta testing</li>
                                            <li>• Feedback collection</li>
                                            <li>• UX refinement</li>
                                            <li>• Accessibility review</li>
                                        </ul>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h4 className="font-medium mb-2">Market Testing</h4>
                                        <ul className="text-sm space-y-1 text-foreground">
                                            <li>• Early adopter program</li>
                                            <li>• Pricing validation</li>
                                            <li>• Feature prioritization</li>
                                            <li>• Go-to-market strategy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="technical-stack" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Technical Stack: Building for Scale</h2>

                        <h3 className="text-xl font-semibold mb-4">Recommended Architecture</h3>
                        <div className="bg-muted/70 p-6 rounded-lg mb-6">
                            <pre className="text-sm overflow-x-auto">
                                {`┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Voice Frontend │    │   Processing     │    │   SaaS Backend  │
│   (Web/Mobile)   │◄──►│   Layer          │◄──►│   Services      │
│                 │    │                  │    │                 │
│ • WebRTC         │    │ • NLP Engine     │    │ • User Mgmt     │
│ • Audio Stream   │    │ • Intent Class   │    │ • Data Storage  │
│ • UI Components  │    │ • Context Mgmt   │    │ • API Gateway   │
└─────────────────┘    └──────────────────┘    └─────────────────┘`}</pre>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <h4 className="font-semibold mb-3">Voice Platforms</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• <strong>Vapi AI:</strong> Fast, scalable, developer-friendly</li>
                                    <li>• <strong>Retell AI:</strong> Feature-rich, enterprise-grade</li>
                                    <li>• <strong>Custom:</strong> Full control, higher complexity</li>
                                </ul>
                            </div>
                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <h4 className="font-semibold mb-3">Backend Technologies</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• <strong>Next.js:</strong> Full-stack React framework</li>
                                    <li>• <strong>Node.js:</strong> Scalable server-side runtime</li>
                                    <li>• <strong>PostgreSQL:</strong> Reliable database solution</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="success-stories" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Success Stories: SaaS Founders Who Got It Right</h2>

                        <div className="space-y-8">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">F</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Fitness App Founder</h4>
                                        <p className="text-sm text-muted-foreground">Added voice workout coaching</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">Before</h5>
                                        <p className="text-sm text-foreground">• 10K users</p>
                                        <p className="text-sm text-foreground">• $5K MRR</p>
                                        <p className="text-sm text-foreground">• High churn</p>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">After</h5>
                                        <p className="text-sm text-foreground">• 150K users</p>
                                        <p className="text-sm text-foreground">• $75K MRR</p>
                                        <p className="text-sm text-foreground">• 60% lower churn</p>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">Key Insight</h5>
                                        <p className="text-sm text-foreground">Voice made workouts more engaging and accessible</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">F</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Finance App Founder</h4>
                                        <p className="text-sm text-muted-foreground">Implemented voice financial assistant</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">Before</h5>
                                        <p className="text-sm text-foreground">• 5K users</p>
                                        <p className="text-sm text-foreground">• $3K MRR</p>
                                        <p className="text-sm text-foreground">• Low engagement</p>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">After</h5>
                                        <p className="text-sm text-foreground">• 80K users</p>
                                        <p className="text-sm text-foreground">• $48K MRR</p>
                                        <p className="text-sm text-foreground">• 3x engagement</p>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded border">
                                        <h5 className="font-medium mb-2">Key Insight</h5>
                                        <p className="text-sm text-foreground">Voice made finance management less intimidating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="avoiding-pitfalls" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Avoiding Common Pitfalls</h2>

                        <div className="space-y-6">
                            <div className="bg-red-950 border border-red-200 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-red-600 mb-3">❌ Pitfall: Ignoring Edge Cases</h3>
                                <p className="text-red-700 mb-4">
                                    Many founders focus only on perfect scenarios and ignore real-world complexity.
                                </p>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <h4 className="font-medium mb-2">✅ Solution:</h4>
                                    <ul className="text-sm space-y-1 text-foreground">
                                        <li>• Test with diverse accents and backgrounds</li>
                                        <li>• Handle noisy environments gracefully</li>
                                        <li>• Plan for connectivity issues</li>
                                        <li>• Implement graceful fallbacks</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-orange-950/50 border border-orange-800 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-orange-400 mb-3">❌ Pitfall: Over-Engineering</h3>
                                <p className="text-orange-300 mb-4">
                                    Building too much too soon can kill your momentum and burn resources.
                                </p>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <h4 className="font-medium mb-2">✅ Solution:</h4>
                                    <ul className="text-sm space-y-1 text-foreground">
                                        <li>• Start with core functionality</li>
                                        <li>• Use existing APIs and services</li>
                                        <li>• Iterate based on user feedback</li>
                                        <li>• Scale complexity gradually</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-purple-950/50 border border-purple-800 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-purple-400 mb-3">❌ Pitfall: Neglecting Privacy</h3>
                                <p className="text-purple-300 mb-4">
                                    Voice data is sensitive. Mishandling it can destroy trust and violate regulations.
                                </p>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <h4 className="font-medium mb-2">✅ Solution:</h4>
                                    <ul className="text-sm space-y-1 text-foreground">
                                        <li>• Implement end-to-end encryption</li>
                                        <li>• Be transparent about data usage</li>
                                        <li>• Comply with GDPR/CCPA</li>
                                        <li>• Give users control over their data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="future-trends" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Future Trends: Staying Ahead of the Curve</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Emerging Technologies</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Emotion Recognition</p>
                                            <p className="text-sm text-muted-foreground">AI that understands user emotions for better responses</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Multimodal AI</p>
                                            <p className="text-sm text-muted-foreground">Combining voice, text, and visual inputs</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Edge Computing</p>
                                            <p className="text-sm text-muted-foreground">Processing voice locally for privacy and speed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Market Opportunities</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Voice Commerce</p>
                                            <p className="text-sm text-muted-foreground">$40B market by 2027</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Healthcare</p>
                                            <p className="text-sm text-muted-foreground">Voice diagnostics and patient care</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        <div>
                                            <p className="font-medium">Education</p>
                                            <p className="text-sm text-muted-foreground">Personalized voice tutors and assistants</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <div className="bg-black text-white p-8 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Ready to Build the Future?</h2>
                            <p className="text-lg mb-6">
                                The voice revolution is here, and it's moving fast. As a SaaS founder, you have a unique opportunity to shape this new frontier and build something truly transformative.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out transform">
                                    Start Your Voice Journey
                                </button>
                                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/80 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out transform">
                                    Get Expert Guidance
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    );
}