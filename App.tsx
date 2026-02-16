import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveStream from './components/LiveStream';
import Schedule from './components/Schedule';
import AIChat from './components/AIChat';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.LIVE:
        return <LiveStream />;
      case ViewState.SCHEDULE:
        return <Schedule />;
      case ViewState.AI_CHAT:
        return <AIChat />;
      case ViewState.HOME:
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-brand selection:text-slate-900">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 CricStream. Unofficial Fan Hub.
          </p>
          <div className="flex space-x-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;