import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Providers from './components/providers'


export const metadata: Metadata = {
  title: 'Matthew Peterson',
  description: 'Fullstack DevoOps Certified Creative Professional',
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
        <Footer />
          </Providers>
      </body>
    </html>
  )
}
