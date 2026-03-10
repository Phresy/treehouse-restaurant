import AboutSection from "@/components/AboutSection";
import Amenities from "@/components/Amenities";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Intro Hero for About Page */}
      <section className="bg-treehouse-deep py-32 text-center text-background px-6">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Narrative</h1>
        <p className="max-w-xl mx-auto text-gold/80 uppercase tracking-widest text-[10px]">
          Sustainability — Craft — Community
        </p>
      </section>

      {/* The Story Grid */}
      <AboutSection />

      {/* The Functional Details (Accessibility, Parking, etc.) */}
      <Amenities />

      {/* Closing CTA */}
      <section className="py-24 bg-background text-center">
        <h2 className="font-serif text-3xl mb-8">Join us under the canopy.</h2>
        <a href="/reservations" className="btn-premium">Book your table</a>
      </section>
    </main>
  );
}