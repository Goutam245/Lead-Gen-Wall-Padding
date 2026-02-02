import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Check, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  organisation: z.string().min(2, "Organisation name is required").max(200),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  message: z.string().max(1000).optional(),
  newsletter: z.boolean().optional(),
  privacy: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const benefits = [
  "Free site assessment & 3D mockup",
  "Competitive pricing with no hidden costs",
  "Fast-track installation scheduling",
  "24/7 project support",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+44 (0) 1onal 567890" },
  { icon: Mail, label: "Email", value: "info@balco-safewall.com" },
  { icon: MapPin, label: "Address", value: "Birmingham, United Kingdom" },
  { icon: Clock, label: "Hours", value: "Mon-Fri 8am-6pm" },
];

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

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
            READY TO <span className="text-gradient">UPGRADE YOUR GROUND?</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Left Panel - Benefits & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-6">
                WHAT YOU GET
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-border">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-primary/30 rounded-xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-3xl font-display text-foreground mb-4">
                  THANK YOU!
                </h3>
                <p className="text-muted-foreground text-lg">
                  We'll respond within 4 hours during business hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="John Smith"
                    />
                    {errors.fullName && (
                      <p className="text-primary text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="john@club.com"
                    />
                    {errors.email && (
                      <p className="text-primary text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="+44 7XXX XXX XXX"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organisation/Club *
                    </label>
                    <input
                      {...register("organisation")}
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="Your Club Name"
                    />
                    {errors.organisation && (
                      <p className="text-primary text-sm mt-1">{errors.organisation.message}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      {...register("projectType")}
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select project type</option>
                      <option value="new">New Installation</option>
                      <option value="replacement">Replacement</option>
                      <option value="repair">Repair</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-primary text-sm mt-1">{errors.projectType.message}</p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      {...register("timeline")}
                      className="floating-input w-full px-4 py-3 rounded-lg text-foreground focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (Within 1 month)</option>
                      <option value="quarter">This Quarter</option>
                      <option value="6months">Within 6 months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="floating-input w-full px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Newsletter */}
                <div className="flex items-center gap-3">
                  <input
                    {...register("newsletter")}
                    type="checkbox"
                    id="newsletter"
                    className="w-5 h-5 rounded border-border bg-secondary accent-primary cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                    I want to receive SAFEWALL updates and news
                  </label>
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input
                    {...register("privacy")}
                    type="checkbox"
                    id="privacy"
                    className="w-5 h-5 rounded border-border bg-secondary accent-primary cursor-pointer mt-0.5"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to data processing *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-primary text-sm">{errors.privacy.message}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta-primary w-full py-5 text-lg font-bold text-foreground rounded-lg uppercase tracking-wider flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Your Free Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
