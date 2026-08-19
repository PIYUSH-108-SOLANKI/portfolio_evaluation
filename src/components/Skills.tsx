import { motion } from 'framer-motion';
import { useInView } from './useInView';
import TechIconGrid from './TechIcons';

export default function Skills() {
  const [ref, inView] = useInView(.1);
  return <section id="skills" className="relative py-24 md:py-32" ref={ref}>
    <div className="hero-cube h-40 w-40 bg-[#62d4c6] left-1/2 top-56 -translate-x-1/2 opacity-70" />
    <div className="section-container relative z-10 max-w-5xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 text-center font-display text-3xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Technical Stack</motion.h2>
      <TechIconGrid />
    </div>
  </section>;
}
