import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Brand Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="sm:col-span-2">
            <div className="flex items-center space-x-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-base sm:text-lg font-bold">Mochammad Akmal Humami</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 max-w-md text-xs sm:text-sm">
              Full Stack Developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. Berpengalaman dalam pengembangan web, IoT, robotik, hingga analisis data.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  <span className="text-xs font-medium">{platform[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-1.5">
              {['Beranda', 'Tentang', 'Proyek', 'Keahlian', 'Kontak'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Layanan</h3>
            <ul className="space-y-1 sm:space-y-1.5">
              {['Web Development', 'Mobile Development', 'IoT Solutions', 'Data Analysis', 'UI/UX Design', 'Consulting'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs sm:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-2 sm:mt-3 pt-2 sm:pt-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="w-full flex justify-center">
            <div className="text-gray-400 text-xs mb-0 sm:mb-2">
              <span className="inline-block text-center w-full">By mallls © 2024</span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <ArrowUp className="w-2.5 h-2.5" size={10} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
