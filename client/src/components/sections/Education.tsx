
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Users } from "lucide-react";

export default function Education() {
  return (
    <section id="resources" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Resources & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of resources designed to help healthcare providers make the most of AI technology.
          </p>
        </div>

        <Tabs defaultValue="articles" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Articles</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Videos</span>
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Webinars</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "The Future of AI in Clinical Documentation",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                  date: "June 15, 2023",
                  description: "Explore how AI is transforming the way medical notes are created and managed."
                },
                {
                  title: "Improving Patient Outcomes with AI Decision Support",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
                  date: "July 22, 2023",
                  description: "Learn how AI-powered clinical decision support systems help improve quality of care."
                },
                {
                  title: "Coding Optimization: Maximizing Reimbursement",
                  image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
                  date: "August 8, 2023",
                  description: "Strategies for improving medical coding accuracy and optimizing revenue cycle."
                },
                {
                  title: "Balancing AI and Human Touch in Healthcare",
                  image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
                  date: "September 3, 2023",
                  description: "How to effectively integrate AI tools while maintaining the human connection in care."
                },
              ].map((article, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <Button variant="link" className="px-0 text-primary">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Getting Started with MLHealth360",
                  icon: BookOpen,
                  description: "A comprehensive guide for new users to navigate and utilize the platform effectively."
                },
                {
                  title: "EHR Integration Guide",
                  icon: FileText,
                  description: "Step-by-step instructions for integrating MLHealth360 with major EHR systems."
                },
                {
                  title: "Specialty Configuration Guide",
                  icon: FileText,
                  description: "Customize MLHealth360 for specific medical specialties and practice workflows."
                },
              ].map((guide, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <guide.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Clinical Documentation Demo",
                  thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
                  duration: "8:45"
                },
                {
                  title: "Medical Coding Assistant Tutorial",
                  thumbnail: "https://images.unsplash.com/photo-1563213126-a4273aed2016",
                  duration: "12:20"
                },
              ].map((video, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Button size="icon" className="rounded-full h-14 w-14 bg-primary/90 hover:bg-primary">
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1601055283742-8b27e81b5553" 
                    alt="Upcoming Webinar" 
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Upcoming Webinar: AI Ethics in Healthcare</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our panel of experts as they discuss the ethical considerations of implementing AI in healthcare settings. Learn about best practices for responsible AI use and maintaining patient trust.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                      <span>June 28, 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-primary" />
                      <span>2:00 PM EST</span>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}

// Missing icon imports
const Play = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
