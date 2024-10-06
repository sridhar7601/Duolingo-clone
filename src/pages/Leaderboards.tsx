    import React from 'react';
    import { Link } from 'react-router-dom';

    const Leaderboards: React.FC = () => {
    return (
        <div className="flex flex-1  text-white">
        <div className="flex flex-col md:flex-row">
            {/* Main content */}
            <main className="flex-1 p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            {/* Left section */}
            <div className="flex flex-col items-center w-[32rem] md:items-center mb-8 md:mb-0 md:mr-8">
                <img 
                src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg" 
                alt="Unlock Leaderboards" 
                className="w-40 h-40 mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Unlock Leaderboards!</h2>
                <p className="text-lg mb-4 text-center md:text-left">Complete 10 more lessons to start competing</p>
                <Link to="/learn" className="bg-[#1cb0f6] text-white font-bold py-3 px-6 rounded-2xl">
                START A LESSON
                </Link>
                {/* Placeholder leaderboard entries */}
                <div className="w-full max-w-md mt-8">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-500 rounded-full mr-4"></div>
                        <div className="w-10 h-10 bg-gray-600 rounded-full mr-4"></div>
                        <div className="w-32 h-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="w-16 h-4 bg-gray-600 rounded"></div>
                    </div>
                ))}
                </div>
            </div>

            {/* Right section */}
            <div className="flex flex-col max-w-sm">
                <div className=" p-6 rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2 text-[#afafaf]">WHAT ARE LEADERBOARDS?</h3>
                <h2 className="text-2xl font-bold mb-2">Do Lessons. Earn XP. Compete.</h2>
                <p className="text-[#afafaf] mb-4">Earn XP through lessons, then compete with players in a weekly leaderboard</p>
                <img 
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/071159d03311fcb556c4dfe730941de1.svg" 
                    alt="Duolingo Owl" 
                    className="w-24 h-24"
                />
                </div>

                
            </div>
            </main>
        </div>
        </div>
    );
    };

    export default Leaderboards;