import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import RulesSection from "@/components/RulesSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <RulesSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
