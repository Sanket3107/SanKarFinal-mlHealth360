import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  CloudCog,
  FileText,
  Zap,
  Server,
  ChevronRight,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import DemoVideo from "../sections/DemoVideo";

export default function Products() {
  return (
    <div>
      <div id="prod" className="min-h-screen">
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Solutions for Radiologists</h1>
            <p className="text-xl text-muted-foreground mb-10">
              Discover our suite of advanced AI tools designed to streamline diagnostic workflows and enhance decision support.
            </p>
          </div>
        </div>
      </section> */}

        {/* Products Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Product Suite
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Streamline your radiology workflow with our specialized
                AI-powered products designed for modern healthcare providers.
              </p>
            </div>

            <Tabs defaultValue="scaida" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 w-full mb-8">
                <TabsTrigger value="scaida">Scaida</TabsTrigger>
                <TabsTrigger value="flow">Scaida Flow</TabsTrigger>
                <TabsTrigger value="detectct">Scaida DetectCT</TabsTrigger>
                <TabsTrigger value="brainCT">Scaida BrainCT</TabsTrigger>
              </TabsList>

              <TabsContent value="scaida" className="border rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Scaida</h3>
                    <p className="text-muted-foreground">
                      Scaida is an innovative AI-powered diagnostic assistant
                      tailored for radiologists. This comprehensive solution
                      prioritizes critical cases while leaving final decisions
                      to radiologists, streamlining workflow without removing
                      clinical autonomy. The platform features automated
                      reporting using standardized templates, significantly
                      reducing manual documentation time.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Zap className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Prioritization of critical cases for urgent review
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <FileText className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Automated reporting with standardized templates
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <CloudCog className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Cloud-based SaaS platform accessible from anywhere
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Brain className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Self-learning capabilities that evolve with new data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Server className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Data migration services from on-site to cloud
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src="/images/scaida-logo.png"
                        alt="Scaida AI Platform Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-muted/30 p-6">
                      <h4 className="font-semibold mb-3">Perfect For</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Large hospital networks</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Academic medical centers</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>
                            Radiology practices with high case volumes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="flow" className="border rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Scaida Flow</h3>
                    <p className="text-muted-foreground">
                      Scaida Flow is a cloud-based platform developed for
                      radiologists who need to transition their workflow to the
                      cloud. This solution focuses on streamlined case
                      management and automatic report generation, helping
                      radiology departments improve their operational
                      efficiency. While similar to the flagship Scaida product,
                      Scaida Flow comes without the integrated AI module, making
                      it an ideal option for facilities looking to modernize
                      their workflow before implementing AI-assisted
                      diagnostics.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            {/* <CloudCheck className="h-3.5 w-3.5 text-primary" /> */}
                          </div>
                          <span>Streamlined cloud-based case management</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <FileText className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>Automatic report generation capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Server className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Migration services to preserve clinical history
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src="/images/scaida-flow.png"
                        alt="Cloud Workflow Visualization"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-muted/30 p-6">
                      <h4 className="font-semibold mb-3">Perfect For</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Smaller radiology practices</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>
                            Facilities transitioning from on-site to cloud
                          </span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>
                            Healthcare providers looking for workflow
                            optimization
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="detectct" className="border rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Scaida DetectCT</h3>
                    <p className="text-muted-foreground">
                      Scaida DetectCT is an advanced AI-powered solution
                      specifically designed for CT scan analysis. The system
                      excels at detecting abnormalities in CT images, providing
                      radiologists with a powerful second opinion tool that can
                      help reduce missed findings. With high-speed processing
                      capabilities, DetectCT can analyze complex scans in
                      minutes, flagging areas of concern for radiologist review.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Brain className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>Advanced abnormality detection algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Zap className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>High-speed processing of complex CT scans</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <FileText className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Integrated findings annotation and reporting
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src="/images/scaida-detect.png"
                        alt="DetectCT Analysis Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-muted/30 p-6">
                      <h4 className="font-semibold mb-3">Perfect For</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Emergency departments</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Trauma centers</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>High-volume imaging centers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brainCT" className="border rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Scaida BrainCT</h3>
                    <p className="text-muted-foreground">
                      Scaida BrainCT is a specialized neural imaging analysis
                      tool that focuses on brain CT scans. The software is
                      trained to detect subtle abnormalities including early
                      signs of stroke, hemorrhage, and space-occupying lesions.
                      With a focus on time-critical conditions, BrainCT can
                      prioritize urgent cases for immediate review, potentially
                      saving critical time in emergency situations.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Brain className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>Specialized neural imaging analysis</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Zap className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>
                            Time-critical condition detection algorithms
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Server className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>Secure, real-time cloud processing</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src="/images/scaida-brain.png"
                        alt="BrainCT Analysis Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-muted/30 p-6">
                      <h4 className="font-semibold mb-3">Perfect For</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Neurology departments</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Stroke centers</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>
                            Emergency departments with neurological focus
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Workflow Integration
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our products integrate seamlessly into your existing workflow to
                enhance efficiency without disruption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Patient Data Management
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive handling of demographics and communication
                  channels for streamlined patient interactions.
                </p>
              </div>

              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Study Management</h3>
                <p className="text-muted-foreground">
                  Powerful tools for organizing studies by modality, priority,
                  and status with intelligent sorting.
                </p>
              </div>

              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  AI Decision Support
                </h3>
                <p className="text-muted-foreground">
                  Advanced algorithms to prioritize cases and flag potential
                  findings for radiologist review.
                </p>
              </div>

              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Report Management
                </h3>
                <p className="text-muted-foreground">
                  Streamlined report creation utilizing pre-built templates for
                  efficient generation and distribution.
                </p>
              </div>

              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Worklist Management
                </h3>
                <p className="text-muted-foreground">
                  Connects OEM equipment via DIMSE endpoints to efficiently
                  manage pending procedures.
                </p>
              </div>
              <div
                className="bg-card p-6 rounded-xl shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Advanced AI Analysis of DICOM Images
                </h3>
                <p className="text-muted-foreground">
                  Provides a workflow that integrates with the DICOM server to
                  perform an analysis of the received studies. The results from
                  the analysis are shown on the UI.
                </p>
              </div>
            </div>
          </div>
        </section>
        <DemoVideo />
      </div>
    </div>
  );
}
