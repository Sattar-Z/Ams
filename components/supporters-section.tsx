"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function SupportersSection() {
  return (
    <section className="py-8 sm:py-16 md:py-24 lg:py-32">
      <h2 className="uppercase text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 px-4">
        Our Supporters
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Supporter Cards Container */}
        <div className="space-y-12 md:space-y-16">
          {/* BPI Card */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              className="w-full bg-transparent rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/British_Phonographic_Industry.svg.png"
                  alt="BPI Logo"
                  fill
                  className="size-70 object-contain rounded-lg"
                />
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <p
                className="text-justify leading-10 sm:text-lg text-slate-300"
                style={{
                  lineHeight: "40px;",
                  textAlign: "justify",
                  wordSpacing: "-2px;",
                }}
              >
                The BPI (British Phonographic Industry), is a UK record label
                trade association representing the UK's world-leading recorded
                music industry, including over 500 independent labels, and Sony
                Music Entertainment UK, Universal Music UK, and Warner Music UK,
                actively shaping the future of the British music landscape.
              </p>
            </div>
          </div>

          {/* BMRU Card */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              className="w-full bg-transparent rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/bmru.png"
                alt="BMRU Logo"
                height={300}
                width={300}
                className="size-90 object-contain rounded-lg"
              />
            </motion.div>
            <div className="order-1">
              <p
                className="text-justify leading-10 sm:text-lg text-slate-300"
                style={{
                  lineHeight: "40px;",
                  textAlign: "justify",
                  wordSpacing: "-2px;",
                }}
              >
                The Black Music Research Unit, established at the University of
                Westminster under Mykaell S. Riley's guidance, comprises a
                diverse blend of researchers and practitioners. This collective,
                offering a mix of academic and industry knowledge, focuses on
                documenting the musical journey of UK's black and minority
                ethnic communities.
              </p>
            </div>
          </div>

          {/* Musically Card */}
          {/* <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              className="w-full bg-transparent rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/musically.png"
                  alt="Musically Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <p className="text-base sm:text-lg text-slate-300">
                Music:)ally is a knowledge and skills company that has become an
                essential resource for the modern music business. Our
                subscription business information service is read by over 20,000
                executives worldwide including the major labels, and thousands
                of independent labels, artist managers and publishers.
              </p>
            </div>
          </div> */}
        </div>

        {/* Contact Section */}
        <div className="mt-16 mb-36 text-center">
          <p className="text-base sm:text-lg text-slate-300 mb-6">
            Interested in becoming a Sponsor or Supporter?
          </p>
          <Button
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold h-12 px-8 rounded-lg transition-colors w-full sm:w-auto"
            onClick={() =>
              (window.location.href = "mailto:enquiries@africanmusicsummit.com")
            }
          >
            Contact Us
          </Button>
        </div>

        <h2 className="mt-10 uppercase text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 px-4">
          Exclusive Radio Partner
        </h2>
        {/* Musically Card */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <motion.div
            className="w-full bg-transparent rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/images/beat_fm.png"
                alt="Musically Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <p
              className="text-justify leading-10 sm:text-lg text-slate-300"
              style={{
                lineHeight: "40px;",
                textAlign: "justify",
                wordSpacing: "-2px;",
              }}
            >
              Formerly known as BANG Radio, The Beat London 103.6fm will
              continue to fly the flag as London’s number one urban community
              radio station for young people. Teaming up with our new sister
              station The Beat 99.9 in Nigeria, The Beat London celebrates its
              strong connection with a global audience and in particular between
              the UK and Africa.
              <br />
              <br />
              With music remaining at the core of our programming, both stations
              share the same passion for providing a platform for our under 25’s
              community and creating a space where their talents, views,
              opinions and ideas beat at the heart of our station.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportersSection;
