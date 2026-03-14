import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import softWashingBg from "@/assets/soft-washing-bg.jpg";

const benefits = [
  "Safe for vinyl siding, stucco, and painted surfaces",
  "Removes dirt, algae, mildew, and organic buildup",
  "Low-pressure method prevents surface damage",
  "Specialized cleaning solutions for lasting results",
  "Improves curb appeal and home value",
  "Perfect for delicate exterior materials",
];

const SoftWashing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="House Soft Washing"
        subtitle="Gentle, effective exterior cleaning that keeps your home looking fresh without risking damage."
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              What is Soft Washing?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Unlike traditional pressure washing, soft washing uses low pressure combined with specialized, biodegradable cleaning solutions to safely clean your home's exterior. This method is ideal for surfaces that could be damaged by high-pressure water — including vinyl siding, stucco, painted wood, and delicate trim.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Over time, the exterior of your home collects dirt, algae, mildew, and other organic buildup — especially in Kelowna's climate where warm summers and moist conditions encourage growth. Soft washing doesn't just clean the surface; it kills the organisms at the root, providing longer-lasting results than pressure washing alone.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-body">{benefit}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Safe for All Exterior Surfaces
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Whether your home has vinyl siding, stucco, Hardie board, painted wood, or brick accents, soft washing is the safest way to achieve a deep clean. Our cleaning solutions are tough on grime but gentle on your surfaces — leaving your house looking fresh, well-maintained, and protected from future buildup.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceAreas />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default SoftWashing;
