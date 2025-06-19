import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan React, Node.js, dan MongoDB. Fitur keranjang belanja, pembayaran, dan dashboard admin.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'IoT Monitoring Kualitas Air',
      description: 'Sistem aplikasi web untuk monitoring kualitas air secara real-time dengan fitur pH dan TDS.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      category: 'iot',
      technologies: ['ESP32', 'Raspberry Pi', 'Python', 'MQTT'],
      liveUrl: 'https://dashboard-ph-tds.vercel.app/',
      githubUrl: 'https://github.com/Akamalll/Dashboard-pH-TDS',
      featured: true,
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Dashboard analisis data real-time dengan visualisasi interaktif menggunakan Python dan D3.js.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'data',
      technologies: ['Python', 'Airflow', 'Pandas', 'Flask'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile App - Iklimku',
      description: 'Aplikasi cuaca modern yang menyediakan informasi cuaca yang akurat dan real-time dengan antarmuka yang menarik dan mudah digunakan.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akamalll/Iklimku-App',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Website portofolio responsif dengan animasi modern dan dark mode menggunakan React dan Framer Motion.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://portofolio-mallls.vercel.app/',
      githubUrl: 'https://github.com/Akamalll/portofolio-mallls',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description: 'Chatbot AI untuk customer service dengan integrasi machine learning dan natural language processing.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'Semua', icon: Globe },
    { id: 'web', label: 'Web App', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Database },
    { id: 'iot', label: 'IoT', icon: Database },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'ai', label: 'AI/ML', icon: Database },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Proyek Terbaru</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">Berikut adalah beberapa proyek yang telah saya kerjakan, menampilkan berbagai teknologi dan solusi inovatif.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                  activeFilter === filter.id ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <filter.icon size={14} className="sm:w-4 sm:h-4" />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${project.featured ? 'ring-2 ring-blue-500' : ''}`}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                {project.featured && <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow">Featured</div>}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-3 sm:space-x-4">
                    <motion.a href={project.liveUrl} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-blue-600 shadow">
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-gray-900 shadow"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex space-x-2 sm:space-x-3 pt-2">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-500 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2 shadow"
                  >
                    <Eye size={14} className="sm:w-4 sm:h-4" />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2 shadow"
                  >
                    <Code size={14} className="sm:w-4 sm:h-4" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {activeFilter !== 'all' && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mt-12 sm:mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
              onClick={() => {
                setActiveFilter('all');
                setTimeout(() => {
                  const grid = document.querySelector('#projects');
                  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
            >
              Lihat Semua Proyek
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
