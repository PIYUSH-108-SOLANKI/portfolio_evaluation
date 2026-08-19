import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Exploring from './components/Exploring';
import CareerDirection from './components/CareerDirection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--color-base)', color: 'var(--color-text-secondary)' }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Exploring />
        <CareerDirection />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
