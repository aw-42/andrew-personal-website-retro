import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/andrewwilliamscanada/", icon: ExternalLink },
    { name: "X", href: "https://x.com/Dunmore_Park", icon: ExternalLink },
    { name: "Blog", href: "https://andrewdunmore.substack.com", icon: ExternalLink },
    { name: "Email", href: "mailto:website+andrewtwilliams2@gmail.com", icon: ExternalLink },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 rounded-lg border border-white/20"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/80 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 border-l-4 border-white/20 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: 'linear-gradient(to bottom, #305F75, #2E759B)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <div className="text-center mb-8">
            <h2 className="font-retro text-2xl text-white mb-2">
              MENU
            </h2>
            <div className="w-16 h-1 bg-white/30 mx-auto"></div>
          </div>

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center space-x-3 font-pixel-bold text-lg text-white hover:text-white hover:bg-white/10 transition-all duration-200 w-full justify-center py-3 px-6 rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
              <link.icon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default HamburgerNav;