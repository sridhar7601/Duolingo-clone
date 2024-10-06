// src/components/Sidebar/DailyQuestsSection.tsx
import React from 'react';

const DailyQuestsSection: React.FC = () => {
  return (
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
            <div className="w-full h-[20px] bg-[#37464F] rounded-full rounded-tr-none rounded-br-none relative -z-10">
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
  );
};

export default DailyQuestsSection;