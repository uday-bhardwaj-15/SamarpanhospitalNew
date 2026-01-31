import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dialysisImg from "@/assets/dialysis-room.jpg";
import icuImg from "@/assets/icu.jpg";
import surgeryImg from "@/assets/surgery.jpg";
import labImg from "@/assets/laboratory.jpg";
import receptionImg from "@/assets/reception.jpg";
import Image from "next/image";

const departments = [
  {
    name: "Fistula Surgery",
    description:
      "Specialized AV fistula creation and vascular access procedures for dialysis patients.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=60",
    features: [
      "AV Fistula Creation",
      "Vascular Access Surgery",
      "Dialysis Access Care",
    ],
    color: "from-primary to-teal-400",
  },
  {
    name: "Radiology",
    description:
      "Comprehensive diagnostic imaging services supporting accurate medical diagnosis.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&auto=format&fit=crop&q=60",
    features: ["X-Ray", "Ultrasound", "CT Scan & Imaging Reports"],
    color: "from-teal-400 to-teal-500",
  },
  {
    name: "Urology",
    description:
      "Advanced care for urinary tract disorders and urological conditions.",
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a3dbfd5da?w=900&auto=format&fit=crop&q=60",
    features: ["Urinary Tract Care", "Stone Treatment", "Urological Procedures"],
    color: "from-primary to-teal-600",
  },
];


const DepartmentsSection = () => {
  return (
    <section id="departments" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-primary mb-4">Our Departments</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Specialized Care
            <span className="text-gradient"> Centers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            World-class facilities dedicated to comprehensive kidney health and nephrology care
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group premium-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={dept.image} 
                  alt={dept.name}
                  height={100}
                  width={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {dept.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {dept.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {dept.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${dept.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Departments
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
