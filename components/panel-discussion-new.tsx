import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const AMSExpectations = () => {
  const sections = [
    {
      id: 1,
      image: "/images/pan3.jpeg",
      icon: "/images/chat.svg",
      alt: "Panels Discussions at AMS",
      title: "PANELS DISCUSSIONS",
      color: "bg-yellow-600",
      description: "Join us for exclusive discussions with the top minds in the Afrobeats industry. Connect with artist managers, label executives, music business strategists, and entertainment lawyers shaping the future of the genre."
    },
    {
      id: 2,
      image: "/images/pan1.jpeg",
      icon: "/images/int.svg",
      alt: "Interviews at AMS",
      title: "INTERVIEWS",
      color: "bg-teal-300",
      description: "Dive into exclusive interviews and insights from industry leaders, guest speakers, and artist managers. Explore strategies for artist development, royalty collection, and global market expansion."
    },
    {
      id: 3,
      image: "/images/pan2.jpeg",
      icon: "/images/speak.svg",
      alt: "Keynote Presentations at AMS",
      title: "KEYNOTE SPEAKERS",
      color: "bg-red-600",
      description: "Learn from top industry leaders who will share expertise on Afrobeats. Gain insights into artist development, record label strategies, monetization, sync licensing, and music industry legal frameworks."
    },
    {
      id: 4,
      image: "/images/workshop.jpeg",
      icon: "/images/work.svg",
      alt: "Interviews at AMS",
      title: "MASTERCLASS / WORKSHOP",
      color: "bg-yellow-600",
      description: " ⁠Lectures on key subjects from practitioners in specific fields relating to the creative industry and learning new skills and techniques from experts in a specific field."
    },
    {
      id: 5,
      image: "/images/net.jpeg",
      icon: "/images/network.svg",
      alt: "Interviews at AMS",
      title: "NETWORKING",
      color: "bg-red-600",
      description: "Creating an environment for industry professionals such as producers, record labels, music executives, etc to meet and interact Network."
    },
  ];

  return (
    <section className="bg-black text-white py-12 md:py-16">
       <motion.h2
            className="text-center mb-20 text-4xl sm:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            WHAT TO EXPECT AT AMS?
          </motion.h2>
          <br />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {index % 2 === 0 ? (
                <>
                  <div className={`flex flex-col justify-center p-6 md:p-8 ${section.color} rounded-lg text-black order-1 md:order-none`}>
                    <div className="flex justify-center mb-4 md:mb-6">
                      <Image
                        src={section.icon}
                        alt={`${section.title} Icon`}
                        width={60}
                        height={60}
                        className="w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">{section.title}</h2>
                    <p className="text-base md:text-lg text-center">{section.description}</p>
                  </div>
                  <div className="relative aspect-video order-2 md:order-none">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      className="object-cover rounded-lg"
                      quality={90}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative aspect-video order-2 md:order-none">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      className="object-cover rounded-lg"
                      quality={90}
                    />
                  </div>
                  <div className={`flex flex-col justify-center p-6 md:p-8 ${section.color} rounded-lg text-black order-1 md:order-none`}>
                    <div className="flex justify-center mb-4 md:mb-6">
                      <Image
                        src={section.icon}
                        alt={`${section.title} Icon`}
                        width={60}
                        height={60}
                        className="w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">{section.title}</h2>
                    <p className="text-base md:text-lg text-center">{section.description}</p>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMSExpectations;