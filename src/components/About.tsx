'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsInverted(
          rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center p-8 transition-colors duration-500 ${
        isInverted ? 'bg-[#fafaf8] text-[#202020]' : 'bg-[#202020] text-[#fafaf8]'
      }`}
    >
      {/* Image Section avec Animation et Effet Noir & Blanc */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <Image
            src="/your-photo.jpg"
            alt="Your Picture"
            width={400}
            height={400}
            className="object-cover rounded-2xl transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Text Section avec Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8"
      >
        <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
        <p className="text-lg leading-relaxed mb-6">
  Salut ! 👋 Je m&apos;appelle Atnan Tas, étudiant en Métiers du Multimédia et de l&apos;Internet (MMI) à Montbéliard.
  <br /><br />
  Passionné par le design graphique, le développement web et le montage vidéo, je m&apos;efforce de créer des expériences visuelles et interactives uniques.
  <br /><br />
  En dehors de mes études, je suis un grand fan de football ⚽️, basketball 🏀, et jeux vidéo 🎮. La musique 🎧 m&apos;accompagne aussi dans chaque moment de création.
  <br /><br />
  👉 Mon objectif ? Allier créativité et compétences techniques pour concevoir des projets qui marquent les esprits.
</p>

        {/* Boutons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Bouton Me Contacter */}
          <a
            href="#contact"
            className="bg-[#202020] hover:bg-[#e6432A] text-white px-6 py-2 rounded-full font-medium text-lg text-center transition-colors duration-300"
          >
            Me Contacter
          </a>

          {/* Bouton Télécharger CV */}
          <a
            href="/CV_Atnan_Tas_2024-2.pdf"
            download="CV_Atnan_Tas_2024-2.pdf"
            className="bg-transparent border-2 border-[#202020] hover:bg-[#202020] hover:text-[#FAFAF8] text-[#202020] px-6 py-2 rounded-full font-medium text-lg text-center transition-colors duration-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
