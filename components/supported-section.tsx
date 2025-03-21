"use client";

import { motion } from 'framer-motion'
import { Code, Zap, Palette, Layout, Users, ChevronRight } from 'lucide-react'
import React from 'react'
import Image from "next/image";

function SupportedSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 hidden className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
        Everything you need to build modern UIs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            image: '/images/taer.png',
          },
          {
            image: '/images/gamma.png',
          },
          {
            image: '/images/AMAN.png',
          },
          {
            image: '/images/relpi.png',
          },
          {
            image: '/images/mcsk.png',
          },
          {
            image: '/images/checkm8te.png',
          },
          {
            image: '/images/sony.png',
          },
          {
            image: '/images/warner.png',
          },
          {
            image: '/images/bmg.png',
          },
          {
            image: '/images/beatbread.png',
          },
          {
            image: '/images/syncafrica.png',
          },
          {
            image: '/images/Empire.png',
          },
          {
            image: '/images/tuned_global.png',
          },
          {
            image: '/images/koko.png',
          },
          {
            image: '/images/the_firma.png',
          },
          {
            image: '/images/spotify.png',
          },
          {
            image: '/images/pgm.png',
          },
          {
            image: '/images/69.png',
          },
          {
            image: '/images/jumamo_logo.png',
          },
          {
            image: '/images/w4a.png',
          },
          {
            image: '/images/crown_caste.png',
          },
          {
            image: '/images/aim.png',
          },
          {
            image: '/images/empawa.png',
          },
        ].map((feature, index) => (
          <motion.div
              className="w-full bg-slate-800/50 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={feature.image}
                  alt="Support Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default SupportedSection