'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaBehance, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // 📝 Gérer les changements des champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 📬 Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage('✅ Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(`❌ Erreur : ${result.error || 'Une erreur est survenue.'}`);
      }
    } catch (_) {
      setResponseMessage('❌ Une erreur inattendue est survenue.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16 md:px-24 md:py-32 transition-colors duration-500 bg-[#fafaf8] text-[#202020] overflow-hidden"
    >
      {/* 🎥 Bande Défilante en Haut */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-transparent z-10">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="text-4xl pt-8 font-bold uppercase mx-4 text-[#202020] opacity-80"
            >
              Contact •
            </span>
          ))}
        </motion.div>
      </div>

          
      {/* ✅ Partie Gauche : Formulaire de Contact */}
      <div className="space-y-6 z-20">
        <h2 className="text-6xl font-bold">Vous avez besoin de moi ?</h2>
        <h3 className="text-4xl font-semibold">Alors allons-y</h3>
        <p className="text-lg text-[#555555]">
          Je suis à la recherche d&apos;opportunités en tant que freelance ou pour un stage/alternance dans des startups, agences et studios de design.
        </p>

        {/* 📝 Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre Nom"
              required
              className="w-1/2 bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre Email"
              required
              className="w-1/2 bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A]"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre Message"
            required
            className="w-full bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A] resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-4 px-6 py-2 rounded-full font-medium text-lg transition-colors ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#202020] hover:bg-[#E6332A] text-white'
            }`}
          >
            {isLoading ? 'Envoi en cours...' : 'Envoyer le Message'}
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-lg font-medium">{responseMessage}</p>
        )}
      </div>

      {/* ✅ Partie Droite : Informations de Contact */}
      <div className="space-y-6 md:pl-12 z-20">
        <h3 className="text-2xl font-bold">Me Joindre</h3>
        <div className="flex items-center gap-2 group">
          <FaEnvelope className="text-[#202020] group-hover:text-[#E6332A] transition-colors" />
          <a
            href="mailto:atnan.tas.pro@gmail.com"
            className="inline-block text-lg hover:text-[#E6332A] underline-offset-4 transition-colors duration-300"
          >
            atnan.tas.pro@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 group">
          <FaPhoneAlt className="text-[#202020] group-hover:text-[#E6332A] transition-colors" />
          <p className="text-lg">+33 7 83 14 73 72</p>
        </div>

         {/* 🌐 Réseaux Sociaux */}
         <h3 className="text-2xl font-bold mt-8">Mes Réseaux Sociaux</h3>
            <ul className="space-y-2">
            {[
                { name: 'Instagram', url: 'https://www.instagram.com/atnanzer', icon: <FaInstagram /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/atnan-tas-8a4b82257/', icon: <FaLinkedin /> },
                { name: 'Behance', url: 'https://www.behance.net/atnantas', icon: <FaBehance /> },
            ].map((link, index) => (
                <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-2 group"
                >
                <span className="text-xl group-hover:text-[#E6332A] transition-colors">
                    {link.icon}
                </span>
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#E6332A] underline underline-offset-4 transition-colors duration-300"
                >
                    {link.name}
                </a>
                </motion.li>
            ))}
            </ul>

        <h3 className="text-2xl font-bold mt-8">Où me trouver ?</h3>
        <div className="flex items-center gap-2 group">
          <FaMapMarkerAlt className="text-[#202020] group-hover:text-[#E6332A] transition-colors" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Montbéliard,25200,France"
            target="_blank"
            className="text-lg hover:text-[#E6332A] underline-offset-4"
          >
            Montbéliard, 25200 France
          </a>
        </div>
        <p className="text-4xl font-bold">{new Date().toLocaleTimeString()}</p>
      </div>
    </section>
  );
};

export default Contact;
