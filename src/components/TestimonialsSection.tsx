import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Gupta",
    location: "Delhi",
    rating: 5,
    text: "The dialysis unit here is exceptional. The staff is caring and the technology is world-class. I've been coming here for 2 years and it feels like family.",
    treatment: "Hemodialysis Patient",
  },
  {
    name: "Sunita Devi",
    location: "Mumbai",
    rating: 5,
    text: "Dr. Priya Sharma saved my husband's life. Her expertise in kidney transplants is remarkable. We are forever grateful to Samarpan Hospital.",
    treatment: "Transplant Recipient Family",
  },
  {
    name: "Arun Mehta",
    location: "Bangalore",
    rating: 5,
    text: "From diagnosis to treatment, the entire journey was smooth. The hospital's modern facilities and compassionate staff made a difficult time easier.",
    treatment: "CKD Patient",
  },
  {
    name: "Kavitha Reddy",
    location: "Chennai",
    rating: 5,
    text: "Emergency dialysis at 2 AM - they were ready and saved my mother's life. The 24/7 care is not just a promise, it's their commitment.",
    treatment: "Emergency Care",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary via-teal-600 to-teal-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by
            <span className="text-accent"> Thousands</span>
          </h2>
          <p className="text-lg text-white/70">
            Real experiences from our patients and their families
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/50 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.treatment} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-12 mt-20 pt-10 border-t border-white/10">
          {[
            { label: "Google Rating", value: "4.9", icon: "⭐" },
            { label: "Practo Reviews", value: "4.8", icon: "⭐" },
            { label: "Happy Patients", value: "50K+", icon: "💚" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white flex items-center gap-2 justify-center">
                {item.value} <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="text-sm text-white/60 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
