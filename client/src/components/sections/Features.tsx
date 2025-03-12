import {
  FileText,
  Code,
  BookOpen,
  ChartPieIcon,
  Shield,
  ClipboardCheck,
  Activity,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "Clinical Documentation",
    description:
      "Generate comprehensive SOAP notes in seconds based on patient encounters, freeing up more time for patient care.",
  },
  {
    icon: Code,
    title: "Medical Coding",
    description:
      "Get accurate ICD-10 and CPT code suggestions with supporting documentation to optimize billing and reduce claim denials.",
  },
  {
    icon: BookOpen,
    title: "Clinical Research",
    description:
      "Access relevant medical literature and evidence-based guidelines tailored to your patient's specific condition.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Measures",
    description:
      "Monitor and improve quality measures for value-based care programs and regulatory compliance.",
  },
  {
    icon: Activity,
    title: "Patient Monitoring",
    description:
      "Track patient progress over time with longitudinal analysis and predictive insights for better care management.",
  },
  {
    icon: Stethoscope,
    title: "Specialty-Specific",
    description:
      "Customized workflows for different medical specialties with terminology and templates tailored to your practice area.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Powerful AI Tools for Radiologists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scaida is an innovative AI-Powered diagnostic assistant designed
            specifically for radiologists, helping prioritize cases, generate
            standardized reports, and reduce the burden of diagnostics.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
