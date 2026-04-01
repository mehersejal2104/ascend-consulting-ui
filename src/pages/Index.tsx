import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import StatsSection from "@/components/StatsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingBlobs />
      <Navbar />
      <div id="home"><HeroSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="expertise"><ExpertiseSection /></div>
      <StatsSection />
      <CaseStudiesSection />
      <div id="testimonials"><TestimonialsSection /></div>
      <TrustedBySection />
      <Footer />
    </div>
  );
};

export default Index;
