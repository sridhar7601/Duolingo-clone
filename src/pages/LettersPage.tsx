import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Star, ChevronRight, Lock, Zap, Flag, Flame } from "lucide-react";
import AuthModal from "../components/Auth/AuthModal";
import TopIcon from "../components/Common/TopIcon";

const LettersPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  // const [showTooltip, setShowTooltip] = useState(false);
  // const location = useLocation();

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
          <TopIcon icon="🔥" label="1" />
          <TopIcon icon="💎" label="505" />
          <TopIcon icon="❤️" label="5" />
        </div>

        {/* Left sidebar - hidden on mobile */}


        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="flex-1">
            <h1 className="text-3xl text-center font-bold mb-4">Let's learn Hindi!</h1>
            <p className="text-lg mb-6 text-center">Get to know the characters and sounds for Hindi</p>
            <div className="flex justify-center mb-8">
              <button className="bg-[#58cc02] text-white font-bold py-2 px-4 rounded-xl
          shadow-[0_4px_0_#58a700] hover:bg-[#58cc02]/90
          active:shadow-none active:translate-y-[4px]
          transition-all duration-150 ease-in-out">
                LEARN THE LETTERS
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              {hindiLetters.map((letter, index) => (
                <button
                  key={index}
                  className="w-full aspect-square text-white font-bold p-1 rounded-xl
            border-2 border-[#3c4956]
            shadow-[0_4px_0_#3c4956] 
            active:shadow-none active:translate-y-[4px]
            transition-all duration-150 ease-in-out
            flex flex-col items-center justify-center"
                >
                  <span className="text-xl font-medium">{letter.letter}</span>
                  <span className="text-xs text-[#52656D]">{letter.romanized}</span>
                  <div className="w-8 h-2 bg-[#37464F] rounded mt-2"></div>
                </button>
              ))}
            </div>

            {/* Borrowed Characters section */}
            {/* <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Borrowed Characters</h2>
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {['क़', 'ख़', 'ग़'].map((letter, index) => (
                  <button
                    key={index}
                    className="aspect-square text-white font-bold py-3 px-6 rounded-xl
              bg-[#2b2b2b] border-2 border-[#3c4956]
              shadow-[0_3px_0_#1c1c1c] 
              active:shadow-none active:translate-y-[3px]
              transition-all duration-150 ease-in-out
              flex items-center justify-center"
                  >
                    <span className="text-xl font-bold">{letter}</span>
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </main>

        {/* Right sidebar - hidden on mobile */}
        <aside className="hidden md:flex flex-col w-[22.5rem] space-y-4 pr-10">
          {/* Desktop top icons */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-between items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <img
                className="w-8 h-7"
                src="🇮🇳"
                alt="Flag"
              />
              <span className="text-[#4b4b4b] pl-[5px]">German</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex justify-between items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <img
                  className="w-8 h-7"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
                  alt="Flame"
                />
                <span className="text-[#4b4b4b] pl-[5px]">0</span>
              </div>
              <div className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <img
                  className="w-8 h-7"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                  alt="Diamond"
                />
                <span className="text-[#1CB0F6] pl-[5px]">500</span>
              </div>
              <div className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <img
                  className="w-8 h-7"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                  alt="Heart"
                />
                <span className="text-[#FF4B4B] pl-[6px]">5</span>
              </div>
            </div>
          </div>

          {/* Unlock Leaderboards section */}
          <div className="rounded-2xl p-5 mb-4 border-2 border-[#37464f] min-w-[320px]">
            <h2 className="font-bold font-din-round text-[#F1F7Fb] text-lg">
              Unlock Leaderboards!
            </h2>
            <div className="flex items-center space-x-4 mt-[25px] ml-3">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
                alt="lock"
                className="w-14 h-12"
              />
              <p className="font-din-round-light text-gray-500 pl-4">
                Complete 10 more lessons to start competing
              </p>
            </div>
          </div>

          {/* Daily Quests section */}
          <div className="rounded-2xl p-4 mb-4 border-2 border-[#37464f] min-w-[320px]">
            <div className="flex justify-between">
              <h2 className="font-bold font-din-round text-[#F1F7Fb] text-lg">
                Daily Quests
              </h2>
              <a href="#" className="text-[#1CB0F6] font-din-round text-sm">
                VIEW ALL
              </a>
            </div>
            <div className="flex items-center mt-2 p-2">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                alt="quest"
                className="w-16 h-16"
              />
              <div className="mt-2 ml-4 flex-1">
                <p className="font-din-round text-[#F1F7Fb] font-bold">
                  Earn 10 XP
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-full h-[20px] bg-[#37464F] rounded-full rounded-tr-none rounded-br-none relative">
                    <p className="font-din-round absolute text-[#AFAFAF] left-1/2 transform -translate-x-1/2 text-[14px]">
                      0 / 10
                    </p>
                    <div className="top-0 left-0 w-[0%] h-full bg-yellow-400 rounded-full text-sm"></div>
                  </div>
                  <img
                    className="w-8 h-9 ml-1 flex-shrink-0"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg"
                    alt="Quest icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Create profile section */}
          <div className="rounded-2xl p-4 space-y-3 border-2 border-[#37464f] min-w-[320px]">
            <h2 className="text-xl font-din-round font-bold text-[#F1F7Fb]">
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

// const TopIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
//   return (
//     <div className="flex items-center bg-[#2b2b2b] rounded-full px-3 py-1">
//       <span className="mr-2">{icon}</span>
//       <span>{label}</span>
//     </div>
//   );
// };

export default LettersPage;