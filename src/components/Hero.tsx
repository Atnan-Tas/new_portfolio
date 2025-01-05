'use client';

import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById('second-section');
      if (secondSection) {
        const rect = secondSection.getBoundingClientRect();
        setIsDark(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="second-section"
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#202020] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#202020]'
      }`}
    >
      {/* ✅ Bande d'icônes SVG en haut */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <motion.div
          className="flex space-x-8"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <Image
              key={index}
              src="/icons/cercle_etoile.svg"
              alt="Icône étoile"
              width={40}
              height={40}
              className="pt-4 sm:pt-6 md:pt-8 lg:pt-10"
            />
          ))}
        </motion.div>
      </div>

      {/* ✅ Deuxième Section */}
      <section className="min-h-[600px] flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 py-16">
        {/* Animation Typing */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight">
          <Typewriter
            words={['Vous cherchez quelqu\'un qui sait designer, développer, communiquer ?']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Sous-texte statique */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center max-w-3xl opacity-75">
          Je crois que vous n&apos;êtes pas très loin d&apos;avoir trouvé...
        </p>
      </section>

      {/* ✅ Bande d'icônes SVG en bas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          className="flex space-x-8"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <Image
              key={index}
              src="/icons/cercle_etoile.svg"
              alt="Icône étoile"
              width={40}
              height={40}
              className="pb-4 sm:pb-6 md:pb-8 lg:pb-10"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
