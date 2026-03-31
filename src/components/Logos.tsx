// Section badge icons
export function SparkleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1 L9.2 6 L14 7.5 L9.2 9 L8 14 L6.8 9 L2 7.5 L6.8 6 Z" fill="#2563eb" />
      <circle cx="13" cy="3" r="1.1" fill="#60a5fa" />
      <circle cx="3" cy="13" r="0.8" fill="#93c5fd" />
    </svg>
  );
}

export function ClapperboardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Board body */}
      <rect x="1" y="5" width="14" height="10" rx="1.5" fill="#1e3a8a" />
      {/* Top clapper */}
      <rect x="1" y="2" width="14" height="4" rx="1" fill="#2563eb" />
      {/* Clapper stripes */}
      <line x1="4" y1="2" x2="3" y2="6" stroke="white" strokeWidth="1.2" />
      <line x1="7.5" y1="2" x2="6.5" y2="6" stroke="white" strokeWidth="1.2" />
      <line x1="11" y1="2" x2="10" y2="6" stroke="white" strokeWidth="1.2" />
      {/* Play triangle */}
      <path d="M6 8.5 L11 11 L6 13.5 Z" fill="white" />
    </svg>
  );
}

export function WrenchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wrench handle */}
      <path d="M9.5 6.5 L13.5 10.5 C14.1 11.1 14.1 12.1 13.5 12.7 C12.9 13.3 11.9 13.3 11.3 12.7 L7.3 8.7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      {/* Wrench head circle */}
      <circle cx="5" cy="5" r="3" stroke="#1e3a8a" strokeWidth="1.8" fill="none" />
      <path d="M3.5 2 L3.5 4 L5 5.5 L6.5 4 L6.5 2" stroke="#1e3a8a" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function WindowsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="6.5" height="6.5" rx="0.8" fill="#2563eb" />
      <rect x="8.5" y="1" width="6.5" height="6.5" rx="0.8" fill="#3b82f6" />
      <rect x="1" y="8.5" width="6.5" height="6.5" rx="0.8" fill="#60a5fa" />
      <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="0.8" fill="#1d4ed8" />
    </svg>
  );
}


// React logo — spinning atomic orbitals
export function ReactLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#61dafb" strokeWidth="1.2" fill="none">
        {/* Ellipse 1 */}
        <ellipse cx="12" cy="12" rx="10" ry="3.5" />
        {/* Ellipse 2 */}
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
        {/* Ellipse 3 */}
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" />
      </g>
      {/* Core dot */}
      <circle cx="12" cy="12" r="2" fill="#61dafb" />
    </svg>
  );
}

// TypeScript logo — blue square with TS
export function TypeScriptLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#3178c6" />
      {/* T */}
      <path d="M4.5 8.5 H10.5 M7.5 8.5 V15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* S */}
      <path d="M13 14.5 C13 14.5 13.5 15.5 15 15.5 C16.5 15.5 17 14.8 17 14 C17 13.2 16.4 12.8 15 12.5 C13.6 12.2 13 11.8 13 11 C13 10.2 13.6 9.5 15 9.5 C16.4 9.5 17 10.2 17 10.2"
        stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Vite logo — lightning bolt purple/gold
export function ViteLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left shape — purple */}
      <path d="M2 3.5 L13 21.5 L11 13 L16 13 Z" fill="#9333ea" />
      {/* Right bolt — cyan-gold gradient */}
      <path d="M8 3.5 L22 3.5 L12 18 L14 11 L8 11Z" fill="#f0c040" />
      {/* overlap highlight */}
      <path d="M11 13 L13 21.5 L14 11 Z" fill="#bd34fe" opacity="0.5" />
    </svg>
  );
}

// Zustand bear head
export function ZustandLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bear face */}
      <circle cx="12" cy="13" r="8" fill="#a16207" />
      {/* Ears */}
      <circle cx="6" cy="7" r="3.5" fill="#a16207" />
      <circle cx="18" cy="7" r="3.5" fill="#a16207" />
      <circle cx="6" cy="7" r="1.8" fill="#92400e" />
      <circle cx="18" cy="7" r="1.8" fill="#92400e" />
      {/* Eyes */}
      <circle cx="9.5" cy="12" r="1.5" fill="#1c1917" />
      <circle cx="14.5" cy="12" r="1.5" fill="#1c1917" />
      <circle cx="10" cy="11.5" r="0.5" fill="white" />
      <circle cx="15" cy="11.5" r="0.5" fill="white" />
      {/* Snout */}
      <ellipse cx="12" cy="15.5" rx="3" ry="2" fill="#92400e" />
      <circle cx="11" cy="15" r="0.6" fill="#1c1917" />
      <circle cx="13" cy="15" r="0.6" fill="#1c1917" />
    </svg>
  );
}

// pdfjs — PDF page icon
export function PdfjsLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="1" width="14" height="18" rx="1.5" fill="#ef4444" />
      {/* Fold corner */}
      <path d="M13 1 L17 5 H13 V1Z" fill="#b91c1c" />
      {/* PDF text */}
      <text x="4.5" y="14" fontFamily="monospace" fontSize="4.5" fontWeight="bold" fill="white">PDF</text>
      {/* Lines */}
      <rect x="19" y="8" width="2" height="15" rx="1" fill="#93c5fd" opacity="0.5" />
    </svg>
  );
}

// pdf-lib — edit pencil on document
export function PdfLibLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="14" height="18" rx="1.5" fill="#0ea5e9" />
      <rect x="5" y="7" width="8" height="1.5" rx="0.75" fill="white" opacity="0.8" />
      <rect x="5" y="10" width="8" height="1.5" rx="0.75" fill="white" opacity="0.8" />
      <rect x="5" y="13" width="5" height="1.5" rx="0.75" fill="white" opacity="0.8" />
      {/* Pencil */}
      <path d="M15 16 L20 11 L22 13 L17 18 Z" fill="#fbbf24" />
      <path d="M15 16 L17 18 L14.5 18.5 Z" fill="#92400e" />
      <path d="M20 11 L22 13 L23 10 Z" fill="#fcd34d" />
    </svg>
  );
}

// react-markdown — markdown M icon
export function ReactMarkdownLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="22" height="14" rx="2.5" fill="#1e293b" />
      {/* M letter */}
      <path d="M4 16 V9 L8 13 L12 9 V16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow down */}
      <path d="M15 9 V15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 13 L15 16 L17 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// UUID — hexagon with ID
export function UuidLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L20.5 6.5 V16.5 L12 22 L3.5 16.5 V6.5 Z" fill="#7c3aed" />
      <text x="6.5" y="15" fontFamily="monospace" fontSize="5.5" fontWeight="bold" fill="white">ID</text>
    </svg>
  );
}

// Electron logo — orbit
export function ElectronLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer orbit rings */}
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#47848f" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#47848f" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#47848f" strokeWidth="1.2" transform="rotate(120 12 12)" />
      {/* Nucleus */}
      <circle cx="12" cy="12" r="2.5" fill="#47848f" />
      {/* Electrons */}
      <circle cx="12" cy="8" r="1.2" fill="#9fe2e9" />
      <circle cx="16.5" cy="14.2" r="1.2" fill="#9fe2e9" />
      <circle cx="7.5" cy="14.2" r="1.2" fill="#9fe2e9" />
    </svg>
  );
}

// electron-builder — package box
export function ElectronBuilderLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box */}
      <path d="M3 8 L12 4 L21 8 V18 L12 22 L3 18 Z" fill="#2563eb" />
      {/* Box top flap */}
      <path d="M3 8 L12 12 L21 8" stroke="#93c5fd" strokeWidth="1.2" />
      <path d="M12 12 V22" stroke="#93c5fd" strokeWidth="1.2" />
      {/* Ribbon */}
      <path d="M12 4 V12" stroke="#bfdbfe" strokeWidth="1.5" />
      <path d="M8 6 L12 8 L16 6" stroke="#bfdbfe" strokeWidth="1.5" />
    </svg>
  );
}

// IndexedDB — database cylinders
export function IndexedDbLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="9" ry="3" fill="#0891b2" />
      <rect x="3" y="6" width="18" height="5" fill="#0e7490" />
      <ellipse cx="12" cy="11" rx="9" ry="3" fill="#0891b2" />
      <rect x="3" y="11" width="18" height="5" fill="#0e7490" />
      <ellipse cx="12" cy="16" rx="9" ry="3" fill="#0891b2" />
      <rect x="3" y="16" width="18" height="3.5" fill="#0e7490" />
      <ellipse cx="12" cy="19.5" rx="9" ry="3" fill="#06b6d4" />
    </svg>
  );
}

// NSIS — Windows installer icon
export function NsisLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Windows flag quadrants */}
      <rect x="2" y="2" width="9" height="9" rx="1" fill="#f25022" />
      <rect x="13" y="2" width="9" height="9" rx="1" fill="#7fba00" />
      <rect x="2" y="13" width="9" height="9" rx="1" fill="#00a4ef" />
      <rect x="13" y="13" width="9" height="9" rx="1" fill="#ffb900" />
    </svg>
  );
}
