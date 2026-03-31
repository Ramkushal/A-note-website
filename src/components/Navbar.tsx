import { Download } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{ background: 'rgba(248,250,255,0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #dbeafe' }}>

      {/* Brand */}
      <div className="flex items-center gap-2.5">

        <span className="font-bold text-[15px] tracking-tight" style={{ color: '#22C55E' }}>
          A'<span style={{ color: '#2563eb' }}>note</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          { label: 'Features', href: '#features' },
          { label: 'Demo', href: '#demo' },
          { label: 'Tech Stack', href: '#tech' },
        ].map(({ label, href }) => (
          <a key={label} href={href}
            className="text-sm font-medium transition-colors duration-150"
            style={{ color: '#475569' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a href="#download"
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-150"
        style={{ background: '#2563eb', boxShadow: '0 2px 8px rgba(37,99,235,0.25)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1d4ed8'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#2563eb'; }}>
        <Download className="w-4 h-4" />
        Download
      </a>
    </header>
  );
}
