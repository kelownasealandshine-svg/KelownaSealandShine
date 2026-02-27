import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Services", "Why Us", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-secondary/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-extrabold text-secondary-foreground tracking-tight">
          Kelowna <span className="text-primary">Seal & Shine</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <Button size="sm" className="gap-2 font-semibold">
            <Phone className="w-4 h-4" /> Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary/50 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="block text-sm font-medium text-secondary-foreground/70 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button size="sm" className="w-full gap-2 font-semibold mt-2">
            <Phone className="w-4 h-4" /> Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
