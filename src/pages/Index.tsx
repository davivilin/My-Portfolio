import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BootLoader from "@/components/layout/BootLoader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BootLoader />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;