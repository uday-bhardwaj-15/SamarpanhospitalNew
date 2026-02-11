"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getImageSrc } from "@/lib/utils";
import { Search, Filter, ArrowUpDown, X, Star, Award, Calendar, Phone, Clock, GraduationCap, Briefcase, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allDoctors } from "@/lib/data";

const departments = ["All Departments", "Nephrology", "Kidney Transplant", "Dialysis Unit", "ICU & Critical Care", "Diagnostics Lab", "Pediatric Nephrology"];


const Doctors = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [filterDepartment, setFilterDepartment] = useState("All Departments");
  const [selectedDoctor, setSelectedDoctor] = useState<typeof allDoctors[0] | null>(null);

  useEffect(() => {
    const doctorId = searchParams?.get("doctorId");
    if (doctorId) {
      const doctor = allDoctors.find((d) => d.id === parseInt(doctorId));
      if (doctor) {
        setSelectedDoctor(doctor);
      }
    }
  }, [searchParams]);

  const filteredDoctors = allDoctors
    .filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = filterDepartment === "All Departments" || doctor.department === filterDepartment;
      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary mb-4">Medical Experts</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet Our
              <span className="text-gradient"> Specialists</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Highly qualified nephrologists and surgeons dedicated to providing world-class kidney care
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-6 border-b border-border/50 glass relative  md:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-border/50 bg-background/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              {/* Filter */}
              <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                <SelectTrigger className="w-full md:w-56 h-12 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 h-12 rounded-xl">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experience</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group premium-card overflow-hidden cursor-pointer"
                onClick={() => setSelectedDoctor(doctor)}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={getImageSrc(doctor.image)}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {doctor.department}
                    </span>
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
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">{doctor.reviews} reviews</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="glass" size="sm" className="w-full">
                    <Calendar className="w-4 h-4" />
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No doctors found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setFilterDepartment("All Departments"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Doctor Modal */}
      <Dialog open={!!selectedDoctor} onOpenChange={() => setSelectedDoctor(null)}>
        <DialogContent className=" w-[95vw]
    max-w-4xl
    max-h-[90vh]
    overflow-y-auto
    overflow-x-hidden
    p-0 sm:p-6 scrollbar-hide">
          {selectedDoctor && (
            <><div className="px-4 sm:px-0">
    
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Image & Quick Info */}
                <div className="md:w-1/3">
                  <div className="relative rounded-2xl overflow-hidden mb-4 w-full">
                    <img
                      src={getImageSrc(selectedDoctor.image)}
                      alt={selectedDoctor.name}
                      className="w-full aspect-[3/4] object-cover object-top"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-semibold text-foreground">{selectedDoctor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Availability</p>
                        <p className="text-sm font-medium text-foreground">{selectedDoctor.availability}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10">
                      <Briefcase className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Consultation Fee</p>
                        <p className="text-sm font-medium text-foreground">{selectedDoctor.consultationFee}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                      <Languages className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Languages</p>
                        <p className="text-sm font-medium text-foreground">{selectedDoctor.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="md:w-2/3">
                  <DialogHeader className="text-left mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground w-fit mb-2">
                      {selectedDoctor.department}
                    </span>
                    <DialogTitle className="text-3xl font-bold text-foreground">
                      {selectedDoctor.name}
                    </DialogTitle>
                    <p className="text-lg text-primary font-medium">{selectedDoctor.specialty}</p>
                  </DialogHeader>

                  {/* Education & Experience */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{selectedDoctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{selectedDoctor.experience}</span>
                    </div>
                  </div>

                  <DialogDescription className="text-base text-muted-foreground mb-6">
                    {selectedDoctor.bio}
                  </DialogDescription>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.specializations.map((spec, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Achievements</h4>
                    <div className="space-y-2">
                      {selectedDoctor.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-accent/10">
                          <Award className="w-5 h-5 text-accent" />
                          <span className="text-sm text-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <Button variant="hero" className="flex-1" onClick={() => window.location.href="/contact"}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {selectedDoctor.phone}
                    </Button>
                  </div>
                </div>
              </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Doctors;
