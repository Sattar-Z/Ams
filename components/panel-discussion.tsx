import React from 'react';
import Image from 'next/image';

const AMSExpectations2 = () => {
  const sections = [
    {
      id: 1,
      image: "/images/panel1.jpeg",
      icon: "/images/chat.svg",
      alt: "Panels Discussions at AMS",
      title: "PANELS DISCUSSIONS",
      description: "Join us for exclusive discussions with the top minds in the Afrobeats industry artist managers, label executives, music business strategists, collection societies, entertainment lawyers and creatives shaping the future of the genre. Whether you're looking to break into the industry, scale your career, or maximize your earnings, this is your opportunity to gain insider knowledge and position yourself for success in the global Afrobeats movement.",
      textPosition: "right"
    },
    {
      id: 2,
      image: "/images/panel2.jpeg",
      icon: "/images/int.svg",
      alt: "Interviews at AMS",
      title: "INTERVIEWS",
      description: "Explore exclusive interviews and feedback from industry leaders, guest speakers, artists managers, and attendees of our AMS event, as they share their experiences, key takeaways, and insights on the future of Afrobeats and AMS events. Hear firsthand accounts of the strategies discussed, from artist development and royalty collection to legal matters and global market expansion, offering valuable perspectives on how to succeed in the African music industry.",
      textPosition: "left"
    },
    {
      id: 3,
      image: "/images/panel3.jpeg",
      icon: "/images/speak.svg",
      alt: "Keynote Presentations at AMS",
      title: "KEYNOTES SPEAKERS",
      description: "Our keynote speakers are top industry leaders, including renowned artist managers, music executives, record label heads, and influential creatives, who will share their expertise and provide exclusive insights on the business of Afrobeats. Learn from those shaping the genre's global success, from artist development and record label strategies to monetization, sync licensing, royalty collections, and legal considerations in the music industry. Gain invaluable knowledge on how to navigate the complexities of music rights, revenue streams, and the legal frameworks that protect artists and professionals in the global music market.",
      textPosition: "right"
    }
  ];

  return (
    <section className="w-full bg-black">
      <div className="w-full py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 mb-6">
            <Image
              src="/images/icon.svg"
              alt="AMS Icon"
              width={64}
              height={64}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            WHAT TO EXPECT AT AMS?
          </h1>
        </div>
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]"
            >
              <Image
                src={section.image}
                alt={section.alt}
                fill
                quality={100}
                priority={section.id === 1}
                className="object-contain"
              />
              {/* Text Overlay */}
              <div
                className={`text-center absolute top-0 bottom-0 w-1/3 flex flex-col justify-center p-10 text-white
                ${section.textPosition === 'right' ? 'right-28' : 'left-28'}`}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 mb-1">
                    <Image
                      src={section.icon}
                      alt={`${section.title} Icon`}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMSExpectations2;