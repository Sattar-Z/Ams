"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { GalleryHeroSection } from "@/components/gallery-hero-section";
import SiteFooter from "@/components/site-footer";
import ImageGallery from "@/components/image-gallery";
const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

const galleryImages: MediaItem[] = [
  {
    type: 'image',
    src: "/images/gall/img01.jpg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img02.jpg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img03.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img04.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img20.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img16.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img15.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img10.jpeg",
    alt: "",
    caption: "",
    
  },
  {
    type: 'image',
    src: "/images/gall/img22.jpeg",
    alt: "",
    caption: "",
    
  },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel1.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel2.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel3.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel4.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel5.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel6.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel7.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel9.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel10.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel11.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  // {
  //   type: 'video',
  //   src: "/images/Reels/reel12.mp4",
  //   alt: "vid 8 description",
  //   caption: "",
  // },
  {
    type: 'video',
    src: "https://youtu.be/7CUFlr5pco0?si=GTrmYy9qMKfUfjRE",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/PrD_bDtuA0k?si=XiW4D2GdQZ6LWvpq",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/1tg5Mm6EvEM?si=QEK5Dlfu1eJreRW7",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/SZ2iT2Pp7Ag?si=5-eCCd9JEtktKl1p",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/lqoiY06RjMI?si=gEkjp_pAP9d2R_jQ",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/ulKpRd-pChY?si=B6lKnzZIndLQbVlD",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/hDt1ewK69gY?si=zPsgVpZW5WX_com6",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/O6oxcGyHMAI?si=VxlgNuA-X_V1Kd1s",
    alt: "vid 8 description",
    caption: "",
  },
  {
    type: 'video',
    src: "https://youtu.be/14bzhesaxJ4?si=fBBgc1xxLnDSHzwU",
    alt: "vid 8 description",
    caption: "",
  },
];

export default function SponsorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Site Header */}
        <SiteHeader />

        <main>
          {/* Hero Section */}
          <GalleryHeroSection />
          <ImageGallery media={galleryImages} />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
