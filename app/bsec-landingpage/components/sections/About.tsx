import React from 'react'
import { AboutCmsContent } from '@/app/bsec-admin-panel/cms/types'

interface AboutProps {
  data?: AboutCmsContent
}

const About: React.FC<AboutProps> = ({ data }) => {
  const title = data?.title || 'Tentang BSEC'
  const subtitle = data?.subtitle || 'Bimbingan belajar profesional yang berkomitmen mencetak generasi unggul'
  const paragraph1 = data?.descriptionParagraph1 || 'BSEC (Brown Smart Education Center) hadir sebagai solusi pendidikan terpercaya bagi siswa SD, SMP, dan SMA di Indonesia. Dengan metode pembelajaran yang terstruktur dan mentor berpengalaman, kami membantu siswa meraih prestasi akademik terbaik.'
  const paragraph2 = data?.descriptionParagraph2 || ''
  const vision = data?.visionText || 'Menjadi pusat bimbingan belajar terdepan yang mencetak generasi unggul dan berprestasi di Indonesia.'
  const missionText = data?.missions?.[0] || 'Inovatif, nyaman, dan berorientasi pada prestasi akademik tertinggi siswa.'

  const card1Num = data?.statCard1Number || '10+'
  const card1Label = data?.statCard1Label || 'TAHUN PENGALAMAN'
  const card2Num = data?.statCard2Number || '500+'
  const card2Label = data?.statCard2Label || 'SISWA BERPRESTASI'
  const card3Num = data?.statCard3Number || '95%'
  const card3Label = data?.statCard3Label || 'KEPUASAN SISWA'
  const card4Num = data?.statCard4Number || '2014'
  const card4Label = data?.statCard4Label || 'TAHUN BERDIRI'

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white" id="tentang">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Cards Container (Exact Overlap Matching User UI) */}
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">
              {/* Left Column: Card 1 (Top, Overlapping) + Card 3 (Bottom) */}
              <div className="flex flex-col">
                {/* Card 1: 10+ TAHUN PENGALAMAN (Top Left, z-10) */}
                <div className="relative z-10 bg-[#1D4ED8] p-7 md:p-8 rounded-[32px] text-white shadow-xl shadow-[#1D4ED8]/25 transform hover:-translate-y-1 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-[32px] mb-4 text-white">school</span>
                  <div className="text-4xl md:text-5xl font-black mb-1 tracking-tight">{card1Num}</div>
                  <div className="text-[11px] font-extrabold tracking-wider text-white/80 uppercase">
                    {card1Label}
                  </div>
                </div>

                {/* Card 3: 95% KEPUASAN SISWA (Bottom Left, z-0, -mt-6 overlap under Card 1) */}
                <div className="relative z-0 -mt-6 bg-[#EFF6FF] p-7 md:p-8 rounded-[32px] border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-[32px] mb-4 text-amber-400">star</span>
                  <div className="text-4xl md:text-5xl font-black text-[#1E293B] mb-1 tracking-tight">{card3Num}</div>
                  <div className="text-[11px] font-extrabold tracking-wider text-gray-500 uppercase">
                    {card3Label}
                  </div>
                </div>
              </div>

              {/* Right Column: Card 2 (Top, Shifted Down) + Card 4 (Bottom) */}
              <div className="flex flex-col gap-4 pt-6 md:pt-8">
                {/* Card 2: 500+ SISWA BERPRESTASI (Top Right) */}
                <div className="bg-white p-7 md:p-8 rounded-[32px] border border-gray-200/80 shadow-md shadow-gray-100 transform hover:-translate-y-1 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-[32px] mb-4 text-[#1D4ED8]">groups</span>
                  <div className="text-4xl md:text-5xl font-black text-[#1E293B] mb-1 tracking-tight">{card2Num}</div>
                  <div className="text-[11px] font-extrabold tracking-wider text-gray-500 uppercase">
                    {card2Label}
                  </div>
                </div>

                {/* Card 4: 2014 TAHUN BERDIRI (Bottom Right) */}
                <div className="bg-white p-7 md:p-8 rounded-[32px] border border-gray-200/80 shadow-md shadow-gray-100 transform hover:-translate-y-1 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-[32px] mb-4 text-[#1D4ED8]">emoji_events</span>
                  <div className="text-4xl md:text-5xl font-black text-[#1E293B] mb-1 tracking-tight">{card4Num}</div>
                  <div className="text-[11px] font-extrabold tracking-wider text-gray-500 uppercase">
                    {card4Label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-12 h-1.5 bg-[#1D4ED8]"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight">{title}</h2>
            <p className="text-lg font-bold text-[#1D4ED8] whitespace-pre-line">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed text-base font-medium whitespace-pre-line">
              {paragraph1}
            </p>
            {paragraph2 && (
              <p className="text-gray-600 leading-relaxed text-base font-medium whitespace-pre-line">
                {paragraph2}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-[#EFF6FF] rounded-2xl flex items-center justify-center text-[#1D4ED8]">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1">Visi</h4>
                  <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{vision}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-[#EFF6FF] rounded-2xl flex items-center justify-center text-[#1D4ED8]">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1">Misi</h4>
                  <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                    {data?.missions && data.missions.length > 0 ? (
                      data.missions.map((m, idx) => (
                        <p key={idx} className="whitespace-pre-line">• {m}</p>
                      ))
                    ) : (
                      <p className="whitespace-pre-line">{missionText}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
