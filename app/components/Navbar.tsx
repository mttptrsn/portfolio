import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "../constants"
import { Logo } from "./Logo"

export const Navbar = () => {

  return (
    <nav className="sticky top-0 p-5 flex items-start justify-between w-full z-33">
        <div className="flex-1 flexCenter gap-10 ">
            
            <ul className="text-small gap-7 capitalize xl:flex hidden">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
    </nav>
  )
}