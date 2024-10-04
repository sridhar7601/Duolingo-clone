import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
      label: "LEARN",
      path: "/learn",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/3b4928101472fce4e9edac920c1b3817.svg",
      label: "LETTERS",
      path: "/letters",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
      label: "LEADERBOARDS",
      path: "/leaderboards",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
      label: "QUESTS",
      path: "/quests",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg",
      label: "SHOP",
      path: "/shop",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg",
      label: "PROFILE",
      path: "/profile",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg",
      label: "MORE",
      path: "/more",
    },
  ];

  return (
    <>
      {/* Header visible on medium screens (md) and larger */}
      <header className="hidden md:flex flex-col h-screen w-[72px] xl:w-[256px] border-r-2 border-[#37464f] py-6">
        <div className="mb-5 mt-2 px-4 xl:px-8">
          <img
            className="block xl:hidden"
            alt="Duolingo Icon"
            width={40}
            height={40}
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg"
          />
          <img
            className="hidden xl:block"
            alt="Duolingo Logo"
            width={128}
            height={30}
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
          />
        </div>

        <nav className="flex flex-col space-y-3 pl-2 xl:pl-4 pr-2 xl:pr-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center p-1 xl:pl-4 space-x-2 xl:space-x-5 rounded-[12px] font-din-round text-[#DCE6EC] hover:bg-[rgb(32,47,54)] transition-colors ${
                location.pathname === item.path
                  ? 'bg-[rgb(32,47,54)] border-[rgb(63,133,167)] border-2 text-[#49C0F8]'
                  : 'border-transparent border-2'
              }`}
            >
              <img src={item.icon} alt={`${item.label} Icon`} className="w-8 h-8" />
              <span className="hidden xl:inline-block text-[15px]">{item.label}</span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t-2 bg-[#131F24] border-[#37464f] p-2 md:align-center">
        <div className="flex justify-around bg-[#131F24] items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                location.pathname === item.path
                  ? "text-[#49C0F8]"
                  : "text-[#DCE6EC] opacity-70"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-8 h-8" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;