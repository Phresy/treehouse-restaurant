"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["Mains", "Cocktails", "Mocktails", "Wine"];

const menuItems = [
  // --- MAINS & SMALL PLATES ---
  {
    id: 1,
    name: "Flame-Grilled Grouper",
    description: "Locally caught, herb-infused, served with wild forest mushrooms and cassava purée.",
    price: "GHS 280.00",
    category: "Mains"
  },
  {
    id: 2,
    name: "The Nyaniba Ribeye",
    description: "Dry-aged for 28 days, finished over mahogany coals with black garlic butter.",
    price: "GHS 450.00",
    category: "Mains"
  },
  {
    id: 3,
    name: "Truffle Yam Croquettes",
    description: "Crispy local yams with a hint of white truffle and spicy shito-aioli.",
    price: "GHS 120.00",
    category: "Mains"
  },

  // --- COCKTAILS ---
  {
    id: 4,
    name: "Blueberry Paloma",
    description: "Tequila, Grapefruit juice, Blueberries, Lemon juice, Honey",
    price: "GHS 105.00",
    category: "Cocktails"
  },
  {
    id: 5,
    name: "Whisky Sour",
    description: "Whisky, Lemon juice, Angostura bitters, Egg white (optional)",
    price: "GHS 100.00",
    category: "Cocktails"
  },
  {
    id: 6,
    name: "Frozen G&T",
    description: "Gin, Tonic, Cucumber, Lemon juice",
    price: "GHS 105.00",
    category: "Cocktails"
  },
  {
    id: 7,
    name: "Rum Base",
    description: "Rum, Malibu, Passion fruit, Coconut, Lemon, Pineapple, Mint",
    price: "GHS 105.00",
    category: "Cocktails"
  },
  {
    id: 8,
    name: "Amber Honey",
    description: "Inverroche Amber, Honey syrup, Lemon juice, Cranberry juice, Orange",
    price: "GHS 100.00",
    category: "Cocktails"
  },
  {
    id: 9,
    name: "Elderflower G&T",
    description: "Inverroche Amber, Elderflower tonic",
    price: "GHS 100.00",
    category: "Cocktails"
  },
  {
    id: 10,
    name: "Espresso Martini",
    description: "Espresso, Coffee liqueur, Vodka, Sugar syrup",
    price: "GHS 100.00",
    category: "Cocktails"
  },
  {
    id: 11,
    name: "Triple X Martini",
    description: "Vodka, Passion fruit juice, Prosecco",
    price: "GHS 120.00",
    category: "Cocktails"
  },
  {
    id: 12,
    name: "Aphro Fashion",
    description: "Aphro Palm Spirit (Ginger), Lemon juice, Orange, Cinnamon, Vanilla, Honey",
    price: "GHS 105.00",
    category: "Cocktails"
  },
  {
    id: 13,
    name: "Classic Collins",
    description: "Inverroche Classic Gin, Sugar syrup, Lemon juice, Hibiscus tonic",
    price: "GHS 100.00",
    category: "Cocktails"
  },

  // --- MOCKTAILS ---
  {
    id: 14,
    name: "Tropical",
    description: "Pineapple, Passion fruit, Lemon, Mint, Coconut",
    price: "GHS 80.00",
    category: "Mocktails"
  },
  {
    id: 15,
    name: "Lemonade",
    description: "Freshly squeezed Lemon juice, Sugar syrup, Sprite",
    price: "GHS 70.00",
    category: "Mocktails"
  },
  {
    id: 16,
    name: "Chapman",
    description: "Grenadine syrup, Orange juice, Sprite, Angostura dash",
    price: "GHS 70.00",
    category: "Mocktails"
  },
  {
    id: 17,
    name: "Bissap",
    description: "Local Hibiscus (Bissap), Lemon, Honey, Mint",
    price: "GHS 80.00",
    category: "Mocktails"
  },
  {
    id: 18,
    name: "Apple & Cranberry",
    description: "Apple juice, Cranberry juice, Lime, Mint, Sugar syrup",
    price: "GHS 80.00",
    category: "Mocktails"
  },
  {
    id: 19,
    name: "Virgin Mojito",
    description: "Soda, Sugar syrup, Fresh Mint, Lemon wedges",
    price: "GHS 70.00",
    category: "Mocktails"
  },

  // --- WINE ---
  {
    id: 20,
    name: "Chocolate Block",
    description: "Boekenhoutskloof - Premium Red Blend (Bottle)",
    price: "GHS 1,200.00",
    category: "Wine"
  },
  {
    id: 21,
    name: "La Fiole du Pape",
    description: "Chateauneuf du Pape - Classic French Red (Bottle)",
    price: "GHS 1,400.00",
    category: "Wine"
  },
  {
    id: 22,
    name: "19 Crimes Cabernet Sauvignon",
    description: "Robust Red - Bottle",
    price: "GHS 420.00",
    category: "Wine"
  },
  {
    id: 23,
    name: "Trivento Tribu Malbec",
    description: "Smooth Argentine Red - Bottle",
    price: "GHS 480.00",
    category: "Wine"
  },
  {
    id: 24,
    name: "Kanonkop Kadette Pinotage",
    description: "South African Pinotage - Bottle/Glass Available",
    price: "GHS 450.00",
    category: "Wine"
  },
  {
    id: 25,
    name: "Codici Primitivo",
    description: "Italian Red - Bottle/Glass Available",
    price: "GHS 380.00",
    category: "Wine"
  }
];

const MenuSection = ({ isFeatured = false }: { isFeatured?: boolean }) => {
  const [activeTab, setActiveTab] = useState("Mains");

  // Determine which items to show
  const filteredItems = isFeatured 
    ? menuItems.filter(item => ["Mains", "Cocktails"].includes(item.category)).slice(0, 4)
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-treehouse-moss/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Only show Category Tabs if NOT in Featured mode */}
        {!isFeatured && (
          <div className="flex justify-center space-x-8 md:space-x-12 mb-16 border-b-2 border-gold/20 overflow-x-auto whitespace-nowrap scrollbar-hide pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`pb-4 text-[10px] uppercase tracking-widest font-bold transition-all relative ${
                  activeTab === cat ? "text-gold" : "text-gray-400 hover:text-treehouse-deep"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-start group bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex-grow pr-4">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-serif text-lg text-treehouse-deep group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-gold font-sans text-xs font-bold whitespace-nowrap ml-4 tracking-wide">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Home Page Link */}
        {isFeatured && (
          <div className="mt-16 text-center">
            <Link href="/menu" className="btn-premium inline-block">
              View Full Menu
            </Link>
          </div>
        )}

        {/* Disclaimer Footer */}
        {!isFeatured && (
          <div className="mt-24 pt-12 border-t border-gray-100 text-center space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 max-w-xl mx-auto leading-loose">
              All prices are quoted in Ghana Cedis (GHS) and are inclusive of VAT, 
              NHIL, GETFund, and Covid-19 Levy.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
              Plot 1 West Light Industrial Area, Nyaniba, Accra
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;