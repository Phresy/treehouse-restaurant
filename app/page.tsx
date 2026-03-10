import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Amenities from "@/components/Amenities";
import MenuSection from "@/components/MenuSection";
import HomeGallery from "@/components/HomeGallery"; // New import
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Impactful Entry */}
      <Hero />
      
      {/* 2. Mission Statement / Intro */}
      <section className="py-32 bg-linear-to-b from-white to-gray-50 text-center border-b border-gold/20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
            Welcome to the Canopy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-treehouse-deep leading-tight">
            A Sanctuary for the Senses
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600 tracking-wide max-w-2xl mx-auto">
            Treehouse brings the outdoors in, merging architectural elegance with 
            locally-sourced ingredients. Every dish is a tribute to the earth&apos;s 
            natural cycles and the vibrant culinary heritage of Accra.
          </p>
        </div>
      </section>

      {/* 3. The Visual Narrative (Storytelling) */}
      <AboutSection />

      {/* 4. The Atmosphere (Home Gallery Teaser) */}
      <HomeGallery />

      {/* 5. Signature Selections (Menu Teaser) */}
      <section className="bg-linear-to-b from-treehouse-moss/5 to-treehouse-moss/10 pt-24 pb-24">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">A Taste of Treehouse</span>
          <h2 className="font-serif text-4xl md:text-5xl text-treehouse-deep">Signature Selections</h2>
          <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-dark mx-auto mt-6 rounded-full"></div>
        </div>
        <MenuSection isFeatured={true} />
      </section>

      {/* 6. Guest Essentials (Amenities) */}
      <Amenities />

      {/* 7. Final Conversion Section */}
      <section className="relative py-32 bg-treehouse-deep text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-gold/20" />
        </div>

        <div className="relative z-10 px-6">
          <h2 className="font-serif text-4xl md:text-6xl text-background mb-10">
            Secure Your Table
          </h2>
          <p className="text-gold/60 uppercase tracking-premium text-[10px] mb-12 max-w-sm mx-auto">
            Reservations are highly recommended for dinner and weekend brunch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/reservations" className="btn-premium border-background text-background hover:bg-background hover:text-treehouse-deep">
              Make a Reservation
            </Link>
            <Link href="/menu" className="btn-premium border-gold text-gold hover:bg-gold hover:text-treehouse-deep">
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}