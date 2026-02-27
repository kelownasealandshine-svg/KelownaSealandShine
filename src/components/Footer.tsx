const Footer = () => {
  return (
    <footer className="py-8 bg-section-dark border-t border-section-dark-foreground/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold text-section-dark-foreground">
          Kelowna <span className="text-primary">Seal & Shine</span>
        </span>
        <p className="text-section-dark-foreground/50 text-sm font-body">
          © {new Date().getFullYear()} Kelowna Seal and Shine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
