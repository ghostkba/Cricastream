import React from 'react';
import { Match } from '../types';
import { Calendar, MapPin, Clock } from 'lucide-react';

const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    team1: 'India',
    team2: 'Sri Lanka',
    date: 'Feb 15, 2026',
    time: '19:00 IST',
    venue: 'Wankhede Stadium, Mumbai',
    group: 'Group A',
    status: 'UPCOMING'
  },
  {
    id: 'm2',
    team1: 'Australia',
    team2: 'England',
    date: 'Feb 16, 2026',
    time: '19:00 IST',
    venue: 'Eden Gardens, Kolkata',
    group: 'Group B',
    status: 'UPCOMING'
  },
  {
    id: 'm3',
    team1: 'Pakistan',
    team2: 'South Africa',
    date: 'Feb 17, 2026',
    time: '15:30 IST',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    group: 'Group A',
    status: 'UPCOMING'
  },
  {
    id: 'm4',
    team1: 'New Zealand',
    team2: 'West Indies',
    date: 'Feb 18, 2026',
    time: '19:00 IST',
    venue: 'R. Premadasa Stadium, Colombo',
    group: 'Group B',
    status: 'UPCOMING'
  }
];

const Schedule: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Tournament Schedule</h2>
        <p className="text-slate-400">Match fixtures for the 2026 Edition</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {MOCK_MATCHES.map((match) => (
          <div key={match.id} className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700 hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,157,0.1)] group">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-brand border border-slate-600">
                  {match.group}
                </span>
                <span className="px-3 py-1 bg-brand/10 rounded-full text-xs font-bold text-brand border border-brand/20">
                  {match.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-center w-1/3">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{match.team1.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="font-bold text-white truncate">{match.team1}</h3>
                </div>
                
                <div className="text-center w-1/3 px-2">
                  <span className="text-2xl font-bold text-slate-500">VS</span>
                </div>
                
                <div className="text-center w-1/3">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{match.team2.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="font-bold text-white truncate">{match.team2}</h3>
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-slate-700/50">
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-brand" />
                  {match.date}
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-brand" />
                  {match.time}
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-brand" />
                  {match.venue}
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 px-6 py-3 flex justify-end">
                <button className="text-sm font-medium text-brand hover:text-white transition-colors">
                    Set Reminder &rarr;
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;