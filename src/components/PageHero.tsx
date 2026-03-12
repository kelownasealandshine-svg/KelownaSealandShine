import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-secondary" />
      )}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 font-body mb-8 max-w-lg">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 font-semibold" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
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

export default PageHero;
