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
   <Link href={liveSiteUrl} className="block mt-2 py-2 hover:saturate-100 saturate-0 transition-all"  target="_blank" rel="noopener noreferrer">
    <Image 
        src={imageUrl} 
        alt={title} 
        width={500}
        height={282}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"/>

    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong className="font-bold">{title}</strong>
    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
    <p className="mt-0.5 opacity-50 sm:mt-0">{description}</p>
    </div>
   </Link>
        
    
  )
}