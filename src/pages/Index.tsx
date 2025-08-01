import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PlansSection from "@/components/PlansSection";
import CalculatorSection from "@/components/CalculatorSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <PlansSection />
      <CalculatorSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
