import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Departments", href: "#/departments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Dialysis", href: "#" },
    { name: "Kidney Transplant", href: "#" },
    { name: "Nephrology", href: "#" },
    { name: "Critical Care", href: "#" },
    { name: "Lab Services", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden pt-24">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="relative z-20 container-custom">
  <div className="bg-gradient-to-r from-primary to-teal-500 rounded-4xl p-10 md:p-14 mb-20 shadow-glow">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Need Expert Kidney Care?
        </h3>
        <p className="text-white/80 text-lg">
          Book your consultation today and take the first step towards better health.
        </p>
      </div>

      <Button variant="glass" size="xl" className="flex-shrink-0">
        Book Appointment
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  </div>
</div>

      {/* Main Footer */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Samarpan Hospital</span>
                <span className="text-xs text-white/50">Kidney Hospital</span>
              </div>
            </a>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              Leading the way in kidney care with advanced technology, 
              experienced specialists, and compassionate service.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Samarpan Hospital Kidney and Multispeciality Center,<br />
                  Plot No 34/35, Viceroy Park Rd, Anamika Nagar, Rohit Nagar,<br />
                  Bawadiya Kalan, Gulmohar Colony, Bhopal, MP 462039
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="text-sm">
                  <a href="tel:+917554026900" className="text-white/60 hover:text-accent transition-colors block">
                    +91 755 402 6900
                  </a>
                  <span className="text-accent text-xs font-medium">24/7 Emergency</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:samarpankidney1@gmail.com" className="text-white/60 hover:text-accent transition-colors text-sm">
                  samarpankidney1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
  <div className="container-custom py-6 flex flex-col items-center justify-center gap-2 text-center">
    <p className="text-white/40 text-sm">
      © {currentYear} Samarpan Hospital. All rights reserved.
    </p>

    <p className="text-white/40 text-sm flex items-center gap-1">
      Made with
      <span className="text-red-500">❤️</span>
      by
      <a
        href="https://medimize.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition underline underline-offset-4"
      >
        Medimize
      </a>
    </p>
  </div>
</div>

    </footer>
  );
};

export default Footer;
