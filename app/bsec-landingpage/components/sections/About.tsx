import React from 'react'
import { AboutCmsContent } from '@/app/bsec-admin-panel/cms/types'

interface AboutProps {
  data?: AboutCmsContent
}

const About: React.FC<AboutProps> = ({ data }) => {
  const title = data?.title || 'Tentang BSEC'
  const subtitle = data?.subtitle || 'Bimbingan belajar profesional yang berkomitmen mencetak generasi unggul'
  const paragraph1 = data?.descriptionParagraph1 || 'BSEC (Brown Smart Education Center) hadir sebagai solusi pendidikan terpercaya bagi siswa SD, SMP, dan SMA di Indonesia. Dengan metode pembelajaran yang terstruktur dan mentor berpengalaman, kami membantu siswa meraih prestasi akademik terbaik.'
  const paragraph2 = data?.descriptionParagraph2 || 'Didirikan pada tahun 2014, BSEC telah membantu lebih dari 500 siswa mencapai target akademik mereka, termasuk lolos ke PTN favorit melalui jalur SNBT.'
  const vision = data?.visionText || 'Menjadi pusat bimbingan belajar terdepan yang mencetak generasi unggul dan berprestasi di Indonesia.'
  
  const mission = data?.missions || [
    'Menyediakan pendidikan berkualitas dengan metode pembelajaran inovatif',
    'Mengembangkan potensi akademik dan karakter siswa secara optimal',
    'Menciptakan lingkungan belajar yang nyaman dan menyenangkan',
    'Membantu siswa meraih prestasi tertinggi dalam setiap jenjang pendidikan',
  ]

  const highlights = data?.highlights || [
    { icon: 'school', number: '10+', label: 'Tahun Pengalaman' },
    { icon: 'groups', number: '500+', label: 'Siswa Berprestasi' },
    { icon: 'star', number: '95%', label: 'Kepuasan Siswa' },
  ]

  return (
    <section className="py-24 bg-white" id="tentang">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-2">{title}</h2>
          <p className="font-body-lg text-lg text-on-surface-variant">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-secondary-container opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="w-full h-full flex items-center justify-center bg-surface-container-low">
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-500">🏫</span>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              {paragraph1}
            </p>
            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              {paragraph2}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  </div>
                  <div className="font-headline-md font-bold text-2xl text-primary">{item.number}</div>
                  <div className="font-label-md text-sm text-secondary mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all">
            <h3 className="font-headline-md text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-fixed">visibility</span> Visi
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">{vision}</p>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all">
            <h3 className="font-headline-md text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-fixed">flag</span> Misi
            </h3>
            <ul className="space-y-3">
              {mission.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">check</span>
                  <span className="text-on-surface-variant text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
