import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, ChevronRight, Lock, Zap, Flag, Flame } from "lucide-react";
import AuthModal from "../components/Auth/AuthModal";

const LettersPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const hindiLetters = [
    { letter: 'क', romanized: 'ka' },
    { letter: 'ख', romanized: 'kha' },
    { letter: 'ग', romanized: 'ga' },
    { letter: 'घ', romanized: 'gha' },
    { letter: 'च', romanized: 'ca' },
    { letter: 'छ', romanized: 'cha' },
    { letter: 'ज', romanized: 'ja' },
    { letter: 'झ', romanized: 'jha' },
    { letter: 'ट', romanized: 'Ta' },
    { letter: 'ठ', romanized: 'Tha' },
    { letter: 'ड', romanized: 'Da' },
    { letter: 'ढ', romanized: 'Dha' },
    { letter: 'त', romanized: 'ta' },
    { letter: 'थ', romanized: 'tha' },
    { letter: 'द', romanized: 'da' },
    { letter: 'ध', romanized: 'dha' },
    { letter: 'न', romanized: 'na' },
    { letter: 'प', romanized: 'pa' },
    { letter: 'फ', romanized: 'pha' },
    { letter: 'ब', romanized: 'ba' },
    { letter: 'भ', romanized: 'bha' },
    { letter: 'म', romanized: 'ma' },
    { letter: 'य', romanized: 'ya' },
    { letter: 'र', romanized: 'ra' },
    { letter: 'ल', romanized: 'la' },
    { letter: 'व', romanized: 'va' },
    { letter: 'श', romanized: 'sha' },
    { letter: 'ष', romanized: 'Sa' },
    { letter: 'स', romanized: 'sa' },
    { letter: 'ह', romanized: 'ha' },
  ];

  return (
    <div className="flex text-white min-h-screen ">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile top icons */}
        <div className="md:hidden flex justify-between items-center p-4">
          <TopIcon icon="🇮🇳" label="Hindi" />
          <div className="flex space-x-4">
            <TopIcon icon="🔥" label="1" />
            <TopIcon icon="💎" label="505" />
            <TopIcon icon="❤️" label="5" />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Let's learn Hindi!</h1>
          <p className="text-lg mb-6">Get to know the characters and sounds for Hindi</p>

          <button className="w-full bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
            shadow-[0_5px_0_#58a700] hover:bg-[#58cc02]/90
            active:shadow-none active:translate-y-[5px]
            transition-all duration-150 ease-in-out mb-8">
            LEARN THE LETTERS
          </button>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {hindiLetters.map((letter, index) => (
              <button
                key={index}
                className="text-white font-bold py-3 px-6 rounded-2xl
        border-2 border-[#3c4956]
        shadow-[0_5px_0_#2b3238] 
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
        flex flex-col items-center justify-center aspect-square"
              >
                <span className="text-2xl font-bold">{letter.letter}</span>
                <span className="text-xs text-gray-400">{letter.romanized}</span>
              </button>
            ))}
          </div>

          <div className="mt-8">
  <h2 className="text-xl font-bold mb-4">Borrowed Characters</h2>
  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
    {['क़', 'ख़', 'ग़'].map((letter, index) => (
      <button
        key={index}
        className="text-white font-bold py-3 px-6 rounded-2xl
          border-2 border-[#3c4956]
          shadow-[0_5px_0_#2b3238] 
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
          flex flex-col items-center justify-center aspect-square"
      >
        <span className="text-2xl font-bold">{letter}</span>
      </button>
    ))}
  </div>
</div>
        </main>

        {/* Right sidebar - hidden on mobile */}
        <aside className="hidden md:flex flex-col w-[22.5rem] space-y-4 pr-10">
          {/* Desktop top icons */}
          <div className="flex justify-between items-center mb-4">
            <TopIcon icon={<Flag className="text-[#ce82ff]" size={20} />} label="German" dropdown="courses" />
            <div className="flex space-x-4">
              <TopIcon icon={<Flame className="text-[#ff9600]" size={20} />} label="1" dropdown="streak" />
              <TopIcon icon={<span className="text-xs">💎</span>} label="505" dropdown="gems" />
              <TopIcon icon={<span className="text-xs">❤️</span>} label="5" dropdown="hearts" />
            </div>
          </div>

          <div className="border-2 border-[#37464f] rounded-2xl p-3 h-40">
            <h2 className="text-xl font-bold mb-2">Unlock Leaderboards!</h2>
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-3">
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg" alt="lock" />              </div>
              <p className="text-sm">
                Complete 10 more lessons to start competing
              </p>
            </div>
          </div>

          <div className="border-2 border-[#37464f] rounded-2xl p-4 h-40">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Daily Quests</h2>
              <button className="text-[#afafaf] text-sm font-bold flex items-center">
                VIEW ALL <ChevronRight size={16} />
              </button>
            </div>
            <div className=" rounded-xl p-3">
              <div className="flex items-center mb-2">
                <Zap size={20} className="text-[#ffc800] mr-2" />
                <p className="text-sm font-bold">Earn 10 XP</p>
              </div>
              <div className=" h-2 rounded-full">
                <div className="bg-[#ffc800] h-full rounded-full w-0"></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#37464f] rounded-2xl p-4 space-y-3">
            <h2 className="text-xl font-bold">
              Create a profile to save your progress!
            </h2>
            <button
              onClick={() => openAuthModal("signup")}
              className="w-full bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
              shadow-[0_5px_0_#58a700] hover:bg-[#58cc02]/90
              active:shadow-none active:translate-y-[5px]
              transition-all duration-150 ease-in-out"
            >
              CREATE A PROFILE
            </button>
            <button
              onClick={() => openAuthModal("login")}
              className="w-full bg-[#1cb0f6] text-white font-bold py-3 px-6 rounded-2xl
              shadow-[0_5px_0_#1899d6] hover:bg-[#1cb0f6]/90
              active:shadow-none active:translate-y-[5px]
              transition-all duration-150 ease-in-out"
            >
              SIGN IN
            </button>
          </div>
        </aside>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

const TopIcon: React.FC<{ icon: React.ReactNode; label: string; dropdown?: string }> = ({ icon, label, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center bg-[#1f1f1f] rounded-full px-3 py-1"
        onClick={() => dropdown && setIsOpen(!isOpen)}
      >
        <div className="w-5 h-5 bg-[#1cb0f6] rounded-full flex items-center justify-center mr-2">
          {icon}
        </div>
        <span>{label}</span>
      </button>
      {dropdown && isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-[#1f1f1f] rounded-lg shadow-lg p-4">
          {/* Dropdown content here */}
        </div>
      )}
    </div>
  );
};

export default LettersPage;