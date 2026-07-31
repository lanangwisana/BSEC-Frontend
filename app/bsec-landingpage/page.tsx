import Navbar from '@/app/bsec-landingpage/components/layout/Navbar'
import Hero from '@/app/bsec-landingpage/components/sections/Hero'
import About from '@/app/bsec-landingpage/components/sections/About'
import Programs from '@/app/bsec-landingpage/components/sections/Programs'
import Advantages from '@/app/bsec-landingpage/components/sections/Advantages'
import Testimonials from '@/app/bsec-landingpage/components/sections/Testimonials'
import CTA from '@/app/bsec-landingpage/components/sections/CTA'
import Footer from '@/app/bsec-landingpage/components/layout/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Advantages />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
