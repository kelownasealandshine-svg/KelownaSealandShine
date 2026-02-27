import { motion } from "framer-motion";
import { Shield, Droplets, Paintbrush, Warehouse } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Concrete Sealing",
    description: "Protect your driveways, patios, and walkways from moisture, freeze-thaw damage, and UV wear with our premium sealers.",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    description: "Restore your concrete to like-new condition. We remove dirt, oil stains, mold, and years of buildup before sealing.",
  },
  {
    icon: Paintbrush,
    title: "Decorative Coatings",
    description: "Transform dull concrete with decorative stains, epoxy coatings, and stamped overlays for a stunning finish.",
  },
  {
    icon: Warehouse,
    title: "Garage Floors",
    description: "Durable epoxy and polyaspartic coatings for garage floors that resist chemicals, abrasion, and hot tire pickup.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
