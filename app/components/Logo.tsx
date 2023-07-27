"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


type Props = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Props) => {

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
        <Image src="logo-wt.svg" width={width} height={height} alt="Matthew Peterson" />
      </Link>
    </motion.div>
  );
};
