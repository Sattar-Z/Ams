import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FullscreenImageModal } from '@/components/ui/image-modal';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

interface MediaGalleryProps {
  media: MediaItem[];
}

const extractYouTubeId = (url: string): string | null => {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [fullscreenMedia, setFullscreenMedia] = useState<MediaItem | null>(null);

  const openFullscreen = (item: MediaItem) => {
    setFullscreenMedia(item);
  };

  const closeFullscreen = () => {
    setFullscreenMedia(null);
  };

  // Add keyboard escape key handler
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeFullscreen();
      }
    };

    if (fullscreenMedia) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [fullscreenMedia]);

  const filteredMedia = media.filter(item => item.type === (activeTab === 'images' ? 'image' : 'video'));

  const FullscreenContent = () => {
    if (!fullscreenMedia) return null;

    if (fullscreenMedia.type === 'image') {
      return (
        <FullscreenImageModal 
          image={{
            src: fullscreenMedia.src,
            alt: fullscreenMedia.alt,
            caption: fullscreenMedia.caption
          }}
          onClose={closeFullscreen} 
        />
      );
    }

    const youtubeId = extractYouTubeId(fullscreenMedia.src);

    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeFullscreen}
      >
        <motion.div 
          className="relative max-w-[90vw] max-h-[90vh] w-full aspect-video"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={closeFullscreen}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 z-60 text-2xl"
          >
            ✕
          </button>

          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video 
              src={fullscreenMedia.src} 
              controls 
              autoPlay 
              className="w-full h-full"
            />
          )}
          {fullscreenMedia.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
              {fullscreenMedia.caption}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800/50 rounded-full p-1">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'images' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'videos' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item: MediaItem, index: number) => {
            const youtubeId = item.type === 'video' ? extractYouTubeId(item.src) : null;

            return (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden bg-transparent backdrop-blur shadow-lg cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openFullscreen(item)}
              >
                <div className="relative aspect-square w-full">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : youtubeId ? (
                    <Image
                      src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      poster={item.thumbnail}
                    />
                  )}
                  
                  {item.caption && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-sm sm:text-base">{item.caption}</p>
                    </div>
                  )}

                  {(item.type === 'video' || youtubeId) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/30 rounded-full p-3">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenMedia && <FullscreenContent />}
      </AnimatePresence>
    </section>
  );
};

export default MediaGallery;