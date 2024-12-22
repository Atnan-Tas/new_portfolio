'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroText = () => {
  const controls = useAnimation();

  useEffect(() => {
    const startTextAnimation = async () => {
      // Wait for half the duration of the video zoom animation
      await controls.start({ scale: 1.1 });
      await controls.start({ scale: 1 });
    };

    startTextAnimation();
  }, [controls]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#fafaf8] overflow-hidden">
      {/* Video with Zoom Animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        onUpdate={(latest) => {
          if (latest.scale <= 1.1) {
            controls.start('visible'); 
          }
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[60%] h-[60%] object-cover rounded-3xl shadow-lg"
        >
          <source src="/BG.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </motion.div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Solid Text */}
        <motion.h1
          className="text-8xl font-bold"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.06 }}
        >
          <span className="text-black">BO</span>
          <span className="text-white">NJOUR, JE SUIS ATN</span>
          <span className="text-black">AN</span>
        </motion.h1>
    
        {/* Outline Text */}
        <motion.h1
          className="text-8xl font-bold text-[#E6332A] mt-6"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.09 }}
        >
          BONJOUR, JE SUIS ATNAN
        </motion.h1>
    
        {/* Semi-transparent Text */}
        <motion.h1
          className="text-8xl font-bold text-black mt-6 opacity-50"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
        >
          <span className="text-black">BO</span>
          <span className="text-white">NJOUR, JE SUIS ATN</span>
          <span className="text-black">AN</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroText;
