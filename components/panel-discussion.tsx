import React from 'react';
import Image from 'next/image';

const AMSExpectations = () => {
  const sections = [
    {
      id: 1,
      image: "/images/pan3.jpeg",
      icon: "/images/chat.svg",
      alt: "Panels Discussions at AMS",
      title: "PANELS DISCUSSIONS",
      description: "Join us for exclusive discussions with the top minds in the Afrobeats industry. Connect with artist managers, label executives, music business strategists, and entertainment lawyers shaping the future of the genre."
    },
    {
      id: 2,
      image: "/images/pan1.jpeg",
      icon: "/images/int.svg",
      alt: "Interviews at AMS",
      title: "INTERVIEWS",
      description: "Dive into exclusive interviews and insights from industry leaders, guest speakers, and artist managers. Explore strategies for artist development, royalty collection, and global market expansion."
    },
    {
      id: 3,
      image: "/images/pan2.jpeg",
      icon: "/images/speak.svg",
      alt: "Keynote Presentations at AMS",
      title: "KEYNOTE SPEAKERS",
      description: "Learn from top industry leaders who will share expertise on Afrobeats. Gain insights into artist development, record label strategies, monetization, sync licensing, and music industry legal frameworks."
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          WHAT TO EXPECT AT AMS?
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col justify-center p-8 bg-gray-900 rounded-lg">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={section.icon}
                        alt={`${section.title} Icon`}
                        width={80}
                        height={80}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-4">{section.title}</h2>
                    <p className="text-lg text-center">{section.description}</p>
                  </div>
                  <div className="relative aspect-video">
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
                  <div className="relative aspect-video">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      className="object-cover rounded-lg"
                      quality={90}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 bg-gray-900 rounded-lg">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={section.icon}
                        alt={`${section.title} Icon`}
                        width={80}
                        height={80}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-4">{section.title}</h2>
                    <p className="text-lg text-center">{section.description}</p>
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