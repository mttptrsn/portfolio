import { Skill } from "../components/Skill";

export default function Skills() {
  return (
    <section className="paddings">
        <h1 className="pageHeading">Qualifications</h1>
        <div className="flex xl:pt-10 px-10 my-10 flex-col text-center max-w-l xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
          <div className="grid grid-cols-3 gap-2 md:gap-5">
          
            <Skill imageUrl="/icons_trading.svg" enterFromLeft={true} enterFromTop={false} skillName="Trading"/>
            <Skill imageUrl="/icons_excel.svg" enterFromLeft={false} enterFromTop={true} skillName="Excel"/>
            <Skill imageUrl="/icons_python.svg" enterFromLeft={true} enterFromTop={false} skillName="Python"/>

            <Skill imageUrl="/icons_word.svg" enterFromLeft={true} enterFromTop={true} skillName="Word"/>
            <Skill imageUrl="/icons_outlook.svg" enterFromLeft={true} enterFromTop={true} skillName="Outlook"/>
            <Skill imageUrl="/icons_thinkorswim.svg" enterFromLeft={true} enterFromTop={false} skillName="ThinkorSwim"/>
          
          </div>


        </div>
        <div className="flex flexCenter pt-10 pb-40">
          <div className="grid grid-cols-2 gap-0">
           
            <div className="border-r md:px-10 px-6 w-full text-right">
              <h2 className="mb-6 font-semibold  text-lg">Education</h2>

              <p className="text-xs tracking-wider">Masters Global Management</p>
              <p className="mb-6 text-sm font-light">Thunderbird School of Global Management</p>

              <p className="text-xs tracking-wider">Graduate Certificate in Banking</p>
              <p className="mb-6 text-sm font-light">Pacific Coast Banking School</p>

              <p className="text-xs tracking-wider">BS Economics</p>
              <p className="mb-6 text-sm font-light">Arizona State University</p>


            </div>

            <div className="md:border-r-0 md:px-10 px-6 w-full">
              <h2 className="font-semibold mb-6 text-lg">Licenses</h2>

              <p className="text-xs text-left tracking-wider">Securities Industry Essentials (SIE)</p>
              <p className="mb-6 text-sm font-light">FINRA</p>

              <p className="text-xs text-left tracking-wider">Series 7</p>
              <p className="mb-6 text-sm font-light">FINRA</p>
              
              <p className="text-xs text-left tracking-wider">Series 63</p>
              <p className="mb-6 text-sm font-light">FINRA</p>
              
            </div>

          </div>
        </div>
      

</section>

  )
}