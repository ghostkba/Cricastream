import React, { useState } from 'react';
import { AlertCircle, Wifi, Satellite, Radio, Loader2 } from 'lucide-react';


interface PlayerFrameProps {
  src: string;
  title: string;
}

const PlayerFrame: React.FC<PlayerFrameProps> = ({ src, title }) => {
  const [isStreamLoaded, setIsStreamLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-slate-800 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-1000 ${isStreamLoaded ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'}`}
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative z-10 w-24 h-24 rounded-full border-2 border-slate-700 bg-slate-900/80 flex items-center justify-center shadow-2xl">
            <Satellite className="w-10 h-10 text-brand animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Radio className="w-6 h-6 text-brand animate-pulse" />
          {title}
        </h3>
        
        <div className="flex items-center gap-3 text-slate-400 text-sm bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-md">
          <Loader2 className="w-4 h-4 animate-spin text-brand" />
          <span>Connecting to secure satellite feed...</span>
        </div>
      </div>

      <iframe 
          src={src}
          width="100%" 
          height="100%" 
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen 
          allow="encrypted-media"
          className={`relative z-10 w-full h-full transition-opacity duration-1000 ${isStreamLoaded ? 'opacity-100' : 'opacity-0'}`}
          title={title}
          onLoad={() => {
            // Add a small delay to ensure visual smoothness
            setTimeout(() => setIsStreamLoaded(true), 1500);
          }}
      ></iframe>
    </div>
  );
};

const LiveStream: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'primary' | 'secondary'>('primary');

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
              Live Match Streams
            </h1>
            <p className="text-slate-400 mt-1">
              ICC Men's T20 World Cup 2026 - Official Broadcast Feeds
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setActiveStream('primary')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeStream === 'primary'
                    ? 'bg-brand text-slate-900 shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                Stream 1
              </button>
              <button
                onClick={() => setActiveStream('secondary')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeStream === 'secondary'
                    ? 'bg-brand text-slate-900 shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                Stream 2
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
              <Wifi className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-brand">
                Signal Strength: Excellent
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          {activeStream === 'primary' ? (
            <div className="space-y-2 animate-fade-in">
              <h2 className="text-lg font-semibold text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand"></span>
                Primary Feed (Star Sports)
              </h2>
              <PlayerFrame src="//streamcrichd.com/update/star.php" title="Star Sports Feed" />
            </div>
          ) : (
            <div className="space-y-2 animate-fade-in">
              <h2 className="text-lg font-semibold text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Alternative Feed (Sky Sports)
              </h2>
              <PlayerFrame src="//streamcrichd.com/update/skys2.php" title="Sky Sports Feed" />
            </div>
          )}
        </div>

        <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-start gap-3 max-w-5xl mx-auto">
          <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300">
            <strong>Disclaimer:</strong> These streams are provided by third-party sources. 
            We do not host or control the content. If a stream does not load, please check your internet connection or try refreshing the page.
            Ensure ad-blockers are disabled if the player fails to initialize.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;