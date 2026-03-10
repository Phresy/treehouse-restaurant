"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-treehouse-deep">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/th16.jpeg"
          alt="Treehouse Restaurant Interior"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-treehouse-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-medium"
        >
          Established 2024 — Accra
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-8xl text-background leading-tight mb-8"
        >
          Gastronomy <br /> Rooted in Nature
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a href="/reservations" className="btn-premium text-background border-background hover:bg-background hover:text-treehouse-deep">
            Reserve a Table
          </a>
          <a href="/menu" className="text-background uppercase tracking-premium text-[10px] font-semibold hover:text-gold transition-colors">
            View the Autumn Menu
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-px h-12 bg-linear-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;