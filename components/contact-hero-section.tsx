import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function ContactHeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="mt-0 flex flex-col justify-center gap-4">
        <h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
          Contact Us
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
