import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Download } from './components/Download';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#f8faff' }}>
      {/* Grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      {/* Ambient orbs – very subtle blue */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}
      />
      <div
        className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <VideoSection />
          <div className="section-divider" />
          <Features />
          <div className="section-divider" />
          <TechStack />
          <div className="section-divider" />
          <Download />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
