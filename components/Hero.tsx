import React from 'react';
import { Play, Calendar, Trophy, MapPin } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-800 border border-slate-700 text-brand mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand mr-2 animate-pulse"></span>
          ICC T20 World Cup 2026
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Thrill</span> of <br className="hidden sm:block" />
          World Class Cricket
        </h1>
        
        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Watch live matches, get AI-powered insights, and stay updated with the India & Sri Lanka co-hosted tournament.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={() => onNavigate(ViewState.LIVE)}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-brand hover:bg-brand-dark transition-all duration-200 shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transform hover:-translate-y-1"
          >
            <Play className="w-5 h-5 mr-2 fill-current" />
            Watch Live Stream
          </button>
          
          <button 
            onClick={() => onNavigate(ViewState.SCHEDULE)}
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-xl text-white bg-slate-800 hover:bg-slate-700 transition-all duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            View Schedule
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center p-4">
                <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
                <span className="text-3xl font-bold text-white">20</span>
                <span className="text-sm text-slate-400 uppercase tracking-wide">Teams</span>
            </div>
            <div className="flex flex-col items-center p-4 border-l border-r border-slate-800">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <span className="text-3xl font-bold text-white">12</span>
                <span className="text-sm text-slate-400 uppercase tracking-wide">Venues</span>
            </div>
            <div className="flex flex-col items-center p-4">
                 <Calendar className="w-8 h-8 text-cyan-400 mb-3" />
                <span className="text-3xl font-bold text-white">55</span>
                <span className="text-sm text-slate-400 uppercase tracking-wide">Matches</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;