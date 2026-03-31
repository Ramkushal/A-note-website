import {
  ReactLogo, TypeScriptLogo, ViteLogo, ZustandLogo,
  PdfjsLogo, PdfLibLogo, ReactMarkdownLogo, UuidLogo,
  ElectronLogo, ElectronBuilderLogo, IndexedDbLogo, NsisLogo,
  WrenchIcon,
} from './Logos';

type StackItem = {
  name: string;
  desc: string;
  logo: React.ReactNode;
};

const stack: {
  category: string;
  accent: string;
  headerBg: string;
  items: StackItem[];
}[] = [
  {
    category: 'Frontend',
    accent: '#2563eb',
    headerBg: '#eff6ff',
    items: [
      { name: 'React 19', desc: 'UI framework', logo: <ReactLogo size={28} /> },
      { name: 'TypeScript', desc: 'Type safety', logo: <TypeScriptLogo size={28} /> },
      { name: 'Vite', desc: 'Build tool', logo: <ViteLogo size={28} /> },
      { name: 'Zustand', desc: 'State management', logo: <ZustandLogo size={28} /> },
    ],
  },
  {
    category: 'PDF Engine',
    accent: '#7c3aed',
    headerBg: '#f5f3ff',
    items: [
      { name: 'pdfjs-dist', desc: 'PDF rendering', logo: <PdfjsLogo size={28} /> },
      { name: 'pdf-lib', desc: 'PDF manipulation', logo: <PdfLibLogo size={28} /> },
      { name: 'react-markdown', desc: 'Notes rendering', logo: <ReactMarkdownLogo size={28} /> },
      { name: 'uuid', desc: 'Annotation IDs', logo: <UuidLogo size={28} /> },
    ],
  },
  {
    category: 'Desktop & Storage',
    accent: '#059669',
    headerBg: '#ecfdf5',
    items: [
      { name: 'Electron 40', desc: 'Desktop runtime', logo: <ElectronLogo size={28} /> },
      { name: 'electron-builder', desc: 'NSIS installer', logo: <ElectronBuilderLogo size={28} /> },
      { name: 'IndexedDB (idb)', desc: 'Local storage', logo: <IndexedDbLogo size={28} /> },
      { name: 'NSIS', desc: 'Windows installer', logo: <NsisLogo size={28} /> },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <div className="section-badge mx-auto"><WrenchIcon size={14} /> Tech Stack</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#1e3a8a' }}>
            Built with modern technologies
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            A carefully chosen stack that balances performance, developer experience, and end-user reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stack.map(({ category, accent, headerBg, items }) => (
            <div key={category} className="tech-card overflow-hidden">
              {/* Card header */}
              <div className="px-6 pt-5 pb-4" style={{ background: headerBg, borderBottom: `1px solid ${accent}22` }}>
                <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
                  {category}
                </h3>
              </div>
              {/* Items */}
              <div className="p-4 flex flex-col gap-2">
                {items.map(({ name, desc, logo }) => (
                  <div key={name} className="tech-item flex items-center gap-3 p-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {logo}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#1e3a8a' }}>{name}</div>
                      <div className="text-xs" style={{ color: '#64748b' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
