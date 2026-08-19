import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { skillCategories } from '../data/skills';

const levelLabels = {
  comfortable: 'Comfortable With',
  exploring: 'Exploring',
};

const levelColors = {
  comfortable: 'text-accent-light',
  exploring: 'text-cyan',
};

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading mt-4">
            Technologies I work with and areas I'm actively exploring.
          </p>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-white text-sm">
                  {cat.name}
                </h3>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider ${levelColors[cat.level]}`}
                >
                  {levelLabels[cat.level]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="tag-outline">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
