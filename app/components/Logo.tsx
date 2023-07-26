"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"
import { motion } from "framer-motion";

type Props = {
  width: number;
  height: number;
}

export const Logo = ({width, height}: Props) => {

  const { theme, setTheme } = useTheme();
  const logoSrc = theme === 'light' ? '/logo.svg' : '/logo-wt.svg';
  
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
      <Link href="/">
        <Image src={logoSrc} width={width} height={height} alt="Matthew Peterson" />
      </Link>
  </motion.div>
  )
}