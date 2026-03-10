"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Lock scroll when menu is open to prevent background content shift
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "The Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center",
          // Change background when scrolled OR when menu is open
          isScrolled || isOpen 
            ? "bg-white border-b border-gray-100 py-4 shadow-sm" 
            : "bg-transparent"
        )}
      >
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="font-serif text-2xl tracking-[0.2em] uppercase text-treehouse-deep z-[110]"
        >
          Treehouse
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[10px] uppercase tracking-premium font-semibold transition-colors hover:text-gold",
                pathname === link.href ? "text-gold" : "text-treehouse-deep"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/reservations" 
            className="px-8 py-3 border border-treehouse-deep text-treehouse-deep text-[10px] uppercase tracking-widest font-bold hover:bg-treehouse-deep hover:text-white transition-all duration-300"
          >
            Book
          </Link>
        </div>

        {/* Mobile Toggle - Swapping Icons properly */}
        <button 
          className="md:hidden text-treehouse-deep p-2 z-[110]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col p-12 pt-32"
          >
            <div className="flex flex-col space-y-8">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-serif text-5xl transition-colors",
                  pathname === "/" ? "text-gold" : "text-treehouse-deep"
                )}
              >
                Home
              </Link>
              
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-serif text-5xl transition-colors",
                    pathname === link.href ? "text-gold" : "text-treehouse-deep"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">Location</p>
              <p className="font-sans text-sm text-treehouse-deep opacity-70 leading-relaxed">
                12 Nature Reserve Drive,<br />
                Nyaniba Estates, Accra
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;