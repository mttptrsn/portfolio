import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Full-Stack DevOps Engineer | Software Engineering Portfolio',
  description: 'Explore my personal portfolio! I&apos;m a full-stack DevOps professional passionate about software engineering. Discover how I deliver efficient solutions, implement best practices, and embrace agile methodologies. Let&apos;s connect and collaborate on exciting opportunities in the development and software engineering industry.',
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
