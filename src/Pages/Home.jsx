import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center">
      <h1 className="text-3xl font-bold">Token Mini App</h1>
      <p className="text-yellow-300 mt-2">Balance: <span className="text-green-400">1200</span> TOK</p>
      <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-full shadow-lg">
        Start Mining
      </button>
    </div>
  );
}
