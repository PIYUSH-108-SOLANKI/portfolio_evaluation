import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';

const terminalLines = [
  { prompt: '$', text: 'whoami', delay: 0 },
  { prompt: '', text: 'piyush-solanki', delay: 600 },
  { prompt: '$', text: 'focus', delay: 1200 },
  { prompt: '', text: 'software · cloud · systems · ai · product', delay: 1800 },
  { prompt: '$', text: 'status', delay: 2400 },
  { prompt: '', text: 'building... learning... exploring...', delay: 3000 },
  { prompt: '$', text: 'build()', delay: 3600 },
  { prompt: '$', text: 'deploy()', delay: 4000 },
  { prompt: '$', text: 'scale()', delay: 4400 },
  { prompt: '$', text: 'iterate()', delay: 4800 },
];

function TerminalVisual() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay + 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden w-full max-w-md font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e06050' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d4a534' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6aab73' }} />
        <span className="ml-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>terminal</span>
      </div>
      <div className="p-4 space-y-1 min-h-[200px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            {line.prompt && (
              <span className="font-bold" style={{ color: 'var(--color-accent-light)' }}>{line.prompt}</span>
            )}
            <span style={{ color: line.prompt ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}>
              {line.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold" style={{ color: 'var(--color-accent-light)' }}>$</span>
          <span className="inline-block w-2 h-4 animate-pulse" style={{ backgroundColor: 'var(--color-accent-light)', opacity: 0.8 }} />
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, var(--color-accent-dim) 0%, transparent 50%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 80%, var(--color-warm-dim) 0%, transparent 50%)' }} />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ background: 'var(--color-accent-dim)', border: '1px solid var(--color-accent-dim)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#6aab73' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-accent-light)' }}>
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              <span style={{ color: 'var(--color-text-primary)' }}>Piyush Solanki</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-xl sm:text-2xl font-medium gradient-text leading-snug"
            >
              Building software. Exploring systems. Turning ideas into products.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base leading-relaxed max-w-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              I'm a technology-focused undergraduate at ITM Skills University,
              building projects across software development, cloud, system
              design, AI/ML and IoT. I enjoy turning ideas into practical
              products and exploring how technology can solve real-world
              problems.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#" className="btn-secondary">
                Download Resume <Download size={16} />
              </a>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex gap-6 pt-2"
            >
              <a
                href="https://github.com/PIYUSH-108-SOLANKI"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                GitHub <ArrowRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-solanki-69068526b/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                LinkedIn <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-6 mt-16 text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-text-muted)' }} />
            Based in Maharashtra, India
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-text-muted)' }} />
            ITM Skills University
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-text-muted)' }} />
            Software · Cloud · Systems
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#about"
            className="transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
