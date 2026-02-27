import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Ready to Get Started?</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-3 mb-6">
            Let's <span className="text-primary">Transform</span> Your Concrete
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We'll assess your project and provide an honest estimate — fast.
          </p>
          <Button size="lg" className="text-lg gap-2 px-10 py-6 font-semibold mb-12">
            Request a Free Quote <ArrowRight className="w-5 h-5" />
          </Button>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-foreground">Call Us</span>
              <a href="tel:2503177053" className="text-muted-foreground text-sm font-body hover:text-primary transition-colors">(250) 317-7053</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-foreground">Owner</span>
              <span className="text-muted-foreground text-sm font-body">Derek Bueckert</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-foreground">Location</span>
              <span className="text-muted-foreground text-sm font-body">Kelowna, BC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
