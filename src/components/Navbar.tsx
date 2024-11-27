import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            SKS
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}