import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/akamalll',
      color: 'hover:text-gray-800 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/mochakmalhumami',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ahumami22@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    // URL Google Drive untuk download langsung
    // Cara mendapatkan FILE_ID:
    // 1. Upload file ke Google Drive
    // 2. Klik kanan file -> Share -> Copy link
    // 3. Dari link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    // 4. Ambil FILE_ID (bagian setelah /d/ dan sebelum /view)
    const fileId = '1bMB1AtfKJ-qCKkl-4INmnvLQlB0OBQUZ'; // Ganti dengan FILE_ID Anda
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Buka link Google Drive di tab baru untuk download
    window.open(downloadUrl, '_blank');

    console.log('Opening Google Drive download...');
  };

  // Fungsi untuk scroll ke section proyek
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 80; // Tinggi header yang fixed
      const elementPosition = projectsSection.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    } else {
      // Fallback jika section tidak ditemukan
      console.log('Projects section not found');
      alert('Section proyek tidak ditemukan. Silakan gunakan menu navigasi.');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence>
          {isVisible && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 sm:space-y-8">
              {/* Profile Image */}
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }} className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">M</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="space-y-3 sm:space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white leading-tight px-2 sm:px-0"
                >
                  Mochammad Akmal Humami
                </motion.h1>

                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                  Full Stack Developer
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
                >
                  Seorang <span className="font-semibold text-gray-800 dark:text-white">Full Stack Developer</span> yang berorientasi pada detail dan passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. Berpengalaman
                  dalam pengembangan web, IoT, robotik, hingga analisis data.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color} hover:shadow-xl`}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span>Download CV</span>
                </motion.button>

                <motion.button
                  onClick={handleViewProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm sm:text-base"
                >
                  Lihat Proyek
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
