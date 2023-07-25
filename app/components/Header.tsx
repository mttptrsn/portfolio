"use client"
import { SocialIcon } from "react-social-icons";
import { socialMediaLnks } from "../constants";
import { motion } from "framer-motion"
import { getThemePreference } from "../lib/actions";


type Props = {}

const Header = (props: Props) => {

    const themePref = getThemePreference();
    const fgColor = themePref === 'light' ? 'black' : 'white';

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-33">
        <motion.div 
            className="flex flex-row items-center"
            initial={{
                y: -10,
                opacity: 0,
                scale: 0.5
            
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                
            }}
            transition={{
                duration: 1,
               
               
            }}>
            <ul className="text-small gap-7 flex" >
                    
                    {socialMediaLnks.map((link) => (
                        <SocialIcon url={link.href}
                                    key={link.key}
                                    bgColor="transparent"
                                    fgColor={fgColor}
                                    label={link.text}


                        />
                    ))}
                        
                    
            </ul>
        </motion.div>
        <motion.div className="flex flex-row items-center cursor-pointer"
        initial={{
            x: 333,
            opacity: 0,
            scale: 0.5
        
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            
        }}
        transition={{
            duration: .5,
            delay: 1,
            ease: "anticipate"
           
        }}>
            <SocialIcon
                className="cursor-pointer"
                network="email"
                bgColor="transparent"
                fgColor={fgColor} />
                <p className="text-small uppercase hidden md:inline-flex">Contact</p>

        </motion.div>
    </header>
  )
}

export default Header;