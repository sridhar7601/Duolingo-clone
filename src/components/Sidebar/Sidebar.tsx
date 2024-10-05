// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import TopIcon from '../Common/TopIcon';
import LeaderboardSection from './LeaderboardSection';
import DailyQuestsSection from './DailyQuestsSection';
import ProfileSection from './ProfileSection';

interface SidebarProps {
  openAuthModal: (mode: "login" | "signup") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openAuthModal }) => {
  return (
    <aside className="hidden md:flex flex-col w-[22.5rem] space-y-4 pr-10">
      {/* Top icons */}
      <div className="flex justify-between items-center mb-4">
        <TopIcon 
          icon={<span role="img" aria-label="Flag">🇩🇪</span>} 
          label="German" 
        />
        <div className="flex space-x-2">
          <TopIcon 
            icon={<img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" alt="Flame" />} 
            label="0" 
          />
          <TopIcon 
            icon={<img src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="Diamond" />} 
            label="500" 
          />
          <TopIcon 
            icon={<img src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg" alt="Heart" />} 
            label="5" 
          />
        </div>
      </div>

      <LeaderboardSection />
      <DailyQuestsSection />
      <ProfileSection openAuthModal={openAuthModal} />
    </aside>
  );
};

export default Sidebar;