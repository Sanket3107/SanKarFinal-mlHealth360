import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import Features from "@/components/sections/Features";
import TrustBadges from "@/components/sections/TrustBadges";
import DemoVideo from "@/components/sections/DemoVideo";
import Education from "@/components/sections/Education";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ChatWidget from "@/components/widgets/ChatWidget";
import GetInTouch from "@/components/sections/GetInTouch";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero id="hero" />
        <Features id="features" />
        <ProductShowcase id="prod-shhowcase" />
        <CaseStudies id="testimonials" />
        <DemoVideo id="demo-video" />
        <TrustBadges id="trust-badges" />
        <Education id="resources" />
        <GetInTouch id="GetInTouch" />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
}
