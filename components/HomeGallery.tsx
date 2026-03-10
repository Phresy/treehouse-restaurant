"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HomeGallery = () => {
  // Mapping to your local jpeg files in public/images/
  // Selecting a high-impact mix from your 21 images
  const featuredImages = {
    main: "/images/th5.jpeg",    // Large feature
    topRight: "/images/th1.jpeg", // Architectural detail
    bottomRight: "/images/th12.jpeg" // Atmosphere/Vibe
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
              The Atmosphere
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-treehouse-deep leading-tight">
              Designed by Nature, <br />Refined by Us.
            </h2>
          </div>
          <Link 
            href="/gallery" 
            className="text-[10px] uppercase tracking-widest font-bold border-b border-gold pb-2 hover:opacity-70 transition-opacity"
          >
            View All Spaces
          </Link>
        </div>

        {/* Staggered "Bento" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          
          {/* Main Large Image (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative overflow-hidden group rounded-sm aspect-square md:aspect-auto"
          >
            <img 
              src={featuredImages.main} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
              alt="Treehouse Dining Experience" 
            />
            <div className="absolute inset-0 bg-treehouse-deep/10 group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
          
          {/* Smaller Stacked Images (Right) */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="relative overflow-hidden group rounded-sm aspect-video md:aspect-auto"
            >
              <img 
                src={featuredImages.topRight} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
                alt="Architectural Detail" 
              />
              <div className="absolute inset-0 bg-treehouse-deep/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="relative overflow-hidden group rounded-sm aspect-video md:aspect-auto"
            >
              <img 
                src={featuredImages.bottomRight} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
                alt="Evening Ambience" 
              />
              <div className="absolute inset-0 bg-treehouse-deep/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;