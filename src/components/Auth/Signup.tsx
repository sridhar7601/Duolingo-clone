import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Signup attempt with:', { age, name, email, password });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Create your profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-400 mt-1">
            Providing your age ensures you get the right Duolingo experience. For more details, please visit our Privacy Policy.
          </p>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
      className="
        bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#58a700]
        hover:bg-[#58cc02]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
      "
    >
      CREATE ACCOUNT
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
      <p className="mt-4 text-xs text-gray-400">
        By signing in to Duolingo, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
};

export default Signup;