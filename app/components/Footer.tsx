"use client"
import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { NavLinks } from "../constants";
import { SocialBar } from "./SocialBar";
import { isDarkModeSupported } from "../utils/darkModeUtils";
import { useEffect, useState } from "react";

export default function Footer() {

    const pathname = usePathname();
    const isHomePage = pathname === '/';

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
    <footer className=" fixed bottom-0 left-0 right-0">   
        <div className="flex flexCenter">
            {!isHomePage && (
            <div className="dark:bg-black  bg-white rounded-md p-2">
                <Logo height={33} width={33} /> 
            </div>
            )}
        </div>
        
        <div className="flex-1 flexCenter bg-white dark:bg-black pb-6 mt-3 px-6">      
            <ul className="text-small gap-7 text-center capitalize flex mt-6">
                {NavLinks.map((link) => (
                    <li key={link.key}>

                    <Link href={link.href} >
                        {link.text}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="w-screen dark:bg-black bg-white">
            <SocialBar isDarkMode={isDarkMode}/>
        </div>
    </footer>
  )
}