import { 
  FileText, 
  Code, 
  BookOpen, 
  ChartPieIcon, 
  Shield, 
  ClipboardCheck, 
  Activity, 
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "Generate comprehensive SOAP notes in seconds based on patient encounters, freeing up more time for patient care."
  },
  {
    icon: Code,
    title: "Medical Coding",
    description: "Get accurate ICD-10 and CPT code suggestions with supporting documentation to optimize billing and reduce claim denials."
  },
  {
    icon: BookOpen,
    title: "Clinical Research",
    description: "Access relevant medical literature and evidence-based guidelines tailored to your patient's specific condition."
  },
  {
    icon: ChartPieIcon,
    title: "Practice Analytics",
    description: "Track key performance metrics and identify opportunities to improve clinical workflows and financial outcomes."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with end-to-end encryption and strict access controls to protect patient information."
  },
  {
    icon: ClipboardCheck,
    title: "Quality Measures",
    description: "Monitor and improve quality measures for value-based care programs and regulatory compliance."
  },
  {
    icon: Activity,
    title: "Patient Monitoring",
    description: "Track patient progress over time with longitudinal analysis and predictive insights for better care management."
  },
  {
    icon: Stethoscope,
    title: "Specialty-Specific",
    description: "Customized workflows for different medical specialties with terminology and templates tailored to your practice area."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Powerful AI Tools for Radiologists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scaida is an innovative AI-Powered diagnostic assistant designed specifically for radiologists, helping prioritize cases, generate standardized reports, and reduce the burden of diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 50)}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Built for Radiologists</h3>
              <p className="text-muted-foreground mb-6">
                Scaida was developed to address the challenges faced in radiology.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Prioritizes cases efficiently</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Generates standardized reports quickly</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Reduces diagnostic workload</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=2187" 
                alt="Radiologist using Scaida" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-lg font-semibold mb-2">Trusted by Leading Radiologists</h4>
                  <p className="text-white/80 text-sm">
                    "Scaida has significantly improved our diagnostic workflow."
                  </p>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    — Dr. John Doe, Radiologist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}