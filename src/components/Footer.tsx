import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-1">
          {/* Bottom Section - Copyright only */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <div className="text-gray-400 text-xs sm:text-sm px-2 sm:px-0">
              <span className="block sm:inline">© 2024 Mochammad Akmal Humami.</span>
              <span className="block sm:inline sm:ml-1">All rights reserved.</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
