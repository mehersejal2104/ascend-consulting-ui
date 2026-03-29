import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedBySection from "@/components/TrustedBySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingBlobs />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ExpertiseSection />
      <StatsSection />
      <TestimonialsSection />
      <TrustedBySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
