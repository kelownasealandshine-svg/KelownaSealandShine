import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, MapPin } from "lucide-react";

const reasons = [
  { icon: Award, title: "10+ Years Experience", description: "Seasoned professionals with thousands of projects completed." },
  { icon: CheckCircle, title: "Premium Products", description: "We use only top-tier sealers and coatings for lasting results." },
  { icon: Clock, title: "Fast Turnaround", description: "Most residential projects completed in just 1-2 days." },
  { icon: MapPin, title: "Locally Owned", description: "Proudly serving Kelowna and the entire Okanagan region." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-section-dark text-section-dark-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
              The Okanagan's
              <br />
              <span className="text-primary">Concrete Specialists</span>
            </h2>
            <p className="text-section-dark-foreground/70 font-body text-lg leading-relaxed max-w-md">
              We take pride in delivering flawless results on every project. From preparation to final coat, every step is done right — guaranteed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl bg-section-dark-foreground/5 border border-section-dark-foreground/10"
              >
                <reason.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-section-dark-foreground/60 text-sm font-body">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
