"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [displayIcon, setDisplayIcon] = useState("");

  // Remember to check for 'undefined' here!
  useEffect(() => {
    if (theme !== 'undefined') {
      setMounted(true);
      setDisplayIcon(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  const switchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      setDisplayIcon('light');
    } else {
      setTheme('dark');
      setDisplayIcon('dark');
    }
  };

  return (
    <div onClick={switchTheme} className="cursor-pointer z-100">
      {displayIcon === 'dark' ? (
        // Moon SVG for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="black"
          className="h-6 w-6 text-gray-800 dark:text-gray-200"
        >
          <path
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          />
        </svg>
      ) : (
        // Sun SVG for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-800 dark:text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </div>
  );
};

export default ThemeSwitcher;
