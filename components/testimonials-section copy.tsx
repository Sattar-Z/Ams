"use client";

import { motion } from "framer-motion";
import React from "react";

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Kate Reilly",
              role: "Chief Membership & People Officer [PPL]",
              quote:
                "We are delighted to be supporting the evolution of this event which puts the African music business centre stage. The rise of Afrobeats over the past few years has been nothing short of meteoric; PPL is proud to work with some of its brightest stars to drive their international neighbouring rights revenues as this music reaches new audiences around the world.",
            },
            {
              name: "Adv Ntsietso Mokitimi-Makhofola",
              role: "Chief Legal & Revenue Officer/ Company Secretary [SAMPRA]",
              quote:
                "The IFPI reported Africa as the fastest-growing music market in 2022. The African Music Summit will propel further growth through exposure of opportunities in Africa, and collaboration between African music creators and the world and amongst the African music players. SAMPRA finds a fit with the objectives of the Summit and is excited to be part of this journey. SAMPRA also takes pride in the work that African creatives are doing to unite.",
            },
            {
              name: "Dr Jo Twist OBE",
              role: " Chief Executive [BPI]",
              quote:
                "The great opportunities across both North and Sub-Saharan Africa are starting to be realised as they emerge as the continent’s fastest growing and thriving music regions, largely thanks to the rising global popularity of the Afrobeats scene. We are excited to partner on this event to bring the British music business together to support the expanding music market in Africa and help realise its untapped potential.",
            },
            {
              name: "Obi Asika",
              role: "Director-General/ CEO, National Council For Arts & Culture, Nigeria, + Founder, Omniverse Africa",
              quote:
                "I am delighted to support the African Music Summit, the world is finally beginning to feel the power and potential of our music but we need more of these events and conversations to dig into licencing, touring, product and merchandise as we urgently drive monetization for African creators at home and abroad.",
            },
            {
              name: "Sipho Dlamini",
              role: "President/ Managing Director of Africa & Middle East [Gamma] ",
              quote:
                "Gamma is genuinely enthusiastic about our involvement in the African Music Summit 2023. We view this as a significant opportunity to not only participate in but also actively advance the discussions surrounding the growth of the African music business. We are committed to driving initiatives that will not only bolster the industry but also contribute to the widespread global appreciation of African music.",
            },
            {
              name: "Con Raso",
              role: "Managing Director & Founder Tuned Global",
              quote: "The impact of AMS on enabling partnerships and empowering the music business sector is unparalleled. It's a crucial platform for industry players to converge, and discuss issues that impact services, labels and artists, providing innovation, and elevating African music on the global stage.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
