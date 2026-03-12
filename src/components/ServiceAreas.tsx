import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Kelowna", "West Kelowna", "Lake Country", "Peachland", "Rutland"];

const ServiceAreas = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Service Areas</span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3 mb-8">
          Proudly Serving the Okanagan
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-body font-semibold text-sm"
            >
              <MapPin className="w-4 h-4" />
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
