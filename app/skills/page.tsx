import { Skill } from "../components/Skill";

export default function Skills() {
  return (
    <section className="paddings">
        <h1 className="pageHeading">Skills + Education</h1>
        <div className="flex xl:pt-10 px-10 my-10 flex-col text-center max-w-l xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
        <h2 className="mb-6 font-semibold  text-lg">Technologies  /  Languages</h2>
          <div className="grid grid-cols-3 gap-2 md:gap-5">
          
            <Skill imageUrl="/icons_css.svg" enterFromLeft={false} enterFromTop={true} skillName="React"/>
            <Skill imageUrl="/icons_flask.svg" enterFromLeft={true} enterFromTop={true} skillName="React"/>
            <Skill imageUrl="/icons_gunicorn.svg" enterFromLeft={true} enterFromTop={true} skillName="React"/>
          
            <Skill imageUrl="/icons_html.svg" enterFromLeft={true} enterFromTop={false} skillName="React"/>
            <Skill imageUrl="/icons_javascript.svg" enterFromLeft={true} enterFromTop={false} skillName="React"/>
            <Skill imageUrl="/icons_nextjs.svg" enterFromLeft={false} enterFromTop={false} skillName="React"/>
            <Skill imageUrl="/icons_nodejs.svg" enterFromLeft={false} enterFromTop={false} skillName="React"/>
            <Skill imageUrl="/icons_python.svg" enterFromLeft={true} enterFromTop={false} skillName="React"/>
            <Skill imageUrl="/icons_react.svg" enterFromLeft={true} enterFromTop={false} skillName="React"/>
          </div>


        </div>
        <div className="flex flexCenter pt-10 pb-40">
          <div className="grid grid-cols-2 gap-0">
           
            <div className="border-r md:px-10 px-6 w-full text-right">
              <h2 className="mb-6 font-semibold  text-lg">Education</h2>

              <p className="text-xs tracking-wider">Masters Global Management</p>
              <p className="mb-6 text-sm font-light">Thunderbird School of Global Management</p>

              <p className="text-xs tracking-wider">BS Economics</p>
              <p className="mb-6 text-sm font-light">Arizona State University</p>

            </div>

            <div className="md:border-r-0 md:px-10 px-6 w-full">
              <h2 className="font-semibold mb-6 text-lg">Certifications</h2>

              <p className="text-xs text-left tracking-wider">Certified REST Engineer</p>
              <p className="mb-6 text-sm font-light">CyberNOW Education</p>

              <p className="text-xs text-left tracking-wider">Jump-Start SOC Analyst</p>
              <p className="mb-6 text-sm font-light">CyberNOW Education</p>
              
              <p className="text-xs text-left tracking-wider">Graduate Certificate in Banking</p>
              <p className="mb-6 text-sm font-light">Pacific Coast Banking School</p>
              
              <p className="text-xs text-left tracking-wider">Developing AI Applications with Python and Flask</p>
              <p className="mb-6 text-sm font-light">IBM Professional Training</p>
              
              <p className="text-xs text-left tracking-wider">Python for Data Science, AI & Development</p>
              <p className="mb-6 text-sm font-light">IBM Professional Training</p>


            </div>

          </div>
        </div>
      

</section>

  )
}