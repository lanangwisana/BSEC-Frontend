'use client'

import Navbar from '@/app/bsec-landingpage/components/layout/Navbar'
import Hero from '@/app/bsec-landingpage/components/sections/Hero'
import About from '@/app/bsec-landingpage/components/sections/About'
import Programs from '@/app/bsec-landingpage/components/sections/Programs'
import Advantages from '@/app/bsec-landingpage/components/sections/Advantages'
import Testimonials from '@/app/bsec-landingpage/components/sections/Testimonials'
import CTA from '@/app/bsec-landingpage/components/sections/CTA'
import Footer from '@/app/bsec-landingpage/components/layout/Footer'
import { useLandingPageData } from './hooks/useLandingPageData'

export default function LandingPage() {
  const { data } = useLandingPageData()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Programs data={data.programs} />
      <Advantages data={data.advantages} />
      <Testimonials data={data.testimonials} />
      <CTA />
      <Footer data={data.footer} />
    </main>
  )
}
