'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaBehance, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
      
        const result = await response.json();
        console.log(result);
      
        if (response.ok) {
          alert('Message envoyé avec succès !');
        } else {
          console.error('Erreur:', result.error);
          alert(`Erreur : ${result.error}`);
        }
      };
      
  return (
    <section
      id="contact"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16 md:px-24 md:py-32 transition-colors duration-500 bg-[#fafaf8] text-[#202020]"
    >
      {/* ✅ Partie Gauche : Formulaire de Contact */}
      <div className="space-y-6">
        <h2 className="text-6xl font-bold">Vous avez besoin de moi ?</h2>
        <h3 className="text-4xl font-semibold">Alors allons-y</h3>
        <p className="text-lg text-[#555555]">
          Je suis à la recherche d'opportunités en tant que freelance ou pour un stage/alternance dans des startups, agences et studios de design.
        </p>

        {/* 📝 Formulaire */}
        <form className="space-y-4 mt-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Votre Nom"
              className="w-1/2 bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A]"
            />
            <input
              type="email"
              placeholder="Votre Email"
              className="w-1/2 bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A]"
            />
          </div>
          <textarea
            placeholder="Votre Message"
            className="w-full bg-transparent px-4 py-2 border-b border-[#202020] focus:outline-none focus:border-[#E6332A] resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-[#202020] hover:bg-[#E6332A] text-white px-6 py-2 rounded-full font-medium text-lg transition-colors"
          >
            Envoyer le Message
          </button>
        </form>
      </div>

      {/* ✅ Partie Droite : Informations de Contact */}
      <div className="space-y-6 md:pl-12">
        {/* 📬 Contact Details */}
        <h3 className="text-2xl font-bold">Me Joindre</h3>
        <div className="flex items-center gap-2 group">
          <FaEnvelope className="text-[#202020] group-hover:text-[#E6332A] transition-colors" />
          <motion.a
            href="mailto:atnan.tas.pro@gmail.com"
            whileHover={{ textDecoration: 'underline' }}
            className="inline-block text-lg hover:text-[#E6332A] underline-offset-4 transition-colors duration-300"
          >
            atnan.tas.pro@gmail.com
          </motion.a>
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

        {/* 📍 Localisation */}
        <h3 className="text-2xl font-bold mt-8">Où me trouver ?</h3>
        <div className="flex items-center gap-2 group">
          <FaMapMarkerAlt className="text-[#202020] group-hover:text-[#E6332A] transition-colors" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Montbéliard,25200,France"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-[#E6332A] underline underline-offset-4 transition-colors duration-300"
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
