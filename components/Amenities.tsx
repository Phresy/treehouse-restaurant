"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Car, 
  CreditCard, 
  Music, 
  Leaf, 
  MapPin, 
  Wine 
} from "lucide-react";

const Amenities = () => {
  const features = [
    {
      title: "Accessibility",
      icon: <Users size={20} />,
      details: "Fully accessible entrance, seating, and facilities for all guests."
    },
    {
      title: "Arriving",
      icon: <Car size={20} />,
      details: "Complimentary parking lot and street parking available on-site."
    },
    {
      title: "Dietary",
      icon: <Leaf size={20} />,
      details: "Curated vegan and vegetarian compositions available daily."
    },
    {
      title: "Ambience",
      icon: <Music size={20} />,
      details: "Live acoustic performances in a trendy, upmarket atmosphere."
    },
    {
      title: "Offerings",
      icon: <Wine size={20} />,
      details: "Extensive wine cellar, craft cocktails, and private dining rooms."
    },
    {
      title: "Payments",
      icon: <CreditCard size={20} />,
      details: "We accept all major credit cards and NFC mobile payments."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-treehouse-moss/3 to-white border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">The Experience</span>
          <h2 className="font-serif text-3xl md:text-5xl text-treehouse-deep mb-4">Thoughtful Essentials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold/60 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white/70 backdrop-blur-sm rounded-lg border border-gold/10 hover:border-gold/30 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-gold mb-6 group-hover:scale-125 group-hover:text-gold-dark transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-treehouse-deep mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light tracking-wide group-hover:text-gray-700 transition-colors">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;