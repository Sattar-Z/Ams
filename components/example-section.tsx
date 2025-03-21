"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function ExampleSection() {
  return (
    <section className="py-8 sm:py-16 md:py-24 border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-8 sm:mb-12 text-4xl sm:text-6xl font-extrabold">
          Past Events
        </h2>
        
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-purple-500">
            THE OMNIVERSE CONFERENCE
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-purple-500">
            25 - 28 Feb 2025
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="w-full bg-slate-800 p-4 sm:p-6 shadow-xl backdrop-blur bg-transparent order-2 lg:order-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/images/omni-flyer.jpeg"
                alt="Omniverse Conference Flyer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>

          <div className="order-2 lg:order-2">
            <div className=" prose prose-lg prose-invert max-w-none mt-3">
              <p className="text-justify leading-10 sm:text-xl md:text-2xl text-slate-300 leading-relaxed sm:leading-relaxed mb-6"
              style={{
                lineHeight: "40px;",
                textAlign: "justify",
                wordSpacing: "-2px;"
              }}
              >
                Shaping Africa's Infinite Future Ready to unlock infinite
                possibilities? Join the brightest minds in African innovation,
                creativity, and entrepreneurship at The Omniverse Summit 2025.
                Whether you're an established leader, a budding entrepreneur, or
                simply passionate about African innovation, this event promises an
                enriching experience that will unveil Africa's potential. Don't
                just watch history make it.
              </p>
              
              <div className="space-y-2 mb-8">
                <p className="text-base sm:text-xl md:text-2xl text-slate-300">
                  <strong>Date:</strong> 25th - 28th February 2025
                </p>
                <p className="text-base sm:text-xl md:text-2xl text-slate-300">
                  <strong>Location:</strong> Landmark Event Center, Victoria Island, Lagos, Nigeria
                </p>
                <p className="text-base sm:text-xl md:text-2xl text-slate-300">
                  For more information and registration:
                </p>
              </div>
            </div>

            <a hidden href="#" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-800 text-lg sm:text-xl text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                CLICK HERE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;