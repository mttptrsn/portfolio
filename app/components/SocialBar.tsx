"use client"
import { SocialIcon } from "react-social-icons";
import { socialMediaLnks } from "../constants";

export const SocialBar = () => {
   
  return (

        <div className="flex flexCenter pb-3">
            <ul className="text-small gap-7" >
                        
                        {socialMediaLnks.map((link, index) => (
                            <SocialIcon url={link.href}
                                        key={link.key}
                                        bgColor="transparent"
                                        fgColor="var(--foreground-rgb)"
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