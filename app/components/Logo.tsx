"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { isDarkModeSupported } from '../utils/darkModeUtils';


type Props = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Props) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeSupported = isDarkModeSupported();
    setIsDarkMode(darkModeSupported);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // Listen for changes to the dark mode preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleChange);

    // Clean up the listener on component unmount
    return () => {
      darkModeQuery.removeEventListener('change', handleChange);
    };
  }, []);


  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
    >
      <Link href="/">        
        {isDarkMode ? <Image src="logo-wt.svg" width={width} height={height} alt="Matthew Peterson" /> : <Image src="logo-blk.svg" width={width} height={height} alt="Matthew Peterson" /> }
      </Link>
    </motion.div>
  );
};
