import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-section-dark border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-heading text-lg font-bold text-section-dark-foreground">
              Kelowna <span className="text-primary">Seal & Shine</span>
            </span>
            <p className="text-section-dark-foreground/50 text-sm font-body mt-2">
              Professional pressure washing, concrete sealing & soft washing in the Okanagan.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-3">Services</h4>
            <div className="space-y-2">
              <Link to="/driveway-pressure-washing" className="block text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">Driveway Pressure Washing</Link>
              <Link to="/concrete-sealing" className="block text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">Concrete Sealing</Link>
              <Link to="/soft-washing" className="block text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">House Soft Washing</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-3">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">About Us</Link>
              <Link to="/contact" className="block text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">Contact / Free Quote</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="tel:2503177053" className="flex items-center gap-2 text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4" /> 250-317-7053
              </a>
              <a href="mailto:kelownasealandshine@gmail.com" className="flex items-center gap-2 text-sm text-section-dark-foreground/60 hover:text-primary transition-colors font-body">
                <Mail className="w-4 h-4" /> kelownasealandshine@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-section-dark-foreground/60 font-body">
                <MapPin className="w-4 h-4" /> Kelowna, BC
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-section-dark-foreground/40 text-sm font-body">
            © {new Date().getFullYear()} Kelowna Seal and Shine. All rights reserved.
          </p>
          <p className="text-section-dark-foreground/40 text-xs font-body">
            Serving Kelowna · West Kelowna · Lake Country · Peachland · Rutland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
