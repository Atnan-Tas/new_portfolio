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
          La Maîtrise : Conservatoire Henri Dutilleux Belfort
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
          Vidéo réalisée durant mon stage au conservatoire Henri Dutilleux de Belfort, mettant en avant un enseignement à venir.
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
            Pour ce projet, j&apos;ai réalisé une interview vidéo complète pour le Conservatoire Henri Dutilleux. <br />
            De l&apos;écriture du scénario et des textes, au cadrage, au tournage et au montage final, chaque étape a été pensée pour créer une vidéo courte, dynamique et ludique. 
            <br /> <br />L&apos;objectif était de capter le message tout en rendant le contenu accessible et engageant pour le public. <br /> <br />     Ma partie préférée a été de donner vie aux échanges à travers un montage fluide et une narration visuelle claire, en équilibrant informations et spontanéité pour maintenir l&apos;intérêt du spectateur du début à la fin.
            </p>
            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-block bg-[#202020] text-[#FAFAF8] px-6 py-3 rounded-full font-medium text-lg hover:bg-[#E6332A] hover:text-[#fafaf8] transition-colors"
              >
                ← Retour aux projets
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=FnUM2CHSIps&t=112s&ab_channel=ConservatoireHenriDutilleuxduGrandBelfort"
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
                src="/Miniature_Capsule_Maitrise_2.png"
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
