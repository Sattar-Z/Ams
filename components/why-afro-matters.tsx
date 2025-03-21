import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyAfrobeatsMatters = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6 }
    })
  };

  const reasons = [
    {
      title: "A Global Phenomenon",
      description: "From Lagos to London, New York to Paris, Afrobeats has transcended borders, dominating charts and streaming platforms."
    },
    {
      title: "Cultural Bridge",
      description: "Afrobeats connects Africa with the world, fostering collaborations with Western artists like Drake, Beyoncé, and Ed Sheeran."
    },
    {
      title: "A Thriving Industry",
      description: "With millions of dedicated listeners, Afrobeats represents a booming market with huge investment potential in streaming, live events, and brand partnerships."
    },
    {
      title: "Authentic African Storytelling",
      description: "The music celebrates love, success, and resilience, offering Western audiences a fresh, authentic perspective on African culture."
    }
  ];

  return (
    <section className="py-8 sm:py-16 md:py-24 border-b border-white bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-center mb-12 sm:mb-16 text-4xl sm:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHY AFROBEATS MATTERS
        </motion.h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-800/50 to-black/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/30"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">{reason.title}</h3>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center px-1 pt-1 pb-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg">
            <span className="px-4 py-2 bg-black rounded-md text-lg sm:text-xl font-medium text-white">
              Join the Movement
            </span>
          </div>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Be part of Africa's global sound revolution and discover the business opportunities within this expanding market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAfrobeatsMatters;