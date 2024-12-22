'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <motion.div
        className="fixed top-0 left-0 w-full bg-[#fafaf8] flex justify-between items-center p-4 z-50 shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1.6 }}
      >
        {/* Logo + Texte */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/logo_atnan.svg" 
            alt="Logo Atnan Tas" 
            width={40} 
            height={40} 
            className="w-10 h-10"
          />
          <div className="text-2xl font-bold font-poppins text-black">
            Atnan Tas
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-black font-bold hover:text-gray-500">À PROPOS</a>
            </li> 
            <li>
              <a href="#projects" className="text-black font-bold hover:text-gray-500">MES TRAVAUX</a>
            </li>
          </ul>
        </nav>

        {/* Bouton Let's Talk */}
        <button className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800">
          CONTACTEZ-MOI !
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
