import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/HeroText';
import Hero2 from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio | Accueil</title>
        <meta name="description" content="Portfolio d'Atnan Tas, designer graphique." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Background Animation */}

      {/* Contenu principal */}
      <main>
        <Hero />
        <Hero2 />
        <About />
        <Contact />
        
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
