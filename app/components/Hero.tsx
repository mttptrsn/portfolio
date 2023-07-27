"use client"

import { Typewriter } from "react-simple-typewriter"
import { heroWords } from "../constants"
import { Logo } from "./Logo"
import ThemeSwitcher from "./ThemeSwitcher"


export const Hero = () => {

  return (
    <div className="flex-col flexCenter md:pt-20 pt-10">
        <Logo width={300} height={300} />
       
        <div className="mt-10 w-full">
          <h1 className=" text-left">Matthew Peterson: 
            <span className="font-semibold">
              <Typewriter 
                words={heroWords} 
                loop={0}
                cursor
                cursorStyle="|"
                cursorColor="red"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>  
          </h1>
        </div>     
    </div> 
  )
}