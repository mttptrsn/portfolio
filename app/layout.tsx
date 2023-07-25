import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'



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
        <main>
         {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
