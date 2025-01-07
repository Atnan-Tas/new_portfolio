'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PasteurProject = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafaf8] text-[#202020] px-4 md:px-8 lg:px-24 py-16 md:py-24 lg:py-32">
        {/* ✅ Project Title */}
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Teaser JPO : Conservatoire Henri Dutilleux Belfort
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
          Vidéo réalisée, de la prise de vue au montage, pour mettre en avant la journée portes ouvertes réalisée par le conservatoire Henri Dutilleux de Belfort.
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
            Pour les Journées Portes Ouvertes du Conservatoire Henri Dutilleux, j'ai réalisé une vidéo teaser dynamique pour attirer et informer le public (parents, professeurs, élèves, futurs élèves).
            <br /> <br /> À travers un montage rythmé et des séquences visuelles variées, j'ai cherché à retranscrire l'énergie et la diversité des disciplines enseignées. <br />
            Ma partie préférée a été de filmer les artistes en ouvre du conservatoire en quelques instants, en créant une vidéo courte et facile à partager.
                    </p>
            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-block bg-[#202020] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#E6332A] hover:text-[#fafaf8] transition-colors"
              >
                ← Retour aux projets
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=m_2kUOeTzU4&ab_channel=ConservatoireHenriDutilleuxduGrandBelfort"
                className="inline-block bg-[#e6332A] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#202020] hover:text-[#fafaf8] transition-colors mt-4 ml-4 sm:ml-6 lg:ml-6"
              >
               ← Voir la vidéo
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
                src="/jpo.jpg"
                alt="Affiche Université Pasteur"    
                width={800}
                height={800}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PasteurProject;
