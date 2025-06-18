import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FullscreenImageModal } from "@/components/ui/image-modal";
import { Button } from "./ui/button";

interface GalleryImage {
  name: string;
  src: string;
  role?: string;
}

function FoundersSection() {
  const foundersList = [
    {
      name: "Ramon Olaleye",
      role: "Systems Implementation Consultant / Branding Specialist",
      src: "/images/ramon.jpeg",
    },
    {
      name: "iKE (Black PHARAOH) Onuorah",
      role: "Board Director, Jumamo & Former Director, Orchard Nigerian office",
      src: "/images/ike.jpeg",
    },
    {
      name: "Chiedozie (Edo) Onuora",
      role: "CEO, Strictly Digital Music",
      src: "/images/edoze.jpeg",
    },
  ];

  const [fullscreenImage, setFullscreenImage] = useState<GalleryImage | null>(
    null
  );

  const openFullscreen = (image: GalleryImage) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="py-16 md:py-24 from-black to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col gap-16">
          {/* Top Section with Image and Initial Text */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="uppercase text-3xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white mb-6">
                The Visionaries Behind
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-yellow-700 to-red-800">
                  African Music Summit
                </span>
              </h2>
              <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
              >
                Founded in 2012 by Ramon Olaleye, a Systems Implementation
                Consultant / Branding Specialist, brothers Chiedozie (Edo) Onuora who
                runs a boutique distribution company called Strictly Digital
                Music, and iKE (Black PHARAOH) Onuorah, Board Director for new
                African Streaming Service Jumamo and former Director for the
                Orchard Nigerian office.
              </p>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-black via-black to-black rounded-2xl blur-lg opacity-20"></div>
                <Image
                  src="/images/founders2.JPG"
                  alt="The Founders of African Music Summit"
                  width={640}
                  height={640}
                  className="relative rounded-2xl w-full h-auto shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Founders Cards Section */}
          <motion.div
            className="mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-pink-500/10 blur-3xl" />

              {/* Featured images grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                {foundersList.map((founder, index) => (
                  <motion.div
                    key={index}
                    className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openFullscreen(founder)}
                  >
                    <Image
                      src={founder.src}
                      alt="pic"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-sm sm:text-base">
                        {founder.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {foundersList.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-slate-300">{founder.role}</p>
              </motion.div>
            ))}
          </motion.div>

          <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
          >
            The Afrobeats Educational Roadshow served as a pioneering platform
            that connected the emerging UK Afrobeats scene with the mainstream
            music industry. Over eight successful series from 2012 to 2016, it
            gained support from influential organizations like BPI, PRS for
            Music, PPL, BMI, DIT UK, Westminster University Commercial Music
            Department, The Black Music Research Unit (BMRU), The Africa Centre
            and more.
          </p>
          <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
          >
            The initiative's mission was to provide education, information, and
            empowerment to African music professionals while strategically
            introducing Afrobeats to the mainstream music business as
            demonstrated by one of Afrobeats earliest publication in Music Week
            2012 orchestrated by Strictly Entertainment Music.
          </p>
          <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
          >
            Now, as we revitalize and expand the initiative, TAER has
            transformed into the African Music Summit (AMS), underlining the
            current cultural growth, positioning, and global opportunities that
            the African music business has cultivated over the past 11 years
            since its inception. The AMS is a forward-looking event that seeks
            to push the boundaries of the African music industry.
          </p>

          {/* Achievement Section */}
          <motion.div
            className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="mb-16 uppercase text-3xl sm:text-5xl font-extrabold text-yellow-700 text-center">
              Topics to Be Discussed
            </h2>
            <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
            >
              The African Music Summit will be an all-encompassing and
              enlightening event that will address a diverse array of pivotal
              subjects in the realm of music and the music industry. Our
              esteemed speakers will offer invaluable insights into various
              areas, including traditional music, digital trends, and innovative
              technologies.
            </p>
            <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
            >
              Attendees can anticipate acquiring practical insights on the art
              of collaboration, strategic investments, and a profound
              understanding of the diverse business opportunities, all in the
              quest to thrive within the dynamic and thrilling realm of African
              music.
            </p>
          </motion.div>
          <div className="text-center">
          <Image
                  src="/images/ams-16.jpeg"
                  alt="deji"
                  width={1900}
                  height={1900}
                  className="size-148 md:size-150 rounded-2xl"
                />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundersSection;
