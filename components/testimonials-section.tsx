import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Kate Reilly",
      image: "/images/kate.JPG",
      role: "Chief Membership & People Officer [PPL]",
      quote:
        "We are delighted to be supporting the evolution of this event which puts the African music business centre stage. The rise of Afrobeats over the past few years has been nothing short of meteoric; PPL is proud to work with some of its brightest stars to drive their international neighbouring rights revenues as this music reaches new audiences around the world.",
    },
    {
      name: "Adv Ntsietso Mokitimi-Makhofola",
      image: "/images/ntsietso.JPG",
      role: "Chief Legal & Revenue Officer/ Company Secretary [SAMPRA]",
      quote:
        "The IFPI reported Africa as the fastest-growing music market in 2022. The African Music Summit will propel further growth through exposure of opportunities in Africa, and collaboration between African music creators and the world and amongst the African music players. SAMPRA finds a fit with the objectives of the Summit and is excited to be part of this journey.",
    },
    {
      name: "Dr Jo Twist OBE",
      image: "/images/jo_twist.JPG",
      role: "Chief Executive [BPI]",
      quote:
        "The great opportunities across both North and Sub-Saharan Africa are starting to be realised as they emerge as the continent's fastest growing and thriving music regions, largely thanks to the rising global popularity of the Afrobeats scene. We are excited to partner on this event to bring the British music business together to support the expanding music market in Africa.",
    },
    {
      name: "Obi Asika",
      image: "/images/obi.JPG",
      role: "Director-General/ CEO, National Council For Arts & Culture, Nigeria, + Founder, Omniverse Africa",
      quote:
        "I am delighted to support the African Music Summit, the world is finally beginning to feel the power and potential of our music but we need more of these events and conversations to dig into licencing, touring, product and merchandise as we urgently drive monetization for African creators at home and abroad.",
    },
    {
      name: "Sipho Dlamini",
      image: "/images/sipho.JPG",
      role: "President/ Managing Director of Africa & Middle East [Gamma]",
      quote:
        "Gamma is genuinely enthusiastic about our involvement in the African Music Summit 2023. We view this as a significant opportunity to not only participate in but also actively advance the discussions surrounding the growth of the African music business.",
    },
    {
      name: "Con Raso",
      image: "/images/conral.JPG",
      role: "Managing Director & Founder Tuned Global",
      quote:
        "The impact of AMS on enabling partnerships and empowering the music business sector is unparalleled. It's a crucial platform for industry players to converge, and discuss issues that impact services, labels and artists, providing innovation, and elevating African music on the global stage.",
    },
    {
      name: "Mykaell Riley",
      image: "/images/mykel.JPG",
      role: "Director of the Black Music Research Unit (BMRU) University of Westminster",
      quote:
        "The worlds a much smaller place when you're connected to a global community, and this is what the AMS events represents; a continent in one room. Which is why I'm looking forward to the follow up event in Ghana. For seamless networking between London, and the continent Africa, look no further - see you there.",
    },
  ];

  const handleControl = (type: "prev" | "next") => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonials.length - 1 : index - 1);
    } else {
      setIndex(index >= testimonials.length - 1 ? 0 : index + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleControl("next");
    }, 3500);

    return () => clearInterval(timer);
  }, [index]);

  const testimonialVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm overflow-hidden border-t border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-4xl sm:text-6xl font-extrabold text-white text-center mb-12">
          Testimonials
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={testimonialVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-white text-lg text-center max-w-3xl">
                {testimonials[index].quote}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex items-center justify-center mt-6">
            <Image
              src={testimonials[index].image}
              alt={testimonials[index].name}
              width={60}
              height={60}
              className="w-16 h-16 rounded-full object-cover border border-white"
            />
            <div className="ml-4 text-center">
              <p className="text-white font-semibold">
                {testimonials[index].name}
              </p>
              <p className="text-slate-400 text-sm">
                {testimonials[index].role}
              </p>
            </div>
          </div>

          <button
            className="absolute top-1/2 left-3 bg-slate-700 p-2 rounded-full"
            onClick={() => handleControl("prev")}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute top-1/2 right-3 bg-slate-700 p-2 rounded-full"
            onClick={() => handleControl("next")}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;