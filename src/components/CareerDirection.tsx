import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ArrowRight } from 'lucide-react';

const milestones = [
  'Student Developer',
  'Software / Technology Internship',
  'Software / Product Engineering',
  'Technology + Product Leadership',
  'CTO / Product Leadership',
];

export default function CareerDirection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Where I'm Heading</h2>
          <p className="section-subheading mt-4">
            A general direction, not a guaranteed path.
          </p>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="max-w-xl">
          {milestones.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full border-2"
                  style={{
                    backgroundColor: i === 0 ? 'var(--color-accent)' : 'transparent',
                    borderColor: i === 0 ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  }}
                />
                {i < milestones.length - 1 && (
                  <div className="w-px h-8" style={{ backgroundColor: 'var(--color-border)' }} />
                )}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: i === 0 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              >
                {m}
              </span>
              {i < milestones.length - 1 && (
                <ArrowRight size={12} style={{ color: 'var(--color-text-muted)' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
