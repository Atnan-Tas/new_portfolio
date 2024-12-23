'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';

interface HeaderProps {
  forceDarkMode?: boolean; // Permet de forcer le thème sombre
}

const Header = ({ forceDarkMode = false }: HeaderProps) => {
  const [isDark, setIsDark] = useState(forceDarkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (forceDarkMode) return; // Ne pas écouter le scroll si forcé

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
  }, [forceDarkMode]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:p-6 z-50 transition-colors duration-500 shadow-md ${
        isDark || forceDarkMode ? 'bg-[#202020] text-[#FAFAF8]' : 'bg-[#FAFAF8] text-[#202020]'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={isDark || forceDarkMode ? '/logo_atnan_light.svg' : '/logo_atnan_dark.svg'}
            alt="Logo Atnan Tas"
            width={40}
            height={40}
            className="w-10 h-10 transition-colors duration-300"
          />
          <span className="text-2xl font-bold">Atnan Tas</span>
        </Link>

        {/* ✅ Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            className="font-bold cursor-pointer hover:underline transition-colors"
          >
            À PROPOS
          </a>
          <Link
            href="/projects"
            className="font-bold hover:underline transition-colors"
          >
            MES TRAVAUX
          </Link>
        </nav>

        {/* ✅ Bouton Contact */}
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
          className={`hidden md:block px-4 py-2 rounded-full font-medium cursor-pointer transition-colors duration-300 ${
            isDark || forceDarkMode
              ? 'bg-[#FAFAF8] text-[#202020] hover:bg-gray-300'
              : 'bg-[#202020] text-[#FAFAF8] hover:bg-gray-800'
          }`}
        >
          CONTACTEZ-MOI !
        </button>

        {/* ✅ Menu Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* ✅ Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 left-0 w-full bg-[#202020] text-[#FAFAF8] md:hidden shadow-md`}
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAbout();
                  }}
                  className="font-bold text-lg cursor-pointer hover:underline"
                >
                  À PROPOS
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-bold text-lg hover:underline"
                >
                  MES TRAVAUX
                </Link>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContact();
                  }}
                  className="px-4 py-2 rounded-full font-medium cursor-pointer bg-[#FAFAF8] text-[#202020] hover:bg-gray-300"
                >
                  CONTACTEZ-MOI !
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
