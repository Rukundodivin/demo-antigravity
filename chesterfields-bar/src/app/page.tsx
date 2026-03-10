import { Preloader } from "@/components/ui/preloader";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Ambiance } from "@/components/sections/Ambiance";
import { MenuSection } from "@/components/sections/Menu";
import { Galerie } from "@/components/sections/Galerie";
import { APropos } from "@/components/sections/APropos";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { Reservation } from "@/components/sections/Reservation";
import { Footer } from "@/components/sections/Footer";
import SmoothScroll from "@/components/providers/smooth-scroll";
import { Calendar } from "lucide-react";

const chesterfieldsReviews = [
  {
    author: {
      name: "Kia Fatemi",
      handle: "Local Guide · 29 avis",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Cozy pub for drinks in Marrakech, the local beer that they serve is very nice and the prices are reasonable. Seat are available inside and outside."
  },
  {
    author: {
      name: "Luis Navaro Lopez",
      handle: "Local Guide · 10 avis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The best place to be in Marrakech, nice staff nice music, very recommended :)"
  },
  {
    author: {
      name: "Michael Fawcett",
      handle: "Local Guide · 368 avis",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "A very nice quirky pub, well worth a visit. Price per person MAD 50–100."
  },
  {
    author: {
      name: "Juicy Juice",
      handle: "Local Guide · 140 avis",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "A safe place for beer. Cheapest price in Marrakech. Friendly service and a cool interior. Pleasant music."
  },
  {
    author: {
      name: "Teo",
      handle: "Local Guide · 100 avis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Beautiful courtyard. Nice bar. Food: 5/5."
  },
  {
    author: {
      name: "杉浦 はな",
      handle: "Local Guide · 12 avis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Great spot to enjoy a beer which can be hard to find in Marrakech. Good music, friendly people from all over the world!"
  }
];

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Ambiance />
        <MenuSection />
        <Galerie />
        <APropos />
        <TestimonialsSection
          title="Ce que disent nos clients"
          description="⭐ 4.2 / 5 · Basé sur 340 avis Google"
          testimonials={chesterfieldsReviews}
        />
        <Reservation />
      </main>
      <Footer />

      {/* Floating Action Button (Mobile Only) */}
      <a
        href="#reservation"
        className="fixed bottom-6 right-6 z-40 md:hidden bg-[#C8860A] text-[#1A0A00] p-4 rounded-full shadow-2xl flex items-center justify-center border border-[#1A0A00]"
      >
        <Calendar className="w-6 h-6" />
      </a>
    </SmoothScroll>
  );
}
