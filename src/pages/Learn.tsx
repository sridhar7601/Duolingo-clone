import React from 'react';
import { Star } from 'lucide-react';

const Learn: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-6">
      <main className="flex-grow max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Order in a cafe</h1>
          <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
            Guidebook
          </button>
        </header>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
            <Star size={32} />
          </button>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="w-12 h-12 bg-gray-700 rounded-full"></div>
          ))}
        </div>

        <div className="flex justify-center">
          <img src="/path-to-duolingo-owl.png" alt="Duolingo Owl" className="w-24 h-24" />
        </div>
      </main>

      <aside className="w-full md:w-80 mt-8 md:mt-0 md:ml-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Unlock Leaderboards!</h2>
            <p>Complete 9 more lessons to start competing</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Daily Quests</h2>
            <div className="bg-gray-800 rounded-lg p-3">
              <p>Earn 20 XP</p>
              <div className="bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-yellow-400 h-full rounded-full w-0"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Create a profile to save your progress!</h2>
            <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
              Create a Profile
            </button>
            <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
              Sign In
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Learn;