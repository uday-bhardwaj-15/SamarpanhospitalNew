"use client";

import { useState } from "react";
import { getImageSrc } from "@/lib/utils";
import { Search, Filter, ArrowUpDown, X, Clock, Users, Award, Phone, ArrowRight } from "lucide-react";
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
import dialysisImg from "@/assets/dialysis-room.jpg";
import icuImg from "@/assets/icu.jpg";
import surgeryImg from "@/assets/surgery.jpg";
import labImg from "@/assets/laboratory.jpg";
import receptionImg from "@/assets/reception.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";

const allDepartments = [
  {
    id: 101,
    name: "Fistula Surgery",
    shortDesc:
      "AV fistula creation and vascular access procedures for dialysis patients.",
    fullDesc:
      "The Fistula Surgery department specializes in creating and maintaining vascular access for patients undergoing dialysis. Our surgeons ensure long-term access patency with minimally invasive techniques and post-operative care.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=60",
    features: [
      "AV Fistula Creation",
      "Vascular Access Surgery",
      "Dialysis Access Care",
    ],
    doctors: 3,
    experience: "15+ Years",
    timing: "9 AM - 7 PM",
    phone: "+91 123 456 7901",
    headDoctor: "Dr. Amit Verma",
    equipment: ["Vascular Ultrasound", "Minor OT", "Access Monitoring Devices"],
    category: "surgery",
  },
  {
    id: 102,
    name: "Radiology",
    shortDesc:
      "Diagnostic imaging services supporting accurate medical diagnosis.",
    fullDesc:
      "Our Radiology department provides high-quality imaging services essential for diagnosis and treatment planning. Equipped with modern imaging systems, we support all clinical departments with timely and precise reports.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&auto=format&fit=crop&q=60",
    features: ["X-Ray", "Ultrasound", "CT Scan & Imaging Reports"],
    doctors: 4,
    experience: "18+ Years",
    timing: "8 AM - 8 PM",
    phone: "+91 123 456 7902",
    headDoctor: "Dr. Neha Kapoor",
    equipment: ["Digital X-Ray", "High-Resolution Ultrasound", "CT Scanner"],
    category: "diagnostics",
  },
  {
    id: 103,
    name: "Urology",
    shortDesc:
      "Diagnosis and treatment of urinary tract and urological disorders.",
    fullDesc:
      "The Urology department focuses on diseases of the urinary system and male reproductive organs. Our specialists manage stone disease, infections, and surgical urological conditions with advanced techniques.",
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a3dbfd5da?w=900&auto=format&fit=crop&q=60",
    features: ["Urinary Tract Care", "Stone Treatment", "Urological Procedures"],
    doctors: 5,
    experience: "20+ Years",
    timing: "9 AM - 6 PM",
    phone: "+91 123 456 7903",
    headDoctor: "Dr. Rohit Malhotra",
    equipment: ["Cystoscopy Unit", "Lithotripsy System", "Uro-Surgery OT"],
    category: "specialty",
  },
  {
    id: 104,
    name: "Pain Clinic",
    shortDesc:
      "Advanced pain management for chronic and acute conditions.",
    fullDesc:
      "Our Pain Clinic provides personalized pain management solutions using medical, interventional, and rehabilitative approaches to improve patient quality of life.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&auto=format&fit=crop&q=60",
    features: [
      "Chronic Pain Management",
      "Acute Pain Relief",
      "Non-Surgical Therapy",
    ],
    doctors: 2,
    experience: "12+ Years",
    timing: "10 AM - 5 PM",
    phone: "+91 123 456 7904",
    headDoctor: "Dr. Kavita Iyer",
    equipment: ["Nerve Block Kits", "Pain Assessment Tools", "Physio Support"],
    category: "support",
  },
  {
    id: 105,
    name: "Critical Care",
    shortDesc:
      "24/7 intensive care with advanced life-support systems.",
    fullDesc:
      "The Critical Care department delivers round-the-clock monitoring and life-saving treatment for critically ill patients, supported by advanced ICU technology and trained intensivists.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&auto=format&fit=crop&q=60",
    features: ["ICU Monitoring", "Life Support Systems", "Expert Intensivists"],
    doctors: 7,
    experience: "22+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7905",
    headDoctor: "Dr. Sandeep Khanna",
    equipment: ["Ventilators", "ICU Monitors", "Infusion Pumps"],
    category: "critical",
  },
  {
    id: 106,
    name: "Casualty",
    shortDesc:
      "Immediate medical assessment and emergency care.",
    fullDesc:
      "The Casualty department handles medical emergencies with rapid triage and stabilization, ensuring patients receive immediate and effective care.",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&auto=format&fit=crop&q=60",
    features: ["Emergency Assessment", "First Aid Care", "Rapid Response"],
    doctors: 6,
    experience: "20+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7906",
    headDoctor: "Dr. Manish Arora",
    equipment: ["Emergency Beds", "Defibrillators", "Trauma Kits"],
    category: "emergency",
  },
  {
    id: 107,
    name: "Emergency Dialysis",
    shortDesc:
      "24×7 dialysis services for urgent renal care.",
    fullDesc:
      "Emergency Dialysis services are available round-the-clock for patients requiring immediate renal support, ensuring rapid response during critical situations.",
    image:
      "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60",
    features: ["24×7 Dialysis", "Critical Renal Support", "Emergency Response"],
    doctors: 4,
    experience: "18+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7907",
    headDoctor: "Dr. Rakesh Gupta",
    equipment: ["Portable Dialysis Machines", "RO Plant", "Bedside Monitors"],
    category: "treatment",
  },
  {
    id: 108,
    name: "Plasmapheresis",
    shortDesc:
      "Advanced blood purification therapy.",
    fullDesc:
      "Our Plasmapheresis unit offers specialized blood component separation therapy for autoimmune and renal disorders, performed under expert supervision.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&auto=format&fit=crop&q=60",
    features: [
      "Blood Component Separation",
      "Autoimmune Therapy",
      "Critical Support",
    ],
    doctors: 3,
    experience: "16+ Years",
    timing: "On Appointment",
    phone: "+91 123 456 7908",
    headDoctor: "Dr. Sunita Mehra",
    equipment: ["Apheresis Machines", "Monitoring Systems", "Sterile Kits"],
    category: "specialty",
  },
  {
    id: 109,
    name: "Research",
    shortDesc:
      "Clinical research and medical innovation.",
    fullDesc:
      "The Research department conducts clinical studies and trials aimed at improving treatment outcomes and advancing medical science.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=60",
    features: ["Clinical Trials", "Medical Innovation", "Evidence-Based Care"],
    doctors: 5,
    experience: "10+ Years",
    timing: "9 AM - 5 PM",
    phone: "+91 123 456 7909",
    headDoctor: "Dr. Anil Deshmukh",
    equipment: ["Research Labs", "Data Analysis Tools", "Trial Monitoring Systems"],
    category: "research",
  },
  {
    id: 110,
    name: "VIP ICU",
    shortDesc:
      "Private intensive care with enhanced comfort.",
    fullDesc:
      "VIP ICU provides high-end critical care with privacy, personalized attention, and advanced monitoring for patients requiring intensive treatment.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=60",
    features: ["Private ICU Rooms", "Dedicated Care Team", "Enhanced Monitoring"],
    doctors: 4,
    experience: "20+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7910",
    headDoctor: "Dr. Pooja Malhotra",
    equipment: ["Premium ICU Beds", "Advanced Monitors", "Ventilators"],
    category: "critical",
  },
  {
    id: 111,
    name: "Poly Clinic",
    shortDesc:
      "Multi-specialty outpatient consultation services.",
    fullDesc:
      "Our Poly Clinic offers outpatient consultations across multiple specialties, ensuring coordinated and convenient patient care.",
    image:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=900&auto=format&fit=crop&q=60",
    features: ["Multi-Specialty Consultations", "OPD Services", "Follow-Up Care"],
    doctors: 9,
    experience: "15+ Years",
    timing: "9 AM - 8 PM",
    phone: "+91 123 456 7911",
    headDoctor: "Dr. Ashish Nair",
    equipment: ["Consultation Rooms", "EMR System", "Diagnostic Support"],
    category: "outpatient",
  },
  {
    id: 112,
    name: "General Ward",
    shortDesc:
      "Comfortable inpatient care and recovery facilities.",
    fullDesc:
      "The General Ward provides well-monitored inpatient care with 24/7 nursing support, ensuring patient comfort and recovery.",
    image:
      "https://images.unsplash.com/photo-1576765607924-1c8d9c2c0d8f?w=900&auto=format&fit=crop&q=60",
    features: ["Inpatient Care", "24/7 Nursing", "Recovery Support"],
    doctors: 6,
    experience: "18+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7912",
    headDoctor: "Dr. Mohan Lal",
    equipment: ["Hospital Beds", "Patient Monitoring", "Nursing Stations"],
    category: "inpatient",
  },
];


const Departments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedDept, setSelectedDept] = useState<typeof allDepartments[0] | null>(null);

  const filteredDepartments = allDepartments
    .filter((dept) => {
      const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === "all" || dept.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "doctors") return b.doctors - a.doctors;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary mb-4">Our Departments</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Specialized Care
              <span className="text-gradient"> Centers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              World-class facilities dedicated to comprehensive kidney health and nephrology care
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-6 border-b border-border/50 glass relative md:sticky md:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-border/50 bg-background/50 w-full"
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
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-48 h-12 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="core">Core Services</SelectItem>
                  <SelectItem value="treatment">Treatment</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="critical">Critical Care</SelectItem>
                  <SelectItem value="diagnostics">Diagnostics</SelectItem>
                  <SelectItem value="specialty">Specialty</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 h-12 rounded-xl">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="doctors">Most Doctors</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="group premium-card overflow-hidden cursor-pointer"
                onClick={() => setSelectedDept(dept)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImageSrc(dept.image)}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground capitalize">
                      {dept.category}
                    </span>
                  </div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {dept.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                    {dept.shortDesc}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{dept.doctors} Doctors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{dept.timing}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="glass" className="w-full group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No departments found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setFilterCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Department Modal */}
      <Dialog open={!!selectedDept} onOpenChange={() => setSelectedDept(null)} >
        <DialogContent className="
    w-[95vw]
    max-w-4xl
    max-h-[90vh]
    overflow-y-auto
    overflow-x-hidden
    p-0 sm:p-6
    scrollbar-hide
  " >
          {selectedDept && (
            <>
              <div className="relative h-64 mb-6 overflow-hidden rounded-t-lg mx-0 sm:-mx-6 sm:-mt-6 ">
                <img
                  src={getImageSrc(selectedDept.image)}
                  alt={selectedDept.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground capitalize mb-2 inline-block">
                    {selectedDept.category}
                  </span>
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    {selectedDept.name}
                  </DialogTitle>
                </div>
              </div>
<div className="px-4 sm:px-0">
              <DialogDescription className="text-base text-muted-foreground mb-6">
                {selectedDept.fullDesc}
              </DialogDescription>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/5 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{selectedDept.doctors}</p>
                  <p className="text-sm text-muted-foreground">Specialists</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 text-center">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{selectedDept.experience}</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-bold text-foreground">{selectedDept.timing}</p>
                  <p className="text-sm text-muted-foreground">Availability</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 text-center">
                  <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold text-foreground">{selectedDept.phone}</p>
                  <p className="text-sm text-muted-foreground">Contact</p>
                </div>
              </div>

              {/* Head Doctor */}
              <div className="p-4 rounded-2xl border border-border/50 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Department Head</p>
                <p className="text-lg font-semibold text-foreground">{selectedDept.headDoctor}</p>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Services Offered</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedDept.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Advanced Equipment</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.equipment.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 mb-4">
                <Button variant="hero" className="flex-1" onClick={() => window.location.href="/contact"}>
                  Book Appointment
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
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

export default Departments;
