import { 
  HeartPulse, 
  Clock, 
  Users, 
  Award,
  Microscope,
  Shield,
  Activity,
  Bed,
  Stethoscope,
  Siren,
  FlaskConical,
  Trees
} from "lucide-react";
import dialysisImg from "@/assets/dialysis-room.jpg";
import { useMemo } from "react";
import { getImageSrc } from "@/lib/utils";

const features = [
  {
    icon: Bed,
    title: "30 Bed Hospital",
    description: "Modern facility equipped with varied room categories from General to Super Deluxe.",
  },
  {
    icon: Activity,
    title: "Dialysis Facility",
    description: "Operating in 3 shifts with advanced HDF Dialysis capabilities for better toxin removal.",
  },
  {
    icon: HeartPulse,
    title: "ICU & Critical Care",
    description: "Fully equipped Intensive Care Unit with ventilators and cardiac monitors.",
  },
  {
    icon: Microscope,
    title: "Modular OT",
    description: "State-of-the-art modular operation theater for safe surgical procedures.",
  },
  {
    icon: Siren,
    title: "Emergency Setup",
    description: "24×7 availability for Emergency, Pharmacy, and Ambulance services.",
  },
  {
    icon: FlaskConical,
    title: "In-house Diagnostics",
    description: "Complete pathology lab and diagnostic services available within the premises.",
  },
];

const stats = [
  { number: "24/7", label: "Emergency" },
  { number: "30+", label: "Beds" },
  { number: "3", label: "Dialysis Shifts" },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-4xl overflow-hidden shadow-hover">
              <img 
                src={getImageSrc(dialysisImg)}
                alt="Advanced Dialysis Unit"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 glass rounded-3xl p-6 shadow-card animate-float">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-4">
                    <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="badge-primary mb-6">Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              World-Class
              <span className="text-gradient"> Facilities</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Samarpan Hospital offers a comprehensive range of medical infrastructure designed to provide 
              the highest quality of care in a comfortable and safe environment.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-teal-100 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-teal-400 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
