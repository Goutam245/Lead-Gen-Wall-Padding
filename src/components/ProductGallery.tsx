import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import stadium1 from "@/assets/stadium-1.jpg";
import stadium2 from "@/assets/stadium-2.png";
import detail1 from "@/assets/detail-1.png";
import detail2 from "@/assets/detail-2.png";

const galleryImages = [
  {
    src: stadium2,
    alt: "SAFEWALL Stadium Installation",
    caption: "Stadium Installation View",
    size: "large",
  },
  {
    src: detail1,
    alt: "SAFEWALL Mounting System",
    caption: "Precision Mounting System",
    size: "small",
  },
  {
    src: detail2,
    alt: "SAFEWALL Surface Technology",
    caption: "Weather-Resistant Surface",
    size: "small",
  },
  {
    src: stadium1,
    alt: "SAFEWALL with Branding",
    caption: "Custom Branding Solutions",
    size: "small",
  },
];

export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="carbon-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-background mb-4">
            PRECISION. PROTECTION. <span className="text-primary">PRIDE.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div
              className="gallery-image relative h-64 md:h-full min-h-[400px] rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(galleryImages[0].src)}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-400 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-10 h-10 text-foreground mx-auto mb-2" />
                  <p className="text-foreground font-semibold text-lg">
                    {galleryImages[0].caption}
                  </p>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-primary" />
            </div>
          </motion.div>

          {/* Smaller Images */}
          {galleryImages.slice(1).map((image, index) => (
            <motion.div
              key={image.caption}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              <div
                className="gallery-image relative h-48 md:h-52 rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-400 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <ZoomIn className="w-8 h-8 text-foreground mx-auto mb-2" />
                    <p className="text-foreground font-semibold">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-foreground text-4xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
};
