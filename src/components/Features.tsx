import { Highlighter, FileText, Link, Database, Monitor, Zap, Palette, Shield } from 'lucide-react';
import { SparkleIcon } from './Logos';

const features = [
  {
    icon: Highlighter,
    bg: '#fef3c7', iconColor: '#d97706',
    title: 'PDF Highlights & Annotations',
    desc: 'Select text and highlight with customizable colors. Add structured comment tooltips to any region.',
  },
  {
    icon: FileText,
    bg: '#dbeafe', iconColor: '#2563eb',
    title: 'Enterprise Markdown Notes',
    desc: 'Every PDF gets its own Markdown notes file — with real-time rendering, editing, and auto-save.',
  },
  {
    icon: Link,
    bg: '#ede9fe', iconColor: '#7c3aed',
    title: 'Bidirectional Linking',
    desc: 'Click any highlight to jump to its Markdown note. Click a note to scroll the PDF to the matching annotation.',
  },
  {
    icon: Database,
    bg: '#d1fae5', iconColor: '#059669',
    title: 'Private Local Storage',
    desc: 'All data stored locally via IndexedDB. Your documents never leave your machine.',
  },
  {
    icon: Monitor,
    bg: '#fee2e2', iconColor: '#dc2626',
    title: 'True Desktop App',
    desc: 'Packaged as a native Windows application via Electron Builder with a professional NSIS installer.',
  },
  {
    icon: Zap,
    bg: '#ffedd5', iconColor: '#ea580c',
    title: 'Blazing Fast',
    desc: 'Built on Vite + React 19 with virtual rendering so even large PDFs stay smooth and responsive.',
  },
  {
    icon: Palette,
    bg: '#fce7f3', iconColor: '#db2777',
    title: 'Light & Dark Themes',
    desc: 'Toggle between an elegant light and a deep dark theme. Your preference is remembered between sessions.',
  },
  {
    icon: Shield,
    bg: '#e0f2fe', iconColor: '#0284c7',
    title: 'Offline First',
    desc: 'Fully functional without internet. No tracking, no telemetry, no cloud uploads — ever.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <div className="section-badge mx-auto"><SparkleIcon size={13} /> Features</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#1e3a8a' }}>
            Everything you need to annotate PDFs
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            A complete annotation suite built for knowledge workers, researchers, and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, bg, iconColor, title, desc }) => (
            <div key={title} className="feature-card p-6">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg }}>
                <Icon className="w-5 h-5" style={{ color: iconColor }} />
              </div>
              <h3 className="font-semibold text-base mb-2 leading-snug" style={{ color: '#1e3a8a' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
