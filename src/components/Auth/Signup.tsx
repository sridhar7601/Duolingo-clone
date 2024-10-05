// src/components/Auth/Signup.tsx
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
    <div className="text-center pt-40 pb-40">
      <h2 className="text-3xl font-bold mb-6 text-white">Create your profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        <div>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full px-3 py-2 bg-[#1a1a1a] text-white border border-[#4b4b4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58cc02]"
            required
          />
          <p className="text-xs text-[#afafaf] mt-1">
            Providing your age ensures you get the right Duolingo experience. For more details, please visit our <a href="#" className="text-[#58cc02] hover:underline">Privacy Policy</a>.
          </p>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            className="w-full px-3 py-2 bg-[#1a1a1a] text-white border border-[#4b4b4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58cc02]"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 bg-[#1a1a1a] text-white border border-[#4b4b4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58cc02]"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 bg-[#1a1a1a] text-white border border-[#4b4b4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58cc02]"
            required
          />
        </div>
        <button
          type="submit"
          className="
            w-full bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
            shadow-[0_5px_0_#58a700]
            hover:bg-[#58cc02]/90
            active:shadow-none active:translate-y-[5px]
            transition-all duration-150 ease-in-out
          "
        >
          CREATE ACCOUNT
        </button>
      </form>

      <div className="mt-4">
        <span className="text-[#afafaf]">OR</span>
      </div>
      <button className="
        w-full bg-[#4267B2] text-white font-bold py-3 px-6 rounded-2xl
        shadow-[0_5px_0_#3b5998]
        hover:bg-[#4267B2]/90
        active:shadow-none active:translate-y-[5px]
        transition-all duration-150 ease-in-out
        mt-4
      ">
        <span className="mr-2">f</span>
        FACEBOOK
      </button>

      <p className="mt-4 text-xs text-[#afafaf]">
        By signing in to Duolingo, you agree to our <a href="#" className="text-[#58cc02] hover:underline">Terms</a> and <a href="#" className="text-[#58cc02] hover:underline">Privacy Policy</a>.
      </p>
      <p className="mt-8 text-sm text-[#afafaf]">
        This site is protected by reCAPTCHA Enterprise and the Google <a href="#" className="text-[#58cc02] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#58cc02] hover:underline">Terms of Service</a> apply.
      </p>
    </div>
  );
};

export default Signup;