"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock, ShoppingBag, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-treehouse-deep text-background pt-24 pb-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="font-serif text-3xl tracking-[0.2em] uppercase text-gold block hover:opacity-80 transition-opacity">
              Treehouse
            </Link>
            <p className="text-sm text-background/60 leading-relaxed font-light pr-4">
              An architectural sanctuary in the heart of Nyaniba, where gastronomy meets the soul of nature. 
            </p>
            <div className="flex space-x-5 pt-2">
              <Link 
                href="https://www.instagram.com/treehousegh/?hl=en"
                target="_blank" 
                className="text-gold hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                <Instagram size={18} /> Instagram
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Experience</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/menu" className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                  View Menu <ExternalLink size={12} />
                </Link>
              </li>
              <li>
                <Link href="https://bolt.eu" target="_blank" className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                  Order Delivery <ShoppingBag size={12} />
                </Link>
              </li>
              <li><Link href="/reservations" className="text-sm hover:text-gold transition-colors">Book a Table</Link></li>
              <li><Link href="/about" className="text-sm hover:text-gold transition-colors">Our Narrative</Link></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Visit Us</h4>
            <ul className="space-y-4 text-sm font-light text-background/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                <span>
                  Plot 1 West Light Industrial Area<br />
                  Nyaniba, Accra<br />
                  <span className="text-[10px] opacity-50 tracking-tighter uppercase">Plus Code: HR6H+94 Accra</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <Link href="tel:0599400737" className="hover:text-gold transition-colors">059 940 0737</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Service Hours</h4>
            <ul className="space-y-3 text-sm font-light text-background/80">
              <li className="flex items-center gap-2 mb-4 text-gold">
                <Clock size={14} />
                <span className="text-xs font-semibold">Open · Closes 11 pm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Daily Service</span>
                <span>12:00 — 23:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-widest text-background/40">
            &copy; {currentYear} Treehouse Gastronomy. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[9px] uppercase tracking-widest text-background/40">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;