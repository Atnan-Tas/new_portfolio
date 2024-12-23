'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroText = () => {
  const controls = useAnimation();

  useEffect(() => {
    const startTextAnimation = async () => {
      await controls.start({ scale: 1.1 });
      await controls.start({ scale: 1 });
    };

    startTextAnimation();
  }, [controls]);

  // 🎯 Fonction pour défiler lentement jusqu'à la section Hero
  const scrollToHero = () => {
    const heroSection = document.getElementById('second-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#fafaf8] overflow-hidden px-4 md:px-12 lg:px-24">
      {/* ✅ Video with Zoom Animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        onUpdate={(latest) => {
          if (typeof latest.scale === 'number' && latest.scale <= 1.1) {
            controls.start('visible');
          }
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[90%] md:w-[70%] lg:w-[60%] h-auto object-cover rounded-3xl shadow-lg"
        >
          <source src="/BG.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </motion.div>

      {/* ✅ Text Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Solid Text */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.06 }}
        >
          <span className="text-black">BO</span>
          <span className="text-white">NJOUR, JE SUIS ATN</span>
          <span className="text-black">AN</span>
        </motion.h1>

        {/* Outline Text */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-[#E6332A] mt-4 md:mt-6"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.09 }}
        >
          BONJOUR, JE SUIS ATNAN
        </motion.h1>

        {/* Semi-transparent Text */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-black mt-4 md:mt-6 opacity-50"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
        >
          <span className="text-black">BO</span>
          <span className="text-white">NJOUR, JE SUIS ATN</span>
          <span className="text-black">AN</span>
        </motion.h1>
      </div>

      {/* ✅ Animated Arrow */}
      <div className="absolute bottom-8 flex justify-center">
        <motion.div
          onClick={scrollToHero}
          className="cursor-pointer"
          initial={{ y: 0 }}
          animate={{
            y: [0, 10, 0], // Animation de rebond
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10 text-[#202020] hover:text-[#E6332A] transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
