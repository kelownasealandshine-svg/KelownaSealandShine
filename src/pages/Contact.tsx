import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Driveway Pressure Washing",
  "Concrete Sealing",
  "House Soft Washing",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form-name", "quote-request");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setSubmitted(true);
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us at 250-317-7053.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Get a Free Quote"
        subtitle="Tell us about your project and we'll get back to you with an honest, no-obligation estimate."
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-extrabold text-foreground mb-3">Thank You!</h2>
                  <p className="text-muted-foreground font-body text-lg">
                    We've received your request and will get back to you shortly. You can also call or text us at{" "}
                    <a href="tel:2503177053" className="text-primary font-semibold">250-317-7053</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="quote-request" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5">
                  <input type="hidden" name="form-name" value="quote-request" />
                  <p className="hidden">
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Request a Quote</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="250-XXX-XXXX" maxLength={20} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" maxLength={255} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" placeholder="Your address in Kelowna" maxLength={200} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project — size of area, current condition, timeline, etc."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-semibold text-lg py-6" disabled={loading}>
                    {loading ? "Sending..." : "Submit Quote Request"}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-xl font-heading font-bold text-foreground">Contact Info</h3>

              <div className="space-y-4">
                <a href="tel:2503177053" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <span className="block font-heading font-bold text-foreground text-sm">Call or Text</span>
                    <span className="text-muted-foreground text-sm font-body">250-317-7053</span>
                  </div>
                </a>

                <a href="mailto:kelownasealandshine@gmail.com" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <span className="block font-heading font-bold text-foreground text-sm">Email</span>
                    <span className="text-muted-foreground text-sm font-body">kelownasealandshine@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="block font-heading font-bold text-foreground text-sm">Service Area</span>
                    <span className="text-muted-foreground text-sm font-body">Kelowna, West Kelowna, Lake Country, Peachland, Rutland</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-body text-foreground">
                  <strong>Quick response guaranteed.</strong> We typically respond to quote requests within a few hours during business hours. For the fastest response, call or text us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
