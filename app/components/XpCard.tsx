"use client"
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
    title: string;
    imageUrl: string;
    dates: string;
    technology: string[];
    highlights: string[]; 
   }

const XpCard = ({title, dates, highlights, imageUrl, technology}: Props) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
           
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
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
     duration: .75,
     type: "spring",
   }}>

   <article className="flex flex-col p-4 items-center mb-60">
        <div className="dark:bg-white rounded-full p-2 h-[50px] w-[50px] flex items-center my-6">
            <Image src={imageUrl} width={50} height={50} alt="company logo" className="mx-auto"/>
        </div>
        <div className="px-0 md:px-10 text-center my-4">
            <h2 className="text-xl mb-2 tracking-tighter font-light">{title}</h2> 
            <p className="text-xs tracking-tight ">{dates}</p>  
        </div>
        <div className="mt-2 px-6 max-w-lg">
            <motion.ul 
                variants={container}
                initial="hidden"
                animate="show"
                
                className="divide-y">
                {highlights.map((hlight)=> (
                    <motion.li key={hlight} variants={item}className="text-sm leading-relaxed tracking-wider py-4">{hlight}</motion.li>
                ))}
            </motion.ul>
       </div>
    </article>
    </motion.div>
  )
}
export default XpCard