import { motion } from "framer-motion";
import { Shield, CloudRain, Palette, Zap, Wrench, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Maximum Impact Protection",
    description:
      "Multi-layer foam technology absorbs and distributes impact forces, keeping players and spectators safe.",
  },
  {
    icon: CloudRain,
    title: "All-Weather Durability",
    description:
      "UV-resistant, waterproof materials rigorously tested in British weather extremes for year-round performance.",
  },
  {
    icon: Palette,
    title: "Custom Branding Solutions",
    description:
      "Full-color sponsor logos and club branding options that maintain vibrancy season after season.",
  },
  {
    icon: Zap,
    title: "Express Installation",
    description:
      "Professional fitting teams minimize downtime to hours, not days. Get back to playing faster.",
  },
  {
    icon: Wrench,
    title: "Maintenance-Free",
    description:
      "Wipe-clean surfaces with self-healing outer coating require zero ongoing maintenance costs.",
  },
  {
    icon: CheckCircle,
    title: "10-Year Guarantee",
    description:
      "Comprehensive warranty backed by British engineering standards and decades of expertise.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Carbon Fiber Pattern Background */}
      <div className="absolute inset-0 carbon-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground mb-4">
            BUILT FOR <span className="text-gradient">CHAMPIONS</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card p-8 rounded-lg group"
            >
              <div className="mb-6">
                <feature.icon className="w-14 h-14 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
