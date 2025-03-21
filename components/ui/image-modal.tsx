import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FullscreenImageModalProps {
  image: { src: string; alt: string; caption?: string };
  onClose: () => void;
}

export const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({ image, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative max-w-[90vw] max-h-[90vh] w-full aspect-video"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <Image 
          src={image.src} 
          alt={image.alt} 
          fill 
          className="object-contain" 
        />
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
            {image.caption}
          </div>
        )}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FullscreenImageModal;