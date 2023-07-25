import Image from "next/image";

type Props = {
    title: string;
    imageUrl: string;
    dates: string;
    technology: string[];
    highlights: string[]; 
   }

const XpCard = ({title, dates, highlights, imageUrl, technology}: Props) => {
  return (
    <article className="flex flex-col p-3 items-center snap-center flex-shrink-0 w-[300px] md:w-[400px] xl:w-[700] shadow-lg dark:shadow-white/30 dark:shadow-sm rounded-sm">
        <div className="dark:bg-white rounded-full p-2 h-[50px] w-[50px] flex items-center my-6">

        <Image src={imageUrl} width={50} height={50} alt="company logo" className="mx-auto"/>
        </div>
        <div className="px-0 md:px-10 text-center my-5">
            <p className="text-xs tracking-tight ">{dates}</p>  
            <h2 className="text-xl mb-2 tracking-tighter font-light">{title}</h2> 
           <div className="flex justify-evenly space-x-2">
            {technology.map((tech)=> (
                <Image key={tech} src={tech} width={15} height={15} alt="tech icon" />
            ))}
           </div>
        </div>
       <div className="mt-2 px-6">
        <ul className="divide-y">
            {highlights.map((hlight)=> (
                <li key={hlight} className="text-sm  leading-relaxed tracking-wider py-3">{hlight}</li>
            ))}
        </ul>


       </div>

    </article>
  )
}
export default XpCard