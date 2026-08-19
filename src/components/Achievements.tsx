import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { achievements } from '../data/achievements';
import { Trophy, Medal, Star } from 'lucide-react';

const icons = [Trophy, Medal, Star];

export default function Achievements() {
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
          <h2 className="section-heading">Hackathons & Achievements</h2>
          <p className="section-subheading mt-4">
            Competition experience and recognition through hackathons.
          </p>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg" style={{ background: 'var(--color-accent-dim)' }}>
                    <Icon size={20} style={{ color: 'var(--color-accent-light)' }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {a.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent-light)' }}>
                      {a.result}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {a.description}
                </p>
                {a.project && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                      Project
                    </span>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-primary)' }}>{a.project}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
