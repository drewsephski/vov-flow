import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { BLOGS } from "@/constants/blogs";
import { CheckCircle2Icon, AlertTriangleIcon, TrendingUpIcon } from "lucide-react";
import type { Blog } from "@/constants/blogs";

export default function VoiceAIHealthcareBlog() {
    const blog = BLOGS.find(b => b.title.includes("Voice AI in Healthcare"));

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
                        <div>
                            <p className="font-semibold">{blog.author}</p>
                            <p className="text-sm text-muted-foreground">{blog.authorRole} at {blog.authorCompany}</p>
                        </div>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav className="bg-muted/70 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2">
                        <li><a href="#market-opportunity" className="text-primary hover:underline">Market Opportunity</a></li>
                        <li><a href="#key-applications" className="text-primary hover:underline">Key Applications</a></li>
                        <li><a href="#technical-implementation" className="text-primary hover:underline">Technical Implementation</a></li>
                        <li><a href="#code-examples" className="text-primary hover:underline">Code Examples</a></li>
                        <li><a href="#roi-analysis" className="text-primary hover:underline">ROI Analysis</a></li>
                        <li><a href="#getting-started" className="text-primary hover:underline">Getting Started</a></li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section id="market-opportunity" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Market Opportunity</h2>
                        <p className="text-lg mb-6">
                            The healthcare voice AI market is projected to reach <strong>$10.3 billion by 2027</strong>, growing at a CAGR of 27.4%. This explosive growth is driven by:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 my-8">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <TrendingUpIcon className="size-8 text-green-600 mb-4" />
                                <h3 className="font-semibold mb-2">Cost Reduction</h3>
                                <p className="text-sm text-muted-foreground">Healthcare organizations save 40-60% on administrative costs</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <CheckCircle2Icon className="size-8 text-blue-600 mb-4" />
                                <h3 className="font-semibold mb-2">Patient Satisfaction</h3>
                                <p className="text-sm text-muted-foreground">73% of patients prefer voice interactions for routine queries</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <AlertTriangleIcon className="size-8 text-orange-600 mb-4" />
                                <h3 className="font-semibold mb-2">Staff Shortage</h3>
                                <p className="text-sm text-muted-foreground">Voice AI addresses the 3.2 million healthcare worker shortage</p>
                            </div>
                        </div>
                    </section>

                    <section id="key-applications" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Key Applications</h2>

                        <div className="space-y-8">
                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">1. Automated Patient Triage</h3>
                                <p className="mb-4">Voice agents handle initial patient assessment, reducing wait times and improving care prioritization.</p>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <p className="text-sm font-mono mb-2">Example Interaction:</p>
                                    <p className="text-sm italic">"I have a fever of 102°F and sore throat" → "Based on your symptoms, I recommend urgent care within 4 hours. Would you like me to find the nearest available clinic?"</p>
                                </div>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">2. Real-time Documentation</h3>
                                <p className="mb-4">Voice-to-text conversion during consultations saves physicians 2-3 hours daily on documentation.</p>
                                <div className="bg-muted/50 p-4 rounded border">
                                    <p className="text-sm font-mono mb-2">Accuracy Metrics:</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• Medical terminology accuracy: 94.2%</li>
                                        <li>• Real-time processing: &lt;200ms latency</li>
                                        <li>• HIPAA compliance: 100% encrypted</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-muted/70 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">3. Medication Management</h3>
                                <p className="mb-4">Voice reminders and interaction improve medication adherence by 35% compared to traditional methods.</p>
                            </div>
                        </div>
                    </section>

                    <section id="technical-implementation" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>

                        <h3 className="text-xl font-semibold mb-4">Architecture Overview</h3>
                        <div className="bg-muted/70 p-6 rounded-lg mb-6">
                            <pre className="text-sm overflow-x-auto">
                                {`┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Voice Frontend │    │   Processing     │    │   Healthcare    │
│   (Web/Mobile)   │◄──►│   Layer          │◄──►│   Systems        │
│                 │    │                  │    │                 │
│ • Speech SDK     │    │ • NLP Engine     │    │ • EHR Integration│
│ • Audio Stream   │    │ • Medical NER    │    │ • Database      │
│ • UI Components  │    │ • Intent Class   │    │ • APIs          │
└─────────────────┘    └──────────────────┘    └─────────────────┘`}</pre>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Technology Stack Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border">
                                <thead>
                                    <tr className="bg-muted/50">
                                        <th className="border p-3 text-left">Component</th>
                                        <th className="border p-3 text-left">Vapi AI</th>
                                        <th className="border p-3 text-left">Retell AI</th>
                                        <th className="border p-3 text-left">Custom Solution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3">Setup Time</td>
                                        <td className="border p-3">2 hours</td>
                                        <td className="border p-3">4 hours</td>
                                        <td className="border p-3">2-3 weeks</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3">Medical Accuracy</td>
                                        <td className="border p-3">87%</td>
                                        <td className="border p-3">91%</td>
                                        <td className="border p-3">95%+</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3">HIPAA Compliance</td>
                                        <td className="border p-3">Built-in</td>
                                        <td className="border p-3">Built-in</td>
                                        <td className="border p-3">Manual setup</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3">Cost/1000 mins</td>
                                        <td className="border p-3">$12</td>
                                        <td className="border p-3">$15</td>
                                        <td className="border p-3">$8-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="code-examples" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Code Examples</h2>

                        <h3 className="text-xl font-semibold mb-4">Voice Agent Implementation</h3>
                        <div className="bg-muted/70 p-6 rounded-lg mb-6">
                            <pre className="text-sm overflow-x-auto">
                                {`// Voice agent for medical triage
import { VoiceAgent } from '@vapi-ai/server';

const medicalAgent = new VoiceAgent({
  name: 'Medical Triage Assistant',
  model: 'gpt-4-medical',
  systemPrompt: \`You are a medical triage assistant. 
  Assess symptoms and recommend care levels.
  Always clarify: "This is not medical advice."\`,
  
  functions: [
    {
      name: 'assessSymptoms',
      description: 'Assess patient symptoms and urgency',
      parameters: {
        symptoms: 'string',
        duration: 'string',
        severity: 'number (1-10)'
      }
    },
    {
      name: 'findClinic',
      description: 'Find nearest available clinic',
      parameters: {
        location: 'string',
        specialty: 'string'
      }
    }
  ]
});

// Handle patient call
agent.onCall(async (call) => {
  const transcript = await call.transcribe();
  const symptoms = await extractSymptoms(transcript);
  const assessment = await medicalAgent.assessSymptoms(symptoms);
  
  if (assessment.urgency === 'high') {
    const clinic = await medicalAgent.findClinic({
      location: call.location,
      specialty: 'emergency'
    });
    await call.speak(\`I recommend immediate care. \${clinic.name} is available at \${clinic.address}\`);
  }
});`}</pre>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">EHR Integration</h3>
                        <div className="bg-muted/70 p-6 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                                {`// Integration with Epic EHR system
import { EpicAPI } from '@epic/sdk';

class VoiceEHRIntegration {
  constructor(apiKey) {
    this.epic = new EpicAPI(apiKey);
  }
  
  async createAppointment(patientId, details) {
    try {
      const appointment = await this.epic.appointments.create({
        patient: patientId,
        department: details.department,
        startTime: details.startTime,
        type: 'VOICE_TRIAGE'
      });
      
      return {
        success: true,
        appointmentId: appointment.id,
        confirmation: \`Appointment scheduled for \${details.startTime}\`
      };
    } catch (error) {
      return {
        success: false,
        error: 'Unable to schedule appointment'
      };
    }
  }
  
  async updateMedicalRecord(patientId, voiceNote) {
    const note = await this.epic.notes.create({
      patient: patientId,
      type: 'VOICE_INTERACTION',
      content: voiceNote,
      timestamp: new Date().toISOString()
    });
    
    return note;
  }
}`}</pre>
                        </div>
                    </section>

                    <section id="roi-analysis" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">ROI Analysis</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-green-950/50 border border-green-800 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-green-400 mb-4">Cost Savings</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• Administrative staff: 40% reduction</li>
                                    <li>• Documentation time: 2.3 hours/day saved</li>
                                    <li>• No-show rate: 25% reduction</li>
                                    <li>• Call handling: 60% automated</li>
                                </ul>
                                <p className="mt-4 font-bold text-green-400">Total annual savings: $284,000</p>
                            </div>

                            <div className="bg-blue-950/50 border border-blue-800 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-blue-400 mb-4">Revenue Increase</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• Patient capacity: +35%</li>
                                    <li>• Patient satisfaction: +28 NPS points</li>
                                    <li>• Referral rate: +15%</li>
                                    <li>• New patient acquisition: +22%</li>
                                </ul>
                                <p className="mt-4 font-bold text-blue-400">Additional revenue: $156,000</p>
                            </div>
                        </div>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Implementation Timeline</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span>Phase 1: Voice Agent Setup</span>
                                    <span className="text-sm text-muted-foreground">2 weeks</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Phase 2: EHR Integration</span>
                                    <span className="text-sm text-muted-foreground">3 weeks</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Phase 3: Staff Training</span>
                                    <span className="text-sm text-muted-foreground">2 weeks</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Phase 4: Full Deployment</span>
                                    <span className="text-sm text-muted-foreground">1 week</span>
                                </div>
                            </div>
                            <p className="mt-4 text-center font-semibold">Total: 8 weeks to full ROI</p>
                        </div>
                    </section>

                    <section id="getting-started" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

                        <div className="bg-muted/70 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Quick Start Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Choose Your Voice Platform</p>
                                        <p className="text-sm text-muted-foreground">Vapi for rapid deployment, Retell for medical accuracy, or custom for full control</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Ensure HIPAA Compliance</p>
                                        <p className="text-sm text-muted-foreground">Implement encryption, audit logs, and Business Associate Agreements</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Integrate with Existing Systems</p>
                                        <p className="text-sm text-muted-foreground">Connect to EHR, scheduling, and billing systems</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2Icon className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Train Your Team</p>
                                        <p className="text-sm text-muted-foreground">Staff training and patient education materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <div className="bg-black border border-primary/20 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h2>
                            <p className="text-lg mb-6">
                                Voice AI isn't just the future—it's the present. Organizations implementing voice technology today are seeing immediate ROI and improved patient outcomes.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors shadow-lg">
                                    Start Your Voice AI Journey
                                </button>
                                <button className="border-2 border-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors shadow-lg">
                                    Schedule a Demo
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
