'use client';

import { useState, useEffect, createContext, useContext } from 'react';

// 🎯 Créer un contexte pour le thème
const ThemeContext = createContext({
  isDark: false,
  setIsDark: (_: boolean) => {}, // Correction du paramètre inutilisé
});

// 🎯 Hook personnalisé pour accéder au thème
export const useTheme = () => useContext(ThemeContext);

// 🎯 Composant pour gérer le thème
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
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

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div
        className={`transition-colors duration-500 ${
          isDark ? 'bg-[#202020] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#202020]'
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
