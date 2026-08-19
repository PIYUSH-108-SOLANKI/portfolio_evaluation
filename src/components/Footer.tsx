import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
              Piyush Solanki
            </h3>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
              Building software. Exploring systems. Learning continuously.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/PIYUSH-108-SOLANKI"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-solanki-69068526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:piyushsolanki1916@gmail.com"
              className="transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © 2026 Piyush Solanki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
