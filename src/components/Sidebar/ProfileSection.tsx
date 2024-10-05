// src/components/Sidebar/ProfileSection.tsx
import React from 'react';

interface ProfileSectionProps {
  openAuthModal: (mode: "login" | "signup") => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ openAuthModal }) => {
  return (
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
  );
};

export default ProfileSection;