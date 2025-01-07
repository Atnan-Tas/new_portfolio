'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LebronProject = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafaf8] text-[#202020] px-4 md:px-8 lg:px-24 py-16 md:py-24 lg:py-32">
        {/* ✅ Project Title */}
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Affiche Sport : LeBron James</h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
            Un hommage visuel à l&apos;un des plus grands basketteurs de tous les temps.
          </p>
        </section>

        {/* ✅ Content Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* ✅ Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
              Depuis mes débuts dans le design, j&apos;ai toujours été inspiré par les figures emblématiques du sport. Parmi elles, LeBron James se distingue comme un leader, un compétiteur acharné et une légende vivante du basketball.  
              <br /><br />
              À travers cette affiche, j&apos;ai voulu capturer non seulement la puissance physique de LeBron, mais également son esprit combatif et sa présence imposante sur le terrain. Chaque détail de cette composition a été soigneusement pensé pour retranscrire l&apos;énergie brute qu'il dégage lors de chaque match.
              <br /><br />
              Les couleurs choisies rappellent les moments iconiques de sa carrière, les jeux de lumière symbolisent les projecteurs qui illuminent chaque moment décisif, et la typographie audacieuse évoque la détermination inébranlable qui le caractérise.
              <br /><br />
              Cette affiche raconte plus qu&apos;une histoire de sport : elle est le reflet d&apos;un athlète qui a su marquer son époque et inspirer des millions de fans à travers le monde.
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
                src="/Poster_Lebron.jpg"
                alt="Affiche LeBron James"
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
              alt="Mockup affiches LeBron"
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

export default LebronProject;
