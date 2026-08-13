"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "WORK", href: "#work", id: "work" },
    { label: "EDUCATION", href: "#education", id: "education" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["intro", "about", "expertise", "work", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 bg-background/90 backdrop-blur-md border-b border-border ${scrolled ? "py-4 shadow-sm" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Title */}
          <a
            href="#intro"
            className="font-mono font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-accent inline-block rounded-full"></span>
            <span>DAFFA ABDUL FATAH</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`transition-colors py-1 relative ${
                      isActive ? "text-foreground font-bold" : "text-secondary hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-6 transition-all duration-200">
          <ul className="flex flex-col space-y-4 font-mono text-sm tracking-wider">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 ${
                    activeSection === item.id
                      ? "text-accent font-bold pl-2 border-l-2 border-accent"
                      : "text-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
