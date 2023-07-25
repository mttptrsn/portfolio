"use client"
import { SocialIcon } from "react-social-icons";
import { socialMediaLnks } from "../constants";
import { getThemePreference } from "../lib/actions";

export const SocialBar = () => {

    const themePref = getThemePreference();
    const fgColor = themePref === 'light' ? 'black' : 'white';

  return (

        <div className="flex flexCenter pb-3">
        <ul className="text-small gap-7" >
                    
                    {socialMediaLnks.map((link, index) => (
                        <SocialIcon url={link.href}
                                    key={link.key}
                                    bgColor="transparent"
                                    fgColor={fgColor}
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