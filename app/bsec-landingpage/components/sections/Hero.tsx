import React from 'react'
import Link from 'next/link'
import { HeroSectionContent } from '@/app/bsec-admin-panel/cms/types'

interface HeroProps {
  data?: HeroSectionContent
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const taglineBadge = data?.taglineBadge || 'Bimbel No. 1 di Indonesia'
  const headline = data?.headline || 'Wujudkan Prestasi Akademik Terbaik Bersama BSEC'
  const subHeadline = data?.subHeadline || 'Metode belajar cerdas untuk hasil maksimal. Kami membantu ribuan siswa meraih mimpi masuk sekolah dan perguruan tinggi favorit.'
  const ctaLabel = data?.ctaLabel || 'Daftar Kelas Trial'
  const ctaRedirectUrl = data?.ctaRedirectUrl || '#daftar'
  const ctaSecondaryLabel = data?.ctaSecondaryLabel || 'Tanya via WhatsApp'
  const ctaSecondaryUrl = data?.ctaSecondaryUrl || 'https://wa.me/6281234567890'
  const mediaUrl = data?.assetMediaUrl || '/images/image 1.png'
  const mediaPosition = data?.assetMediaPosition || '50% 15%'
  const floatingText = data?.floatingBadgeText || '500+ Siswa Lolos'
  const floatingSubtext = data?.floatingBadgeSubtext || 'Pengajar PTN favorit berpengalaman.'

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pb-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4ED8]/5 -skew-x-12 transform translate-x-1/4 -z-10"></div>
      <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
        <div className="space-y-6 relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full text-[#1D4ED8] border border-[#1D4ED8]/10">
            <div className="flex">
              <span className="material-symbols-outlined text-[18px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">{taglineBadge}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-[56px] lg:leading-[1.15] text-[#1E293B] font-extrabold tracking-tight whitespace-pre-line">
            {headline.includes('Terbaik') ? (
              <>
                {headline.split('Terbaik')[0]} <span className="text-[#1D4ED8]">Terbaik {headline.split('Terbaik')[1]}</span>
              </>
            ) : headline}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
            {subHeadline}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href={ctaRedirectUrl}
              className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white px-9 py-4 rounded-2xl font-bold text-base shadow-xl shadow-[#1D4ED8]/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 inline-block text-center cursor-pointer"
            >
              {ctaLabel}
            </Link>
            <a
              href={ctaSecondaryUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white border-2 border-gray-200 text-[#1E293B] px-8 py-4 rounded-2xl font-bold hover:bg-[#EFF6FF] transition-all flex items-center gap-2 inline-flex group cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#1D4ED8] group-hover:rotate-12 transition-transform">chat</span>
              {ctaSecondaryLabel}
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1D4ED8]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1D4ED8]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="relative z-10 floating">
            <div className="hero-blob overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-[#EFF6FF] to-white">
              <img 
                alt="BSEC Student Portrait" 
                className={`w-full h-[450px] md:h-[540px] object-cover ${mediaPosition.startsWith('object-') ? mediaPosition : ''}`}
                style={mediaPosition.includes('%') ? { objectPosition: mediaPosition } : undefined}
                src={mediaUrl}
              />
            </div>
            
            <div className="absolute -bottom-4 -right-2 bg-white p-5 rounded-3xl shadow-2xl border border-gray-100 max-w-[210px] hidden sm:block">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <span className="text-xs font-bold text-[#1E293B]">{floatingText}</span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">{floatingSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
