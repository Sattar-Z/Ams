import React from "react";
import { motion } from "framer-motion";

const AfrobeatsSection = () => {
  return (
    <section className="py-8 sm:py-16 md:py-24 border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-center mb-8 sm:mb-12 text-4xl sm:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHAT IS AFROBEATS
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-2 w-full order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-purple-700 to-orange-500 rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Africa's Global Sound Revolution</h3>
                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
                    <div className="flex justify-center space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-white animate-pulse" 
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-3 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify"
                  }}
                >
                  At African Music Summit (AMS), we champion the power of African music on the world stage. One genre leading this revolution is Afrobeats, a dynamic and infectious sound that has captivated global audiences.
                </p>
                
                <div className="mt-8 space-y-4">
                  <motion.div 
                    className="bg-gradient-to-r from-purple-900 to-purple-800 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-yellow-400">Global Impact</h4>
                    <p className="text-white">Transforming charts worldwide with its unique fusion of sounds</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-orange-900 to-orange-800 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-yellow-400">Cultural Heritage</h4>
                    <p className="text-white">Rooted in rich African musical traditions and storytelling</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-yellow-400">Future Evolution</h4>
                    <p className="text-white">Continuously innovating and reshaping global music landscapes</p>
                  </motion.div>
                </div>
                
                <div hidden className="mt-8">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-lg sm:text-xl text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                    DISCOVER MORE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfrobeatsSection;