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
    caption: "The Organisers - Ramon Olaleye, Ike and Chiedozie (Edo) Onuora",
  },
  {
    src: "/images/ams-24-1.jpeg",
    alt: "The Organisers",
    caption: "The Organisers - Ramon Olaleye, Ike and Chiedozie (Edo) Onuora",
  },
  {
    src: "/images/ams-23-0.jpeg",
    alt: "The Organisers",
    caption: "The Organisers - Ramon Olaleye, Ike and Chiedozie (Edo) Onuora",
  },
];

export function GalleryHeroSection() {
  const [fullscreenImage, setFullscreenImage] = useState<GalleryImage | null>(null);

  const openFullscreen = (image: GalleryImage) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black relative flex items-center w-full justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white tracking-tight max-w-4xl">
            Capturing the Spirit of{" "}
            <div className="relative inline-block mt-2 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-500 to-red-500">
                African Music Summit
              </span>
            </div>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold text-center leading-relaxed">
            Journey through moments that capture the essence of Africa's diverse
            and influential music industry at AMS London 2024
          </p>
        </motion.div>

        {/* Featured Images Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-slate-800/50 rounded-full text-2xl text-slate-300 backdrop-blur-sm">
              Featured Moments
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
        <motion.div
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

export default GalleryHeroSection;