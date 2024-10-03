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
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg",
      label: "LETTER",
      path: "/letter",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
      label: "LEADERBOARDS",
      path: "/leaderboards",
    },
    {
      icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
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
      <style jsx>{`
        :root {
          --color-blue-jay: 63, 133, 167;
          --color-macaw: 73, 192, 248;
          --color-wolf: 220, 230, 236;
          --color-hover: 32, 47, 54;
        }
      `}</style>
      {/* Header only visible on medium screens (md) and larger */}
      <header className="hidden md:block border-r-2 border-[#37464f]">
        <div className="lg:w-[163px] md:w-[80px] pr-0 pb-[46px] lg:pl-[34px] md:pl-[10px] pt-[32px] box-border h-[30px]">
          {/* Default image for larger screens */}
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
            alt="duolingo"
            className="hidden lg:block" // hidden on small screens, visible on large and larger
          />

          {/* Image for medium screens */}
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg"
            alt="duolingo-small"
            className="hidden md:block lg:hidden h-[40px] w-auto"
          />
        </div>

        <div className="md:w-16 lg:w-64 md:min-h-screen md:flex flex-col items-center gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center w-full py-3 lg:px-4 rounded-lg md:justify-center lg:justify-start transition-colors ${
                location.pathname === item.path
                  ? "border-2 border-solid border-[rgb(var(--color-blue-jay))]"
                  : "hover:bg-[rgb(var(--color-hover))]"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-8 h-8" />
              <span 
                className={`ml-3 text-sm font-semibold hidden lg:inline ${
                  location.pathname === item.path
                    ? "text-[rgb(var(--color-macaw))]"
                    : "text-[rgb(var(--color-wolf))]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 p-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-green-900"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;