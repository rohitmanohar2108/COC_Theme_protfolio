import React from 'react';
import { Sword, Shield, Trophy, Gem } from 'lucide-react';

const Header = () => {
  return (
    <header className="coc-container min-h-screen relative flex items-center justify-center py-20">
      <div className="absolute top-4 right-4 flex gap-4">
        <div className="flex items-center gap-2 bg-black/60 p-2 rounded-lg">
          <Gem className="w-6 h-6 text-blue-400 glow-animation" />
          <span className="text-white font-bold">1337</span>
        </div>
        <div className="flex items-center gap-2 bg-black/60 p-2 rounded-lg">
          <Trophy className="w-6 h-6 text-yellow-400 glow-animation" />
          <span className="text-white font-bold">2800</span>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-yellow-600 float-animation"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-600 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-bold">Lvl 100</span>
            </div>
          </div>
        </div>

        <div className="coc-card p-8 rounded-lg mt-20">
          <div className="flex justify-center gap-6 mb-8">
            <Shield className="w-16 h-16 text-yellow-400 shake-hover" />
            <Sword className="w-16 h-16 text-red-500 shake-hover" />
          </div>
          
          <h1 className="coc-title text-6xl font-bold mb-4">
            Your Name
          </h1>
          
          <div className="space-y-4 mb-8">
            <div className="resource-bar">
              <div className="resource-fill" style={{ width: '80%' }}></div>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                Experience: 80/100
              </span>
            </div>
            <div className="resource-bar">
              <div className="resource-fill" style={{ width: '65%' }}></div>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                Projects: 13/20
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="coc-button shake-hover">
              View Projects
            </button>
            <button className="coc-button shake-hover">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;