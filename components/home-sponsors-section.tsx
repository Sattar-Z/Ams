"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl text-center sm:text-5xl font-extrabold text-yellow-700">
          Sponsored and Supported By
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 items-center">
          {[
            { logo: "/images/PPL.png", alt: "Company 1" },
            { logo: "/images/beat_fm.png", alt: "Company 2" },
            {
              logo: "/images/British_Phonographic_Industry.svg.png",
              alt: "Company 3",
            },
            { logo: "/images/bmru.png", alt: "Company 4" },
            { logo: "/images/aaPunch.png", alt: "Company 5" },
            { logo: "/images/onmi.jpg", alt: "Company 6" },
            { logo: "/images/dja.png", alt: "Company 7" },
          ].map((company, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4 rounded-lg shadow-lg transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={company.logo}
                alt={company.alt}
                width={400}
                height={400}
                className="h-auto w-[90%] md:w-[70%] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
