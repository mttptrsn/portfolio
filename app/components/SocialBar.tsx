import { socialMediaLnks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const SocialBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode ] = useState<boolean | undefined>();


  useEffect(() => {
    if (resolvedTheme) {
      setMounted(true);
      setIsDarkMode(resolvedTheme === 'dark');
    }
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flexCenter md:pb-6 pb-3">
      <ul className="text-small gap-7 flexBetween">
        {socialMediaLnks.map((link, index) => (
          <li key={link.href}>  
            <Link  
              href={link.href}
              target={index < socialMediaLnks.length - 1 ? "_blank" : "_self"}
              rel={index < socialMediaLnks.length - 1 ? "noopener noreferrer" : ""}
            >
              <Image 
                src={isDarkMode ? link.imageUrlWt : link.imageUrlBlk}
                width={23}
                height={23}
                alt={link.text}
              /> 
            </Link>
          </li>
        ))}                        
      </ul>
    </div>
  );
};
