'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');

  const projects = [
    { title: 'Projet 1', image: '/project1.jpg', link: '/projects/projet1', category: 'Design' },
    { title: 'Projet 2', image: '/project2.jpg', link: '/projects/projet2', category: 'Design' },
    { title: 'Projet 3', image: '/project3.jpg', link: '/projects/projet3', category: 'Sites' },
    { title: 'Projet 4', image: '/project4.jpg', link: '/projects/projet4', category: 'Design' },
    { title: 'Projet 5', image: '/project5.jpg', link: '/projects/projet5', category: 'Sites' },
    { title: 'Projet 6', image: '/project6.jpg', link: '/projects/projet6', category: 'Design' },
  ];

  const filteredProjects = projects.filter((project) =>
    filter === 'Tous' ? true : project.category === filter
  );

  return (
    <>
      {/* ✅ Header with Forced Dark Mode */}
      <Header forceDarkMode={true} />

      {/* ✅ Main Section */}
      <main className="min-h-screen bg-[#202020] text-[#FAFAF8] px-4 md:px-8 lg:px-24 py-8 md:py-16 lg:py-32">
        {/* ✅ Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Mes Projets</h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents en design, développement web et montage vidéo.
          </p>
        </section>

        {/* ✅ Filter Buttons */}
        <section className="flex justify-center mb-8 gap-2 md:gap-4 flex-wrap">
          {['Tous', 'Sites', 'Design'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 md:px-6 py-1 md:py-2 rounded-full font-medium text-sm md:text-lg transition-colors ${
                filter === category
                  ? 'bg-[#E6332A] text-white'
                  : 'bg-[#FAFAF8] text-[#202020] hover:bg-[#E6332A] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* ✅ Project Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative overflow-hidden rounded-lg shadow-lg bg-[#FAFAF8] text-[#202020] group cursor-pointer h-[350px] md:h-[400px] lg:h-[500px]"
            >
              <Link href={project.link}>
                {/* ✅ Project Image */}
                <div className="relative w-full h-[60%] md:h-[70%] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* ✅ Project Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg md:text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base text-white mt-1 md:mt-2 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                  </p>
                  <div className="flex justify-center mt-2 md:mt-4">
                    <button className="text-[#202020] font-medium hover:underline hover:bg-[#202020] hover:text-[#fafaf8] transition-colors bg-[#fafaf8] rounded-full h-8 md:h-10 w-[150px] md:w-[191px]">
                      SEE PROJECT →
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* ✅ Back to Home */}
        <div className="text-center mt-8 md:mt-16">
          <Link href="/" className="text-sm md:text-lg font-bold text-[#fafaf8] hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
    </>
  );
};

export default Projects;
