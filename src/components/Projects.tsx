import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from './useInView';
import { featuredProjects, otherProjects } from '../data/projects';
import { ExternalLink, Github, ChevronRight, Layers } from 'lucide-react';

function ArchitectureDiagram() {
  const nodes = [
    { id: 'user', label: 'User', x: 50, y: 10 },
    { id: 'api', label: 'API Gateway', x: 50, y: 25 },
    { id: 'auth', label: 'Auth / JWT', x: 25, y: 40 },
    { id: 'app', label: 'App Server', x: 50, y: 40 },
    { id: 'redis', label: 'Redis Cache', x: 75, y: 40 },
    { id: 'pg', label: 'PostgreSQL', x: 35, y: 58 },
    { id: 'rmq', label: 'RabbitMQ', x: 65, y: 58 },
    { id: 's3', label: 'AWS S3', x: 30, y: 74 },
    { id: 'hls', label: 'HLS Encoding', x: 55, y: 74 },
    { id: 'cdn', label: 'CloudFront', x: 75, y: 74 },
  ];

  const connections = [
    ['user', 'api'],
    ['api', 'auth'],
    ['api', 'app'],
    ['app', 'pg'],
    ['app', 'redis'],
    ['app', 'rmq'],
    ['rmq', 's3'],
    ['rmq', 'hls'],
    ['hls', 'cdn'],
  ];

  return (
    <div className="glass-card rounded-xl p-6 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers size={16} style={{ color: 'var(--color-accent-light)' }} />
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent-light)' }}>
          System Architecture
        </span>
      </div>
      <div className="relative w-full" style={{ paddingBottom: '85%' }}>
        <svg
          viewBox="0 0 100 85"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {connections.map(([from, to], i) => {
            const fromNode = nodes.find((n) => n.id === from)!;
            const toNode = nodes.find((n) => n.id === to)!;
            return (
              <line
                key={i}
                x1={fromNode.x}
                y1={fromNode.y + 3}
                x2={toNode.x}
                y2={toNode.y - 1}
                stroke="var(--color-accent)"
                strokeOpacity="0.25"
                strokeWidth="0.3"
                strokeDasharray="1,1"
              />
            );
          })}
          {nodes.map((node) => (
            <g key={node.id}>
              <rect
                x={node.x - 10}
                y={node.y - 2.5}
                width="20"
                height="5"
                rx="1"
                fill="var(--color-card)"
                stroke="var(--color-accent)"
                strokeOpacity="0.3"
                strokeWidth="0.3"
              />
              <text
                x={node.x}
                y={node.y + 0.5}
                textAnchor="middle"
                fill="var(--color-accent-light)"
                fontSize="2.2"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover rounded-2xl overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <div>
            {project.isHackathon && (
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3" style={{ color: '#b8860b', backgroundColor: 'rgba(184, 134, 11, 0.1)', border: '1px solid rgba(184, 134, 11, 0.2)' }}>
                Hackathon Project
              </span>
            )}
            <h3 className="font-display font-bold text-xl" style={{ color: 'var(--color-text-primary)' }}>
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--color-accent-light)' }}>
                {project.subtitle}
              </p>
            )}
          </div>
          <span className="text-sm font-mono" style={{ color: 'var(--color-text-muted)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        {project.features && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs transition-colors mb-3"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <ChevronRight
                size={14}
                className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
              />
              {expanded ? 'Hide' : 'Show'} key details
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pb-4">
                    {project.problem && (
                      <div className="text-sm">
                        <span className="font-medium" style={{ color: 'var(--color-text-muted)' }}>Problem: </span>
                        <span style={{ color: 'var(--color-text-secondary)' }}>{project.problem}</span>
                      </div>
                    )}
                    {project.solution && (
                      <div className="text-sm">
                        <span className="font-medium" style={{ color: 'var(--color-text-muted)' }}>Solution: </span>
                        <span style={{ color: 'var(--color-text-secondary)' }}>{project.solution}</span>
                      </div>
                    )}
                    <ul className="grid grid-cols-2 gap-1.5 pt-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-light)', opacity: 0.5 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {project.id === 1 && <ArchitectureDiagram />}

        <div className="flex gap-3 pt-2">
          {project.githubUrl && project.githubUrl !== '[ADD GITHUB LINK]' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs !px-4 !py-2"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs !px-4 !py-2"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';

export default function Projects() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mt-4">
            A selection of projects that demonstrate my interests and technical
            growth.
          </p>
          <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-lg mb-6" style={{ color: 'var(--color-text-primary)' }}>
            More Experiments
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <div
                key={p.name}
                className="glass-card-hover rounded-xl p-5 flex flex-col gap-3"
              >
                <h4 className="font-display font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {p.name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="tag-outline text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
