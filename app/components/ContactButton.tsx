"use client"
import Link from "next/link";
import { getThemePreference } from "../lib/actions";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";



export const ContactButton = () => {
    const themePref = getThemePreference();
    const fgColor = themePref === 'light' ? 'black' : 'white';
  return (

  <motion.div
    initial={{
     y: 100,
     opacity: 0,
     scale: 0.5
    }}
    animate={{
     y: 0,
     opacity: 1,
     scale: 1,
    }}
    transition={{
     duration: .3,
     type: "spring" 
    }}
  >
      <Link href="/contact">
        <SocialIcon 
            network="email"
            fgColor={fgColor}
            bgColor="transparent"
            style={{ height: 130 , width: 130}}
             />
      </Link>
  </motion.div>
  )
}