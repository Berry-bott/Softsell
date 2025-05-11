// components/DarkModeToggle.jsx\

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isNowDark = !html.classList.contains('dark');

    if (isNowDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  return (
    <button
    onClick={toggleDarkMode}
    className="fixed bottom-10 left-6 z-50 bg-gray-500 dark:bg-white p-3 rounded-full shadow-lg
               hover:bg-gray-800 dark:hover:bg-gray-400 transition-all duration-300 ease-in-out"
  >
    {isDark ? (
      <SunIcon className="w-5 h-5 text-yellow-400 transition-all duration-300 ease-in-out" />
    ) : (
      <MoonIcon className="w-5 h-5 text-white transition-all duration-300 ease-in-out" />
    )}
  </button>
  
  );
};

export default DarkModeToggle;
