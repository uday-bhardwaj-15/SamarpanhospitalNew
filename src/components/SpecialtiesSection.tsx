import { ArrowRight, AlertCircle, HeartPulse, Activity, Stethoscope, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    icon: AlertCircle,
    title: "Emergency Dialysis",
    description: "Immediate dialysis services for acute kidney failure and emergencies.",
    highlight: true,
  },
  {
    icon: HeartPulse,
    title: "Chronic Kidney Disease Care",
    description: "Comprehensive management and treatment plans for all stages of CKD.",
    highlight: false,
  },
  {
    icon: Activity,
    title: "Kidney Transplant Support",
    description: "Complete pre and post-transplant care with living donor programs.",
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: "ICU & Critical Care",
    description: "24/7 intensive care with CRRT and multi-organ support systems.",
    highlight: false,
  },
  {
    icon: FlaskConical,
    title: "Research & Diagnostics",
    description: "Advanced diagnostic labs and participation in clinical trials.",
    highlight: false,
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comprehensive
            <span className="text-gradient"> Kidney Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From prevention to treatment, we cover the entire spectrum of kidney care
          </p>
        </div>

        {/* Specialties List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                specialty.highlight 
                  ? "bg-gradient-to-r from-primary via-teal-500 to-primary bg-[length:200%_100%] hover:bg-right text-primary-foreground shadow-glow" 
                  : "premium-card hover:border-primary/20"
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                specialty.highlight 
                  ? "bg-white/20" 
                  : "bg-gradient-to-br from-primary/10 to-teal-100 group-hover:from-primary group-hover:to-teal-400"
              }`}>
                <specialty.icon className={`w-8 h-8 transition-colors duration-500 ${
                  specialty.highlight 
                    ? "text-white" 
                    : "text-primary group-hover:text-white"
                }`} />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  specialty.highlight 
                    ? "text-white" 
                    : "text-foreground group-hover:text-primary"
                }`}>
                  {specialty.title}
                </h3>
                <p className={specialty.highlight ? "text-white/80" : "text-muted-foreground"}>
                  {specialty.description}
                </p>
              </div>

              {/* Arrow */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                specialty.highlight 
                  ? "bg-white/20 group-hover:bg-white/30" 
                  : "bg-primary/5 group-hover:bg-primary group-hover:text-white"
              }`}>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                  specialty.highlight ? "text-white" : "text-primary group-hover:text-white"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
