'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    { 
      title: 'Affiche Sport : Neymar Jr.', 
      image: '/project1.jpg', 
      link: '/neymar', 
      category: 'Design',
      description: 'Affiche dédiée à Neymar Jr, un de mes joueurs de football préférés.'
    },
    { 
      title: 'Affiche Sport : Lebron James', 
      image: '/project2.jpg', 
      link: '/lebron', 
      category: 'Design',
      description: 'Plusieurs affiches dédiées à Lebron James, le plus grand joueur de basket de tout les temps.'
    },
    { 
      title: 'CooHop! : Trouvez des partenaires sportifs aux alentours.', 
      image: '/project3.jpg', 
      link: '/coohop', 
      category: 'Sites',
      description: 'Développement d’un site vitrine, et une application web permettant de trouver des partenaires sportifs à proximité.'
    },
    { 
      title: 'Teaser JPO : Conservatoire Henri Dutilleux Belfort', 
      image: '/project4.jpg', 
      link: '/JPO', 
      category: 'Audiovisuel',
      description: 'Vidéo réalisée, de la prise de vue au montage, pour mettre en avant la journée portes ouvertes réalisée par le conservatoire Henri Dutilleux de Belfort.'
    },
    { 
      title: 'Université Pasteur Bourgogne Franche-Comté : Communication 360°', 
      image: '/project5.jpg', 
      link: '/UP', 
      category: 'Design',
      description: 'Rebranding complet de l′Université Bourgogne Franche-Comté.'
    },
    { 
      title: 'La Maîtrise : Conservatoire Henri Dutilleux Belfort', 
      image: '/project6.jpg', 
      link: '/maitrise', 
      category: 'Audiovisuel',
      description: 'Vidéo réalisée durant mon stage au conservatoire Henri Dutilleux de Belfort, mettant en avant un enseignement à venir.'
    },
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
          <h1 className="text-4xl md:text-5xl mt-16 sm:mt-16 md:mt-12 lg:text-6xl font-bold mb-4">Mes Projets</h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents en design, développement web et montage vidéo.
          </p>
        </section>

        {/* ✅ Filter Buttons */}
        <section className="flex justify-center mb-8 gap-2 md:gap-4 flex-wrap">
          {['Tous', 'Sites', 'Design', 'Audiovisuel'].map((category) => (
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

        {/* ✅ Project Cards (Rows Only) */}
        <section className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ height: '200px' }}
              animate={{
                height: expandedProject === index ? '400px' : '200px',
                width: '100%',
              }}
              transition={{ type: 'ease-out', stiffness: 300 }}
              onMouseEnter={() => setExpandedProject(index)}
              onMouseLeave={() => setExpandedProject(null)}
              className="relative overflow-hidden rounded-lg shadow-lg bg-[#FAFAF8] text-[#202020] cursor-pointer"
            >
              {/* ✅ Project Image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </div>

              {/* ✅ Expanded Info */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-4"
                  >
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base mb-4 text-center">
                      {project.description}
                    </p>
                    <Link href={project.link}>
                      <button className="bg-[#FAFAF8] text-[#202020] px-4 py-2 rounded-full font-medium hover:bg-[#E6332A] hover:text-white">
                        Voir le projet →
                      </button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </section>

        {/* ✅ Back to Home */}
        <div className="text-center mt-8 md:mt-16">
          <Link href="/#a-propos" className="text-sm md:text-lg font-bold text-[#fafaf8] hover:underline">
            ← Retour
          </Link>
        </div>
      </main>
      <Footer forceDarkMode={true} />
    </>
  );
};

export default Projects;
