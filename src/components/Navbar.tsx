import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kss-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Pressure Washing", to: "/driveway-pressure-washing" },
  { label: "Concrete Sealing", to: "/concrete-sealing" },
  { label: "Soft Washing", to: "/soft-washing" },
  { label: "About", to: "/about" },
  { label: "Free Quote", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary/50">
      <div className="container flex items-center justify-between h-18">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Kelowna Seal & Shine" className="h-14 md:h-16 brightness-0 invert" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-secondary-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="mailto:kelownasealandshine@gmail.com" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <Button size="sm" className="gap-2 font-semibold" asChild>
            <a href="tel:2503177053">
              <Phone className="w-4 h-4" /> 250-317-7053
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-secondary border-t border-secondary/50 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-sm font-medium text-secondary-foreground/70 hover:text-secondary-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button size="sm" className="w-full gap-2 font-semibold" asChild>
              <a href="tel:2503177053">
                <Phone className="w-4 h-4" /> Call or Text 250-317-7053
              </a>
            </Button>
            <Button size="sm" variant="outline" className="w-full gap-2 font-semibold border-secondary-foreground/30 text-secondary-foreground bg-transparent hover:bg-secondary-foreground/10" asChild>
              <a href="mailto:kelownasealandshine@gmail.com">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
