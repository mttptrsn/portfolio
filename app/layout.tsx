import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Providers from './components/Providers'
import ThemeSwitcher from './components/ThemeSwitcher'

export const metadata: Metadata = {
  title: 'Matthew Peterson: Blending Web Technology with Financial Acumen',
  description: 'Matthew Peterson combines a diverse educational background, including a Masters in Global Management from Thunderbird School and a BS in Economics from Arizona State University, with a rich professional experience. He holds certifications in AI, Python, and banking, reflecting his multifaceted skill set. His freelance work showcases his proficiency in full-stack web development and AI applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
       <Providers>
        
        <main>
             {children} 
        </main>
        <div className='absolute top-3 right-3 max-w-xl z-100'>
         <ThemeSwitcher /> 
        </div>
        <Footer />
        
        </Providers>
      </body>
    </html>
  )
}
