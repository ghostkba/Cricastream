import React from 'react';
import { AlertCircle, Wifi } from 'lucide-react';

const LiveStream: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
              Live Match Stream
            </h1>
            <p className="text-slate-400 mt-1">
              ICC Men's T20 World Cup 2026 - Official Broadcast Feed
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <Wifi className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium text-brand">Signal Strength: Excellent</span>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-slate-800">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
            <p>Loading Stream Source...</p>
          </div>
          {/* The requested iframe */}
          <iframe 
              src="//streamcrichd.com/cric.php" 
              width="100%" 
              height="100%" 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen 
              allow="encrypted-media"
              className="relative z-10 w-full h-full"
              title="Live Cricket Stream"
          ></iframe>
        </div>

        <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300">
            <strong>Disclaimer:</strong> This stream is provided by a third-party source. 
            We do not host or control the content. If the stream does not load, please check your internet connection or try refreshing the page.
            Ensure ad-blockers are disabled if the player fails to initialize.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;