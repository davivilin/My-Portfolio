import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: "fas fa-home" },
    { href: "#about", label: "About", icon: "fas fa-user" },
    { href: "#activities", label: "Activities", icon: "fas fa-clipboard-list" },
    { href: "#projects", label: "Projects", icon: "fas fa-folder" },
    { href: "#resume", label: "Resume", icon: "fas fa-file-alt" },
    { href: "#contact", label: "Contact", icon: "fas fa-envelope", primary: true },
  ];

  return (
    // CHANGED: Increased max-w-3xl to max-w-6xl so the bar is much wider
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl system-window">
      {/* Dock Title Bar */}
      <div className="window-title-bar py-1">
        <span className="font-pixel text-[8px] text-foreground">taskbar.exe</span>
        <div className="window-buttons">
          <button className="window-btn text-[6px]">_</button>
          <button className="window-btn text-[6px]">□</button>
          <button className="window-btn text-[6px]">×</button>
        </div>
      </div>

      <nav className="px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <a href="#home" className="text-lg font-pixel text-primary flex items-center gap-2">
              <span className="text-xl">🪻</span>
              <span className="hidden sm:inline">Davina</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          {/* CHANGED: md:gap-1 to md:gap-2 or md:gap-4 for even spacing */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-3 flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                // CHANGED: Added whitespace-nowrap to prevent text wrapping
                className={cn(
                  "dock-item px-3 py-2 rounded-lg font-mono text-sm flex items-center gap-2 btn-press whitespace-nowrap transition-all",
                  link.primary
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                )}
              >
                <i className={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - keeps layout balanced on desktop if hidden */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-press p-2 rounded-lg bg-secondary/50 text-primary"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Spacer for desktop to balance the logo (optional, keeps buttons centered) */}
          <div className="hidden md:block w-[80px]"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "dock-item block font-mono text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                link.primary
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <i className={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;