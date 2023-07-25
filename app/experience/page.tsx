import XpCard from "../components/XpCard";
import { workExperience } from "../constants";

export default function Experience() {
  return (
      <section className="paddings ">
     
        <h1 className="pageHeading">Professional Experience</h1>
     <div className="pb-20">

        <div className="flex overflow-hidden flex-col max-w-md md:max-w-xl px-6 justify-evenly mx-auto items-center mt-3 mb-20">
          <div className="px-10 m-10 w-full flex space-x-10 overflow-x-scroll snap-x snap-mandatory py-10">
            {workExperience.map((experience) => (
              <XpCard   key={experience.title} 
                        imageUrl={experience.imageUrl} 
                        technology={experience.technology} 
                        title={experience.title} 
                        dates={experience.dates} 
                        highlights={experience.highlights} 
              />       
            ))}  
          </div> 
        </div>

     </div>
      </section>
  )
}