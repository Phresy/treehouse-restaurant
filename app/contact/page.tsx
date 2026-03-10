"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";

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
                      href="https://maps.google.com/?q=Treehouse+Nyaniba+Accra" 
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

              {/* Integrated Interactive Google Map */}
              <div className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden relative border border-gray-200 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0267150167384!2d-0.1742416!3d5.563065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf906f363c46e7%3A0x6a9667f398e821e2!2sNyaniba%20Estates%2C%20Accra!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Treehouse Interactive Map"
                ></iframe>
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

                <button type="submit" className="w-full bg-treehouse-deep text-white py-4 font-bold tracking-widest uppercase text-[11px] border border-treehouse-deep hover:bg-gold hover:border-gold transition-all duration-300">
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