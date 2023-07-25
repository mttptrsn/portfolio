import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    imageUrl: string;
    githubUrl: string;
    liveSiteUrl: string;
    description: string;

}

export const Project = ({title, imageUrl, githubUrl, liveSiteUrl, description}: Props) => {
  return (
    <div className="group relative rounded-md block bg-black min-w-max">
        <Image src={imageUrl} width={1000} height={1000} alt="project image" className="absolute inset-0 object-cover rounded-md h-full w-full opacity-75 transition-opacity group-hover:opacity-50"/>
        <div className="relative p-4 sm:p-6 lg:p-8">
            <h2 className="font-light text-2xl mb-3 pt-2 text-center px-2">{description}</h2>        
        <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-white font-bold text-center">{title}</p>

            <div className="flex flex-row py-2 justify-center gap-2 px-3">
                <Link href={githubUrl} className="p-2 bg-white rounded-full"><Image src="/icons_github.svg" width={33} height={33} alt="github link"/></Link>
                <Link href={liveSiteUrl} className="p-2 bg-white rounded-full"><Image src="/icons_livesite.svg" width={33} height={33} alt="liveSite link"/></Link>
            </div>
            </div>

        </div>
            
        </div>
    </div>
        
    
  )
}