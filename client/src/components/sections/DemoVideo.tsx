
import { Play } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function DemoVideo() {
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Remove any existing Calendly scripts first
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      setIsCalendlyLoading(false);
    };
    script.onerror = (error) => {
      console.error('Calendly script failed to load:', error);
      setIsCalendlyLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load scheduling system. Please try again later.",
      });
    };
    document.body.appendChild(script);

    return () => {
      const cleanupScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (cleanupScript) {
        document.body.removeChild(cleanupScript);
      }
    };
  }, [toast]);

  const openCalendly = () => {
    try {
      if (window.Calendly) {
        console.log('Opening Calendly widget');
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/mlhealth360/demo'
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Scheduling system is not ready. Please try again in a moment.",
        });
      }
    } catch (error) {
      console.error('Error opening Calendly widget:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open scheduling system. Please try again later.",
      });
    }
  };

  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Experience Scaida in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered platform streamlines medical documentation, improves patient care, and increases practice efficiency.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          data-aos="zoom-in"
        >
          <img
            src="\images\scaida.jpg"
            alt="Doctor using MLHealth360"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full h-20 w-20 bg-primary/90 hover:bg-primary hover:scale-110 transition-transform duration-300"
                >
                  <Play className="h-10 w-10 ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://archive.org/download/healthcare-explainer-toolkit-free/Healthcare%20Explainer%20Toolkit_free.mp4"
                    title="MLHealth360 Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold">Ready to Transform Your Healthcare Practice?</h3>
            <p className="text-muted-foreground mb-8">
              MLHealth360 combines state-of-the-art AI with medical expertise to create tools that save time, reduce administrative burden, and improve patient care. Our platform seamlessly integrates with your existing workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Clinical Documentation</h4>
                <p className="text-sm">Automated note generation with customizable templates for your specialty</p>
              </div>
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Medical Coding</h4>
                <p className="text-sm">AI-powered CPT and ICD-10 code suggestions for accurate billing</p>
              </div>
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Patient Insights</h4>
                <p className="text-sm">Clinical decision support with relevant medical literature</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-transform duration-300 px-8"
              onClick={openCalendly}
              disabled={isCalendlyLoading}
            >
              {isCalendlyLoading ? 'Loading Calendar...' : 'Schedule a Personalized Demo'}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Join hundreds of healthcare providers who are saving 70+ minutes daily with MLHealth360
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
