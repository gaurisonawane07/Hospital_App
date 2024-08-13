import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`bg-blue-600 dark:bg-blue-500 text-blue-200 p-4 shadow-lg sticky top-0 z-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Hospital Logo"
            className="h-10 w-10 mr-3"
          />
          <h1 className="text-2xl font-bold">The Supercare Hospital</h1>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/healthcare" className="hover:underline">Healthcare</Link>
          <Link to="/doctors" className="hover:underline">Doctors</Link>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition">
            Book Appointment
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg transition">
            Login
          </button>
          {/* Theme Changer */}
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
