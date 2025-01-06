'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NeymarProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { title: 'Projet 1', image: '/project1.jpg', link: '/neymar' },
    { title: 'Projet 2', image: '/project2.jpg', link: '/projects/projet2' },
    { title: 'Projet 3', image: '/project3.jpg', link: '/projects/projet3' },
    { title: 'Projet 4', image: '/project4.jpg', link: '/projects/projet4' },
  ];

  // ✅ Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change de projet toutes les 5 secondes

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
<>

    <Header />

    <main className="min-h-screen bg-[#fafaf8] text-[#202020] px-4 md:px-8 lg:px-24 py-16 md:py-24 lg:py-32">
      {/* ✅ Project Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Affiche Sport : Neymar Jr.</h1>
        <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
          Un projet visuel captivant mettant en avant l'énergie du football.
        </p>
      </section>

      {/* ✅ Content Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* ✅ Text Section */}
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ligula non mi 
            varius sagittis. Curabitur blandit mollis lacus. Nam eget dui. Etiam rhoncus. Maecenas 
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing 
            sem neque sed ipsum.
          </p>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-block bg-[#202020] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#E6332A] hover:text-[#fafaf8] transition-colors"
            >
              ← Retour aux projets
            </Link>
          </div>
        </div>

        {/* ✅ Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/ney.jpg"
              alt="Affiche Neymar Jr."
              width={400}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Carrousel des autres projets */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Découvrez d'autres projets</h2>
        <div className="relative flex items-center justify-center max-w-xl mx-auto">
          {/* ✅ Bouton Précédent */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-[#FAFAF8] text-[#202020] px-3 py-2 rounded-full hover:bg-[#E6332A] hover:text-[#FAFAF8] transition-colors"
          >
            ←
          </button>

          {/* ✅ Carrousel */}
          <div className="overflow-hidden w-full h-[300px] rounded-lg shadow-lg relative">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <Link href={projects[currentIndex].link}>
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </Link>
                <h3 className="absolute bottom-4 text-lg font-medium bg-black/50 px-4 py-1 rounded-md">
                  {projects[currentIndex].title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ✅ Bouton Suivant */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-[#FAFAF8] text-[#202020] px-3 py-2 rounded-full hover:bg-[#E6332A] hover:text-[#FAFAF8] transition-colors"
          >
            →
          </button>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default NeymarProject;
