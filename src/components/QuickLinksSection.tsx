import { 
  Stethoscope, 
  Building2, 
  Users, 
  CalendarCheck, 
  Phone,
  HeartPulse,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    icon: HeartPulse,
    title: "Dialysis Services",
    description: "State-of-the-art dialysis units with latest technology",
    href:"/departments"
  },
  {
    icon: Building2,
    title: "Departments",
    description: "Explore our specialized nephrology departments",
     href:"/departments"
  },
  {
    icon: Users,
    title: "Our Doctors",
    description: "Meet our team of expert nephrologists",
     href:"/doctors"
  },
  {
    icon: CalendarCheck,
    title: "Appointments",
    description: "Book your consultation online easily",
     href:"/contact"
  },
  {
    icon: Phone,
    title: "Emergency",
    description: "24/7 emergency kidney care available",
     href:"/contact"
  },
  {
    icon: Stethoscope,
    title: "Health Check",
    description: "Comprehensive kidney screening packages",
    href:"/contact"
  
  },
];

const QuickLinksSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-subtle">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">Quick Access</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How Can We Help You?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group premium-card p-6 text-center cursor-pointer relative overflow-hidden"
            >
              
            
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-100 flex items-center justify-center group-hover:from-primary group-hover:to-teal-400 transition-all duration-500">
                <link.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="relative font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="relative text-xs text-muted-foreground leading-relaxed">
                {link.description}
              </p>

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary/10">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
