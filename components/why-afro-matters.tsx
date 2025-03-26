import React from "react";
import { motion } from "framer-motion";

const WhyAfrobeatsMatters = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6 },
    }),
  };

  const reasons = [
    {
      title: "A Global Phenomenon",
      description:
        "From Lagos to London, New York to Paris, Afrobeats has transcended borders, dominating charts and streaming platforms.",
      image: "/images/p1.png", // Replace with your actual image path
    },
    {
      title: "Cultural Bridge",
      description:
        "Afrobeats connects Africa with the world, fostering collaborations with Western artists like Drake, Beyoncé, and Ed Sheeran.",
      image: "/images/p1.png", // Replace with your actual image path
    },
    {
      title: "A Thriving Industry",
      description:
        "With millions of dedicated listeners, Afrobeats represents a booming market with huge investment potential in streaming, live events, and brand partnerships.",
      image: "/images/p1.png", // Replace with your actual image path
    },
    {
      title: "Authentic African Storytelling",
      description:
        "The music celebrates love, success, and resilience, offering Western audiences a fresh, authentic perspective on African culture.",
      image: "/images/p1.png", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <motion.h2
          className="text-center text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-black mb-28"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHY AFROBEATS MATTERS
        </motion.h2>
        <div className="grid gap-36 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {/* Text Section */}
              <div className="flex-1 space-y-4 text-center md:text-left self-start">
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors">
                  {reason.title}
                </h3>
                <p
                  className="text-justify text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 pt-6"
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  {reason.description}
                </p>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex justify-center self-start">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-[350px] object-cover rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAfrobeatsMatters;