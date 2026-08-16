import Navbar from '@/app/bsec-landingpage/components/layout/Navbar'
import Hero from '@/app/bsec-landingpage/components/sections/Hero'
import About from '@/app/bsec-landingpage/components/sections/About'
import Programs from '@/app/bsec-landingpage/components/sections/Programs'
import Advantages from '@/app/bsec-landingpage/components/sections/Advantages'
import Testimonials from '@/app/bsec-landingpage/components/sections/Testimonials'
import CTA from '@/app/bsec-landingpage/components/sections/CTA'
import Footer from '@/app/bsec-landingpage/components/layout/Footer'
import { FullLandingPageData } from '@/app/bsec-admin-panel/cms/types'

async function getLandingPageData(): Promise<FullLandingPageData | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';
  try {
    const res = await fetch(`${apiBase}/landing-page`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const resJson = await res.json();
      return resJson.data || resJson;
    }
  } catch (err) {
    console.error('[SSR Landing Page] Fetch error:', err);
  }
  return null;
}

export default async function LandingPage() {
  const data = await getLandingPageData();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data?.hero} />
      <About data={data?.about} />
      <Programs categories={data?.programCategories} data={data?.programs} />
      <Advantages data={data?.advantages} />
      <Testimonials data={data?.testimonials} />
      <CTA data={data?.leadCapture} />
      <Footer data={data?.footer} />
    </main>
  );
}
