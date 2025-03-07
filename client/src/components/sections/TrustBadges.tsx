// import { Shield, Award, CheckCircle, Server } from "lucide-react";

// export default function TrustBadges() {
//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">Trusted & Secure Healthcare AI</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             MLHealth360 adheres to the highest standards of security, privacy, and compliance in healthcare technology.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
//           <div className="bg-card rounded-xl p-6 text-center border border-border">
//             <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//               <Shield className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">CDSCO Certified</h3>
//             <p className="text-muted-foreground">
//               Our platform is fully CDSCO Certified with enterprise-grade security measures to protect patient information.
//             </p>
//           </div>

//           <div className="bg-card rounded-xl p-6 text-center border border-border">
//             <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//               <Award className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">SOC 2 Certified</h3>
//             <p className="text-muted-foreground">
//               Verified security and operational practices through SOC 2 Type II certification.
//             </p>
//           </div>

//           <div className="bg-card rounded-xl p-6 text-center border border-border">
//             <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//               <Server className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">256-bit Encryption</h3>
//             <p className="text-muted-foreground">
//               All data is protected with military-grade encryption both in transit and at rest.
//             </p>
//           </div>

//           <div className="bg-card rounded-xl p-6 text-center border border-border">
//             <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//               <CheckCircle className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">BAA Available</h3>
//             <p className="text-muted-foreground">
//               Business Associate Agreements provided for all healthcare organizations.
//             </p>
//           </div>
//         </div>

//         <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
//           <div className="filter saturate-0 opacity-70 hover:saturate-100 hover:opacity-100 transition-all duration-300 hover:drop-shadow-md">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" alt="AMD" className="h-12" />
//           </div>
//           <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png" alt="IBM Cloud" className="h-12" />
//           </div>
//           <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-12" />
//           </div>
//           <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/42_Logo.svg" alt="42" className="h-12" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Shield, Award, CheckCircle, Server, X, Check } from "lucide-react";

export default function TrustBadges() {
  const [showModal, setShowModal] = useState(false);
  const [openedBadges, setOpenedBadges] = useState(new Set<number>());

  // Function to open the modal and mark the badge as opened
  const handleOpenModal = (index: number) => {
    setShowModal(true);
    setOpenedBadges((prev) => new Set(prev).add(index)); // Mark badge as opened
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Trusted & Secure Healthcare AI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MLHealth360 adheres to the highest standards of security, privacy, and compliance in healthcare technology.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          {[
            { icon: Shield, title: "CDSCO Certified" },
            { icon: Award, title: "SOC 2 Certified" },
            { icon: Server, title: "256-bit Encryption" },
            { icon: CheckCircle, title: "BAA Available" },
          ].map((badge, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 text-center border border-border cursor-pointer hover:shadow-lg transition"
              onClick={() => handleOpenModal(index)}
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                <badge.icon className="h-8 w-8 text-primary" />
                {/* Show checkmark if opened */}
                {openedBadges.has(index) && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
              <p className="text-muted-foreground">Click to view certification</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
            <div className="relative bg-white p-4 rounded-xl shadow-lg max-w-md">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Certification Image */}
              <img
                src="/images/uploadpermission-1.png"
                alt="Certification"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
