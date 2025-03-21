import React from "react";
import { motion } from "framer-motion";

const GlobalAmbassadors = () => {
  const artists = [
    {
      name: "Wizkid",
      title: "Starboy",
      description: "Grammy-winning icon known for global hits like 'Essence'",
      imageUrl: "/images/wizkid.jpg"
    },
    {
      name: "Burna Boy",
      title: "African Giant",
      description: "Grammy winner who's taken Afrofusion to international heights",
      imageUrl: "/images/burna.jpg"
    },
    {
      name: "Tems",
      title: "Leading Voice",
      description: "Soulful vocalist featured on global hits and Grammy-recognized",
      imageUrl: "/images/tems.jpg"
    },
    {
      name: "Davido",
      title: "30BG",
      description: "Influential star known for anthems that bridge continents",
      imageUrl: "/images/davido.jpg"
    },
    {
      name: "Tiwa Savage",
      title: "African Bad Girl",
      description: "Queen of Afrobeats with international recognition",
      imageUrl: "/images/tiwa.jpg"
    },
    {
      name: "Rema",
      title: "Afrorave Pioneer",
      description: "Young innovator behind global hit 'Calm Down'",
      imageUrl: "/images/rema.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-8 sm:py-16 md:py-24 border-b border-white bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-center mb-6 text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GLOBAL AMBASSADORS OF AFRICAN EXCELLENCE
        </motion.h2>
        
        <motion.p 
          className="text-center text-xl text-slate-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Meet the artists who have taken Afrobeats from Nigeria to the world stage, 
          redefining the global music landscape and showcasing African excellence.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-800/20 to-black/80 shadow-xl border border-purple-500/30">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artist.imageUrl} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-300 group-hover:bg-black/60">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400">{artist.name}</h3>
                  <p className="text-sm md:text-base text-orange-300 font-medium mb-1">{artist.title}</p>
                  <p className="text-xs md:text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{artist.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 rounded-lg text-lg font-bold text-white transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            EXPLORE ALL ARTISTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalAmbassadors;