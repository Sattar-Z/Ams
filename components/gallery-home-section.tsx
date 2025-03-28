import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FullscreenImageModal } from "@/components/ui/image-modal";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const featuredImages: GalleryImage[] = [
  {
    src: "/images/ams-24-01.jpeg",
    alt: "The Organisers",
    caption: "The Organisers - iKE (BP) Onuorah, Chiedozie (Edo) Onuora & Ramon Olaleye",
  },
  {
    src: "/images/ams-london-4.jpeg",
    alt: "Keynote - Popular Music",
    caption: "Popular Music is African Music",
  },
  {
    src: "/images/AMS-london-dec.jpeg",
    alt: "AMS - panel 1: The Afrobeats Phenomenon",
    caption: "The Afrobeats Phenomenon - Decoding the Global Takeover",
  },
  {
    src: "/images/ams-london2.jpeg",
    alt: "AMS - Panel 2: Digital Dynamics",
    caption:
      "Digital Dynamics - house streaming and social media are reshaping african music distribution",
  },
  {
    src: "/images/ams-london3.jpeg",
    alt: "Keynote - PPL and African Music",
    caption: "PPL and African Music: capacity building, collection and payments",
  },
  {
    src: "/images/ams-london-5.jpeg",
    alt: "Audience",
    caption: "AMS 2024 Audience",
  },
];

export function GalleryHomeSection() {
  const [fullscreenImage, setFullscreenImage] = useState<GalleryImage | null>(
    null
  );

  const openFullscreen = (image: GalleryImage) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <div className="container mt-10 mx-auto px-4 py-4 md:py-6">

        {/* Featured Images Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 text-lg sm:text-3xl font-extrabold text-slate-300 backdrop-blur-sm">
              AMS LONDON DEC 2024
            </span>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-pink-500/10 blur-3xl" />

            {/* Featured images grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
              {featuredImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openFullscreen(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm sm:text-base">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Section */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Explore our collection of memories from past events and meet the
            visionaries behind African Music Summit
          </p>

          <Button
            variant="outline"
            className="bg-slate-800/50 text-white hover:bg-slate-800/70 border-slate-700"
          >
            View All Photos
          </Button>
        </motion.div> */}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <FullscreenImageModal
            image={fullscreenImage}
            onClose={closeFullscreen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryHomeSection;
