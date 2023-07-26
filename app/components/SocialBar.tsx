"use client"
import { SocialIcon } from "react-social-icons";
import { socialMediaLnks } from "../constants";
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

export const SocialBar = () => {

      const [mounted, setMounted ] = useState(false);
      const { theme, setTheme } = useTheme();
  
      useEffect(() => {
          setMounted(true);
      },[]);
  
      if(!mounted) {
          return null;
      }
      
  return (

        <div className="flex flexCenter pb-3">
        <ul className="text-small gap-7" >
                    
                    {socialMediaLnks.map((link, index) => (
                        <SocialIcon url={link.href}
                                    key={link.key}
                                    bgColor="transparent"
                                    fgColor={theme === "light" ? "black" : "white"}
                                    label={link.text}
                                    network={link.network}
                                    target={index < socialMediaLnks.length - 1 ? "_blank" : "_self"}
                                    rel={index < socialMediaLnks.length - 1 ? "noopener noreferrer" : ""}


                        />
                    ))}
                        
                    
            </ul>
        </div>

  )
}