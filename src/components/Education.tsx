import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { GraduationCap } from 'lucide-react';

const relevantAreas = [
  'Software Engineering',
  'Data Structures',
  'Database Management Systems',
  'Computer Networks',
  'Machine Learning',
  'Cloud Computing',
  'DevOps',
  'System Design',
  'IoT',
  'Entrepreneurship',
];

export default function Education() {
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
          <h2 className="section-heading">Education</h2>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card-hover rounded-2xl p-8 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-xl flex-shrink-0" style={{ background: 'var(--color-accent-dim)' }}>
              <GraduationCap size={24} style={{ color: 'var(--color-accent-light)' }} />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-display font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                  ITM Skills University
                </h3>
                <p className="text-sm font-medium" style={{ color: 'var(--color-accent-light)' }}>
                  Undergraduate Student — Computer Science
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Kharghar, Maharashtra · 4th Semester / 2nd Year
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {relevantAreas.map((area) => (
                  <span key={area} className="tag-outline text-[11px]">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
