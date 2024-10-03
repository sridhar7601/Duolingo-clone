import React, { useState } from "react";
import { Star, ChevronRight, Lock, Zap, Flag, Plus, Flame } from "lucide-react";
import AuthModal from "../components/Auth/AuthModal";

const Learn: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    // bg-[#0a0a0a]
    <div className="flex  text-white min-h-screen">
      <div className="flex-1 flex flex-col">
        {/* Mobile top icons */}
        <div className="md:hidden flex justify-between items-center p-4">
          <TopIcon icon="🇩🇪" label="German" />
          <div className="flex space-x-4">
            <TopIcon icon="🔥" label="1" />
            <TopIcon icon="💎" label="505" />
            <TopIcon icon="❤️" label="5" />
          </div>
        </div>

        {/* Desktop top icons */}
        <div className="hidden md:flex justify-end p-4 space-x-4">
          <TopIcon icon={<Flag className="text-[#ce82ff]" size={20} />} label="German" dropdown="courses" />
          <TopIcon icon={<Flame className="text-[#ff9600]" size={20} />} label="1" dropdown="streak" />
          <TopIcon icon={<span className="text-xs">💎</span>} label="505" dropdown="gems" />
          <TopIcon icon={<span className="text-xs">❤️</span>} label="5" dropdown="hearts" />
        </div>

        <div className="flex-1 flex flex-col md:flex-row">
          {/* Main content */}
          <main className="flex-1 p-4 md:p-6">
            <header className="bg-[#58cc02] rounded-2xl p-4 mb-8 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold mb-1">SECTION 1, UNIT 1</p>
                <h1 className="text-2xl font-bold">Order in a cafe</h1>
              </div>
              <button className="bg-white text-[#58cc02] font-bold py-2 px-4 rounded-xl text-sm">
                <span className="hidden md:inline">GUIDEBOOK</span>
                <Zap size={20} className="md:hidden" />
              </button>
            </header>

            <div className="flex flex-col items-center space-y-4 mb-8">
              <button className="relative bg-[#58cc02] text-white font-bold p-4 rounded-full">
                <Star size={32} />
                <div className="md:hidden absolute -top-2 -right-2 bg-[#1cb0f6] text-white text-xs font-bold px-2 py-1 rounded-full">
                  START
                </div>
              </button>
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-[#2b2b2b] rounded-full flex items-center justify-center"
                >
                  <Star size={24} className="text-[#5b5b5b]" />
                </div>
              ))}
              <div className="w-20 h-20 bg-[#2b2b2b] rounded-2xl flex items-center justify-center">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/chest.svg"
                  alt="Chest"
                  className="w-12 h-12"
                />
              </div>
              <div className="w-16 h-16 bg-[#2b2b2b] rounded-full flex items-center justify-center md:static absolute bottom-24 right-8">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/owlHappy.svg"
                  alt="Duolingo Owl"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </main>

          {/* Right sidebar - hidden on mobile */}
          <aside className="hidden md:block w-80 p-6 space-y-4">
            <div className="bg-[#1f1f1f] rounded-2xl p-4">
              <h2 className="text-xl font-bold mb-2">Unlock Leaderboards!</h2>
              <div className="flex items-center">
                <div className="bg-[#4b4b4b] rounded-full p-2 mr-3">
                  <Lock size={20} className="text-white" />
                </div>
                <p className="text-sm">
                  Complete 9 more lessons to start competing
                </p>
              </div>
            </div>

            <div className="bg-[#1f1f1f] rounded-2xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Daily Quests</h2>
                <button className="text-[#afafaf] text-sm font-bold flex items-center">
                  VIEW ALL <ChevronRight size={16} />
                </button>
              </div>
              <div className="bg-[#2a2a2a] rounded-xl p-3">
                <div className="flex items-center mb-2">
                  <Zap size={20} className="text-[#ffc800] mr-2" />
                  <p className="text-sm font-bold">Earn 20 XP</p>
                </div>
                <div className="bg-[#1c1c1c] h-2 rounded-full">
                  <div className="bg-[#ffc800] h-full rounded-full w-0"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#1f1f1f] rounded-2xl p-4 space-y-3">
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

export default Learn;