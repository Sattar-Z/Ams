"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import SiteFooter from "@/components/site-footer";
import GalleryHomeSection from "@/components/gallery-home-section";
import GetInvolvedSection from "@/components/nafest-sponsorship-section";
import NafestSection from "@/components/nafest-section";
import GalleryHome2Section from "@/components/gallery-home2-section";
import GalleryHome3Section from "@/components/gallery-home3-section";
import GalleryHome5Section from "@/components/gallery-home5-section";
import GalleryHome4Section from "@/components/gallery-home4-section";
import ExampleSection from "@/components/example-section";
// import AMSExpectations from "@/components/panel-discussion";
import AMSExpectations from "@/components/panel-discussion-new";
import AfrobeatsSection from "@/components/what-is-afro";
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

export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Site Header */}
        <SiteHeader />

        <main>
          <HeroSection />
          <NafestSection/>
          <GetInvolvedSection/>
          <AfrobeatsSection/>
          <AMSExpectations />
          <GalleryHome5Section/>
          <GalleryHome4Section/>
          <GalleryHomeSection/>
          <GalleryHome2Section/>
          <GalleryHome3Section/>
          <TestimonialsSection/>
        </main>



        <SiteFooter />
      </div>
    </div>
  );
}
