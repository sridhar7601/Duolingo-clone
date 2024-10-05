// src/pages/LettersPage.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AuthModal from '../components/Auth/AuthModal';

const LettersPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

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
    <div className="flex flex-col md:flex-row">
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
      </div>
      <Sidebar openAuthModal={openAuthModal} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default LettersPage;
