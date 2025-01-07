'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">CooHop! : Trouvez des partenaires sportifs aux alentours.</h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
          Développement d’un site vitrine, et une application web permettant de trouver des partenaires sportifs à porximité.          
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
            Pour le projet CooHop, j'ai pris en charge la conception complète du design de l'application. De la création de la maquette à la définition de l'identité visuelle, chaque choix graphique a été pensé pour offrir une expérience utilisateur fluide et intuitive.               <br /><br />Sa capacité à dribbler, à créer des occasions impossibles et à électriser tout un stade ont marqué une époque inoubliable.
              <br /><br /> L'identité visuelle repose sur des couleurs dynamiques et des typographies modernes, reflétant les valeurs de partage, d'accessibilité et de convivialité propres à l'application. Ma partie préférée a été de traduire ces principes en un design harmonieux, où chaque écran et chaque élément visuel contribuent à renforcer l'engagement des utilisateurs.
              <br /><br />Ce projet m'a permis de combiner créativité et fonctionnalité, en plaçant toujours l'utilisateur au cœur du processus de conception.
              </p>
            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-block bg-[#202020] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#E6332A] hover:text-[#fafaf8] transition-colors"
              >
                ← Retour aux projets
              </Link>
              <Link
                href="https://coohop.angelo-simoes.fr"
                className="inline-block bg-[#e6332A] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#202020] hover:text-[#fafaf8] transition-colors mt-4 ml-4 sm:ml-6 lg:ml-6"
              >
               ← Voir le site
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
                src="/coohop.png"
                alt="coohop logo"
                width={400}
                height={400}
                className="object-cover"
              />
              <Image
                src="/accueil.png"
                alt="coohop accueil"
                width={400}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ✅ Mockup Section */}
        <section className="mt-16">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <Image
              src="/typo.png"
              alt="Mockup typo"
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NeymarProject;
