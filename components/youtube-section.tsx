import React from "react";
import { Button } from "./ui/button";

function YoutubeSection() {
  return (
    <section className="py-20 sm:py-32 mb-20 px-4 bg-black border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-16 text-4xl sm:text-6xl font-extrabold text-WHITE">
        THE GROWTH OF AFROBEATS 2023
        </h2>
        <br/>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
          hidden
          style={{
            lineHeight: "50px;",
          }}
        >
          Explore how The African Music Summit is shaping the global presence of
          African music. Join thought leaders and industry innovators as they
          harness cultural equity and cutting-edge technologies to drive the
          growth of the African music industry.
        </p>
        <div className="mb-6 relative w-full aspect-video max-w-8xl mx-auto">
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/q3lnt3YMiiY?si=gCNsMUZKHHcY9YXP&rel=0"
            title="The Growth Of Afrobeats"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h3 className="text-1xl sm:text-3xl text-white">
        Video produced by Jassy Generation Ltd
        </h3>
      </div>
    </section>
  );
}

export default YoutubeSection;
