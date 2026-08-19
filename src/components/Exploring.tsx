import { motion } from 'framer-motion';
import { useInView } from './useInView';
import {
  Brain,
  Cloud,
  Network,
  Cpu,
  Package,
} from 'lucide-react';

const exploringTopics = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Exploring practical applications of AI/ML and data-driven systems.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Deepening practical understanding of cloud infrastructure, deployment and scalable systems.',
  },
  {
    icon: Network,
    title: 'System Design',
    description:
      'Learning how large-scale applications are architected, optimized and scaled.',
  },
  {
    icon: Cpu,
    title: 'Semiconductors',
    description:
      'Exploring semiconductor technology, chip manufacturing and testing/yield optimization.',
  },
  {
    icon: Package,
    title: 'Product Development',
    description:
      'Learning how technical ideas can become useful, scalable products.',
  },
];

export default function Exploring() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Currently Exploring</h2>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {exploringTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover rounded-xl p-6 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: 'var(--color-accent-dim)' }}>
                <topic.icon size={20} style={{ color: 'var(--color-accent-light)' }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6"
          style={{ borderLeft: '2px solid var(--color-accent)' }}
        >
          <p className="text-sm leading-relaxed italic" style={{ color: 'var(--color-text-secondary)' }}>
            "Beyond software, I'm increasingly interested in the semiconductor
            industry — particularly chip manufacturing, testing, yield
            optimization and the infrastructure behind modern computing."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
