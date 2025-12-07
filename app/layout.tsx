import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Providers from './components/Providers'
import ThemeSwitcher from './components/ThemeSwitcher'

export const metadata: Metadata = {
  title: 'Matthew Peterson: Exceptional Client Support for Active Traders',
  description:
    'In his role within Trader Services at Charles Schwab, Matthew Peterson provides knowledgeable, high-quality support to active trading clients. He combines strong communication skills with a disciplined, analytical approach to helping clients navigate markets and trading platforms.',
};


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
