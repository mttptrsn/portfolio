import { Hero } from './components/Hero'

export default function Home() {
  return (
    <div className='mx-auto max-w-7xl w-screen'>
      <div className='flex flex-col items-center justify-center'>
         <Hero />
      </div>
    </div>
  )
}
