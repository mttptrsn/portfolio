"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"

export const ContactButton = () => {

  const [mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    },[]);

    if(!mounted) {
        return null;
    }
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
            fgColor={theme === "light" ? "black" : "white"}
            bgColor="transparent"
            style={{ height: 130 , width: 130}}
             />
      </Link>
  </motion.div>
  )
}