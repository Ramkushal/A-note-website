import { Download, ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 min-h-screen">

      {/* Badge */}
      <div className="animate-fade-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
        style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb' }}>
        <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-badge" style={{ background: '#2563eb' }} />
        v1.1.0 — Now Available for Windows
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up delay-200 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-5">
        <span className="block" style={{ color: '#22C55E' }}>A'<span style={{ color: '#2563eb' }}>note</span></span>
        <span className="gradient-text block">built for professionals.</span>
      </h1>

      {/* Sub */}
      <p className="animate-fade-up delay-300 max-w-2xl text-lg md:text-xl leading-relaxed mb-10"
        style={{ color: '#475569' }}>
        Annotate, highlight, and manage PDF documents with an enterprise-grade Markdown notes system — all in a blazing-fast A'note desktop app.
      </p>

      {/* CTA Buttons */}
      <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a href="#download"
          className="shimmer-btn inline-flex items-center gap-2.5 px-8 py-3.5 text-base shadow-lg">
          <Download className="w-5 h-5" />
          Download for Windows
        </a>
        <a href="#demo"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200"
          style={{ background: '#ffffff', border: '1px solid #bfdbfe', color: '#2563eb', boxShadow: '0 1px 4px rgba(37,99,235,0.08)' }}>
          Watch Demo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Stats */}
      <div className="animate-fade-up delay-500 flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {[
          { value: '100%', label: 'Free & Open Source' },
          { value: 'Offline', label: 'Works Without Internet' },
          { value: 'IndexedDB', label: 'Private Local Storage' },
          { value: 'React 19', label: 'Modern Tech Stack' },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="text-xl font-black gradient-text">{value}</span>
            <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Stars */}
      <div className="mt-8 flex items-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4" style={{ color: '#f59e0b', fill: '#f59e0b' }} />
        ))}
        <span className="ml-2 text-sm font-medium" style={{ color: '#64748b' }}>Enterprise-grade annotations</span>
      </div>

      {/* App Screenshot */}
      <div className="animate-fade-up delay-600 mt-20 w-full max-w-5xl rounded-2xl overflow-hidden"
        style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.25)' }}>
        <img src={`${import.meta.env.BASE_URL}assets/Screenshot 2026-03-31 142548.png`} alt="A'note Interface" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
}
