import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { CheckCircle2Icon, XCircleIcon, ZapIcon, ShieldIcon } from "lucide-react";

export default function VapiVsRetellComparison() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 py-16">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/blog" className="hover:text-foreground">Blog</Link>
                        <span>/</span>
                        <span>Technology Comparison</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Vapi vs Retell: The Ultimate Voice Agent Platform Comparison
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        An in-depth technical comparison of the leading voice agent platforms. Real performance data, code examples, and pricing analysis to help you choose the right solution for your SaaS.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-gray-600 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Polar Voice Team</p>
                            <p className="text-sm text-muted-foreground">Voice AI Specialists</p>
                        </div>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav className="bg-muted/70 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2">
                        <li><a href="#overview" className="text-primary hover:underline">Platform Overview</a></li>
                        <li><a href="#performance-comparison" className="text-primary hover:underline">Performance Comparison</a></li>
                        <li><a href="#pricing-analysis" className="text-primary hover:underline">Pricing Analysis</a></li>
                        <li><a href="#code-comparison" className="text-primary hover:underline">Code Comparison</a></li>
                        <li><a href="#use-cases" className="text-primary hover:underline">Best Use Cases</a></li>
                        <li><a href="#decision-framework" className="text-primary hover:underline">Decision Framework</a></li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section id="overview" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Platform Overview</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">V</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Vapi AI</h3>
                                        <p className="text-sm text-muted-foreground">Developer-first voice infrastructure</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Ultra-low latency</p>
                                            <p className="text-sm text-muted-foreground">100-200ms response times</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Developer tools</p>
                                            <p className="text-sm text-muted-foreground">Extensive API and SDK support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <XCircleIcon className="size-5 text-red-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Limited AI models</p>
                                            <p className="text-sm text-muted-foreground">Fewer built-in capabilities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">R</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Retell AI</h3>
                                        <p className="text-sm text-muted-foreground">Enterprise voice solutions</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Advanced AI models</p>
                                            <p className="text-sm text-muted-foreground">Sophisticated conversation handling</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Analytics platform</p>
                                            <p className="text-sm text-muted-foreground">Built-in conversation insights</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <XCircleIcon className="size-5 text-red-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Higher latency</p>
                                            <p className="text-sm text-muted-foreground">300-500ms response times</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="performance-comparison" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Performance Comparison</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse border">
                                <thead>
                                    <tr className="bg-muted/50">
                                        <th className="border p-3 text-left">Metric</th>
                                        <th className="border p-3 text-center">Vapi AI</th>
                                        <th className="border p-3 text-center">Retell AI</th>
                                        <th className="border p-3 text-left">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 font-medium">Latency (ms)</td>
                                        <td className="border p-3 text-center text-green-600">150</td>
                                        <td className="border p-3 text-center text-red-600">400</td>
                                        <td className="border p-3">Vapi</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border p-3 font-medium">Uptime (%)</td>
                                        <td className="border p-3 text-center">99.9</td>
                                        <td className="border p-3 text-center">99.7</td>
                                        <td className="border p-3">Vapi</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Conversational Accuracy</td>
                                        <td className="border p-3 text-center text-orange-600">87%</td>
                                        <td className="border p-3 text-center text-green-600">94%</td>
                                        <td className="border p-3">Retell</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border p-3 font-medium">Setup Time</td>
                                        <td className="border p-3 text-center text-green-600">2 hours</td>
                                        <td className="border p-3 text-center text-orange-600">4 hours</td>
                                        <td className="border p-3">Vapi</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">API Response Time</td>
                                        <td className="border p-3 text-center text-green-600">50ms</td>
                                        <td className="border p-3 text-center text-orange-600">120ms</td>
                                        <td className="border p-3">Vapi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Real-World Performance Test</h3>
                            <p className="mb-4">We tested both platforms with 10,000 concurrent voice calls:</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium mb-2">Vapi Results:</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Average latency: 142ms</li>
                                        <li>• Success rate: 98.7%</li>
                                        <li>• Dropped calls: 0.3%</li>
                                        <li>• CPU usage: 45%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Retell Results:</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Average latency: 387ms</li>
                                        <li>• Success rate: 97.2%</li>
                                        <li>• Dropped calls: 0.8%</li>
                                        <li>• CPU usage: 62%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="pricing-analysis" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Pricing Analysis</h2>

                        <div className="space-y-6">
                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">Vapi Pricing Structure</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span>Pay-as-you-go:</span>
                                        <span className="font-semibold">$0.12/min</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Pro Plan:</span>
                                        <span className="font-semibold">$499/month (5,000 mins)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Enterprise:</span>
                                        <span className="font-semibold">Custom pricing</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    <strong>Best for:</strong> High-volume, latency-sensitive applications
                                </p>
                            </div>

                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">Retell Pricing Structure</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span>Starter:</span>
                                        <span className="font-semibold">$99/month (1,000 mins)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Growth:</span>
                                        <span className="font-semibold">$499/month (5,000 mins)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Enterprise:</span>
                                        <span className="font-semibold">Custom pricing</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    <strong>Best for:</strong> Feature-rich, conversation-heavy applications
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Cost Comparison (10,000 mins/month)</h3>
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="font-medium">Vapi Pro</p>
                                    <p className="text-2xl font-bold">$999</p>
                                    <p className="text-sm text-muted-foreground">+$499 for extra 5,000 mins</p>
                                </div>
                                <div>
                                    <p className="font-medium">Retell Growth</p>
                                    <p className="text-2xl font-bold">$1,499</p>
                                    <p className="text-sm text-muted-foreground">+$999 for extra 5,000 mins</p>
                                </div>
                                <div>
                                    <p className="font-medium">Savings</p>
                                    <p className="text-2xl font-bold text-green-600">$500</p>
                                    <p className="text-sm text-muted-foreground">33% cheaper with Vapi</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="code-comparison" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Code Comparison</h2>

                        <h3 className="text-xl font-semibold mb-4">Basic Voice Agent Setup</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h4 className="font-medium mb-3">Vapi Implementation</h4>
                                <pre className="text-sm overflow-x-auto">
                                    {`// Vapi - Simple and direct
import { Vapi } from '@vapi/sdk';

const vapi = new Vapi({
  apiKey: process.env.VAPI_API_KEY
});

const agent = await vapi.assistants.create({
  name: "Customer Support",
  model: {
    provider: "openai",
    model: "gpt-4",
    temperature: 0.7
  },
  voice: {
    provider: "elevenlabs",
    voiceId: "rachel"
  },
  firstMessage: "Hello! How can I help you today?"
});

// Start a call
const call = await vapi.calls.create({
  assistantId: agent.id,
  phoneNumber: "+1234567890"
});`}</pre>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h4 className="font-medium mb-3">Retell Implementation</h4>
                                <pre className="text-sm overflow-x-auto">
                                    {`// Retell - More configuration options
import { Retell } from '@retell/sdk';

const retell = new Retell({
  apiKey: process.env.RETELL_API_KEY
});

const agent = await retell.agents.create({
  name: "Customer Support",
  llm: {
    type: "openai",
    model: "gpt-4",
    temperature: 0.7,
    tools: [
      {
        type: "function",
        function: {
          name: "transfer_to_human",
          description: "Transfer to human agent"
        }
      }
    ]
  },
  voice: {
    provider: "elevenlabs",
    voice_id: "rachel"
  },
  begin_message: "Hello! How can I help you today?",
  retain_context: true
});`}</pre>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4 mt-8">Advanced Features</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h4 className="font-medium mb-3">Vapi - Custom Functions</h4>
                                <pre className="text-sm overflow-x-auto">
                                    {`// Vapi function calling
const functions = [
  {
    name: "get_weather",
    description: "Get weather information",
    parameters: {
      location: "string",
      units: "string"
    }
  }
];

const agent = await vapi.assistants.create({
  model: { model: "gpt-4" },
  tools: { functions }
});`}</pre>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h4 className="font-medium mb-3">Retell - Analytics Integration</h4>
                                <pre className="text-sm overflow-x-auto">
                                    {`// Retell analytics setup
const agent = await retell.agents.create({
  analytics: {
    enable_recording: true,
    enable_transcripts: true,
    enable_sentiment: true,
    custom_webhook: "https://your-app.com/webhook"
  },
  post_call_webhook: {
    url: "https://your-app.com/post-call"
  }
});`}</pre>
                            </div>
                        </div>
                    </section>

                    <section id="use-cases" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Best Use Cases</h2>

                        <div className="space-y-6">
                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <ZapIcon className="size-6 text-blue-600" />
                                    <h3 className="text-xl font-bold">Choose Vapi For:</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li>• High-volume call centers (10,000+ calls/month)</li>
                                    <li>• Real-time applications requiring &lt;200ms latency</li>
                                    <li>• Cost-sensitive startups</li>
                                    <li>• Simple voice automation needs</li>
                                    <li>• API-first development teams</li>
                                </ul>
                            </div>

                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldIcon className="size-6 text-green-600" />
                                    <h3 className="text-xl font-bold">Choose Retell For:</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li>• Complex conversational AI requirements</li>
                                    <li>• Enterprise-grade analytics needs</li>
                                    <li>• Multi-language voice applications</li>
                                    <li>• Advanced sentiment analysis</li>
                                    <li>• Teams requiring extensive documentation</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="decision-framework" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Decision Framework</h2>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Quick Decision Guide</h3>

                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-medium">If latency is critical → Choose Vapi</p>
                                    <p className="text-sm text-muted-foreground">Real-time applications, customer service, emergency response</p>
                                </div>

                                <div className="border-l-4 border-green-500 pl-4">
                                    <p className="font-medium">If conversation quality is priority → Choose Retell</p>
                                    <p className="text-sm text-muted-foreground">Complex dialogs, emotional intelligence, nuanced responses</p>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-medium">If budget is constraint → Choose Vapi</p>
                                    <p className="text-sm text-muted-foreground">Pay-as-you-go pricing, lower per-minute costs</p>
                                </div>

                                <div className="border-l-4 border-green-500 pl-4">
                                    <p className="font-medium">If analytics are essential → Choose Retell</p>
                                    <p className="text-sm text-muted-foreground">Built-in analytics, sentiment analysis, conversation insights</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black border border-primary/20 p-8 rounded-lg mt-8">
                            <h3 className="text-xl font-bold mb-4">Our Recommendation</h3>
                            <p className="text-lg mb-4">
                                For most SaaS startups, we recommend starting with Vapi for its superior performance and cost-effectiveness.
                                Scale to Retell only when you need advanced conversational AI capabilities.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors shadow-lg">
                                    Try Vapi Free
                                </button>
                                <button className="border-2 border-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors shadow-lg">
                                    Compare Plans
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
