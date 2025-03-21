"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function ExampleSection2() {
  return (
    <section className="py-2 sm:py-4 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center mb-16 text-4xl sm:text-6xl font-extrabold">
      Looking Back at Past AMS Events
        </h2>
        {/* <h2 className="text-center mb-16 text-2xl sm:text-4xl font-extrabold text-purple-500 px-4 sm:px-6 lg:px-8"
        style={{
          lineHeight: "80px;" ,
        }}
        >
        THE OMNIVERSE CONFERENCE 
        25 - 28 Feb 2025
        </h2> */}
        {/* <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-start">
          <motion.div
            className=" bg-slate-800  p-6 md:p-6 shadow-4xl backdrop-blur bg-transparent mt-8 md:mt-0 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/omni-flyer.jpeg"
              alt="Logo"
              width={740}
              height={740}
              className="size-198 md:size-200"
            />
          </motion.div>
          <div>
            <p
              className="text-base mt-4 sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
              style={{
                lineHeight: "50px;",
              }}
            >
              Shaping Africa's Infinite Future Ready to unlock infinite
              possibilities? Join the brightest minds in African innovation,
              creativity, and entrepreneurship at The Omniverse Summit 2025.
              Whether you're an established leader, a budding entrepreneur, or
              simply passionate about African innovation, this event promises an
              enriching experience that will unveil Africa's potential. Don't
              just watch history—make it.
              <br />
              <br />
              Date: 25th - 28th February 2025
              <br />
              <br />
              Location: Landmark Event Center, Victoria Island, Lagos, Nigeria
              For more information and registration.
            </p>
            <a href="www.omniverseafrica.com" target="_blank">
              <Button className="bg-blue-500 text-xl hover:bg-blue-800 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
                CLICK HERE
              </Button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ExampleSection2;
