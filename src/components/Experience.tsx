import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card-hover rounded-2xl p-8 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-xl bg-accent-dim flex-shrink-0">
              <Briefcase size={24} className="text-accent-light" />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-display font-bold text-white text-lg">
                  Solanki Trading Company
                </h3>
                <p className="text-accent-light text-sm font-medium">
                  Business / Accounting Experience
                </p>
                <p className="text-gray-500 text-xs mt-1 font-mono">
                  [START DATE] — Present
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Practical experience working with a family business and gaining
                exposure to accounting and day-to-day business operations.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Accounting', 'Business Operations', 'Responsibility', 'Business Processes'].map(
                  (tag) => (
                    <span key={tag} className="tag-outline text-[11px]">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
