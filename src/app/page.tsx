import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { AreaGuides } from "@/components/AreaGuides";
import { FeaturedListings } from "@/components/FeaturedListings";
import { FeaturedOn } from "@/components/FeaturedOn";
import { Gallery } from "@/components/Gallery";
import { Social } from "@/components/Social";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <Hero />
        {/* Who we are */}
        <About />
        {/* What we do */}
        <Products />
        {/* Where we work */}
        <AreaGuides />
        {/* Proof — real listings */}
        <FeaturedListings />
        {/* Trust — reviews */}
        <FeaturedOn />
        {/* Immersion */}
        <Gallery />
        {/* Culture */}
        <Social />
        {/* The ask */}
        <CtaBanner />
        <Footer />
      </main>
      <SearchBar />
    </SmoothScroll>
  );
}
