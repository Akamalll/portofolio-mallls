import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      position: 'CEO, TechStart Indonesia',
      company: 'TechStart Indonesia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Muhammad adalah developer yang sangat profesional dan berdedikasi. Proyek e-commerce yang dia kembangkan untuk kami berhasil meningkatkan penjualan sebesar 200% dalam 3 bulan pertama.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Kemampuan Muhammad dalam mengembangkan aplikasi mobile sangat luar biasa. Dia tidak hanya fokus pada kode, tapi juga mempertimbangkan user experience secara menyeluruh.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'CTO',
      company: 'Digital Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Sistem IoT yang dikembangkan Muhammad untuk monitoring pabrik kami sangat reliable dan user-friendly. Tim kami sangat puas dengan hasilnya.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Lisa Chen',
      position: 'UX Designer',
      company: 'Creative Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Kolaborasi dengan Muhammad sangat menyenangkan. Dia sangat terbuka terhadap feedback dan selalu memberikan solusi yang inovatif untuk setiap tantangan.',
      rating: 5,
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Startup Founder',
      company: 'NextGen Tech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content: 'Muhammad membantu kami mengembangkan MVP yang solid dalam waktu singkat. Kemampuan teknis dan komunikasinya sangat baik.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Apa Kata Klien</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Berikut adalah testimonial dari klien yang telah bekerja sama dengan saya dalam berbagai proyek.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Quote className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-8">
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">"{testimonials[currentIndex].content}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900" />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Proyek Selesai' },
            { number: '30+', label: 'Klien Puas' },
            { number: '3+', label: 'Tahun Pengalaman' },
            { number: '100%', label: 'On-Time Delivery' },
          ].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} viewport={{ once: true }} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
