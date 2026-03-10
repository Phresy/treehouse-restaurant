"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "2",
    time: "19:00",
    notes: ""
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow min-h-screen bg-linear-to-b from-white to-gray-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Table Booking
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-treehouse-deep">
            Secure Your Table
          </h1>
          <p className="mt-6 text-gray-500 font-light text-sm tracking-wide">
            Reservations are recommended for dinner and weekend brunch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-treehouse-deep font-light"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-treehouse-deep"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Guests</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-treehouse-deep">
                    {[1, 2, 3, 4, 5, 6, "7+"].map(num => (
                      <option key={num} value={num}>{num} Persons</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Special Notes</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-treehouse-deep font-light resize-none"
                  placeholder="Allergies, anniversaries, or seating preferences..."
                />
              </div>

              <button type="submit" className="btn-premium w-full bg-treehouse-deep text-white border-treehouse-deep hover:bg-gold hover:border-gold py-4 font-bold">
                Confirm Request
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-12 rounded-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl text-treehouse-deep mb-6">Dining Policy</h3>
              <ul className="space-y-4 text-xs text-gray-500 leading-relaxed tracking-wide">
                <li>• We hold tables for 15 minutes past your reservation time.</li>
                <li>• For groups larger than 8, please contact us directly via WhatsApp.</li>
                <li>• Smart casual dress code is encouraged.</li>
              </ul>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Location</p>
              <p className="text-sm text-treehouse-deep font-light">
                Nyaniba Estates, Osu<br />Accra, Ghana
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </main>
    </div>
  );
}