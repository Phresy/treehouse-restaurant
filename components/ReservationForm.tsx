"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: "2",
  });

  const steps = [
    { id: 1, name: "Details", icon: <Users size={18} /> },
    { id: 2, name: "Time", icon: <Calendar size={18} /> },
    { id: 3, name: "Confirm", icon: <Clock size={18} /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-treehouse-deep mb-4 tracking-tight">
            Table Reservation
          </h2>
          <p className="text-xs uppercase tracking-premium text-gold font-medium">
            Secure your journey
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10" />
          {steps.map((s) => (
            <div
              key={s.id}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 bg-white",
                step >= s.id ? "border-gold text-gold" : "border-gray-200 text-gray-400"
              )}
            >
              {s.icon}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="min-h-[300px]">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  Party Size
                </label>
                <div className="relative">
                  <select
                    className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-gold bg-transparent font-serif text-xl appearance-none cursor-pointer relative z-10"
                    value={bookingData.guests}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, guests: e.target.value })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                      <option key={num} value={num} className="text-black">
                        {num} Guests
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                className="btn-premium w-full mt-8 flex items-center justify-center gap-2"
              >
                Next Step <ChevronRight size={14} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500">
                Select Date
              </label>
              <input
                type="date"
                className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-gold font-serif text-xl bg-transparent cursor-pointer"
                onChange={(e) =>
                  setBookingData({ ...bookingData, date: e.target.value })
                }
              />
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-treehouse-deep transition-colors"
                >
                  Back
                </button>
                <button onClick={() => setStep(3)} className="btn-premium flex-1">
                  Select Time
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="p-8 bg-background border border-gold/20 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Your Request
                </p>
                <h3 className="font-serif text-2xl text-treehouse-deep">
                  {bookingData.guests} Guests on{" "}
                  {bookingData.date || "Selected Date"}
                </h3>
              </div>
              <button className="btn-premium w-full bg-treehouse-deep text-white hover:bg-gold border-transparent">
                Confirm Reservation
              </button>
              <button
                onClick={() => setStep(2)}
                className="block w-full text-[10px] uppercase tracking-widest text-gray-400 hover:text-treehouse-deep transition-colors"
              >
                Change Details
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;