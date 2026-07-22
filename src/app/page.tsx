import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedOn } from "@/components/FeaturedOn";
import { AreaGuides } from "@/components/AreaGuides";
import { SanDiegoMap } from "@/components/SanDiegoMap";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { Social } from "@/components/Social";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { FloatingPhone } from "@/components/FloatingPhone";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedOn />
        <AreaGuides map={<SanDiegoMap />} />
        <Products />
        <Testimonials />
        <About />
        <CtaBanner />
        <Social />
        <Footer />
      </main>
      <SearchBar />
      <FloatingPhone />
    </>
  );
}
