import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { ClapperboardIcon } from './Logos';

export function VideoSection() {
  const videos = [
    { id: 'highlight', label: 'Smart Highlighting', src: `${import.meta.env.BASE_URL}assets/highlight.mp4` },
    { id: 'colors', label: 'Color Coding', src: `${import.meta.env.BASE_URL}assets/highlight_different_colors.mp4` },
    { id: 'panel', label: 'Markdown Panel', src: `${import.meta.env.BASE_URL}assets/notes_panel.mp4` },
    { id: 'captions', label: 'Rich Captions', src: `${import.meta.env.BASE_URL}assets/notes_captions.mp4` },
    { id: 'open', label: 'Fast Loading', src: `${import.meta.env.BASE_URL}assets/open.mp4` },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section id="demo" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mx-auto"><ClapperboardIcon size={14} /> Live Demo</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#1e3a8a' }}>
            See it in action
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            Watch how A'note transforms your document workflow with intelligent highlights and synchronized notes.
          </p>
        </div>

        {/* Player */}
        <div className="relative group video-wrapper">
          <video
            ref={videoRef}
            key={activeVideo.src}
            className="w-full rounded-2xl bg-[#f0f4ff]"
            style={{ aspectRatio: '16/9', display: 'block', objectFit: 'contain' }}
            src={activeVideo.src}
            onEnded={() => setPlaying(false)}
            onClick={togglePlay}
            preload="metadata"
            autoPlay={playing}
          />

          {/* Play overlay */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer rounded-2xl" onClick={togglePlay}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                style={{ background: 'rgba(37,99,235,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(37,99,235,0.25)' }}>
                <Play className="w-8 h-8 ml-1" style={{ color: '#2563eb', fill: '#2563eb' }} />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-b-2xl"
            style={{ background: 'linear-gradient(to top, rgba(30,58,138,0.5) 0%, transparent 100%)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={togglePlay}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.5)' }}>
                  {playing
                    ? <Pause className="w-4 h-4" style={{ color: '#1e3a8a' }} />
                    : <Play className="w-4 h-4 ml-0.5" style={{ color: '#1e3a8a', fill: '#1e3a8a' }} />}
                </button>
                <button onClick={toggleMute}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.5)' }}>
                  {muted
                    ? <VolumeX className="w-4 h-4" style={{ color: '#1e3a8a' }} />
                    : <Volume2 className="w-4 h-4" style={{ color: '#1e3a8a' }} />}
                </button>
              </div>
              <button onClick={() => videoRef.current?.requestFullscreen()}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.5)' }}>
                <Maximize2 className="w-4 h-4" style={{ color: '#1e3a8a' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Video Selector */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {videos.map((vid) => (
            <button
              key={vid.id}
              onClick={() => { setActiveVideo(vid); setPlaying(true); }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: vid.id === activeVideo.id ? '#2563eb' : '#f1f5f9',
                color: vid.id === activeVideo.id ? '#ffffff' : '#475569',
                border: vid.id === activeVideo.id ? '1px solid #1d4ed8' : '1px solid transparent',
              }}
            >
              {vid.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm mt-5" style={{ color: '#94a3b8' }}>
          Full demo of A'note v1.1.0 — highlight, annotate and export in real time
        </p>
      </div>
    </section>
  );
}
