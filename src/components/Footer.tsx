

export function Footer() {
  return (
    <footer className="relative py-12 px-6" style={{ borderTop: '1px solid #dbeafe' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold text-sm" style={{ color: '#22C55E' }}>A'<span style={{ color: '#2563eb' }}>note</span></div>
            <div className="text-xs" style={{ color: '#94a3b8' }}>v1.0.0 · Windows x64</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Demo', href: '#demo' },
            { label: 'Tech Stack', href: '#tech' },
            { label: 'Download', href: '#download' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: '#64748b' }}>
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs" style={{ color: '#94a3b8' }}>
          Made by Ram· {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
