'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NeymarProject = () => {

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafaf8] text-[#202020] px-4 md:px-8 lg:px-24 py-16 md:py-24 lg:py-32">
        {/* ✅ Project Title */}
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Affiche Sport : Neymar Jr.</h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
            Un projet visuel captivant mettant en avant l&apos;énergie du football.
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
              Lorsque Neymar a rejoint le FC Barcelone, il n&apos;a pas seulement intégré une équipe, il a fusionné avec une philosophie, un style de jeu, une identité. 
              <br /><br />Sa capacité à dribbler, à créer des occasions impossibles et à électriser tout un stade ont marqué une époque inoubliable.
              <br /><br /> Ce projet est né de mon désir de capturer cet esprit. À travers une composition soignée, 
              une palette de couleurs audacieuse et une typographie moderne, cette affiche vise à retranscrire la vitesse, l&apos;agilité et le charisme de Neymar sur le terrain.
              <br /><br />Elle raconte une histoire, celle d&apos;un joueur qui, par ses performances, a transcendé les frontières du football pour devenir une véritable icône mondiale.
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

        {/* ✅ Mockup Section */}
        <section className="mt-16">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <Image
              src="/mockup.jpg"
              alt="Mockup affiches"
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
