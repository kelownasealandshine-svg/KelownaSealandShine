import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/work-1.jpg";

const benefits = [
  "Remove dirt, moss, algae, and oil stains",
  "Restore your driveway to like-new condition",
  "Improve curb appeal and property value",
  "Prevent long-term surface damage",
  "Safe for concrete, pavers, and exposed aggregate",
  "Ideal seasonal maintenance for Kelowna weather",
];

const DrivewayPressureWashing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Driveway Pressure Washing"
        subtitle="Restore your driveway to like-new condition with our professional pressure washing service in Kelowna."
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
              Why Pressure Wash Your Driveway?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Kelowna's climate brings unique challenges to your concrete surfaces. Hot, dry summers cause dust and debris buildup, while cold winters with freeze-thaw cycles allow moisture, moss, and algae to take hold. Oil stains from vehicles and road salt residue further deteriorate your driveway's appearance and structural integrity.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Professional pressure washing removes all of this buildup, restoring your driveway's original appearance and preventing costly damage down the road. Regular seasonal washing — ideally in spring and fall — keeps your concrete looking great year-round and extends its lifespan.
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
              Seasonal Maintenance for Kelowna
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              We recommend pressure washing your driveway at least once a year — spring is ideal to wash away winter's salt and grime. For homes surrounded by trees or near lake areas, a fall cleaning can also prevent organic buildup from settling in over winter. Regular maintenance combined with concrete sealing gives your driveway the best protection possible.
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

export default DrivewayPressureWashing;
