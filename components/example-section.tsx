"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function ExampleSection() {
  return (
    <section className="py-2 sm:py-2 md:py-4 pb-7 sm:pb-16 border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-7 sm:pb-16">
        {/* <h2 className="text-center mb-8 sm:mb-12 text-4xl sm:text-6xl font-extrabold">
          Past Events
        </h2> */}

        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-red-500">
            RiKE MUSIC BUSINESS WORKSHOP & MASTERCLASS - NAIROBI, KENYA
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-red-500">
            6th - 8th May 2025
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="w-full order-2 lg:order-1 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* First Image */}
            <div className="w-full bg-slate-800 p-4 sm:p-6 shadow-xl backdrop-blur bg-transparent">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/kenya.jpeg"
                  alt="Omniverse Conference Flyer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Duplicate Image */}
            <div className="w-full bg-slate-800 p-4 sm:p-6 shadow-xl backdrop-blur bg-transparent">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/kenya3.jpeg"
                  alt="Omniverse Conference Flyer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </motion.div>

          <div className="order-2 lg:order-2 flex flex-col">
            <div className="prose prose-lg prose-invert max-w-none mt-3">
              <p
                className="text-justify sm:text-xl md:text-2xl text-slate-300 leading-relaxed sm:leading-relaxed mb-6"
                style={{
                  lineHeight: "40px;",
                  textAlign: "justify",
                  wordSpacing: "-2px;",
                }}
              >
                Strictly Entertainment Music, in partnership with RiKE, the
                British Council Kenya, and KCB Bank, recently delivered a highly
                successful mentorship workshop in Nairobi for the Kenyan music
                sector. This groundbreaking initiative brought together leading
                local and international professionals to deliver workshops and
                masterclasses focused on best practices, monetisation, and
                intellectual property within the music industry. Supported by
                IFPI and as producers of the African Music Summit (AMS), we are
                proud to align this collaboration with our shared vision for
                empowering and upskilling music practitioners across the
                continent.
              </p>

              <div className="space-y-2 mb-8">
                <p
                  className="text-justify sm:text-xl md:text-2xl text-slate-300 leading-relaxed sm:leading-relaxed mb-6"
                  style={{
                    lineHeight: "40px;",
                    textAlign: "justify",
                    wordSpacing: "-2px;",
                  }}
                >
                  The programme provided invaluable insights and practical tools
                  to Kenyan music professionals, fostering a spirit of
                  innovation, collaboration, and professional growth. We are
                  honoured to have worked closely with our partners to deliver
                  this important initiative and look forward to further
                  engagement with the Kenyan music community.
                </p>
                {/* <p
                  className="text-justify sm:text-xl md:text-2xl text-slate-300 leading-relaxed sm:leading-relaxed mb-6"
                  style={{
                    lineHeight: "40px;",
                    textAlign: "justify",
                    wordSpacing: "-2px;",
                  }}
                >
                  "As Team
                  <strong> SEM & AMS</strong>, we are honoured to work closely
                  with RiKE, the British Council Kenya, KCB, and IFPI Africa to
                  deliver this important initiative, and we look forward to
                  engaging with Kenyan music professionals on ground in Nairobi
                  very soon."
                </p> */}
                {/* <p
                  className="text-justify sm:text-xl md:text-2xl text-slate-300 leading-relaxed sm:leading-relaxed mb-6"
                  style={{
                    lineHeight: "40px;",
                    textAlign: "justify",
                    wordSpacing: "-2px;",
                  }}
                >
                  For further details, please visit www.africanmusicsummit.com
                </p> */}
              </div>
            </div>

            <div className="text-center mb-1 sm:mt-16 mt-5 sm:mb-6 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                RiKE WORKSHOP & CULTURAL EXCHANGE
              </h3>
            </div>

            {/* Four image grid beneath the text */}
            <div className="grid grid-cols-2 gap-4 mt-1">
              {/* Image 1 */}
              <div className="bg-slate-800 p-3 shadow-xl backdrop-blur bg-transparent">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/kenya2.jpeg"
                    alt="RIKE Workshop Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-slate-800 p-3 shadow-xl backdrop-blur bg-transparent">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/kenya4.jpeg"
                    alt="RIKE Workshop Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
