import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Let's Build Something</h2>
            <p className="section-subheading mt-4 mx-auto">
              I'm currently looking for opportunities to learn, build and
              contribute — especially through software engineering, technology
              and product-focused internships.
            </p>
            <div className="w-12 h-0.5 mt-6 mx-auto" style={{ backgroundColor: 'var(--color-accent)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a href="mailto:piyushsolanki1916@gmail.com" className="btn-primary">
              <Mail size={16} /> Email Me <ArrowRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-solanki-69068526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/PIYUSH-108-SOLANKI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
