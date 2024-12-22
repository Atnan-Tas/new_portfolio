'use client';

import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

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
      className={`transition-colors duration-500 ${
        isDark ? 'bg-[#202020] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#202020]'
      }`}
    >
      {/* ✅ Deuxième Section */}
      <section
        id="second-section"
        className="min-h-screen flex flex-col justify-center items-center p-8"
      >
        {/* Animation Typing */}
        <h2 className="text-6xl font-bold text-center max-w-4xl leading-tight">
          <Typewriter
            words={['Vous cherchez quelqu\'un qui sait designer, développer, communiquer ?']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Sous-texte statique */}
        <p className="mt-4 text-2xl text-center max-w-3xl opacity-75">
          Je crois que vous n'êtes pas très loin d'avoir trouvé...
        </p>
      </section>
    </div>
  );
};

export default Hero;
