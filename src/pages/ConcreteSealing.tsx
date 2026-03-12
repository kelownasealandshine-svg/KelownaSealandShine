import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/work-5.jpg";

const benefits = [
  "Protection from water penetration and freeze-thaw damage",
  "Resistance to road salt and de-icing chemicals",
  "UV protection to prevent fading and discoloration",
  "Stain resistance from oil, grease, and spills",
  "Enhanced appearance with a clean, uniform finish",
  "Long-lasting protection with premium acrylic sealers",
];

const ConcreteSealing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Concrete Sealing"
        subtitle="Protect your driveways, patios, and walkways with premium concrete sealing in Kelowna."
        backgroundImage={heroImage}
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
              Why Seal Your Concrete?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Unsealed concrete is porous and vulnerable. Water seeps into the surface, and when Kelowna's winter temperatures drop below freezing, that moisture expands — causing cracks, spalling, and surface deterioration. Road salt and de-icing chemicals accelerate this damage even further.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Concrete sealing creates a protective barrier that blocks moisture, salt, oil stains, and UV rays from penetrating the surface. We use high-quality acrylic sealers that provide a clean, uniform finish while delivering long-lasting protection — typically 3 to 5 years depending on traffic and exposure.
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
              Our Sealing Process
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Every sealing job starts with thorough pressure washing to remove all dirt, stains, and debris. Once the surface is clean and dry, we apply a premium acrylic sealer evenly across the entire area. The result is a beautiful, protected surface that resists the elements and looks great for years to come. We seal driveways, patios, walkways, pool decks, and more.
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

export default ConcreteSealing;
