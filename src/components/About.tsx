import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Hammer, Compass, Lightbulb } from 'lucide-react';

const brandCards = [
  {
    icon: Hammer,
    title: 'BUILD',
    description: 'Turning ideas into functional software and prototypes.',
  },
  {
    icon: Compass,
    title: 'EXPLORE',
    description:
      'Learning across cloud, AI, system design, IoT and emerging technology.',
  },
  {
    icon: Lightbulb,
    title: 'THINK',
    description:
      'Looking at technology from both engineering and product perspectives.',
  },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="leading-relaxed text-lg" style={{ color: 'var(--color-text-primary)' }}>
              I'm Piyush, an undergraduate technology student who enjoys
              building software and understanding what happens behind it. My
              interests span full-stack development, cloud infrastructure,
              system design, AI/ML, IoT and emerging technologies.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I've worked on academic projects, hackathons, cloud deployments
              and system-design problems, which has helped me develop a mindset
              that goes beyond simply writing code. I enjoy understanding the
              problem, designing the solution, building it, and figuring out
              how it can scale.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I'm currently focused on strengthening my engineering
              fundamentals, building meaningful projects, and preparing for
              software and technology internships.
            </p>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {brandCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card-hover rounded-xl p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg" style={{ background: 'var(--color-accent-dim)' }}>
                  <card.icon size={20} style={{ color: 'var(--color-accent-light)' }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
