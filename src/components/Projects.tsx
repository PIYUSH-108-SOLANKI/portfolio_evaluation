import { motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { title: 'Dhokha — Fraud Intelligence Platform', category: 'Fraud Prevention', text: 'A Demo Day finalist helping users identify and protect themselves from digital and financial fraud.', colors: 'from-[#1e293b] via-[#285168] to-[#86c0bb]', live: 'https://dhokha-vert.vercel.app/' },
  { title: 'Samruddhi — EHR & Distributed Consent', category: 'Backend Architecture', text: 'Privacy-first EHR backend with PostgreSQL, MongoDB, Supabase JWT, Redis consent tokens and QR sharing.', colors: 'from-[#1d1728] via-[#4f3463] to-[#f28b71]' },
  { title: 'Advox — AI-Powered Analysis', category: 'AI / ML', text: 'An AI-powered analysis solution built under the Superlevemind Hackathon constraints.', colors: 'from-[#f3e9e0] via-[#d5b7aa] to-[#6b3f35]' },
  { title: 'Medical Analyzer', category: 'AI / Healthcare', text: 'AI-based medical diagnostics and analysis system developed for Hachx NMIMS.', colors: 'from-[#222b32] via-[#567e94] to-[#e6f3ee]' },
  { title: 'Skillify — Learning & Assessment', category: 'Product Development', text: 'A learning and skill-assessment product that earned 2nd place at the Skillify Hackathon.', colors: 'from-[#090b0e] via-[#28394a] to-[#82a5b2]' },
  { title: 'Smart India Hackathon — Tourism App', category: 'Product Development', text: 'A tourism-focused solution addressing practical travel-sector challenges in India.', colors: 'from-[#282828] via-[#777] to-[#dedede]' },
  { title: 'Schbang — Research & Trigger Finder', category: 'Automation', text: 'Automated research and useful-trigger discovery for business and marketing workflows.', colors: 'from-[#2b1733] via-[#8d3f9f] to-[#f0a9df]' },
  { title: 'IrrigaFlow — Smart Irrigation', category: 'Cloud + IoT', text: 'Full-stack cloud platform for intelligent irrigation with React, Node, MySQL, Docker and AWS.', colors: 'from-[#0f3d2e] via-[#4d9565] to-[#b5db7a]' },
  { title: 'Cloud-Deployed Web Application', category: 'Cloud Deployment', text: 'Full-stack application deployed with AWS EC2, Apache, Node.js and Amazon RDS.', colors: 'from-[#0d263a] via-[#287baf] to-[#75cbf2]' },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 6);
  return <section id="projects" className="py-24 md:py-32">
    <div className="section-container max-w-6xl">
      <h2 className="mb-14 text-center font-display text-4xl font-semibold md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {visible.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 2) * .08 }} className="group">
          <div className={`relative aspect-[1.55] overflow-hidden rounded-[1.6rem] border-[11px] border-[#f4f5ff] bg-gradient-to-br ${project.colors} shadow-sm`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.5),transparent_24%),linear-gradient(135deg,transparent_45%,rgba(255,255,255,.18)_46%,transparent_47%)]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/25 p-3 backdrop-blur-sm"><span className="text-xs font-medium text-white/90">{project.category}</span></div>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{project.category}</p>
          <div className="mt-1 flex items-start justify-between gap-3"><div><h3 className="font-display text-xl font-semibold leading-tight" style={{ color: 'var(--color-text-primary)' }}>{project.title}</h3><p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.text}</p></div>{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="mt-1 rounded-full border p-2"><ExternalLink size={15} /></a>}</div>
        </motion.article>)}
      </div>
      <div className="mt-12 text-center"><button onClick={() => setShowAll(!showAll)} className="btn-secondary">{showAll ? 'Show Less' : 'View More'} <Plus size={16} className={showAll ? 'rotate-45' : ''} /></button></div>
    </div>
  </section>;
}
