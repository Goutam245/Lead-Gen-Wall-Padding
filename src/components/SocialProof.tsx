import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonial = {
  quote:
    "SAFEWALL transformed our ground safety standards. The quality is unmatched, and the installation team was incredibly professional. Best investment we've made in years.",
  author: "James Richardson",
  role: "Stadium Manager",
  club: "National League Club",
};

const partnerLogos = [
  "National League",
  "Premier League",
  "Championship",
  "League One",
  "League Two",
];

export const SocialProof = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-0 right-0 w-full h-full bg-primary"
          style={{
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Trust & Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-8">
              TRUSTED BY <span className="text-gradient">THE BEST</span>
            </h2>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {partnerLogos.map((partner) => (
                <div
                  key={partner}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                >
                  <span className="text-sm md:text-base font-semibold text-muted-foreground">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            {/* Official Supplier Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground font-semibold">
                Official Supplier: National League
              </span>
            </div>
          </motion.div>

          {/* Right Side - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-background/95 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-2xl border border-border">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary mb-6" />

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.club}
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-warning fill-warning"
                  />
                ))}
              </div>

              {/* Read More Link */}
              <a
                href="#"
                className="inline-block mt-6 text-primary hover:text-accent transition-colors font-semibold"
              >
                Read More Reviews →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
