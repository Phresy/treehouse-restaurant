"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Dynamically generating the array for th1.jpeg to th21.jpeg
const allGalleryImages = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/images/th${i + 1}.jpeg`,
  alt: `Treehouse Experience ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            The Visual Journey
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-treehouse-deep">
            Nyaniba Sanctuary
          </h1>
          <p className="mt-6 text-gray-500 font-light max-w-xl mx-auto text-sm leading-relaxed">
            From architectural concrete to the lush canopy of Accra, explore every corner of the Treehouse experience.
          </p>
        </div>

        {/* Masonry Grid - Using standard img tags for guaranteed fetching */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {allGalleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="relative group overflow-hidden bg-gray-100 rounded-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 block"
                loading="lazy"
              />
              
              {/* Hover Branding Overlay */}
              <div className="absolute inset-0 bg-treehouse-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <span className="text-white text-[9px] uppercase tracking-[0.3em] font-bold border-b border-gold/50 pb-2">
                  Treehouse Accra
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <h2 className="font-serif text-3xl text-treehouse-deep mb-10">
            Experience it in person.
          </h2>
          <Link href="/reservations" className="btn-premium inline-block px-10 py-4 border border-treehouse-deep text-treehouse-deep hover:bg-treehouse-deep hover:text-white transition-all duration-300">
            Book a Table
          </Link>
        </div>
      </div>
    </main>
  );
}