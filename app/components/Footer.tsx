"use client"
import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { NavLinks } from "../constants";
import { SocialBar } from "./SocialBar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {

    const pathname = usePathname();
    const isHomePage = pathname === '/';

  return (
    <footer className=" fixed bottom-0 left-0 right-0">   
        <div className="flex flexCenter">
            {!isHomePage && (
            <div className="body-styles rounded-md p-2">
                <Logo height={33} width={33} /> 
            </div>
            )}
        </div>
        
        <div className="flex-1 flexCenter body-styles pb-6 mt-3 px-6">      
            <ul className="text-small gap-7 text-center capitalize flex mt-6">
                <li>
                  
                </li>
                {NavLinks.map((link) => (
                    <li key={link.key}>

                    <Link href={link.href} >
                        {link.text}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="w-screen body-styles ">
            <SocialBar/>
           
        </div>

    </footer>
  )
}