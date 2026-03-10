"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Image Box - Using standard img for reliability */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 shadow-2xl overflow-hidden rounded-sm bg-gray-100">
              <img
                src="/images/th2.jpeg" 
                alt="Our Culinary Philosophy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 block"
              />
            </div>

            {/* Overlapping secondary image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-12 -right-6 lg:-right-12 w-2/3 border-8 border-white shadow-xl overflow-hidden rounded-sm bg-gray-200"
            >
              <img
                src="/images/th3.jpeg" 
                alt="Treehouse Interior"
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">
                The Heritage
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-treehouse-deep mt-4 leading-tight">
                Where Concrete <br /> Meets the Canopy
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm leading-relaxed text-gray-600 max-w-md"
            >
              Founded in the heart of Accra, Treehouse was born from a singular vision: 
              to erase the boundaries between the urban landscape and the natural world. 
              Our architecture honors the ancient trees that shade our terrace, while 
              our kitchen honors the soil of the Greater Accra Region.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-sm leading-relaxed text-gray-600 max-w-md italic"
            >
              &quot;We don&apos;t just serve ingredients; we serve the seasons of the forest.&quot;
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="pt-4"
            >
              <Link href="/about" className="btn-premium inline-block px-8 py-4 border border-treehouse-deep text-treehouse-deep hover:bg-treehouse-deep hover:text-white transition-all duration-300">
                Discover our roots
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;