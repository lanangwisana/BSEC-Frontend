import React from 'react'
import { AdvantageCmsItem } from '@/app/bsec-admin-panel/cms/types'

interface AdvantagesProps {
  title?: string
  subtitle?: string
  data?: AdvantageCmsItem[]
}

const advantageIcons: Record<string, string> = {
  mentor: 'school',
  modul: 'map',
  tryout: 'rocket_launch',
  monitoring: 'groups',
}

const defaultAdvantages = [
  { id: 'mentor', title: 'Mentor Berpengalaman', description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya.', iconName: 'school' },
  { id: 'modul', title: 'Modul Terstruktur', description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami.', iconName: 'map' },
  { id: 'tryout', title: 'Tryout Berkala', description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail.', iconName: 'rocket_launch' },
  { id: 'monitoring', title: 'Monitoring Perkembangan', description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua.', iconName: 'groups' },
]

const Advantages: React.FC<AdvantagesProps> = ({ title, subtitle, data }) => {
  const currentList = data && data.length > 0 ? data : defaultAdvantages

  return (
    <section className="bg-[#EFF6FF]/70 py-24 asymmetric-shape" id="keunggulan">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1E293B] mb-3 uppercase tracking-[0.2em] font-black">
            {title || 'MENGAPA BSEC?'}
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            {subtitle || 'Dedikasi kami untuk masa depan cerah anak Anda'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentList.map((advantage) => (
            <div 
              key={advantage.id} 
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-[#1D4ED8]/15 transition-all duration-500 group border border-transparent hover:border-[#1D4ED8]/20"
            >
              <div className="w-16 h-16 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mb-6 text-[#1D4ED8] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined text-[32px]">
                  {advantage.iconName || advantageIcons[advantage.id] || 'star'}
                </span>
              </div>
              <h3 className="font-bold text-xl text-[#1E293B] mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
