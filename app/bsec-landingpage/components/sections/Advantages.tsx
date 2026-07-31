import React from 'react'
import { AdvantageCmsItem } from '@/app/bsec-admin-panel/cms/types'

interface AdvantagesProps {
  data?: AdvantageCmsItem[]
}

const advantageIcons: Record<string, string> = {
  mentor: 'school',
  modul: 'map',
  tryout: 'rocket_launch',
  monitoring: 'groups',
}

const defaultAdvantages = [
  { id: 'mentor', title: 'Mentor Berpengalaman', description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya', iconName: 'school' },
  { id: 'modul', title: 'Modul Terstruktur', description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami', iconName: 'map' },
  { id: 'tryout', title: 'Tryout Berkala', description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail', iconName: 'rocket_launch' },
  { id: 'monitoring', title: 'Monitoring Perkembangan', description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua', iconName: 'groups' },
]

const Advantages: React.FC<AdvantagesProps> = ({ data }) => {
  const currentList = data && data.length > 0 ? data : defaultAdvantages

  return (
    <section className="bg-surface-container-low py-24" id="keunggulan">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-2">
            Mengapa BSEC?
          </h2>
          <p className="text-lg font-body-lg text-on-surface-variant">
            Dedikasi kami untuk masa depan cerah anak Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((advantage) => (
            <div key={advantage.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{advantage.iconName || advantageIcons[advantage.id] || 'star'}</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary mb-2">
                {advantage.title}
              </h3>
              <p className="text-on-surface-variant">
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
