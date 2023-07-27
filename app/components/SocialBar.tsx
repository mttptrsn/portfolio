import { socialMediaLnks } from "../constants";
import Link from "next/link";
import Image from "next/image";

type Props = {
  isDarkMode: boolean;
}

export const SocialBar = (isDarkMode: Props) => {
   
  return (

        <div className="flex flexCenter md:pb-6 pb-3">
            <ul className="text-small gap-7 flexBetween" >
                        
                        {socialMediaLnks.map((link, index) => (
                         <li key={link.href}>  
                          <Link  href={link.href}  target={index < socialMediaLnks.length - 1 ? "_blank" : "_self"}
                           rel={index < socialMediaLnks.length - 1 ? "noopener noreferrer" : ""}>
                              
                              {isDarkMode ?  <Image src={link.imageUrlWt}
                              width={23}
                              height={23}
                              alt={link.text}                 
                            /> : <Image src={link.imageUrlBlk}
                            width={23}
                            height={23}
                            alt={link.text}                 
                          />}
                             
                           </Link>
                           </li>
                        ))}                        
            </ul>
        </div>
  )
}