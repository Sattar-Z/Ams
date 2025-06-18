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
    src: "/images/omni25/1.jpeg",
    alt: "AMS Team",
    caption:
      "AMS Team - Chiedozie (Edo) Onuora, iKE (BP) Onuorah & Ramon Olaleye",
  },
  {
    src: "/images/omni25/2.jpeg",
    alt: "Panel: The Role of the Nigerian Government in Strengthening the Creative Economy",
    caption: "The Role of the Nigerian Government in Strengthening the Creative Economy: Policies, Support and Opportunities",
  },
  {
    src: "/images/omni25/3.jpeg",
    alt: "Round Table: Discussion",
    caption: "Nigerian Music Business Round Table: Discussion",
  },
  {
    src: "/images/omni25/11.jpeg",
    alt: "The Omniverse 2025 Main Stage",
    caption: "The Omniverse 2025 Main Stage - Dragon's Den",
  },
  {
    src: "/images/omni25/5.jpeg",
    alt: "Reception: Omniverse 2025",
    caption: "Reception: Omniverse 2025 networking hosted at the UN Office Lagos",
  },
  {
    src: "/images/omni25/6.jpeg",
    alt: "The Team",
    caption: "Strictly entertainment team with Obi Asika",
  },
];

export function GalleryHome4Section() {
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
      <div className="container mx-auto px-4 py-1 mt-28 md:py-2">
        {/* Header Section */}
        {/* <motion.div
          className="flex flex-col items-center gap-6 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center uppercase mb-16 text-4xl sm:text-6xl font-extrabold">
            Looking Back at Past AMS Events
          </h2>
        </motion.div> */}

        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 text-lg sm:text-3xl font-extrabold text-slate-300 backdrop-blur-sm">
            THE OMNIVERSE AFRICA, LAGOS FEB-MAR 2025
          </span>
        </div>
        <div className="relative w-full aspect-video max-w-8xl mx-auto">
          <video
            className="absolute inset-0 w-full h-full rounded-xl"
            controls
            title="The Growth Of Afrobeats"
          >
            <source src="/images/vids/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3 className="mb-6 sm:mb-24 text-sm text-center sm:text-left sm:text-xl text-white font-normal sm:font-extrabold"
        style={{
          lineHeight: "30px;",
        }}
        >
  The Role of the Nigerian Government in Strengthening the Creative
  Economy: Policies, Support and Opportunities
</h3>

        {/* Featured Images Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <p className="text-slate-300 text-sm sm:text-base mb-6">
            Explore our collection of memories from past events and meet the
            visionaries behind African Music Summit
          </p>

          <Button
            variant="outline"
            className="bg-slate-800/50 text-white hover:bg-slate-800/70 border-slate-700"
          >
            View All Photos
          </Button> */}
        </motion.div>
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

export default GalleryHome4Section;
