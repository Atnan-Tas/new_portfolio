'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsDark(
          rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('✅ Scroll réussi jusqu’à la section À PROPOS');
    } else {
      console.error('❌ Élément avec l’ID "about-section" introuvable.');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('✅ Scroll réussi jusqu’à la section CONTACT');
    } else {
      console.error('❌ Élément avec l’ID "contact" introuvable.');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-colors duration-500 shadow-md ${
        isDark ? 'bg-[#202020] text-[#FAFAF8]' : 'bg-[#FAFAF8] text-[#202020]'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo avec couleur dynamique */}
        <div className="flex items-center space-x-2">
          <Image
            src={isDark ? '/logo_atnan_light.svg' : '/logo_atnan_dark.svg'}
            alt="Logo Atnan Tas"
            width={40}
            height={40}
            className="w-10 h-10 transition-colors duration-300"
          />
          <span className="text-2xl font-bold">Atnan Tas</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                className="font-bold cursor-pointer hover:underline transition-colors"
              >
                À PROPOS
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-bold hover:underline transition-colors"
              >
                MES TRAVAUX
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton Contactez-moi */}
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
          className={`px-4 py-2 rounded-full font-medium cursor-pointer transition-colors duration-300 ${
            isDark
              ? 'bg-[#FAFAF8] text-[#202020] hover:bg-gray-300'
              : 'bg-[#202020] text-[#FAFAF8] hover:bg-gray-800'
          }`}
        >
          CONTACTEZ-MOI !
        </button>
      </div>
    </header>
  );
};

export default Header;
