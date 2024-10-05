// src/components/Sidebar/LeaderboardSection.tsx
import React from 'react';

const LeaderboardSection: React.FC = () => {
  return (
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
  );
};

export default LeaderboardSection;