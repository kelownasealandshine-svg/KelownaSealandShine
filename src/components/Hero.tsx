import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/work-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase">
            Serving Kelowna, West Kelowna, Lake Country & More
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight text-primary-foreground mb-6">
            Professional Pressure Washing & Concrete Sealing
            <br />
            <span className="text-primary-foreground/80">in Kelowna BC</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 font-body mb-10 max-w-lg">
            Driveways, patios, house exteriors — we clean and protect your surfaces so they look great and last longer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="text-lg gap-2 px-8 py-6 font-semibold" asChild>
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg gap-2 px-8 py-6 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
              <a href="tel:2503177053">
                <Phone className="w-5 h-5" /> Call or Text 250-317-7053
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
