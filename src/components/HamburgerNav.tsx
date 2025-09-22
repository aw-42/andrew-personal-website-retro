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
        className="fixed top-4 right-4 z-50 bg-pixel-green text-background hover:bg-pixel-orange transition-colors duration-100 border-2 border-background font-pixel-bold"
        style={{ width: '48px', height: '48px' }}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/90 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 border-l-4 border-pixel-green z-40 transform transition-transform duration-150 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-background`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 p-8">
          <div className="text-center mb-8">
            <h2 className="font-pixel-bold text-3xl text-pixel-green mb-4">
              MENU
            </h2>
            <div className="w-24 h-1 bg-pixel-orange mx-auto"></div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-pixel text-xl text-foreground hover:text-pixel-orange hover:bg-pixel-green/10 transition-colors duration-100 w-full text-center py-4 px-6 border-2 border-transparent hover:border-pixel-orange"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default HamburgerNav;