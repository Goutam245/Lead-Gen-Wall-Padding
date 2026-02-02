import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  products: [
    "Wall Padding Systems",
    "Custom Branding",
    "Installation Services",
    "Maintenance Plans",
    "Replacement Parts",
  ],
  company: [
    "About SAFEWALL",
    "Our History",
    "Quality Certifications",
    "Sustainability",
    "Careers",
  ],
  support: [
    "Contact Us",
    "FAQs",
    "Installation Guide",
    "Warranty Information",
    "Technical Support",
  ],
  resources: [
    "Case Studies",
    "Photo Gallery",
    "Video Library",
    "Download Brochure",
    "Request Samples",
  ],
};

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-display text-foreground">
                <span className="font-black">SAFE</span>
                <span className="font-light text-muted-foreground">WALL</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                British Safety Engineering
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-display text-foreground mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-display text-foreground mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-display text-foreground mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-display text-foreground mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Balco Global Ltd. All Rights Reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🇬🇧</span>
              <span>Proudly Made in Britain</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
