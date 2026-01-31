import { Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import labImg from "@/assets/laboratory.jpg";
import dialysisImg from "@/assets/dialysis-room.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";

const blogs = [
  {
    title: "Understanding Chronic Kidney Disease: A Complete Guide",
    excerpt: "Learn about the stages of CKD, early warning signs, and how lifestyle changes can slow progression.",
    category: "Education",
    readTime: "8 min read",
    author: "Dr. Priya Sharma",
    image: labImg,
  },
  {
    title: "Life on Dialysis: Tips for Better Quality of Life",
    excerpt: "Practical advice from our patients and doctors on managing daily life while on dialysis treatment.",
    category: "Lifestyle",
    readTime: "6 min read",
    author: "Dr. Rajesh Kumar",
    image: dialysisImg,
  },
  {
    title: "Kidney-Friendly Diet: Foods to Eat and Avoid",
    excerpt: "Nutrition plays a crucial role in kidney health. Discover the best foods for your kidneys.",
    category: "Nutrition",
    readTime: "5 min read",
    author: "Nutritionist Team",
    image: patientRoomImg,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="badge-primary mb-4">Health Resources</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Latest from Our
              <span className="text-gradient"> Blog</span>
            </h2>
          </div>
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group premium-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* CTA */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
