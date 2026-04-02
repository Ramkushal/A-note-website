import { Download as DownloadIcon, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const requirements = [
  'Windows 10 or later (64-bit)',
  'Approximately 250 MB disk space',
];


export function Download() {
  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    setClicked(true);
    const link = document.createElement('a');
    // Fetching directly from GitHub Releases to bypass the 100MB Git limit
    link.href = `https://github.com/Ramkushal/A-note-website/releases/latest/download/A-note-Setup.exe`;
    link.click();
    setTimeout(() => setClicked(false), 3000);
  };

  return (
    <section id="download" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Header */}
        <div className="section-badge mx-auto">🪟 Windows Release</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ color: '#1e3a8a' }}>
          Ready to annotate?
        </h2>
        <p className="text-lg mb-12 leading-relaxed" style={{ color: '#475569' }}>
          Download the installer and be up and running in seconds. No account, no cloud, no subscriptions ever.
        </p>

        {/* Download card */}
        <div className="p-8 rounded-3xl mb-8 text-left"
          style={{ background: '#ffffff', border: '1px solid #bfdbfe', boxShadow: '0 8px 40px rgba(37,99,235,0.08), 0 2px 12px rgba(37,99,235,0.04)' }}>

          {/* Version badges */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
              style={{ background: '#f0f4ff', border: '1px solid #dbeafe', color: '#1e3a8a' }}>
              A'note v1.1.0
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#059669' }}>
              Stable
            </span>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="shimmer-btn w-full flex items-center justify-center gap-3 py-5 text-lg mb-8">
            <DownloadIcon className="w-6 h-6" />
            {clicked ? 'Starting download…' : 'Download for Windows (x64)'}
          </button>

          {/* Checklist */}
          <div className="flex flex-col items-center text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#94a3b8' }}>System Requirements</p>
              <div className="inline-flex flex-col items-start">
                {requirements.map(r => (
                  <div key={r} className="flex items-center gap-3 mb-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#059669' }} />
                    <span className="text-sm text-left" style={{ color: '#334155' }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs" style={{ color: '#94a3b8' }}>
          Open source · No account required · No telemetry · Works 100% offline
        </p>
      </div>
    </section>
  );
}
