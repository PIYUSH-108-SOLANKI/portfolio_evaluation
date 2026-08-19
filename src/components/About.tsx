import { motion } from 'framer-motion';
import { useInView } from './useInView';

const paragraphs = [
  'I’m a B.Tech Computer Science student at ITM Skills University, passionate about building practical technology solutions that solve real-world problems. My interests span software development, cloud computing, system design, databases, AI/ML, cybersecurity, fraud prevention, and product development.',
  'I enjoy understanding how a product works end-to-end — from the interface and backend APIs to databases, cloud infrastructure, scalability, security, and deployment.',
  'I’m currently looking for opportunities to apply my technical skills, learn from experienced teams, and contribute to meaningful products.',
];

export default function About() {
  const [ref, inView] = useInView(.15);
  return <section id="about" className="relative py-24 md:py-32" ref={ref}>
    <div className="hero-cube h-36 w-36 bg-[#d9a9f5] left-[28%] top-20 opacity-70" />
    <div className="hero-cube h-28 w-28 bg-[#79cbe8] right-[27%] top-32 opacity-70" />
    <div className="section-container relative z-10 max-w-4xl text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-heading">About Me</motion.h2>
      <div className="mt-10 space-y-7">
        {paragraphs.map((paragraph, i) => <motion.p key={paragraph} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * .1 }} className="rounded-[1.65rem] border bg-white/85 px-7 py-7 text-sm leading-relaxed shadow-[0_0_0_12px_rgba(240,241,255,.7)] md:px-12 md:text-base" style={{ borderColor: 'rgba(101,83,255,.1)', color: 'var(--color-text-secondary)' }}>{paragraph}</motion.p>)}
      </div>
    </div>
  </section>;
}
