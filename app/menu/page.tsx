import MenuSection from "@/components/MenuSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Menu | Treehouse Accra",
  description: "Discover our curated collection of signature mains, craft cocktails, mocktails, and fine wines at our Nyaniba location.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      {/* 1. Page Title Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Nyaniba Sanctuary
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-treehouse-deep mb-8">
            The Selection
          </h1>
          <p className="font-sans text-sm md:text-base leading-relaxed text-gray-500 tracking-wide max-w-xl mx-auto italic">
            &quot;A culinary dialogue between the soil of Ghana and the soul of modern architecture. 
            Every ingredient is selected for its story; every pour is a tribute to the craft.&quot;
          </p>
        </div>
      </section>

      {/* 2. Full Menu Interactive Component */}
      {/* By NOT passing 'isFeatured', the component shows all tabs and items */}
      <MenuSection />

      {/* 3. Bottom Utility Section */}
      <section className="py-24 bg-treehouse-deep text-background text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            Elevate your evening.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/reservations" 
              className="btn-premium border-gold text-gold hover:bg-gold hover:text-treehouse-deep"
            >
              Secure a Table
            </a>
            <a 
              href="tel:0599400737" 
              className="btn-premium border-white/20 text-white hover:bg-white hover:text-treehouse-deep"
            >
              Direct Line
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}