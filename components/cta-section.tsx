import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { PlayCircle, Youtube, VideoIcon } from "lucide-react";

function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWatchLive = () => {
    // Replace with your actual live stream URL
    const liveStreamUrl = "";

    window.open(liveStreamUrl, "_blank", "noopener,noreferrer");
  };

  const [microsoftHovered, setMicrosoftHovered] = useState(false);
  const [youtubeHovered, setYoutubeHovered] = useState(false);

  const handleMicrosoftTeamsStream = () => {
    // Replace with your actual Microsoft Teams live stream URL
    const teamsStreamUrl =
      "https://events.teams.microsoft.com/event/7dbc2f91-6166-47ab-9a88-22f651a43b6d@88401271-ed5c-4fab-8e48-9e65ff3e4d49";

    window.open(teamsStreamUrl, "_blank", "noopener,noreferrer");
  };

  const handleYouTubeStream = () => {
    // Replace with your actual YouTube live stream URL
    const youtubeStreamUrl =
      "https://youtube.com/live/QY9qBLrPD04?feature=share";

    window.open(youtubeStreamUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="py-10 sm:py-22 mb-20 px-4">
      <div className="flex flex-col justify-center gap-4 mb-12">
        {/* Microsoft Teams Stream Button */}
        {/* <Button 
    onClick={handleMicrosoftTeamsStream}
    className={`
      bg-blue-600 text-xl hover:bg-blue-700 text-white font-bold 
      h-14 md:h-16 px-6 md:px-8 rounded-full 
      flex items-center justify-center gap-3
      transform transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg
      animate-pulse-slow
      cursor-pointer
      w-full max-w-md mx-auto
    `}
    onMouseEnter={() => setMicrosoftHovered(true)}
    onMouseLeave={() => setMicrosoftHovered(false)}
  >
    <VideoIcon 
      className={`
        transition-transform duration-300 
        ${microsoftHovered ? 'scale-110' : ''}
      `} 
      size={30} 
    />
    Live Stream on Microsoft Teams
  </Button> */}

        {/* YouTube Stream Button */}
        {/* <Button 
    onClick={handleYouTubeStream}
    className={`
      bg-red-600 text-xl hover:bg-red-700 text-white font-bold 
      h-14 md:h-16 px-6 md:px-8 rounded-full 
      flex items-center justify-center gap-3
      transform transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg
      animate-pulse-slow
      cursor-pointer
      w-full max-w-md mx-auto
    `}
    onMouseEnter={() => setYoutubeHovered(true)}
    onMouseLeave={() => setYoutubeHovered(false)}
  >
    <Youtube 
      className={`
        transition-transform duration-300 
        ${youtubeHovered ? 'scale-110' : ''}
      `} 
      size={30} 
    />
    Live Stream on YouTube
  </Button> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h2 className="mb-16 text-3xl sm:text-5xl font-extrabold text-yellow-700">
          Up and Coming Events
        </h2> */}
        {/* <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
          style={{
            lineHeight: "50px;",
          }}
        >
          <h2 className="mb-10 text-2xl sm:text-4xl font-extrabold">
            THE OMNIVERSE AFRICA
          </h2>
          25 - 28 February 2025 | Landmark Event Centre
        </p>
        <div className="w-full flex justify-center px-4 my-2 md:my-8">
          <Image
            src="/images/omni-flyer.jpeg"
            alt="Logo"
            width={700}
            height={700}
            className="size-148 md:size-150"
            priority
          />
        </div>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-5xl mx-auto font-bold"
          style={{
            lineHeight: "20px;",
          }}
        >
          The Omniverse Summit 2025: Shaping Africa's Infinite Future Ready to
          unlock infinite possibilities? Join the brightest minds in African
          innovation, creativity, and entrepreneurship at The Omniverse Summit
          2025. Whether you're an established leader, a budding entrepreneur, or
          simply passionate about African innovation, this event promises an
          enriching experience that will unveil Africa's potential. Don't just
          watch history—make it. Date: 25th - 28th February 2025 Location:
          Landmark Event Center, Victoria Island, Lagos, Nigeria For more
          information and registration,
          <br />
          <a
            href="www.omniverseafrica.com"
            className="text-yellow-700"
            target="_blank"
          >
            CLICK HERE
          </a>
        </p> */}
        {/* <a
          href="https://www.eventbrite.co.uk/e/african-music-summit-ams-london-2024-tickets-1080628501939?aff=oddtdtcreator"
          target="_blank"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-700 text-xl hover:bg-yellow-800 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
              Get Tickets
            </Button>
          </div>
        </a> */}
      </div>
    </section>
  );
}

export default CTASection;
