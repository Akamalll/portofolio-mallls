import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Zap, Smartphone, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'Firebase', level: 80 },
        { name: 'Redux', level: 85 },
      ],
    },
    {
      title: 'IoT & Robotics',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Raspberry Pi', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'C++', level: 75 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'Matplotlib', level: 75 },
        { name: 'Scikit-learn', level: 70 },
      ],
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'AutoCAD', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'Inventor', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Keahlian & Teknologi</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">Berikut adalah keahlian dan teknologi yang telah saya kuasai melalui pengalaman dan pembelajaran terus-menerus.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="text-white sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }} viewport={{ once: true }}>
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Tools & Technologies Lainnya</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Jest', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Storybook', 'Cypress'].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center hover:bg-white/30 transition-all duration-200"
              >
                <span className="text-xs sm:text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }} className="mt-8 sm:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Sedang Belajar</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
            {['Machine Learning', 'Blockchain', 'Web3', 'GraphQL', 'Microservices'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium animate-pulse"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
