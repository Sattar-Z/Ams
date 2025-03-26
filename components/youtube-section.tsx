import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function YoutubeSection() {
  return (
    <section className="py-10 sm:py-16 mb-20 px-4 bg-black border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-16 text-4xl sm:text-6xl font-extrabold text-WHITE">
          THE GROWTH OF AFROBEATS 2023
        </h2>
        <br />
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
          hidden
          style={{
            lineHeight: "50px;",
          }}
        >
          Explore how The African Music Summit is shaping the global presence of
          African music. Join thought leaders and industry innovators as they
          harness cultural equity and cutting-edge technologies to drive the
          growth of the African music industry.
        </p>
        <div className="mb-6 relative w-full aspect-video max-w-8xl mx-auto">
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/q3lnt3YMiiY?si=gCNsMUZKHHcY9YXP&rel=0"
            title="The Growth Of Afrobeats"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h3 className="text-1xl sm:text-3xl text-white">
          Video produced by Jassy Generation Ltd
        </h3>

        <div className="w-full py-2 mt-8 sm:py-4 sm:mt-8 md:py-6 md:mt-14 mx-auto px-4 sm:px-6 lg:px-">
          <motion.h2
            className="text-center mb-8 sm:mb-12 text-4xl sm:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ORIGIN OF AFROBEATS
          </motion.h2>

          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="lg:col-span-3 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p
                  className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Originating in Nigeria and Ghana, Afrobeats fuses traditional
                  African rhythms with contemporary influences like hip-hop,
                  R&B, dancehall, and highlife. It is distinct from Afrobeat
                  (pioneered by Fela Kuti), which carried strong political
                  messages and jazz-infused instrumentals. Instead, Afrobeats
                  thrives on rhythm, melody, and an undeniable energy that
                  resonates worldwide.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
          hidden
          style={{
            lineHeight: "50px;",
          }}
        >
          Originating in Nigeria and Ghana, Afrobeats fuses traditional African
          rhythms with contemporary influences like hip-hop, R&B, dancehall, and
          highlife. It is distinct from Afrobeat (pioneered by Fela Kuti), which
          carried strong political messages and jazz-infused instrumentals.
          Instead, Afrobeats thrives on rhythm, melody, and an undeniable energy
          that resonates worldwide.
        </p>
      </div>
    </section>
  );
}

export default YoutubeSection;
