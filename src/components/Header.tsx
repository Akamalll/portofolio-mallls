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
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm">M</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white hidden sm:block transition-colors duration-200">Mochammad Akmal Humami</span>
              <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white sm:hidden transition-colors duration-200">Akmal</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  className="nav-button text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="dark-mode-toggle touch-feedback p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm dark:shadow-gray-900/20"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} className="sm:w-5 sm:h-5" /> : <Moon size={20} className="sm:w-5 sm:h-5" />}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-button touch-feedback lg:hidden p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm dark:shadow-gray-900/20"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={20} className="sm:w-5 sm:h-5" /> : <Menu size={20} className="sm:w-5 sm:h-5" />}
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
                <div className="py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleMobileNavClick(item.id, event);
                      }}
                      onTouchStart={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log('Touch start on:', item.name);
                      }}
                      onTouchEnd={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log('Touch end on:', item.name);
                        handleMobileNavClick(item.id, event as any);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="nav-button mobile-menu-item touch-feedback block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-base hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg active:bg-gray-100 dark:active:bg-gray-700"
                      style={{
                        minHeight: '48px',
                        padding: '12px 16px',
                        marginBottom: '4px',
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
