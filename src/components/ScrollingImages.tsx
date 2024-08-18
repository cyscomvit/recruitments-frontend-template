"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import azureLogo from '../../public/azure-logo.svg';
import digitalOceanLogo from '../../public/digitalocean-logo.svg';
import githubLogo from '../../public/github-logo.svg';
import htbLogo from '../../public/hackthebox-logo.svg';
import kaliLogo from '../../public/kalilinux-logo.svg';
import thmLogo from '../../public/tryhackme_logo_full.svg';
import nextLogo from '../../public/nextjs-logo.svg';

const images = [
    azureLogo,
    digitalOceanLogo,
    githubLogo,
    htbLogo,
    kaliLogo,
    thmLogo,
    nextLogo
];

const InfiniteScroll = () => {
  return (
    <div className="relative flex overflow-hidden">
      {/* Infinite loop using two sets of images */}
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          ease: 'linear',
          duration: 70,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-32 flex items-center justify-center">
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              width={50} // Set width according to your design
              height={50} // Set height according to your design
              objectFit="contain" // Maintain aspect ratio
              className="w-full h-full px-2"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
