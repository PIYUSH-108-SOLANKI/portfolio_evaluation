import { motion } from 'framer-motion';
import portrait from '../assets/piyush-portrait.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[690px] overflow-hidden pt-20 md:min-h-[735px]">
      <div className="hero-orb h-20 w-20 bg-[#a868d8] left-[9%] top-[23%]" />
      <div className="hero-cube h-16 w-16 bg-[#ff8a42] left-[15%] top-[14%]" />
      <div className="hero-cube h-16 w-16 bg-[#4ca3e8] left-[17%] top-[45%]" />
      <div className="hero-cube h-20 w-20 bg-[#52ccd2] right-[11%] top-[13%]" />
      <div className="hero-orb h-16 w-16 bg-[#b4df30] right-[14%] top-[31%]" />
      <div className="hero-cube h-20 w-20 bg-[#ffbd40] right-[17%] top-[46%]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-5 font-display text-3xl font-semibold tracking-[-.05em] md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
          Hi, I’m <em className="font-serif font-bold">Piyush!</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="mt-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>Software Engineering</motion.p>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 }} className="mt-3 h-44 w-36 overflow-hidden rounded-[2rem] shadow-xl md:h-52 md:w-44">
          <img src={portrait} alt="Piyush Solanki" className="h-full w-full object-cover object-[50%_32%]" />
        </motion.div>
        <p className="mt-3 text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>Projects, hackathons & deployments</p>
        <a href="#contact" className="btn-secondary mt-5 border-2 !px-8 !py-3" style={{ borderColor: 'rgba(101,83,255,.13)' }}>Let’s Connect</a>
      </div>
    </section>
  );
}
