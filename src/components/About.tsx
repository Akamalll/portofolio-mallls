import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express, Django, PostgreSQL',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'IoT & Robotics',
      description: 'Arduino, Raspberry Pi, Python, C++',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript, REST APIs',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Data Analysis',
      description: 'Python, Pandas, NumPy, Matplotlib, Airflow',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Git, Agile',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const experiences = [
    {
      year: '2024 - Sekarang',
      title: 'IoT Developer',
      company: 'Tech Company',
      description: 'Mengembangkan sistem IoT untuk monitoring dan kontrol',
    },
    {
      year: '2023 - 2024',
      title: 'Fullstack Developer',
      company: 'Startup Digital',
      description: 'Mengembangkan aplikasi web modern dengan React dan Node.js',
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Innovation Lab',
      description: 'Membuat UI/UX yang responsif dan user-friendly',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Tentang Saya</h2>
          <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 space-y-4">
            <p>
              Saya adalah mahasiswa Program Studi Sistem Informasi di Universitas Negeri Surabaya, saat ini sedang menempuh semester 5. Minat saya terhadap dunia pemrograman tumbuh sejak masa SMA, dan sejak saat itu saya memiliki cita-cita
              untuk menjadi seorang programmer profesional, khususnya sebagai Full Stack Developer.
            </p>
            <p>
              Saya sangat antusias dalam mengembangkan kemampuan di bidang teknologi informasi, terutama dalam pengembangan website, IoT, dan Data Analisis. Saya memiliki semangat tinggi untuk terus belajar dan beradaptasi dengan
              perkembangan teknologi yang terus bergerak maju, baik untuk masa kini maupun masa depan.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Column - Skills */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Keahlian & Teknologi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                    <skill.icon className="text-white sm:w-6 sm:h-6" size={20} />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1.5 sm:mb-2">{skill.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Pengalaman Kerja</h3>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 sm:pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full transform -translate-x-1.5 sm:-translate-x-2"></div>
                  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1.5 sm:mb-2">{exp.year}</div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1.5 sm:mb-2">{exp.title}</h4>
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-1.5 sm:mb-2 text-sm">{exp.company}</div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Mengapa Memilih Saya?</h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">3+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Kepuasan Klien</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
