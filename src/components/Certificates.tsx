import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, FileText } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const Certificates: React.FC = () => {
  const [loadingStates, setLoadingStates] = React.useState<{ [key: string]: boolean }>({});

  const handleCertificateClick = (link: string, certificateId: string) => {
    if (link && link !== '#') {
      // Set loading state
      setLoadingStates((prev) => ({ ...prev, [certificateId]: true }));

      // Jika link adalah file PDF lokal, buka di tab baru
      if (link.startsWith('/certificates/')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
      // Jika link adalah Google Drive atau external link
      else if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }

      // Reset loading state after a short delay
      setTimeout(() => {
        setLoadingStates((prev) => ({ ...prev, [certificateId]: false }));
      }, 1000);
    }
  };

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Belajar Dasar Data Science',
      issuer: 'Dicoding',
      date: '2025',
      image: '/certificates/Belajar Dasar Data Science_page-0001.png',
      link: 'https://drive.google.com/file/d/1lkRm3BB6QQoXV7D3JoIRYXuJ0DK3oiuh/view?usp=drive_link',
    },
    {
      id: '2',
      title: 'Belajar Dasar Visualisasi Data',
      issuer: 'Dicoding',
      date: '2025',
      image: '/certificates/Belajar Dasar Visualisasi Data_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1zqZcwfJGVqhMrs8zEIkojy4wKd-E679W/view?usp=sharing',
    },
    {
      id: '3',
      title: 'Web Desain Internasional GAYATAMA',
      issuer: 'GAYATAMA',
      date: '2024',
      image: '/certificates/Web Desain Internasional GAYATAMA_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1GuGZkRog4fc3lRZCvozxFezbiMRy-g1u/view?usp=drive_link',
    },
    {
      id: '4',
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      date: '2024',
      image: '/certificates/Belajar Dasar AI - DICODING 2024_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1Md9s6HZSv0sN9JibJCn1Nebq5tiQbzyT/view?usp=drive_link',
    },
    {
      id: '5',
      title: 'Cloud Essentials Knowledge Badge Assessment',
      issuer: 'AWS training and certification',
      date: '2024',
      image: '/certificates/Pelatihan AWS Pengetahuan Cloud Essentials 2024_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1_tVOHhAVehVV8zA4_zzGxmtZapq5i2YC/view?usp=drive_link',
    },
    {
      id: '6',
      title: 'Flutter in Production',
      issuer: 'Google Developer Group Surabaya',
      date: '2024',
      image: '/certificates/Peserta Flutter in Production 2025_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1lVNlgXUpcIOlzxh5Qw0gYcPq2aK-xwgF/view?usp=drive_link',
    },
    {
      id: '7',
      title: 'Web Development',
      issuer: 'Himpunan Mahasiswa Informatika UPN "Veteran" Jawa Timr',
      date: '2024',
      image: '/certificates/Web Desain UPN-Jawa Timur_page-0001.jpg',
      link: 'https://drive.google.com/file/d/1Wm-872L_J0nqT9M331IF6aMQvex0UCRl/view?usp=sharing',
    },
  ];

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

        {/* Certificates Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700"
            >
              {/* Certificate Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-700">
                {certificate.image ? (
                  certificate.image.endsWith('.pdf') ? (
                    <div className="w-full h-full flex items-center justify-center bg-red-50 dark:bg-red-900/20">
                      <div className="text-center">
                        <FileText className="w-20 h-20 text-red-500 mx-auto mb-3" />
                        <p className="text-sm text-red-600 dark:text-red-400 font-medium">PDF Certificate</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  )
                ) : (
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCertificateClick(certificate.link, certificate.id)}
                    className="opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                    disabled={!certificate.link || certificate.link === '#'}
                    title={certificate.link && certificate.link !== '#' ? 'Klik untuk melihat sertifikat' : 'Link tidak tersedia'}
                  >
                    <ExternalLink className={`w-5 h-5 ${certificate.link && certificate.link !== '#' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </motion.button>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-3">{certificate.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-3">{certificate.issuer}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificate.date}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCertificateClick(certificate.link, certificate.id)}
                    disabled={!certificate.link || certificate.link === '#' || loadingStates[certificate.id]}
                    className={`text-sm font-medium flex items-center transition-all duration-200 ${
                      certificate.link && certificate.link !== '#' && !loadingStates[certificate.id]
                        ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer'
                        : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {loadingStates[certificate.id] ? (
                      <>
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                        Membuka...
                      </>
                    ) : certificate.link && certificate.link !== '#' ? (
                      <>
                        Lihat Sertifikat
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Link Tidak Tersedia
                        <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
