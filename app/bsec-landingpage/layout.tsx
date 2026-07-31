import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'BSEC - Brown Smart Education Center | Bimbingan Belajar SD, SMP, SMA',
  description: 'BSEC adalah bimbingan belajar profesional untuk siswa SD, SMP, dan SMA dengan program reguler dan persiapan SNBT. Metode pembelajaran modern dan mentor berpengalaman.',
  keywords: 'bimbingan belajar, les privat, persiapan SNBT, bimbel SD, bimbel SMP, bimbel SMA, BSEC',
  authors: [{ name: 'BSEC' }],
  openGraph: {
    title: 'BSEC - Brown Smart Education Center',
    description: 'Bimbingan belajar profesional untuk siswa SD, SMP, dan SMA',
    type: 'website',
  },
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable} bg-surface font-body-md text-on-surface smooth-scroll min-h-screen`}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      {children}
    </div>
  )
}
