import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = {
  primary: [
    {
      name: "PPL",
      logo: "/images/PPL.png",
      width: 400,
      height: 400,
    },
  ],
};

export function SponsorHeroSection() {
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
          <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white tracking-tight max-w-3xl">
            Proudly Supported By Our{" "}
            <div className="relative inline-block mt-2 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-500 to-red-500">
                Sponsors
              </span>
            </div>
          </h2>

          <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
          >
            We are grateful for the unwavering support from our sponsors who
            help drive our vision forward. Meet our primary sponsor below.
          </p>
        </motion.div>

        {/* Primary Sponsor Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-slate-800/50 rounded-full text-2xl text-slate-300 backdrop-blur-sm">
              Primary Sponsor
            </span>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-pink-500/10 blur-3xl" />

            {/* Sponsor logo grid */}
            <div className="relative grid grid-cols-1 gap-8 place-items-center">
              {sponsors.primary.map((sponsor) => (
                // <motion.div
                //   key={sponsor.name}
                //   className="group relative p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50"
                //   whileHover={{ scale: 1.02 }}
                // >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-auto w-[80%] md:w-[70%] object-contain"
                  priority
                />
                // </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Thank you for empowering our mission and contributing to the growth
            of African music globally.
          </p>

          {/* Optional: Add Sponsorship CTA Button */}
          <Button
            variant="outline"
            className="bg-slate-800/50 text-white hover:bg-slate-800/70 border-slate-700"
          >
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
