import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Trophy,
  ListChecks,
  ShoppingBag,
  User,
  MoreHorizontal,
  Menu,
} from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "LEARN", path: "/learn" },
    { icon: Trophy, label: "LEADERBOARDS", path: "/leaderboards" },
    { icon: ListChecks, label: "QUESTS", path: "/quests" },
    { icon: ShoppingBag, label: "SHOP", path: "/shop" },
    { icon: User, label: "PROFILE", path: "/profile" },
    { icon: MoreHorizontal, label: "MORE", path: "/more" },
  ];

  return (
    <>
      <header className="border-r-[1px] border-white">
      <div className="w-[163px] pr-0 pb-[46px] pl-[34px] pt-[32px] box-border h-[30px]">
  {/* Default image for larger screens */}
  <img
    src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
    alt="duolingo"
    className="hidden lg:block md:hidden" // hidden on small screens, visible on medium and larger
  />
  
  {/* Image for smaller screens */}
  <img
    src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg"
    alt="duolingo-small"
    className="hidden md:block lg:hidden" // visible on small screens, hidden on medium and larger
  />
</div>

        <div className=" md:w-16 lg:w-64 md:min-h-screen md:flex flex-col items-center py-4 hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center w-full py-3 px-4 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-green-600 text-white"
                  : "text-white hover:bg-green-600"
              }`}
            >
              <item.icon size={24} />
              <span className="ml-3 text-sm font-semibold hidden lg:inline">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-green-500 p-2">
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
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile slide-out menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-green-500 z-40 p-4">
          <div className="flex flex-col items-center">
            <img
              src="/path-to-duolingo-logo.png"
              alt="Duolingo"
              className="w-12 h-12 mb-4"
            />
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center w-full py-3 px-4 rounded-lg transition-colors text-white hover:bg-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={24} />
                <span className="ml-3 text-sm font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
