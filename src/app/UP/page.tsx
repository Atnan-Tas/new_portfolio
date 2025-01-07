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
            Université Pasteur Bourgogne Franche-Comté : Communication 360°
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
            Une stratégie globale pour une identité visuelle moderne et impactante.
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
              Dans le cadre du projet de rebranding de l&apos;Université Pasteur, j&apos;ai piloté une stratégie de communication 360°, alliant direction artistique, conception graphique et production de contenus multimédias.
              <br /><br />
              Le logo, repensé autour des initiales &quot;UP&quot;, propose une identité visuelle moderne et impactante, incarnant les valeurs fondamentales de l&apos;université : innovation et excellence.
              <br /><br />
              J&apos;ai réalisé une série de supports incluant des mock-ups, des vidéos animées sous After Effects, ainsi que des publications pour les réseaux sociaux, assurant une cohérence visuelle et narrative sur tous les canaux de communication.
              <br /><br />
              Ma partie préférée a été de créer une identité forte à partir des principes et valeurs de l&apos;université, en traduisant visuellement son essence et son ambition.
              <br /><br />
              Ce projet m&apos;a permis d&apos;explorer la transversalité des médias tout en consolidant mon approche stratégique et créative.
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
                src="/img_upbfc.jpg"
                alt="Affiche Université Pasteur"    
                width={400}
                height={400}
                className="object-cover"
              />
              <Image
                src="/application.jpg"
                alt="Affiche Université Pasteur"    
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
              src="/carte.jpg"
              alt="Mockup Université Pasteur"
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

export default PasteurProject;
