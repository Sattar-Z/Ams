"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function NafestSection() {
  return (
    <section className="py-2 sm:py-2 md:py-4 pb-7 sm:pb-16 border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-7 sm:pb-16">
        {/* Event Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-red-500">
            AFRICAN MUSIC SUMMIT AT NAFEST 2025 – ENUGU, NIGERIA
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-red-500">
            22–29 November 2025
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Flyer and Additional Content */}
          <motion.div
            className="w-full order-1 lg:order-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Flyer */}
            <div className="w-full bg-slate-800/30 p-4 sm:p-6 shadow-2xl backdrop-blur-sm border border-slate-700/50 rounded-lg">
              <div
                className="relative w-full"
                style={{ aspectRatio: "2400/3000" }}
              >
                <Image
                  src="/images/nafest-flyer.jpg"
                  alt="NAFEST 2025 Official Flyer"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* About NAFEST Section */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
              <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6">
                About NAFEST
              </h4>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-4 text-justify">
                The National Festival of Arts & Culture (NAFEST) is the flagship programme of the National Council for Arts and Culture (NCAC) and one of Nigeria's most significant cultural festivals. NAFEST serves as a powerful platform for bringing together stakeholders in the arts and culture sector, offering opportunities to interact, showcase talent, and celebrate the values of our heritage.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed text-justify">
                As NCAC rebrands NAFEST to be more relevant and impactful, the festival is set to become the biggest cultural event in Nigeria, partnering with government, the private sector, and the global community to deliver a renewed and vibrant experience. <span>Find out more about <a href="http://www.ncac.gov.ng" className="text-yellow-400 hover:underline">NAFEST</a></span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            className="order-2 lg:order-2 flex flex-col space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Partnership Info */}
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-6 text-justify">
                <strong className="text-slate-200">
                  Strictly Entertainment Music (SEM)
                </strong>{" "}
                and the{" "}
                <strong className="text-slate-200">
                  African Music Summit (AMS)
                </strong>{" "}
                are proud to partner with the{" "}
                <strong className="text-green-400">
                  National Council for Arts and Culture (NCAC)
                </strong>{" "}
                for NAFEST 2025 in Enugu.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-6 text-justify">
                This year's one week festival, themed{" "}
                <strong className="text-yellow-700">"Connected Culture"</strong>, will feature a dynamic{" "}
                <strong className="text-red-400">three-day African Music Summit programme</strong>{" "}
                designed to empower talent, inspire industry growth, and showcase the South-East as the next vibrant hub for music and creativity from Nigeria/Africa.
              </p>
            </div>

            {/* What to Expect Section */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
              <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6">
                What to Expect:
              </h4>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-4 text-justify">
                The African Music Summit at NAFEST 2025 will bring together leading voices in music, business, and culture for a series of keynotes, panels, workshops, and masterclasses.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-200">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Enhancing South-Eastern music business practice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Exporting South-Eastern music globally</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Marketing, law, and intellectual property</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Songwriting, production, branding, and digital marketing</span>
                </div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mt-4 text-justify">
                The Summit will also celebrate the region's rich cultural heritage, with a spotlight on language, identity, and the global potential of Igbo music.
              </p>
            </div>

            {/* Programme Details */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-yellow-700/30">
              <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
                Programme Details Coming Soon
              </h4>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4 text-justify">
                Further announcements including the full schedule of workshops, masterclasses, songwriting and recording camps, and the list of facilitators will be released in August 2025.
              </p>
              <p className="text-lg font-bold text-yellow-400 text-center">
                Stay tuned for updates!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-width Organizers Section */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
            <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6 text-center">
              AMS Team and OBI
            </h4>
            <div
              className="relative w-full max-w-2xl mx-auto"
              style={{ aspectRatio: "537/256" }}
            >
              <Image
                src="/images/nafest-team.png"
                alt="NAFEST 2025 Organizers"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            {/* Contact Information */}
            <div className="text-center mt-6 space-y-2">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400">
                Save the Date: NAFEST 2025 | ENUGU | 22–29 November
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                Follow us on X, IG & FB:{" "}
                <span className="text-yellow-400 font-semibold">
                  @amusicsummit
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NafestSection;