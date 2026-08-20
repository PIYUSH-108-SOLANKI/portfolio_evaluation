import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-center px-5">

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 rounded-full border px-2 py-1 shadow-sm" style={{ background: 'rgba(255,255,255,.82)', borderColor: 'rgba(13,13,13,.06)' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[10px] transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-[10px] !px-4 !py-2">
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
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
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4">Let's Connect</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
