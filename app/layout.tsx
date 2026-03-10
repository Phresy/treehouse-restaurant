import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Treehouse | Fine Dining & Organic Architecture",
  description: "Experience the pinnacle of gastronomy at Treehouse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={cn(
        "scroll-smooth", 
        geist.variable, 
        playfair.variable, 
        inter.variable
      )}
    >
      <body className="font-sans antialiased bg-background text-foreground selection:bg-gold/30 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}