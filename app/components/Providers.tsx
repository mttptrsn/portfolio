"use client"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export default function Providers({children}: {children: React.ReactNode}) {

    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)  
    }, [])
  
    if (!mounted) {
      return <>{children}</>
    }


    return (
        <ThemeProvider  attribute="class" storageKey="theme">
            {children}
        </ThemeProvider>
    )
}