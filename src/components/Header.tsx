import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronUp } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);

      // Hitung posisi footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        // Tombol scroll to top hanya muncul ketika user berada di area footer
        // Dan cepat menghilang ketika scroll ke bawah keluar dari footer
        const isInFooterArea = scrollPosition + windowHeight >= footerTop;
        const isScrollingDown = scrollPosition > lastScrollY.current;

        // Jika scroll ke bawah dan keluar dari footer, cepat hilangkan tombol
        if (isScrollingDown && !isInFooterArea) {
          setShowScrollTop(false);
        } else {
          setShowScrollTop(isInFooterArea);
        }

        // Simpan posisi scroll untuk perbandingan berikutnya
        lastScrollY.current = scrollPosition;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Touch gesture handling for mobile menu
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMenuOpen) return;

      const touchY = e.touches[0].clientY;
      const diff = touchStartY.current - touchY;

      // Close menu on swipe down
      if (diff < -50) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi untuk scroll ke section dengan offset yang tepat
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId); // Debug log

    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found:', element); // Debug log

      // Dapatkan tinggi header yang tepat
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 80;

      console.log('Header height:', headerHeight); // Debug log

      const elementPosition = element.offsetTop - headerHeight;

      console.log('Element position:', elementPosition); // Debug log

      // Gunakan setTimeout untuk memastikan menu mobile tertutup terlebih dahulu
      setTimeout(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }, 100);

      // Tutup menu mobile jika terbuka
      setIsMenuOpen(false);
    } else {
      console.log('Element not found for ID:', sectionId); // Debug log
    }
  };

  // Fungsi khusus untuk mobile navigation - versi yang lebih sederhana
  const handleMobileNavClick = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('Mobile nav clicked:', sectionId); // Debug log

    // Tutup menu terlebih dahulu
    setIsMenuOpen(false);

    // Gunakan window.location.hash untuk navigasi yang lebih reliable
    setTimeout(() => {
      window.location.hash = sectionId;

      // Scroll ke posisi yang tepat setelah hash di-set
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }, 300);
  };

  const navItems = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Keahlian', href: '#skills', id: 'skills' },
    { name: 'Sertifikat', href: '#certificates', id: 'certificates' },
    { name: 'Proyek', href: '#projects', id: 'projects' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Overlay saat menu mobile aktif */}
      <AnimatePresence>{isMenuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="header-overlay overlay-stack lg:hidden" onClick={() => setIsMenuOpen(false)} />}</AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`header-container header-stack header-mobile-fix transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/95 dark:backdrop-blur-md dark:shadow-gray-900/20' : 'bg-transparent dark:bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 touch-feedback" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xs sm:text-sm">M</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white hidden sm:block transition-colors duration-200 whitespace-nowrap">Akmal Humami</span>
              <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white sm:hidden transition-colors duration-200 whitespace-nowrap">Akmal</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-auto">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2, scale: 1.07, boxShadow: '0 2px 12px 0 rgba(59,130,246,0.08)' }}
                  whileTap={{ scale: 0.93, backgroundColor: 'rgba(139,92,246,0.12)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="nav-button text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 font-medium text-sm xl:text-base px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-1 sm:space-x-2 ml-4 lg:ml-8">
              <motion.button
                whileHover={{ scale: 1.13, boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)' }}
                whileTap={darkMode ? { scale: 0.88, backgroundColor: 'rgba(59,130,246,0.15)' } : { scale: 0.88, backgroundColor: 'rgba(253,224,71,0.15)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                onClick={toggleDarkMode}
                className="dark-mode-toggle touch-feedback p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Toggle dark mode"
                style={{ overflow: 'hidden', position: 'relative' }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.13, boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)' }}
                whileTap={{ scale: 0.88, backgroundColor: 'rgba(236,72,153,0.13)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-button touch-feedback lg:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Toggle mobile menu"
                style={{ overflow: 'hidden', position: 'relative' }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden mobile-menu mobile-menu-container mobile-menu-stack overflow-hidden"
              >
                <div className="py-5 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleMobileNavClick(item.id, event);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="nav-button mobile-menu-item touch-feedback block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-base hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg active:bg-gray-100 dark:active:bg-gray-700 mb-2 px-3 py-3"
                      style={{
                        minHeight: '44px',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Scroll to Top Button - Mobile Only - Hanya muncul di area footer */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ duration: 0.15 }}
            onClick={scrollToTop}
            className="mobile-scroll-up-button touch-feedback fixed bottom-4 right-4 z-40 lg:hidden w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-150"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
