'use client';

import { useState, useEffect } from 'react';
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
    <div className={`transition-colors duration-500 ${isDark ? 'bg-[#202020] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#202020]'}`}>

      {/* ✅ Deuxième Section */}
      <section
        id="second-section"
        className="min-h-screen flex flex-col justify-center items-center p-8"
      >
        <h2 className="text-5xl font-bold text-center max-w-4xl leading-tight">
          Vous cherchez quelqu'un qui sait designer, développer, communiquer ?
        </h2>
        <p className="mt-4 text-xl text-center max-w-3xl">
          Je crois que vous n'êtes pas très loin d'avoir trouvé...
        </p>
      </section>
    </div>
  );
};

export default Hero;
