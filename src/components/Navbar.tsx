"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Changed from useLocation
  const isHomePage = pathname === "/"; // Changed from location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Departments", href: "/departments" },
    { name: "Team", href: "/team" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // On non-home pages, always show scrolled style
  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showScrolledStyle
          ? "glass py-3 shadow-soft"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
        <Image
  src={showScrolledStyle ? "/logo-trans.png" : "/logo-trans-white.png"}
  alt="Samarpan Hospital Logo"
  width={50}
  height={50}
  priority
  className="transition-all duration-300"
/>
          <div className="flex flex-col">
            <span className={`text-xl font-bold transition-colors duration-300 ${showScrolledStyle ? 'text-foreground' : 'text-white'}`}>
              Samarpan Hospital
            </span>
            <span className={`text-xs font-medium transition-colors duration-300 ${showScrolledStyle ? 'text-muted-foreground' : 'text-white/70'}`}>
              Kidney Hospital
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${
                pathname === link.href 
                  ? 'text-primary bg-primary/10' 
                  : showScrolledStyle 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+917554026900" 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              showScrolledStyle 
                ? 'text-foreground hover:text-primary hover:text-pink' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs opacity-70">Emergency</span>
              <span className="text-sm font-semibold">24/7</span>
            </div>
          </a>
          <Button variant={showScrolledStyle ? "hero" : "hero-light"} size="default" onClick={() => window.location.href="/contact"}>
            Book Appointment
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-3 rounded-xl transition-colors ${
            showScrolledStyle ? 'hover:bg-secondary' : 'hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${showScrolledStyle ? 'text-foreground' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${showScrolledStyle ? 'text-foreground' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-4 mx-4 p-6 rounded-3xl animate-fade-up shadow-card">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === link.href 
                    ? 'text-primary bg-primary/5' 
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border my-4" />
            <Button variant="hero" className="w-full" onClick={() => window.location.href="/contact"}>
              Book Appointment
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
