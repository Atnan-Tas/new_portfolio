'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafaf8] text-[#202020] py-6 px-8 md:px-16 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright */}
        <div className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} <span className="font-bold">ATNAN TAS</span>
        </div>

        {/* Crédit */}
        <div className="text-sm md:text-base mt-2 md:mt-0">
          Ce site web à été codé en utilisant <span className="font-bold">Next.js,</span><span className="font-bold"> React</span> et <span className="font-bold">Tailwind CSS</span>.
        </div>

        {/* Bouton Retour en Haut */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={scrollToTop}
            className="flex items-center text-sm md:text-base font-bold hover:text-[#E6332A] transition-colors"
          >
            Retour en haut
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
