import { useState } from "react";
import { Clock, ArrowRight, User, X, Calendar, Tag, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import labImg from "@/assets/laboratory.jpg";
import dialysisImg from "@/assets/dialysis-room.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";
import Image from "next/image";

const blogs = [
  {
    title: "Understanding Chronic Kidney Disease: A Complete Guide",
    excerpt: "Learn about the stages of CKD, early warning signs, and how lifestyle changes can slow progression.",
    category: "Education",
    readTime: "8 min read",
    author: "Dr. Priya Sharma",
    date: "January 15, 2024",
    image: labImg,
    content: `Chronic Kidney Disease (CKD) is a progressive condition that affects millions worldwide. Understanding its stages and symptoms is crucial for early intervention and better outcomes.

**What is CKD?**
CKD is defined as kidney damage or decreased kidney function for three or more months. The kidneys filter waste and excess fluids from your blood, which are then excreted in your urine.

**The Five Stages of CKD:**
1. **Stage 1**: Normal or high GFR (>90) with some kidney damage
2. **Stage 2**: Mild decrease in GFR (60-89)
3. **Stage 3**: Moderate decrease in GFR (30-59)
4. **Stage 4**: Severe decrease in GFR (15-29)
5. **Stage 5**: Kidney failure (GFR <15)

**Early Warning Signs:**
- Fatigue and weakness
- Difficulty concentrating
- Poor appetite
- Trouble sleeping
- Muscle cramping at night
- Swollen feet and ankles
- Dry, itchy skin
- Frequent urination, especially at night

**Prevention and Management:**
Regular health check-ups, maintaining healthy blood pressure, controlling diabetes, staying hydrated, and avoiding nephrotoxic substances are key to preventing CKD progression.`,
    tags: ["CKD", "Prevention", "Health Tips"],
  },
  {
    title: "Life on Dialysis: Tips for Better Quality of Life",
    excerpt: "Practical advice from our patients and doctors on managing daily life while on dialysis treatment.",
    category: "Lifestyle",
    readTime: "6 min read",
    author: "Dr. Rajesh Kumar",
    date: "January 10, 2024",
    image: dialysisImg,
    content: `Living with dialysis doesn't mean giving up on life. With the right approach and mindset, many patients lead fulfilling, active lives while managing their treatment.

**Understanding Your Treatment:**
Dialysis replaces some kidney functions, filtering waste and excess fluid from your blood. Whether you're on hemodialysis or peritoneal dialysis, understanding your treatment helps you take control.

**Nutrition Tips:**
- Limit sodium intake to manage fluid retention
- Monitor potassium and phosphorus levels
- Maintain adequate protein intake
- Stay within your fluid allowance
- Work with a renal dietitian

**Staying Active:**
Exercise is beneficial for dialysis patients. Consider:
- Walking
- Light strength training
- Swimming (with precautions)
- Yoga and stretching

**Emotional Wellbeing:**
- Join support groups
- Stay connected with loved ones
- Consider counseling if needed
- Practice stress-management techniques

**Travel and Work:**
Many dialysis patients successfully travel and work. Plan ahead, communicate with your care team, and explore options like holiday dialysis centers.`,
    tags: ["Dialysis", "Lifestyle", "Patient Care"],
  },
  {
    title: "Kidney-Friendly Diet: Foods to Eat and Avoid",
    excerpt: "Nutrition plays a crucial role in kidney health. Discover the best foods for your kidneys.",
    category: "Nutrition",
    readTime: "5 min read",
    author: "Nutritionist Team",
    date: "January 5, 2024",
    image: patientRoomImg,
    content: `A kidney-friendly diet is essential for managing kidney disease and preventing further damage. Here's your comprehensive guide to eating well with kidney concerns.

**Foods to Include:**
- **Low-potassium fruits**: Apples, berries, grapes
- **Low-potassium vegetables**: Cabbage, cauliflower, peppers
- **High-quality proteins**: Egg whites, fish, chicken
- **Healthy fats**: Olive oil, omega-3 rich foods

**Foods to Limit or Avoid:**
- High-sodium processed foods
- High-potassium foods (bananas, oranges, potatoes)
- High-phosphorus foods (dairy, nuts, colas)
- Excessive protein

**Meal Planning Tips:**
1. Read nutrition labels carefully
2. Cook meals at home when possible
3. Use herbs and spices instead of salt
4. Keep a food diary
5. Work with a renal dietitian

**Hydration:**
Fluid needs vary based on your kidney function and treatment type. Some patients need to limit fluids while others don't. Always follow your doctor's recommendations.

**Sample Meal Ideas:**
- Breakfast: Egg white omelet with peppers and herbs
- Lunch: Grilled chicken salad with olive oil dressing
- Dinner: Baked fish with roasted cauliflower`,
    tags: ["Nutrition", "Diet", "Kidney Health"],
  },
];

interface Blog {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string ;
  content: string;
  tags: string[];
}

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
const handleShare = (blog: Blog) => {
  const slug = blog.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const url = `${window.location.origin}/blog/${slug}`;

  navigator.clipboard.writeText(url)
    .then(() => {
      alert("Article link copied!");
    })
    .catch(() => {
      alert("Failed to copy link");
    });
};
  return (
    <section id="blog" className="section-padding bg-background relative overflow-hidden">
      {/* Background Kidney Decorations */}
      <div className="absolute top-20 left-10 opacity-[0.03]">
        <svg width="180" height="216" viewBox="0 0 200 240" fill="currentColor" className="text-primary">
          <path d="M100 0C60 0 30 30 20 70C10 110 20 150 40 180C60 210 90 240 100 240C110 240 140 210 160 180C180 150 190 110 180 70C170 30 140 0 100 0ZM80 60C90 50 110 50 120 60C130 70 130 90 120 100C110 110 90 110 80 100C70 90 70 70 80 60Z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.03] rotate-45">
        <svg width="150" height="180" viewBox="0 0 200 240" fill="currentColor" className="text-accent">
          <path d="M100 0C60 0 30 30 20 70C10 110 20 150 40 180C60 210 90 240 100 240C110 240 140 210 160 180C180 150 190 110 180 70C170 30 140 0 100 0ZM80 60C90 50 110 50 120 60C130 70 130 90 120 100C110 110 90 110 80 100C70 90 70 70 80 60Z"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
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
              className="group premium-card overflow-hidden cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedBlog && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <Image 
                    src={selectedBlog.image} 
                    alt={selectedBlog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {selectedBlog.category}
                    </span>
                  </div>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {selectedBlog.title}
                </DialogTitle>
              </DialogHeader>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 py-4 border-b border-border">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4 text-primary" />
                  {selectedBlog.author}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {selectedBlog.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none py-6">
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <Tag className="w-4 h-4 text-primary" />
                {selectedBlog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6">
                {/* <Button variant="outline"
  size="sm"
  className="flex-1"
  onClick={() => handleShare(selectedBlog)}>
                  <Share2 className="w-4 h-4" />
                  Share Article
                </Button> */}
              
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
