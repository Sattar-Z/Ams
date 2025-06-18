import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import Image from "next/image";

export function AboutHeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="container mx-auto px-4 flex flex-col justify-start md:justify-center gap-6 md:gap-12 min-h-fit md:min-h-[80vh]">
        {/* Title Section */}
        <h2 className="uppercase text-4xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] relative z-20 mx-auto">
          About the{" "}
          <div className="relative inline-block w-full sm:w-auto mt-2 sm:mt-0 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="uppercase relative bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-500 to-red-700">
              <span>Event & Organisers</span>
            </div>
          </div>
        </h2>

        {/* Description Section */}
        <div className="w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <p 
                className="text-justify text-xl md:text-2xl text-slate-300 leading-relaxed mb-6"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify"
                }}
        >
            The African Music Summit, initially known as The Afrobeats
            Educational Roadshow (TAER), has evolved into a unique gathering
            dedicated to exploring and advancing the African music industry's
            international presence. With its central theme, "Leveraging Our
            Cultural Equity, From the Streets to the Boardroom," the summit
            focuses on innovative ideas, cutting-edge technologies, and
            forward-thinking strategies that drive the African music industry's
            growth.
          </p>
        </div>

        {/* Logo Section */}
        <div className="w-full flex justify-center px-4 mt-2 md:mt-8">
          <Image
            src="/images/tearlogo.png"
            alt="Logo"
            width={440}
            height={440}
            className="h-auto w-[200px] sm:w-[340px] md:w-[440px]"
            priority
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
