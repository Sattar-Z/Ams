"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl uppercase sm:text-5xl font-extrabold text-white text-center mb-12">
        Regional sponsors
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
        <motion.div
            className="w-full bg-slate-800/50 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/images/sampra.png"
                alt="Musically Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full bg-slate-800/50 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/images/aaPunch.png"
                alt="Musically Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
