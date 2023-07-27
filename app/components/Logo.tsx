"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

type Props = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Props) => {
    
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  let src
  switch (resolvedTheme) {
        case 'light':
          src = '/logo-blk.svg'
          break
        case 'dark':
          src = '/logo-wt.svg'
          break

        case 'system':
        default:
          src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          break
      }
      
  useEffect(() => {
      if (resolvedTheme) {
          setMounted(true)
      }
  }, [resolvedTheme])
  
  if (!mounted) {
      return null
  }

  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
    >
      <Link href="/">        
        <Image src={src} width={width} height={height} alt="Matthew Peterson" /> 
      </Link>
    </motion.div>
  );
};
