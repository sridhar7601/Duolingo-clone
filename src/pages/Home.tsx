import React, { useState } from 'react';
import AuthModal from '../components/Auth/AuthModal';

const Home: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Duolingo Clone</h1>
      <button
        onClick={() => setIsAuthModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Get Started
      </button>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialMode="login" />
    </div>
  );
};

export default Home;