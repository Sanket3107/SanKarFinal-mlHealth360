import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import one from '../../../public/images/1.jpeg'
import two from '../../../public/images/2.jpeg'
import three from '../../../public/images/3.jpeg'
import four from '../../../public/images/4.jpeg'
export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("scaida");
  const products = [
    {
      title: "Scaida",
      description:
        "An AI-powered diagnostic assistant for radiologists, prioritizing critical cases and automating reporting while maintaining clinical autonomy.",
      image: four// Replace with actual image URL
    },
    {
      title: "Scaida Flow",
      description:
        "A cloud-based platform for radiologists to transition workflows to the cloud, focusing on case management and report generation without AI integration.",
      image: one // Replace with actual image URL
    },
    {
      title: "Scaida DetectCT",
      description:
        "An AI-driven module integrating with radiology workflows to detect abnormalities in multiple anatomical regions with high precision.",
      image: two // Replace with actual image URL
    },
    {
      title: "Scaida BrainCT",
      description:
        "A specialized AI module for neuroradiologists, providing precise analysis of brain CT scans and integrating seamlessly with HIS and PACS.",
      image: three // Replace with actual image URL
    },
  ];

  const ProductCard = ({ title, description, image }) => {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    );
  };
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Advanced AI Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover how our AI-powered products can transform healthcare
            delivery and improve patient outcomes.
          </p>
        </div>

        <div className="min-h-screen bg-gray-900 text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Our Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-white dark:bg-transparent"
            onClick={() => (window.location.href = "/products")}
          >
            View All Products
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
