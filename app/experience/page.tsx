"use client"
import React, { useState } from 'react';
import XpCard from "../components/XpCard";
import { workExperience } from "../constants";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < workExperience.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }
  };

  return (

    <section className="paddings">
    <h1 className="pageHeading">Professional Experience</h1>
    <div className="flex flex-row justify-center gap-4">
  
      {/* Left Arrow */}
      <div className={`fixed h-full w-[33px] md:w-[50px] md:left-6 lg:w-[100px] lg:left-16 xl:w-[200px] xl:left-18 left-2 top-1/2 transform -translate-y-1/2 ${activeIndex > 0 ? 'cursor-pointer' : 'opacity-30 cursor-default'}`} onClick={activeIndex > 0 ? handleBack : undefined}>
        <FcPrevious className='flex items-center justify-center h-full w-full'/>
      </div>
  
      {/* Experience Cards */}
      {workExperience.map((experience, index) => (
        index === activeIndex && (
          <XpCard key={index}
            imageUrl={experience.imageUrl}
            technology={experience.technology}
            title={experience.title}
            dates={experience.dates}
            highlights={experience.highlights}
          />
        )
      ))}
  
      {/* Right Arrow */}
      <div className={`fixed right-2 h-full w-[33px] md:w-[50px] md:right-6 lg:w-[100px] lg:right-16 xl:w-[200px] xl:right-18 top-1/2 transform -translate-y-1/2 ${activeIndex < workExperience.length - 1 ? 'cursor-pointer' : 'opacity-30 cursor-default'}`} onClick={activeIndex < workExperience.length - 1 ? handleNext : undefined}>
        <FcNext className='flex items-center justify-center h-full w-full'/>
      </div>
    </div>
  </section>
  
  )
}
