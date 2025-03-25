
import React from 'react';

const PhoneCaseLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-pulse">
          <h1 
            className="text-6xl font-black tracking-tight bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
          >
            Phone Case
          </h1>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-bounce delay-200"></div>
        </div>
        <p className="mt-4 text-gray-400 animate-pulse">
          Loading your mobile experience...
        </p>
      </div>
    </div>
  );
};

export default PhoneCaseLoader;