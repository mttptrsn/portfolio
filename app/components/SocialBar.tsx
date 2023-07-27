import { socialMediaLnks } from "../constants";
import Link from "next/link";
import Image from "next/image";

export const SocialBar = () => {
   
  return (

        <div className="flex flexCenter md:pb-6 pb-3">
            <ul className="text-small gap-7 flexBetween" >
                        
                        {socialMediaLnks.map((link, index) => (
                           <Link key={link.href} href={link.href}  target={index < socialMediaLnks.length - 1 ? "_blank" : "_self"}
                           rel={index < socialMediaLnks.length - 1 ? "noopener noreferrer" : ""}>
                              <Image src={link.imageUrl}
                              width={23}
                              height={23}
                              alt={link.text}                 
                            />
                           </Link>
                         
                        ))}                        
            </ul>
        </div>
  )
}