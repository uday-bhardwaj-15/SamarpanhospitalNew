import dialysisImg from "@/assets/dialysis-room.jpg";
import receptionImg from "@/assets/reception.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";
import icuImg from "@/assets/icu.jpg";
import labImg from "@/assets/laboratory.jpg";
import surgeryImg from "@/assets/surgery.jpg";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    title: "Modern Reception",
    category: "Facility",
    image: receptionImg,
    size: "large",
  },
  {
    title: "Dialysis Unit",
    category: "Treatment",
    image: dialysisImg,
    size: "small",
  },
  {
    title: "ICU Ward",
    category: "Critical Care",
    image: icuImg,
    size: "small",
  },
  {
    title: "Patient Room",
    category: "Comfort",
    image: patientRoomImg,
    size: "medium",
  },
  {
    title: "Laboratory",
    category: "Diagnostics",
    image: labImg,
    size: "medium",
  },
  {
    title: "Surgical Suite",
    category: "Surgery",
    image: surgeryImg,
    size: "large",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">Our Infrastructure</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            World-Class
            <span className="text-gradient"> Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a virtual tour of our state-of-the-art hospital infrastructure
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                item.size === "large" 
                  ? "col-span-2 row-span-2" 
                  : item.size === "medium" 
                  ? "col-span-2" 
                  : ""
              }`}
            >
              {/* Image */}
              <Image 
                src={item.image} 
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="gallery" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
          >
            Schedule a Hospital Tour
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
