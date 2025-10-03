import { useState } from "react";
import { ExternalLink } from "lucide-react";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/andrewwilliamscanada/", icon: ExternalLink },
    { name: "X", href: "https://x.com/andrew_reset", icon: ExternalLink },
    { name: "Blog", href: "https://andrewdunmore.substack.com", icon: ExternalLink },
    { name: "Email", href: "mailto:website+andrewtwilliams2@gmail.com", icon: ExternalLink },
  ];

  return (
    <>
      {/* Links Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 font-roboto text-lg text-black hover:underline transition-all duration-200"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? "Close" : "Links"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/90 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full space-y-6 p-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-roboto text-2xl text-foreground hover:underline transition-all duration-200"
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