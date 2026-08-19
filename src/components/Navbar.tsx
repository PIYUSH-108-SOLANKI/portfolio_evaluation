import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b shadow-lg'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--glass-border)' : 'transparent',
        }}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-18">
          <a href="#home" className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
            Piyush Solanki
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'var(--color-text-muted)', background: 'var(--color-accent-dim)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="btn-primary text-xs !px-4 !py-2">
              Let's Connect
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'var(--color-text-muted)', background: 'var(--color-accent-dim)' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              className="p-2 transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 backdrop-blur-xl md:hidden"
            style={{ backgroundColor: 'var(--glass-bg)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-display font-medium transition-colors"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
