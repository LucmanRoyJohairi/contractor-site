import About from '@/components/About'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Partners />
    </div>
  )
}
