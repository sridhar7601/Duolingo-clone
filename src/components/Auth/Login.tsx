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
    <div className="text-center pt-40 pb-40">
      <h2 className="text-3xl font-bold mb-6 text-white">Log in</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or username"
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
          bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
          shadow-[0_5px_0_#58a700]
          hover:bg-[#58cc02]/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
        ">
          LOG IN
        </button>
      </form>
      
      <div className="mt-4">
        <span className="text-[#afafaf]">OR</span>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="
          bg-[#4267B2] text-white font-bold py-3 px-6 rounded-2xl
          shadow-[0_5px_0_#3b5998]
          hover:bg-[#4267B2]/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
        ">
          <span className="mr-2">f</span> {/* Replace with Facebook icon */}
          FACEBOOK
        </button>
        <button className="
          bg-white text-[#4B4B4B] font-bold py-3 px-6 rounded-2xl
          shadow-[0_5px_0_#E5E5E5]
          hover:bg-white/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
        ">
          <span className="mr-2">G</span> {/* Replace with Google icon */}
          GOOGLE
        </button>
      </div>

      {/* Add the paragraph about terms and policies here */}
      <div className="mt-6 text-sm text-[#afafaf] max-w-sm mx-auto">
        <p>By signing in to Duolingo, you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.</p>
        <p>This site is protected by reCAPTCHA Enterprise and the Google <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a> apply.</p>
      </div>
    </div>
  );
};

export default Login;
