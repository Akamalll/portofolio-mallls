import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  category: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'React Developer',
      issuer: 'Meta',
      date: '2024',
      image: '/certificates/react-meta.png',
      link: '#',
      category: 'Frontend',
    },
    {
      id: '2',
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      image: '/certificates/javascript-fcc.png',
      link: '#',
      category: 'Programming',
    },
    {
      id: '3',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2024',
      image: '/certificates/web-design-fcc.png',
      link: '#',
      category: 'Frontend',
    },
    {
      id: '4',
      title: 'Python for Everybody',
      issuer: 'University of Michigan',
      date: '2024',
      image: '/certificates/python-umich.png',
      link: '#',
      category: 'Programming',
    },
  ];

  const categories = ['All', 'Frontend', 'Programming', 'Backend', 'Database'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertificates = selectedCategory === 'All' ? certificates : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sertifikat & <span className="text-blue-600 dark:text-blue-400">Kualifikasi</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Berbagai sertifikat yang telah saya peroleh untuk meningkatkan keahlian dan pengetahuan dalam pengembangan web.</p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </motion.button>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{certificate.title}</h3>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">{certificate.category}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-3">{certificate.issuer}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificate.date}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(certificate.link, '_blank')}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center transition-colors duration-200"
                  >
                    Lihat Sertifikat
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">Tidak ada sertifikat untuk kategori ini.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
