"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/DSC_8313.webp",
    alt: "Gallery photo 1",
  },
  {
    id: 2,
    src: "/gallery/DSC_8332.webp",
    alt: "Gallery photo 2",
  },
  {
    id: 3,
    src: "/gallery/DSC_8334.webp",
    alt: "Gallery photo 3",
  },
  {
    id: 4,
    src: "/gallery/DSC_8375.webp",
    alt: "Gallery photo 4",
  },
  {
    id: 5,
    src: "/gallery/DSC_8376.webp",
    alt: "Gallery photo 5",
  },
  {
    id: 6,
    src: "/gallery/DSC_8380.webp",
    alt: "Gallery photo 6",
  },
  {
    id: 7,
    src: "/gallery/DSC_8385.webp",
    alt: "Gallery photo 7",
  },
  {
    id: 8,
    src: "/gallery/DSC_8387.webp",
    alt: "Gallery photo 8",
  },
  {
    id: 9,
    src: "/gallery/DSC_8389.webp",
    alt: "Gallery photo 9",
  },
  {
    id: 10,
    src: "/gallery/DSC_8399.webp",
    alt: "Gallery photo 10",
  },
  {
    id: 11,
    src: "/gallery/DSC_8404.webp",
    alt: "Gallery photo 11",
  },
  {
    id: 12,
    src: "/gallery/DSC_8415.webp",
    alt: "Gallery photo 12",
  },
  {
    id: 13,
    src: "/gallery/DSC_8430.webp",
    alt: "Gallery photo 13",
  },
  {
    id: 14,
    src: "/gallery/DSC_8431.webp",
    alt: "Gallery photo 14",
  },
  {
    id: 15,
    src: "/gallery/DSC_8438.webp",
    alt: "Gallery photo 15",
  },
  {
    id: 16,
    src: "/gallery/DSC_8442.webp",
    alt: "Gallery photo 16",
  },
  {
    id: 17,
    src: "/gallery/DSC_8446.webp",
    alt: "Gallery photo 17",
  },
  {
    id: 18,
    src: "/gallery/DSC_8451.webp",
    alt: "Gallery photo 18",
  },
  {
    id: 19,
    src: "/gallery/DSC_8466.webp",
    alt: "Gallery photo 19",
  },
  {
    id: 20,
    src: "/gallery/DSC_8470.webp",
    alt: "Gallery photo 20",
  },
  {
    id: 21,
    src: "/gallery/DSC_8483-Pano.webp",
    alt: "Gallery photo 21",
  },
  {
    id: 22,
    src: "/gallery/DSC_8484-Pano.webp",
    alt: "Gallery photo 22",
  },
  {
    id: 23,
    src: "/gallery/DSC_8492-Pano.webp",
    alt: "Gallery photo 23",
  },
  {
    id: 24,
    src: "/gallery/DSC_8519-Pano.webp",
    alt: "Gallery photo 24",
  },
  {
    id: 25,
    src: "/gallery/DSC_8593.webp",
    alt: "Gallery photo 25",
  },
  {
    id: 26,
    src: "/gallery/DSC_8603.webp",
    alt: "Gallery photo 26",
  },
  {
    id: 27,
    src: "/gallery/DSC_8604.webp",
    alt: "Gallery photo 27",
  },
  {
    id: 28,
    src: "/gallery/DSC_8606.webp",
    alt: "Gallery photo 28",
  },
  {
    id: 29,
    src: "/gallery/DSC_8623.webp",
    alt: "Gallery photo 29",
  },
  {
    id: 30,
    src: "/gallery/DSC_8638.webp",
    alt: "Gallery photo 30",
  },
  {
    id: 31,
    src: "/gallery/DSC_8649-Pano.webp",
    alt: "Gallery photo 31",
  },
];

// Bento-grid size pattern — cycles through sizes so the grid looks varied
const SIZES = [
  "col-span-2 row-span-2", // large
  "col-span-1 row-span-2", // tall
  "col-span-1 row-span-1", // small
  "col-span-1 row-span-1", // small
  "col-span-2 row-span-1", // wide
  "col-span-1 row-span-1", // small
  "col-span-1 row-span-1", // small
];

const getSize = (index: number) => SIZES[index % SIZES.length];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
    );
  const next = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryImages.length,
    );

  const current = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;
  const visibleImages = galleryImages.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary mb-4">Virtual Tour</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our World-Class
              <span className="text-gradient"> Facilities</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our state-of-the-art hospital
              infrastructure and facilities
            </p>
          </div>
        </div>
      </section>

      {/* ── Bento Grid ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            style={{ gridAutoRows: "180px" }}
          >
            {visibleImages.map((img, index) => (
              <div
                key={img.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${getSize(index)}`}
                onClick={() => openLightbox(index)}
              >
                {/* Photo */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 4}
                />

                {/* Dark vignette on hover only */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {visibleCount < galleryImages.length && (
            <div className="mt-12 text-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                Load More Images
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Hospital Beds" },
              { value: "50+", label: "Dialysis Stations" },
              { value: "10", label: "Operation Theaters" },
              { value: "5", label: "ICU Units" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6">
                <p className="text-4xl font-bold text-gradient">{s.value}</p>
                <p className="text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                key={current.id}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <p className="text-center text-white/50 text-sm mt-4">
              {(lightboxIndex ?? 0) + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
