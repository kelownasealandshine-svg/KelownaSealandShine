import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="Local, owner-operated, and committed to doing great work for our Kelowna neighbors."
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
              Meet Kelowna Seal & Shine
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Kelowna Seal and Shine is a locally owned and operated business right here in the Okanagan. We're focused on one thing: delivering quality pressure washing, concrete sealing, and soft washing services at fair prices — with the kind of personal, friendly service that bigger companies just can't match.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Owner Derek Bueckert started this business with a simple belief: treat every customer with kindness and respect, show up when you say you will, and never cut corners. Whether it's a single driveway or a full exterior clean, we give every job the same attention to detail — because your home deserves it.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              We're proud to serve homeowners throughout Kelowna, West Kelowna, Lake Country, Peachland, and Rutland. If you're looking for honest work from someone who genuinely cares about doing a great job, give us a call or text — we'd love to earn your business.
            </p>
          </motion.div>
        </div>
      </section>

      <WhyUs />
      <ServiceAreas />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default About;
