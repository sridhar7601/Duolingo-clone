import React, { useState } from "react";
import { Star } from "lucide-react";
import AuthModal from "../components/Auth/AuthModal";
import TopIcon from "../components/Common/TopIcon";

const Learn: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [showTooltip, setShowTooltip] = useState<boolean | number>(false);

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  // const StarButton = ({ active = false, onClick = () => {}, size = 24, className = "" }) => (
  //   <button 
  //     className={`${active ? 'bg-[#58cc02]' : 'bg-[#2b2b2b]'} text-white font-bold rounded-full
  //       shadow-[0_5px_0_${active ? '#58a700' : '#1f1f1f'}] hover:bg-${active ? '[#58cc02]/90' : '[#3b3b3b]'}
  //       active:shadow-none active:translate-y-[5px]
  //       transition-all duration-150 ease-in-out flex items-center justify-center ${className}`}
  //     onClick={onClick}
  //   >
  //     <Star size={size} fill={active ? "white" : "none"} stroke={active ? "white" : "#5b5b5b"} />
  //   </button>
  // );
  const LessonButton = ({ active = false, onClick = () => {}, size = 24, className = "", icon = <Star size={size} fill={active ? "white" : "none"} stroke={active ? "white" : "#5b5b5b"} />, tooltipContent = null as React.ReactNode, index }: { active?: boolean, onClick?: () => void, size?: number, className?: string, icon?: React.ReactNode, tooltipContent?: React.ReactNode, index: number }) => (
    <div className="relative">
      <button 
        className={`${active ? 'bg-[#58cc02]' : 'bg-[#2b2b2b]'} text-white font-bold rounded-full
          shadow-[0_5px_0_${active ? '#58a700' : '#1f1f1f'}] hover:bg-${active ? '[#58cc02]/90' : '[#3b3b3b]'}
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out flex items-center justify-center ${className}`}
        onClick={() => {
          onClick();
          setShowTooltip(index);
        }}
        onMouseEnter={() => setShowTooltip(index)}
        onMouseLeave={() => setShowTooltip(false)}

      >
        {icon || <Star size={size} fill={active ? "white" : "none"} stroke={active ? "white" : "#5b5b5b"} />}
      </button>
      {(showTooltip === index) && tooltipContent && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-4 w-64 z-10">
          {tooltipContent}
        </div>
      )}
    </div>
  );
  return (
    <div className="flex text-white min-h-screen">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile top icons */}
        <div className="md:hidden flex justify-between items-center p-4">
          <TopIcon icon="🇩🇪" label="German" />
          {/* <div className="flex space-x-4"> */}
            <TopIcon icon="🔥" label="0" />
            <TopIcon icon="💎" label="500" />
            <TopIcon icon="❤️" label="5" />
          {/* </div> */}
        </div>

       
        {/* Main content */}
        <main className="flex-1 p-5 md:p-6 lg:p-8">
          <header className="bg-[#58cc02] rounded-2xl p-4 mb-8">
            <div className="flex items-center">
              <button className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div>
                <p className="text-xs font-bold mb-1">SECTION 1, UNIT 1</p>
                <h1 className="text-2xl font-bold">Pair letters and sounds</h1>
              </div>
            </div>
          </header>

          <div className="flex flex-col items-center space-y-4 mb-8">
      <LessonButton
        active={true}
        size={38}
        className="w-20 h-20"
        tooltipContent={
          <>
            <div className="text-black font-bold mb-2">Pair letters and sounds</div>
            <div className="text-gray-600 text-sm mb-4">Lesson 1 of 4</div>
            <button className="w-full bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
              shadow-[0_5px_0_#58a700] hover:bg-[#58cc02]/90
              active:shadow-none active:translate-y-[5px]
              transition-all duration-150 ease-in-out">
              START +10 XP
            </button>
          </>
        }
        index={0}
      />
      <LessonButton size={32} className="w-16 h-16 relative right-16" index={1}/>
      <LessonButton size={32} className="w-16 h-16 relative right-20" index={2} />
      <LessonButton
        className="w-20 h-20  relative right-24"
        icon={
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
            alt="Chest"
            className="w-16 h-16"
          />
        }
        index={3}
      />
      <LessonButton size={32} className="w-16 h-16 relative right-20" index={4} />
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
          alt="Duolingo Owl"
          className="w-full h-full"
        />
      </div>
    </div>


          <div className="text-center mt-8">
            <p className="text-[#afafaf] mb-4">Pair letters and sounds</p>
            <button className="bg-[#8e4dc3] text-white font-bold py-2 px-6 rounded-2xl
              shadow-[0_5px_0_#6f2dbd] hover:bg-[#8e4dc3]/90
              active:shadow-none active:translate-y-[5px]
              transition-all duration-150 ease-in-out">
              JUMP HERE?
            </button>
          </div>
        </main>

        {/* Right sidebar - hidden on mobile */}
        <aside className="hidden md:flex flex-col w-[22.5rem] space-y-4 pr-10">
          {/* Desktop top icons */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-between items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <img
                className="w-8 h-7"
                src= {"🇩🇪"}
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


export default Learn;