
// import { useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { useLanguage } from '@/hooks/useLanguage';
// import '@splidejs/splide/dist/css/splide.min.css';
// import Splide from '@splidejs/splide';
// import { ArrowRight, Clock, Award, ShieldCheck } from 'lucide-react';

// const carouselImages = [
//   'https://images.unsplash.com/photo-1576670159805-2c13a4fe04f2',  // Advanced medical scanning
//   'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c',  // AI analysis visualization
//   'https://images.unsplash.com/photo-1581597090663-9ceaa45a226d'   // Modern healthcare tech
// ];

// export default function Hero() {
//   const { t } = useLanguage();
  
//   useEffect(() => {
//     const splide = new Splide('#image-carousel', {
//       type: 'fade',
//       rewind: true,
//       arrows: false,
//       pagination: false,
//       autoplay: true,
//       interval: 4000,
//       speed: 1500,
//     });
    
//     splide.mount();
    
//     return () => {
//       splide.destroy();
//     };
//   }, []);
  
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
//       {/* Background Image Carousel */}
//       <div id="image-carousel" className="splide absolute inset-0 -z-10">
//         <div className="splide__track h-full">
//           <ul className="splide__list h-full">
//             {carouselImages.map((image, index) => (
//               <li key={index} className="splide__slide h-full">
//                 <div 
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${image})` }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
      
//       <div className="container px-4 mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="lg:pr-8" data-aos="fade-right">
//             <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
//               AI-Powered Medical Assistants
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
//               Transform Your Medical Practice with AI
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 max-w-xl">
//               MLHealth360 automates clinical documentation, generates medical codes, and provides clinical decision support, saving healthcare providers over 70 minutes per day.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Button size="lg" className="bg-primary hover:bg-primary/90">
//                 Get Started <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//               <a href="https://archive.org/download/healthcare-explainer-toolkit-free/Healthcare%20Explainer%20Toolkit_free.mp4" className="border-primary text-primary hover:bg-primary/10 inline-flex items-center justify-center px-4 py-2 border rounded-lg text-lg">
//                 Watch Demo
//               </a>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Clock className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Save 70+ min/day</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Award className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">HIPAA Compliant</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
//                   <ShieldCheck className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="font-medium">SOC 2 Certified</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative" data-aos="fade-left">
//             <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
//               <div className="p-6 border-b">
//                 <h3 className="text-xl font-semibold">Clinical Encounter Assistant</h3>
//               </div>
//               <div className="p-6 max-h-[400px] overflow-y-auto">
//                 <div className="space-y-5">
//                   <div className="bg-muted p-4 rounded-lg">
//                     <p className="font-medium mb-2">Patient:</p>
//                     <p>Alex Johnson, 45-year-old male presenting with headache, fatigue and dizziness for the past week.</p>
//                   </div>
                  
//                   <div className="bg-primary/10 p-4 rounded-lg">
//                     <p className="font-medium mb-2 text-primary">MLHealth360 Assistant:</p>
//                     <p className="mb-3">Based on the symptoms, here's a draft assessment:</p>
//                     <div className="bg-background p-3 rounded-md text-sm">
//                       <p className="font-medium mb-1">Assessment:</p>
//                       <p>1. Migraine without aura (G43.009)</p>
//                       <p>2. Fatigue (R53.83)</p>
//                       <p>3. Vertigo (H81.10)</p>
//                       <p className="mt-3 font-medium">Plan:</p>
//                       <p>- Complete neurological examination</p>
//                       <p>- CBC, CMP</p>
//                       <p>- Consider sumatriptan 50mg for acute migraine</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-500 blur-2xl opacity-50"></div>
//             <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-primary blur-2xl opacity-50"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import { ArrowRight, Clock, Award, ShieldCheck } from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1576670159805-2c13a4fe04f2',  // Advanced medical scanning
  'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c',  // AI analysis visualization
  'https://images.unsplash.com/photo-1581597090663-9ceaa45a226d'   // Modern healthcare tech
];

export default function Hero() {
  const { t } = useLanguage();
  
  useEffect(() => {
    const splide = new Splide('#image-carousel', {
      type: 'fade',
      rewind: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 4000,
      speed: 1500,
    });
    
    splide.mount();
    
    return () => {
      splide.destroy();
    };
  }, []);
  
  return (
    <section id ="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Background Image Carousel */}
      <div id="image-carousel" className="splide absolute inset-0 -z-10">
        <div className="splide__track h-full">
          <ul className="splide__list h-full">
            {carouselImages.map((image, index) => (
              <li key={index} className="splide__slide h-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8" data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              AI-Powered Medical Assistants
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your Medical Practice with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              MLHealth360 automates clinical documentation, generates medical codes, and provides clinical decision support, saving healthcare providers over 70 minutes per day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://archive.org/download/healthcare-explainer-toolkit-free/Healthcare%20Explainer%20Toolkit_free.mp4" className="border-primary text-primary hover:bg-primary/10 inline-flex items-center justify-center px-4 py-2 border rounded-lg text-lg">
                Watch Demo
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Save 70+ min/day</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">CDSCO Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">SOC 2 Certified</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Clinical Assistant */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Scaida Clinical Encounter Assistant</h3>
              </div>
              <div className="p-6 max-h-[400px] overflow-y-auto">
                <div className="space-y-5">
                  
                  {/* Patient Information */}
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-medium mb-2">Patient:</p>
                    <p>Alex Johnson, 45-year-old male presenting with headache, fatigue, and dizziness for the past week.</p>
                  </div>

                  {/* MLHealth360 Assistant Diagnosis */}
                  {/* <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-medium mb-2 text-primary">MLHealth360 Assistant:</p>
                    <p className="mb-3">Based on the symptoms, here's a draft assessment:</p>
                    <div className="bg-background p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Assessment:</p>
                      <p>1. Migraine without aura (G43.009)</p>
                      <p>2. Fatigue (R53.83)</p>
                      <p>3. Vertigo (H81.10)</p>
                      <p className="mt-3 font-medium">Plan:</p>
                      <p>- Complete neurological examination</p>
                      <p>- CBC, CMP</p>
                      <p>- Consider sumatriptan 50mg for acute migraine</p>
                    </div>
                  </div> */}

                  {/* Uploaded Brain Auto Report Image */}
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-medium mb-2">Brain CT Auto-Report:</p>
                    <img 
                      src="/images/BrainAutoReport.png" 
                      alt="Brain Auto Report" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-500 blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-primary blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
