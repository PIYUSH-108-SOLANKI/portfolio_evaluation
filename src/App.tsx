import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Award, Code2, Cpu, Globe, Rocket, Server, Mail, ExternalLink, ShieldCheck, Briefcase } from 'lucide-react';

export default function App() {
  const [frameIndex, setFrameIndex] = useState(0);
  const totalFrames = 30; // Pre-generated fallback sequence length

  useEffect(() => {
    const handleScroll = () => {
      const scrollFraction = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      const currentFrame = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));
      setFrameIndex(currentFrame);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#08090d', color: '#f3f4f6', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Sticky Hero Scrollytelling Header */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>

        {/* Dynamic Animated Canvas / Background Graphic */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${50 + Math.sin(frameIndex * 0.2) * 20}% ${50 + Math.cos(frameIndex * 0.2) * 20}%, rgba(99, 102, 241, 0.25) 0%, rgba(56, 189, 248, 0.1) 40%, rgba(8, 9, 13, 0.95) 80%)`,
            transition: 'background 0.1s linear',
            zIndex: 1,
          }}
        />

        {/* Text Overlay scrubbing with scroll */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '99px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>

          </div>

          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Piyush Solanki
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '650px', margin: '0 auto 32px' }}>
            B.Tech Computer Science Student | System Design & Cloud Engineering Specialist
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '12px 28px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #38bdf8)', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
              View Projects
            </a>
            <a href="#contact" style={{ padding: '12px 28px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div style={{ position: 'relative', zIndex: 20, maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
            🚀 Featured Projects & Systems
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Short-Video Platform Architecture (TikTok Clone)',
                desc: 'Scalable HLS streaming pipeline, Redis feed caching, RabbitMQ background transcoding, AWS S3 + CloudFront delivery.',
                tags: ['Next.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS CloudFront'],
              },
              {
                title: 'Samruddhi — Distributed EHR Backend',
                desc: 'Hybrid EHR backend (Postgres + MongoDB) with Supabase JWT, Row-Level Security, Redis TTL consent tokens, and S3 uploads.',
                tags: ['PostgreSQL', 'MongoDB', 'Supabase JWT', 'Redis', 'AWS S3'],
                link: 'https://samruddhi-health.netlify.app',
              },
              {
                title: 'College Event Planner',
                desc: 'Full-stack platform designed for managing student RSVPs, college events, and instant coordination.',
                tags: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
                link: 'https://stately-cobbler-bebeb9.netlify.app',
              },
              {
                title: 'Co-founder Match Maker',
                desc: 'Matching platform created for startup founders to connect based on skills, tech stack, and vision.',
                tags: ['React', 'Node.js', 'MongoDB', 'Express'],
                link: 'https://startupmatching.netlify.app',
              },
            ].map((p, idx) => (
              <div key={idx} style={{ background: 'rgba(18, 20, 29, 0.75)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>{p.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderRadius: '4px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Live Preview <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
            🛠️ Technical Skills
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { cat: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'Node.js', 'Dart', 'HTML/CSS'] },
              { cat: 'Backend & Cloud', items: ['Flask', 'Express.js', 'AWS (EC2, S3, RDS, CloudFront)', 'Docker', 'Linux', 'Apache', 'PM2'] },
              { cat: 'Databases & Queues', items: ['PostgreSQL', 'MySQL', 'MongoDB Atlas', 'Neo4j Graph DB', 'Redis', 'RabbitMQ'] },
              { cat: 'Specialized Exposure', items: ['IoT (ESP8266 & Blynk)', 'Machine Learning Basics', 'Cisco Packet Tracer', 'Agile/Scrum'] },
            ].map((s, idx) => (
              <div key={idx} style={{ background: 'rgba(18, 20, 29, 0.75)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 600, marginBottom: '12px' }}>{s.cat}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.items.map((item, iIdx) => (
                    <span key={iIdx} style={{ fontSize: '0.8rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', color: '#e5e7eb' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hackathons & Experience */}
        <section id="contact" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
            🏆 Achievements & Contact
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(18, 20, 29, 0.75)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fbbf24', marginBottom: '12px' }}>Hackathon Placements</h3>
              <ul style={{ paddingLeft: '18px', color: '#9ca3af', lineHeight: 1.8, fontSize: '0.95rem' }}>
                <li>🏆 <strong>Skillify Hackathon:</strong> Runner-up (2nd Place)</li>
                <li>🥈 <strong>SaaS Product Hackathon:</strong> 2nd Place Winner</li>
                <li>🇮🇳 <strong>Smart India Hackathon 2025:</strong> Tourism Platform</li>
                <li>💡 <strong>Schbang Hackathon:</strong> Automated Research & Trigger Finder</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(18, 20, 29, 0.75)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Get In Touch</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '16px' }}>Open for software development, cloud, and technical product roles.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <div>📧 Email: <strong style={{ color: '#fff' }}>piyushsolanki1916@gmail.com</strong></div>
                <div>📞 Phone: <strong style={{ color: '#fff' }}>+91 9967631400</strong></div>
                <div>📍 Location: <strong style={{ color: '#fff' }}>Dombivli / Kharghar, India</strong></div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
