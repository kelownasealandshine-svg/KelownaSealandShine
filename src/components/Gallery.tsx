import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";

const photos = [
  { src: work1, alt: "Surface cleaning with rotary power washer on exposed aggregate driveway" },
  { src: work2, alt: "Freshly cleaned exposed aggregate driveway in front of residential garage" },
  { src: work3, alt: "Clean concrete driveway with landscaping details" },
  { src: work4, alt: "Sealed driveway on modern home with glass garage door" },
  { src: work5, alt: "Concrete sealing in progress at sunset on luxury property" },
  { src: work6, alt: "Sealed exposed aggregate driveway on contemporary home" },
  { src: work7, alt: "Beautifully sealed driveway and walkway on modern Kelowna home" },
  { src: work8, alt: "Sealed concrete walkway and entryway with stone pillars" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest font-body">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-3">
            Recent Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
