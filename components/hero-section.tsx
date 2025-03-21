import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import SiteHeader from "@/components/site-header";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <div>
      {/* <SiteHeader /> */}

      <BackgroundBeamsWithCollision>
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col justify-center items-center min-h-[80vh] gap-6 md:gap-8">
          {/* Hero Title */}
          <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white font-sans tracking-tight max-w-[90%] md:max-w-[80%] relative z-20">
            Welcome to{" "}
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white font-sans tracking-tight max-w-[90%] md:max-w-[80%] relative z-20">
            <div className="relative inline-block w-full sm:w-auto mt-2 sm:mt-0 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="uppercase relative bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-yellow-700 to-red-800">
                <span>African Music Summit</span>
              </div>
            </div>
          </h2>

          {/* Presented By Section */}
          <div className="w-full max-w-xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white font-sans tracking-tight mb-4">
              presented by
            </p>
          </div>

          {/* Logo Section */}
          <div className="w-full flex justify-center px-4 mb-6">
            <Image
              src="/images/strictly.png"
              alt="Logo"
              width={240}
              height={240}
              className="h-auto w-[160px] sm:w-[200px] md:w-[240px]"
              priority
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-center w-full max-w-md mx-auto px-4">
            {/* Contact Button */}
            <a href="/contact">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto">

                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-yellow-700 px-6 sm:px-12 py-5 text-lg font-medium text-white backdrop-blur-3xl">
                  Contact us
                </span>
              </button>
            </a>

            {/* Tickets Button */}
            {/* <a
              href="https://www.eventbrite.co.uk/e/african-music-summit-ams-london-2024-tickets-1080628501939?aff=oddtdtcreator"
              target="_blank"
            >
              <button className="text-lg inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-yellow-700 px-6 sm:px-12 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto">
                Buy Tickets
              </button>
            </a> */}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
