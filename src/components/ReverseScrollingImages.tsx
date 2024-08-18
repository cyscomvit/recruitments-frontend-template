// components/ReverseInfiniteScroll.js
"use client";
import { motion } from 'framer-motion';

const images = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  '/images/brand4.png',
  '/images/brand5.png',
  '/images/brand6.png',
  '/images/brand7.png',
];

const ReverseInfiniteScroll = () => {
  return (
    <div className="relative flex overflow-hidden">
      {/* Reverse infinite loop using two sets of images */}
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{
          ease: 'linear',
          duration: 10,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brand ${index + 1}`}
            className="w-48 h-auto flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ReverseInfiniteScroll;
