// src/components/Common/TopIcon.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface TopIconProps {
  icon: React.ReactNode;
  label: string;
  path?: string;
  isActive?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

const TopIcon: React.FC<TopIconProps> = ({ icon, label, path, isActive, isMobile = false, onClick }) => {
  const content = (
    <>
      <div className={`flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-8 h-7 mr-2'}`}>
        {icon}
      </div>
      {!isMobile && <span className={isActive ? "text-[#49C0F8]" : "text-[#4b4b4b]"}>{label}</span>}
    </>
  );

  if (isMobile && path) {
    return (
      <Link
        to={path}
        className={`flex flex-col items-center p-2 ${
          isActive ? "text-[#49C0F8]" : "text-[#DCE6EC] opacity-70"
        }`}
      >
        {content}
      </Link>
    );
  }

  const className = isMobile
    ? `flex flex-col items-center p-2 ${isActive ? "text-[#49C0F8]" : "text-[#DCE6EC] opacity-70"}`
    : `flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${
        isActive ? 'bg-[rgb(32,47,54)] border-[rgb(63,133,167)] border-2 text-[#49C0F8]' : 'border-transparent border-2'
      }`;

  return (
    <div className={className} onClick={onClick}>
      {content}
    </div>
  );
};

export default TopIcon;
