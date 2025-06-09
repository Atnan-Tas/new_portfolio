'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';

const blender = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  });

  useEffect(() => {
    let raf: number;
    const animate = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
      raf = requestAnimationFrame(() =>
        setTimeout(animate, 2500)
      );
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [instanceRef]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafaf8] text-[#202020] px-4 md:px-8 lg:px-24 py-16 md:py-24 lg:py-32">
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            3D : Modélisation et Animation
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mt-4 text-[#202020]">
            Mes premiers pas dans la modélisation et l’animation 3D, avec Blender.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
          <p className="text-lg md:text-xl leading-relaxed text-[#202020]">
  J’ai découvert la 3D un peu par curiosité, en explorant Blender depuis chez moi. Au début, l’interface m’a franchement fait peur : une jungle d’icônes, de raccourcis et d’outils incompréhensibles. Mais à force de tests, de tutos et de nuits à expérimenter, je me suis rapidement familiarisé avec les bases de la modélisation.
  <br /><br />
  Très vite, j’ai eu envie de donner vie à mes idées. J’ai commencé par des formes simples, puis j’ai recréé des scènes autour de l’univers du sport — ma première passion. Entre deux essais techniques, je laissais aussi libre cours à ce qui me passait par la tête : des objets improbables, des personnages abstraits, des ambiances étranges.
  <br /><br />
  Ce que j’aime dans la 3D, c’est la liberté totale qu’elle offre. À partir de rien, on peut bâtir un monde. Et ce monde, c’est moi qui décide de sa lumière, de sa matière, de sa forme.
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

          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <video
                src="/Tiktok_doudou.mp4"
                width={400}
                height={400}
                className="object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          </div>
        </section>

        <section className="mt-20 px-4 md:px-8">
          <div ref={sliderRef} className="keen-slider">
            {['1.mp4', '2.MP4', '3.MP4', 'Tiktok_doudou.MP4'].map((file, index) => (
              <div key={index} className="keen-slider__slide flex justify-center">
                <video
                  src={`/${file}`}
                  className="rounded-xl shadow-xl object-cover"
                  width={300}
                  height={200}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default blender;
