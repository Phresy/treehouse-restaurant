import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      {/* We will add the Navbar here later */}
      <Hero />
      
      {/* Future sections will go here */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-6 text-treehouse-deep">A Sanctuary for the Senses</h2>
          <p className="font-sans text-sm leading-relaxed text-gray-600 tracking-wide">
            Treehouse brings the outdoors in, merging architectural elegance with 
            locally-sourced ingredients. Every dish is a tribute to the earth's 
            natural cycles.
          </p>
        </div>
      </section>
    </main>
  );
}