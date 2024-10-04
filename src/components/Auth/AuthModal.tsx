import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: "login" | "signup";
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode }) => {
  const [isLogin, setIsLogin] = useState(initialMode === "login");

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="w-full h-full p-8 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
        <button 
          onClick={toggleMode} 
          className="absolute right-4 top-4 bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl shadow-[0_5px_0_#58a700] hover:bg-[#58cc02]/90 active:shadow-none active:translate-y-[5px] transition-all duration-150 ease-in-out"
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default AuthModal;