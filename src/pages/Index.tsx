import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
