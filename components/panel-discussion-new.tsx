import React from 'react';
import Image from 'next/image';

const AMSExpectations2 = () => {
  const sections = [
    {
      id: 1,
      image: "/images/pans1.png",
      alt: "Panels Discussions at AMS"
    },
    {
      id: 2,
      image: "/images/pans2.png",
      alt: "Interviews at AMS"
    },
    {
      id: 3,
      image: "/images/pans3.png",
      alt: "Keynote Presentations at AMS"
    }
  ];

  return (
    <section className="w-full bg-black border-b border-white">
      <div className="w-full py-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-white mb-12">
          WHAT TO EXPECT AT AMS!
        </h1>
        <div className="space-y-4 sm:space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative w-full h-[160px] sm:h-[260px] md:h-[600px]"
            >
              <Image
                src={section.image}
                alt={section.alt}
                fill
                quality={100}
                priority={section.id === 1}
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMSExpectations2;