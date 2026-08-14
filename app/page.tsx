import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ConstellationSection from "@/components/sections/ConstellationSection";
import PainSection from "@/components/sections/PainSection";
import NostosMethodSection from "@/components/sections/NostosMethodSection";
import GroupSection from "@/components/sections/GroupSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ConstellationSection />
      <PainSection />
      <NostosMethodSection />
      <GroupSection />
      <ServicesSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
