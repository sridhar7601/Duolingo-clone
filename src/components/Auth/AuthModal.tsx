import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
        {isLogin ? <Login /> : <Signup />}
        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;