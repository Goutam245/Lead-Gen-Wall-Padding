import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { useState, useEffect } from "react";
import stadiumImage from "@/assets/stadium-1.jpg";

const stats = [
  { value: 20, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Stadiums" },
  { value: 100, suffix: "%", label: "Safety Record" },
  { value: 10, suffix: "-Year", label: "Warranty" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-display">
      {count}{suffix}
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={stadiumImage}
          alt="Stadium with SAFEWALL installation"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Red glow from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
      </div>

      {/* UK Made Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-24 right-8 md:right-16 z-20"
      >
        <div className="uk-badge px-4 py-2 text-sm md:text-base uppercase tracking-wider">
          UK Made
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground tracking-wider">
            <span className="font-black">SAFE</span>
            <span className="font-light text-muted-foreground">WALL</span>
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-display text-foreground mb-4"
        >
          Where Safety Meets{" "}
          <span className="text-gradient">Championship Performance</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          British-Made Protection Systems | Engineered for National League Excellence | Zero Compromise
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="btn-cta-primary px-10 py-5 text-lg md:text-xl font-bold text-foreground rounded-lg uppercase tracking-wider"
          >
            Get Instant Quote
          </a>
          <a
            href="#video"
            className="btn-cta-outline px-10 py-5 text-lg md:text-xl font-bold text-foreground rounded-lg uppercase tracking-wider flex items-center gap-3"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            See It in Action
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="scroll-indicator"
        >
          <a href="#video" className="inline-flex flex-col items-center text-primary">
            <span className="text-sm uppercase tracking-wider mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-background/90 backdrop-blur-sm border-t border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center py-6 gap-6 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`stat-item text-center px-6 ${
                  index < stats.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <div className="text-foreground">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
