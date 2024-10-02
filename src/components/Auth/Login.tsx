import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Log in</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or username"
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="
          bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
          shadow-[0_5px_0_#58a700]
          hover:bg-[#58cc02]/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
        "        >
          LOG IN
        </button>
      </form>
      <div className="mt-4 text-gray-400">
        <span>OR</span>
      </div>
      <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
        <span className="mr-2">f</span> {/* Replace with Facebook icon */}
        FACEBOOK
      </button>
      <button className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      ">
        <span className="mr-2">G</span> {/* Replace with Google icon */}
        GOOGLE
      </button>
    </div>
  );
};

export default Login;