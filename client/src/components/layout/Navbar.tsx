
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ThemeSwitcher } from "@/components/widgets/ThemeSwitcher";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer mt-8">
              <Link onClick={()=>scrollToSection('hero')}>
                <img
                  src="/images/mlhealth360-logo.svg"
                  alt="mlHealth360 Logo"
                  className="h-32 w-32"
                />

              </Link>
            </div>

            {/* Desktop main navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link onClick={()=>scrollToSection('features')}>
                <span className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  PRODUCTS
                </span>
              </Link>
              <Link onClick={()=>scrollToSection('product-showcase')}>
                <span className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  SERVICES
                </span>
              </Link>
              <Link onClick={()=>scrollToSection('case-studies')}>
                <span className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  OUR IMPACT
                </span>
              </Link>
              <Link onClick={()=>scrollToSection('demo-video')}>
                <span className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  CAREERS
                </span>
              </Link>
              <Link onClick={()=>scrollToSection('trust-badges')}>
                <span className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  RESOURCES
                </span>
              </Link>
            </div>
          </div>

          {/* Right side - Search, Theme toggle, Contact */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 h-9 w-[200px] rounded-md bg-gray-100 dark:bg-gray-800"
              />
            </div>

            {/* Theme switcher */}
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* Language toggle - temporarily removed due to missing component */}

            {/* Contact button */}
            <Link onClick={()=>scrollToSection("get-in-touch")}>
              <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 cursor-pointer">
                GET IN TOUCH
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
