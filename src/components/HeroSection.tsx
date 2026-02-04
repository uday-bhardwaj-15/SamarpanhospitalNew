import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle, ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import { getImageSrc } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={getImageSrc(heroImage)} 
          alt="Samarpan Hospital Hospital" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-slow" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full mb-8 animate-fade-up">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">
             Central India's Most Advanced Kidney Care Center
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 animate-fade-up">
            <span className="text-white">Future of</span>
            <br />
            <span className="text-gradient-light">Kidney Care</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-up">
            Experience world-class nephrology services with cutting-edge dialysis technology, 
            expert transplant surgeons, and compassionate 24/7 care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up">
            <Button variant="hero" size="xl" className="group" onClick={() => window.location.href = "/contact"}>
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-light" size="xl" className="group" onClick={() => window.location.href = "/"}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Virtual Tour
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 animate-fade-up">
            {[
              "NABH Accredited",
              "24/7 Emergency",
              "50K+ Patients",
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        {/* <div className="absolute bottom-10 right-10 hidden xl:block animate-slide-left">
          <div className="glass rounded-3xl p-8 w-80">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "20+", label: "Expert Doctors" },
                { number: "50K+", label: "Happy Patients" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        {/* <span className="text-sm text-white/50 font-medium">Scroll to explore</span> */}
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
