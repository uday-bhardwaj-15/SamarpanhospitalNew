"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Award,
  Users,
  Heart,
  Target,
  Calendar,
  Trophy,
  GraduationCap,
  Building2,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-hospital.jpg";
import { getImageSrc } from "@/lib/utils";
import Image from "next/image";

const timeline = [
  {
    year: "1995",
    title: "Foundation",
    description:
      "Samarpan Hospital Hospital was established by Dr. Gopesh Modi with a vision to provide world-class kidney care accessible to all.",
    icon: Building2,
  },
  {
    year: "2002",
    title: "First Kidney Transplant",
    description:
      "Successfully performed our first kidney transplant surgery, marking a milestone in the region's medical history.",
    icon: Heart,
  },
  {
    year: "2008",
    title: "Dialysis Center Expansion",
    description:
      "Opened our state-of-the-art dialysis center with 50+ stations, becoming the largest in the region.",
    icon: Target,
  },
  {
    year: "2012",
    title: "NABH Accreditation",
    description:
      "Received NABH accreditation for maintaining highest standards of patient care and hospital management.",
    icon: Award,
  },
  {
    year: "2016",
    title: "1000+ Transplants Milestone",
    description:
      "Celebrated our 1000th successful kidney transplant with a 98% success rate.",
    icon: Trophy,
  },
  {
    year: "2020",
    title: "Research & Training Institute",
    description:
      "Launched our Nephrology Research and Training Institute, training next-generation specialists.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Robotic Surgery Center",
    description:
      "Introduced robotic-assisted kidney transplant surgeries for minimally invasive procedures.",
    icon: Target,
  },
];

const certifications = [
  { name: "NABH Accredited", year: "Since 2012" },
  { name: "ISO 9001:2015", year: "Since 2008" },
  { name: "JCI Accredited", year: "Since 2018" },
  { name: "NABL Certified Lab", year: "Since 2010" },
  { name: "Green Hospital Certified", year: "Since 2020" },
  { name: "QCI Certified", year: "Since 2015" },
];

const stats = [
  { value: "25,000+", label: "Patients Treated Till Date" },
  { value: "1,000+", label: "Monthly OPD & IPD Patients" },
  { value: "900+", label: "Dialysis Sessions / Month" },
  { value: "24×7", label: "Care & Emergency Support" },
];

const teamImages = [
  { src: "/team.jpeg", alt: "Samarpan Hospital Team" },
  { src: "/team-1.webp", alt: "team-1" },
  { src: "/team-2.webp", alt: "team-2" },
  { src: "/team-3.webp", alt: "team-3" },
];

const TeamCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + teamImages.length) % teamImages.length),
    [],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % teamImages.length),
    [],
  );

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isHovered, next]);

  return (
    <div
      className="relative aspect-[21/9] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {teamImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {teamImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: i === current ? "4px" : "50%",
              background: i === current ? "white" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImageSrc(heroImg)}
            alt="Hospital"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="badge-primary mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Three Decades of
              <span className="text-gradient"> Healing Lives</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Since 1995, Samarpan Hospital Hospital has been at the forefront
              of nephrology care in India, transforming lives through advanced
              kidney treatments and compassionate care.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Director Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Image
                    src="/Director.webp"
                    width={500}
                    height={500}
                    alt="Dr. Gopesh Kumar Modi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years Leading</p>
              </div>
            </div>

            {/* Director Info */}
            <div>
              <span className="badge-primary mb-4">Our Visionary</span>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Dr. Gopesh Kumar Modi
              </h2>

              <p className="text-xl text-primary font-medium mb-6">
                Founder & Director
              </p>

              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Back in the early days, Dr. Gopesh Kumar Modi realized that
                  the future of healthcare is not defined only by medical
                  excellence, but by the trust built between a doctor and a
                  patient. He believed that healthcare is not a transaction — it
                  is a relationship that grows through care, empathy, and
                  responsibility.
                </p>

                <p>
                  With this belief, he laid the foundation of a patient-first
                  institution where innovation in medical science goes
                  hand-in-hand with compassion. As medicine evolved, Dr. Modi
                  strongly embraced technology as a tool to make healthcare not
                  only more efficient, but more human and accessible.
                </p>

                <p>
                  His vision is simple yet powerful — to make quality healthcare
                  available round the clock, wherever patients are, and whenever
                  they need it. A future where expert care is just one tap away,
                  marking the beginning of truly consumer-centric healthcare.
                </p>

                <p className="font-medium text-foreground">“Take Care”</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  MBBS (AIIMS, New Delhi)
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  MD & DM (Nephrology, AIIMS)
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  BE – Tufts Medical Centre, Boston (USA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-primary mb-4">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Milestones of
              <span className="text-gradient"> Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of our achievements and growth over three decades
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div
                      className={`premium-card p-8 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"} max-w-lg`}
                    >
                      <span className="text-3xl font-bold text-gradient">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow shrink-0">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-primary mb-4">Quality Assurance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certifications &
              <span className="text-gradient"> Accreditations</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence is validated by leading healthcare
              accreditation bodies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="premium-card p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-primary mb-4">Our Family</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Samarpan Hospital
              <span className="text-gradient"> Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated professionals behind our success
            </p>
          </div>

          {/* Team Photo Carousel */}
          <TeamCarousel />

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-primary/5">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Doctors</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-primary/5">
              <p className="text-3xl font-bold text-primary">300+</p>
              <p className="text-sm text-muted-foreground">Nursing Staff</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-primary/5">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Technicians</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-primary/5">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Total Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="premium-card p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class kidney care that is accessible,
                affordable, and compassionate. We are committed to treating
                every patient with dignity, using the latest medical
                advancements while maintaining the highest standards of safety
                and quality.
              </p>
            </div>

            {/* Vision */}
            <div className="premium-card p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in nephrology and kidney transplant
                care, setting new standards in patient outcomes and medical
                innovation. We envision a world where kidney disease is no
                longer a life sentence but a manageable condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="premium-card p-10 md:p-16 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience World-Class Care?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book an appointment today and let our expert team take care of
              your kidney health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
