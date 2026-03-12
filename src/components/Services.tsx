import { motion } from "framer-motion";
import { Shield, Droplets, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Driveway Pressure Washing",
    description: "Remove built-up dirt, moss, oil stains, and grime from your driveway. Professional pressure washing restores curb appeal and prevents long-term surface damage caused by Kelowna's hot summers and freezing winters.",
    link: "/driveway-pressure-washing",
  },
  {
    icon: Shield,
    title: "Concrete Sealing",
    description: "Protect your driveways, patios, and walkways from moisture, freeze-thaw damage, road salt, stains, and UV wear with our premium acrylic sealers for long-lasting protection.",
    link: "/concrete-sealing",
  },
  {
    icon: Home,
    title: "House Soft Washing",
    description: "A gentle, low-pressure cleaning method that safely removes dirt, algae, mildew, and organic buildup from vinyl siding, stucco, painted surfaces, and other delicate exterior materials.",
    link: "/soft-washing",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-3">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <Button variant="link" className="p-0 h-auto justify-start text-primary font-semibold" asChild>
                <Link to={service.link}>Learn More →</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
