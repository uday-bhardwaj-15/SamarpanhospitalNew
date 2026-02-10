import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { allDepartments } from "@/lib/data";
import { getImageSrc } from "@/lib/utils";


const DepartmentsSection = () => {
  // Take first 3 departments for the home page sections (or select specific ones)
  const departments = allDepartments.slice(0, 3);

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
        <div className=" flex gap-6 overflow-x-auto pb-4
  md:grid md:grid-cols-2
  lg:grid-cols-3
  md:overflow-visible
  scrollbar-hide">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group premium-card overflow-hidden
             min-w-[280px] sm:min-w-[320px]
             md:min-w-0"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={getImageSrc(dept.image)} 
                  alt={dept.name}
                  height={300} // Added width/height for optimization
                  width={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {dept.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3"> {/* Added line-clamp */}
                  {dept.shortDesc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {dept.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/50`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5" onClick={() => window.location.href = `/departments?deptId=${dept.id}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" onClick={() => window.location.href = "/departments"}>
            View All Departments
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
