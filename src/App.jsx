import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Invite from './pages/Invite';
import Quest from './pages/Quest';
import DailyGrand from './pages/DailyGrand';
import Auction from './pages/Auction';
import Withdraw from './pages/Withdraw';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div className="app bg-black text-yellow-400 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/daily" element={<DailyGrand />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <nav className="fixed bottom-0 w-full bg-black border-t border-yellow-500 flex justify-around py-2">
        {['/', '/invite', '/quest', '/daily', '/auction', '/withdraw', '/profile'].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `text-xs ${isActive ? 'text-green-400' : 'text-yellow-400'}`
            }
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
