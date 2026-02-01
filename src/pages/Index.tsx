"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import DoctorsSection from "@/components/DoctorsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import DirectorSection from "@/components/DirectorSection";
import ContactFormSection from "@/components/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <QuickLinksSection />
        <DepartmentsSection />
        <DirectorSection/>
        <DoctorsSection />
        <WhyChooseUsSection />
        <GallerySection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactFormSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
