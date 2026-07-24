import { Quote, Award, Heart, Stethoscope } from "lucide-react";
import Image from "next/image";

const DirectorSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background Kidney Decorations */}
      <div className="absolute top-20 left-10 opacity-5">
        <svg
          width="200"
          height="240"
          viewBox="0 0 200 240"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M100 0C60 0 30 30 20 70C10 110 20 150 40 180C60 210 90 240 100 240C110 240 140 210 160 180C180 150 190 110 180 70C170 30 140 0 100 0ZM80 60C90 50 110 50 120 60C130 70 130 90 120 100C110 110 90 110 80 100C70 90 70 70 80 60Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-45">
        <svg
          width="150"
          height="180"
          viewBox="0 0 200 240"
          fill="currentColor"
          className="text-accent"
        >
          <path d="M100 0C60 0 30 30 20 70C10 110 20 150 40 180C60 210 90 240 100 240C110 240 140 210 160 180C180 150 190 110 180 70C170 30 140 0 100 0ZM80 60C90 50 110 50 120 60C130 70 130 90 120 100C110 110 90 110 80 100C70 90 70 70 80 60Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        <svg
          width="600"
          height="720"
          viewBox="0 0 200 240"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M100 0C60 0 30 30 20 70C10 110 20 150 40 180C60 210 90 240 100 240C110 240 140 210 160 180C180 150 190 110 180 70C170 30 140 0 100 0ZM80 60C90 50 110 50 120 60C130 70 130 90 120 100C110 110 90 110 80 100C70 90 70 70 80 60Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Director Image */}
          <div className="relative group">
            {/* Image Container */}
            <div className="relative rounded-4xl overflow-hidden shadow-hover">
              <Image
                width={500}
                height={500}
                src="/Director.webp"
                alt="Dr. Gopesh Modi - Director"
                className="w-full h-[550px] object-contain object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Dr. Gopesh Modi
                </h3>
                <p className="text-white/80 text-lg">
                  Director & Chief Nephrologist
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">25+ Years</div>
                  <div className="text-sm text-muted-foreground">
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Right - Message Content */}
          <div>
            <span className="badge-primary mb-6">Director's Message</span>

            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-100 flex items-center justify-center mb-8">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 italic">
              "At Samarpan Hospital, we believe every patient deserves access to
              world-class kidney care. Our mission is to combine cutting-edge
              medical technology with the warmth of compassionate healing,
              ensuring that every individual who walks through our doors
              receives not just treatment, but hope."
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With over three decades of experience in nephrology and transplant
              medicine, I founded Samarpan Hospital with a singular vision — to
              create a center of excellence that prioritizes patient outcomes
              above all else. Today, we stand proud as one of India's most
              trusted kidney care institutions.
            </p>

            {/* Director Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: Stethoscope,
                  number: "25,000+",
                  label: "Patients Treated",
                },
                { icon: Heart, number: "500+", label: "Transplants" },
                { icon: Award, number: "25+", label: "Awards" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-background shadow-soft"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
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

export default DirectorSection;
