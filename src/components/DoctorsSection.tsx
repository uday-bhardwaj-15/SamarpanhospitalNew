import { Star, Award, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { allDoctors } from "@/lib/data";
import { getImageSrc } from "@/lib/utils";

const DoctorsSection = () => {
  // Take first 4 doctors for the home page sections
  const doctors = allDoctors.slice(0, 4);

  return (
    <section id="doctors" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="badge-primary mb-4">Expert Team</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Meet Our
              <span className="text-gradient"> Specialists</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Highly qualified nephrologists and surgeons dedicated to providing world-class kidney care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4
    sm:grid sm:grid-cols-2
    lg:grid-cols-4
    sm:overflow-visible
    scrollbar-hide snap-x snap-mandatory">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group premium-card overflow-hidden
             min-w-[280px] sm:min-w-0 snap-x snap-mandatory"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={getImageSrc(doctor.image)} 
                  alt={doctor.name}
                  width={400} // Added width/height for Next.js Image optimization
                  height={500}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-accent font-medium text-sm">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-4">
                  {doctor.education}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{doctor.experience}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="glass" size="sm" className="w-full" onClick={() => window.location.href = `/team?doctorId=${doctor.id}`}>
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" onClick={() => window.location.href = "/team"}>
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
