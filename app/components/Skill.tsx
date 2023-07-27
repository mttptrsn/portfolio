"use client"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
    skillName: string;
    imageUrl: string;
    enterFromTop: boolean;
    enterFromLeft: boolean;
}

export const Skill = ({skillName, imageUrl, enterFromTop, enterFromLeft}: Props) => {
  return (
    <div className="group relative flex rounded-md dark:bg-white p-2 shadow-md opacity-90 hover:opacity-100 transition-opacity duration-200">
        <motion.div
            initial={{
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{ opacity:1,}}
        >
            <Image src={imageUrl} width={65} height={65} alt={skillName} className=" h-full"/>
        </motion.div>
    </div>
  )
}