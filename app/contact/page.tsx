"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow min-h-screen pt-32 pb-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold"
          >
            Concierge
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-treehouse-deep mt-4"
          >
            Connect with us
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-treehouse-deep mb-2">Location</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    Plot 1 West Light Industrial Area<br />
                    Nyaniba, Accra, Ghana
                  </p>
                  <Link 
                    href="https://www.google.com/maps/search/?api=1&query=Plot+1+West+Light+Industrial+Area+Nyaniba" 
                    target="_blank"
                    className="text-[10px] uppercase tracking-widest text-gold mt-4 inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    Open in Google Maps <ExternalLink size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-treehouse-deep mb-2">Inquiries</h3>
                  <p className="text-sm text-gray-500 font-light">Direct: 059 940 0737</p>
                  <p className="text-sm text-gray-500 font-light">Events: events@treehouse.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-treehouse-deep mb-2">Hours</h3>
                  <p className="text-sm text-gray-500 font-light">Open Daily: 12:00 PM — 11:00 PM</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold mt-2">Kitchen closes at 10:30 PM</p>
                </div>
              </div>
            </div>

            {/* Embedded Mini-Map Placeholder */}
            <div className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden relative border border-gray-200 grayscale contrast-125">
               {/* You can replace this div with an actual Google Maps Iframe */}
               <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
                  Interactive Map Integration: HR6H+94 Accra
               </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm p-8 md:p-12 shadow-sm border border-gold/10 rounded-lg"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold bg-transparent transition-colors font-light" placeholder="Ekow Mensah" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold bg-transparent transition-colors font-light" placeholder="ekow@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Subject</label>
                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold bg-transparent transition-colors font-light appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Private Event / Celebration</option>
                  <option>Media & Press</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold bg-transparent transition-colors font-light resize-none" placeholder="How can we assist you?" />
              </div>

              <button type="submit" className="btn-premium w-full bg-treehouse-deep text-white border-treehouse-deep hover:bg-gold hover:border-gold py-4 font-bold">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      </main>
    </div>
  );
};

export default ContactPage;