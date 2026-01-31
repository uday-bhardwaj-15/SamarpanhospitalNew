"use client";

import { useState } from "react";
import { getImageSrc } from "@/lib/utils";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dialysisImg from "@/assets/dialysis-room.jpg";
import receptionImg from "@/assets/reception.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";
import icuImg from "@/assets/icu.jpg";
import labImg from "@/assets/laboratory.jpg";
import surgeryImg from "@/assets/surgery.jpg";
import heroImg from "@/assets/hero-hospital.jpg";

const galleryImages = [
  {
    id: 1,
    title: "Hospital Exterior",
    category: "Building",
    image: heroImg,
    size: "large",
    description: "Our modern hospital building with state-of-the-art architecture.",
  },
  {
    id: 2,
    title: "Modern Reception",
    category: "Facility",
    image: receptionImg,
    size: "medium",
    description: "Welcoming reception area designed for patient comfort.",
  },
  {
    id: 3,
    title: "Dialysis Unit",
    category: "Treatment",
    image: dialysisImg,
    size: "small",
    description: "Advanced dialysis center with latest equipment.",
  },
  {
    id: 4,
    title: "ICU Ward",
    category: "Critical Care",
    image: icuImg,
    size: "medium",
    description: "24/7 intensive care unit with advanced monitoring.",
  },
  {
    id: 5,
    title: "Patient Room",
    category: "Comfort",
    image: patientRoomImg,
    size: "small",
    description: "Comfortable private rooms for patient recovery.",
  },
  {
    id: 6,
    title: "Laboratory",
    category: "Diagnostics",
    image: labImg,
    size: "large",
    description: "NABL accredited diagnostic laboratory.",
  },
  {
    id: 7,
    title: "Surgical Suite",
    category: "Surgery",
    image: surgeryImg,
    size: "medium",
    description: "State-of-the-art operation theaters.",
  },
  {
    id: 8,
    title: "Dialysis Station",
    category: "Treatment",
    image: dialysisImg,
    size: "small",
    description: "Individual dialysis stations for patient privacy.",
  },
  {
    id: 9,
    title: "Recovery Area",
    category: "Care",
    image: patientRoomImg,
    size: "medium",
    description: "Peaceful recovery spaces for healing.",
  },
  {
    id: 10,
    title: "Emergency Unit",
    category: "Emergency",
    image: icuImg,
    size: "small",
    description: "24/7 emergency services with rapid response.",
  },
  {
    id: 11,
    title: "Waiting Lounge",
    category: "Facility",
    image: receptionImg,
    size: "large",
    description: "Comfortable waiting areas for families.",
  },
  {
    id: 12,
    title: "Research Lab",
    category: "Research",
    image: labImg,
    size: "medium",
    description: "Advanced research facilities for medical innovation.",
  },
];

const categories = ["All", "Building", "Facility", "Treatment", "Critical Care", "Comfort", "Diagnostics", "Surgery", "Care", "Emergency", "Research"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Generate dynamic grid classes based on image size
  const getGridClass = (size: string, index: number) => {
    // Create a varied bento grid pattern
    const patterns = [
      "col-span-2 row-span-2", // large
      "col-span-2 row-span-1", // wide
      "col-span-1 row-span-2", // tall
      "col-span-1 row-span-1", // small
    ];

    if (size === "large") return "col-span-2 row-span-2";
    if (size === "medium") {
      // Alternate between wide and tall for medium
      return index % 3 === 0 ? "col-span-2 row-span-1" : "col-span-1 row-span-2";
    }
    return "col-span-1 row-span-1";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary mb-4">Virtual Tour</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our World-Class
              <span className="text-gradient"> Facilities</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our state-of-the-art hospital infrastructure and facilities
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 sticky top-20 z-40 glass">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary/50 text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${getGridClass(item.size, index)}`}
                onClick={() => openLightbox(item, index)}
              >
                {/* Image */}
                <img 
                  src={getImageSrc(item.image)} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-gradient">200+</p>
              <p className="text-muted-foreground mt-2">Hospital Beds</p>
            </div>
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-gradient">50+</p>
              <p className="text-muted-foreground mt-2">Dialysis Stations</p>
            </div>
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-gradient">10</p>
              <p className="text-muted-foreground mt-2">Operation Theaters</p>
            </div>
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-gradient">5</p>
              <p className="text-muted-foreground mt-2">ICU Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-black/95 border-none">
          {selectedImage && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={getImageSrc(selectedImage.image)}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-accent text-sm font-medium uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/70 mt-1 max-w-xl">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="text-white/50 text-sm">
                    {currentIndex + 1} / {filteredImages.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
