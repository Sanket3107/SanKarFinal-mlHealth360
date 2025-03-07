// import { Link } from "wouter";
// import { Separator } from "@/components/ui/separator";

// export default function Footer() {
//   return (
//     <footer className="bg-background border-t py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="font-bold text-lg mb-4">MLHealth360</h3>
//             <p className="text-sm text-foreground/70">
//               Advancing healthcare through AI-powered diagnostics and workflow optimization.
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Solutions</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#radiology">AI Radiology</Link></li>
//               <li><Link href="#pathology">Digital Pathology</Link></li>
//               <li><Link href="#workflow">Workflow Optimization</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#case-studies">Case Studies</Link></li>
//               <li><Link href="#webinars">Webinars</Link></li>
//               <li><Link href="#documentation">Documentation</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/careers">Careers</Link></li>
//               <li><Link href="/contact">Contact</Link></li>
//             </ul>
//           </div>
//         </div>
        
//         <Separator className="my-8" />
        
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
//           <p>&copy; 2024 MLHealth360. All rights reserved.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <Link href="/privacy">Privacy Policy</Link>
//             <Link href="/terms">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"; // Using Font Awesome icons

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MLHealth360</h3>
            <p className="text-sm text-foreground/70">
              Advancing healthcare through AI-powered diagnostics and workflow optimization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#radiology">AI Radiology</Link></li>
              <li><Link href="#pathology">Digital Pathology</Link></li>
              <li><Link href="#workflow">Workflow Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#case-studies">Case Studies</Link></li>
              <li><Link href="#webinars">Webinars</Link></li>
              <li><Link href="#documentation">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
          <p>&copy; 2024 MLHealth360. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>

            {/* Social Media Links with Font Awesome Icons */}
            <a
              href="https://ca.linkedin.com/company/mlhealth-360"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin className="h-5 w-5 inline-block" />
            </a>

            <a
              href="https://twitter.com/mlhealth360"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaXTwitter className="h-5 w-5 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

