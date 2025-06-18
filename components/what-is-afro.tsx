import React from "react";
import { motion } from "framer-motion";

const AfrobeatsSection = () => {
  return (
    <section className="w-full py-8 sm:py-24 md:py-26 border-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-">
        <motion.h2
          className="text-center mb-8 sm:mb-12 text-4xl sm:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT US
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
                The African Music Summit, initially known as The Afrobeats
                Educational Roadshow (TAER), has evolved into a unique gathering
                dedicated to exploring and advancing the African music
                industry's international presence. With its central theme,
                "Leveraging Our Cultural Equity, From the Streets to the
                Boardroom," the summit focuses on innovative ideas, cutting-edge
                technologies, and forward-thinking strategies that drive the
                African music industry's growth.
              </p>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <motion.div 
                  className="bg-transparent backdrop-blur-md border border-white/20 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-bold text-yellow-400">Global Impact</h4>
                  <p className="text-white">Transforming charts worldwide with its unique fusion of sounds</p>
                </motion.div>

                <motion.div 
                  className="bg-yellow-700/30 backdrop-blur-md border border-white/20 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-bold text-yellow-400">Cultural Heritage</h4>
                  <p className="text-white">Rooted in rich African musical traditions and storytelling</p>
                </motion.div>

                <motion.div 
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-bold text-yellow-400">Future Evolution</h4>
                  <p className="text-white">Continuously innovating and reshaping global music landscapes</p>
                </motion.div>
              </div> */}

              <div hidden className="mt-8">
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-lg sm:text-xl text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfrobeatsSection;
