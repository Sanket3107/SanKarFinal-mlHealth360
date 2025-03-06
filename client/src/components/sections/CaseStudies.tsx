
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    avatar: "SJ",
    role: "Family Medicine Physician",
    practice: "Riverside Family Health",
    content: "MLHealth360 has completely transformed our practice. I save over 90 minutes per day on documentation, allowing me to see more patients and focus on delivering better care instead of staring at a computer screen.",
    metrics: [
      { icon: Clock, label: "Time Saved", value: "90+ min/day" },
      { icon: TrendingUp, label: "Revenue Increase", value: "22%" },
      { icon: Users, label: "Patient Satisfaction", value: "+37%" }
    ]
  },
  {
    name: "Dr. Michael Chen",
    avatar: "MC",
    role: "Cardiologist",
    practice: "HeartCare Specialists",
    content: "The AI-powered clinical documentation assistant generates detailed and accurate SOAP notes that would normally take me 15-20 minutes to create. Now it's done in seconds. The coding recommendations also ensure we're properly capturing all billable services.",
    metrics: [
      { icon: Clock, label: "Time Saved", value: "75+ min/day" },
      { icon: TrendingUp, label: "Coding Accuracy", value: "94%" }
    ]
  },
  {
    name: "Dr. Lisa Patel",
    avatar: "LP",
    role: "Pediatrician",
    practice: "Healthy Kids Medical Group",
    content: "As a pediatrician with a busy practice, MLHealth360 has been invaluable. The platform learns my documentation style and preferences, making each note feel personalized rather than AI-generated. It's like having a skilled scribe who knows exactly how I work.",
    metrics: [
      { icon: Clock, label: "Time Saved", value: "60+ min/day" },
      { icon: Users, label: "More Patient Time", value: "+45%" }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Success Stories from Healthcare Providers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how healthcare professionals are transforming their practices with MLHealth360.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.practice}</div>
                    </div>
                  </div>
                  <Badge className="bg-primary text-white hover:bg-primary/90">Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-muted rounded-lg p-3 flex flex-col items-center justify-center text-center">
                      <metric.icon className="h-5 w-5 text-primary mb-1" />
                      <div className="text-lg font-semibold">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-xl p-8 shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Healthcare Providers Save 70+ Minutes Daily</h3>
              <p className="text-muted-foreground mb-6">
                Our comprehensive analysis shows that healthcare providers using MLHealth360 save an average of 70+ minutes per day on administrative tasks, allowing them to see more patients or improve their work-life balance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">75%</div>
                  <div className="text-sm text-center">Reduction in Documentation Time</div>
                </div>
                <div className="flex flex-col items-center bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">94%</div>
                  <div className="text-sm text-center">Coding Accuracy</div>
                </div>
                <div className="flex flex-col items-center bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">22%</div>
                  <div className="text-sm text-center">Average Revenue Increase</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Healthcare Statistics"
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
