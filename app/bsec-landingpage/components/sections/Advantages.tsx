import React from 'react'
import { advantages } from '@/app/bsec-landingpage/lib/constants'
import { Advantage } from '@/app/bsec-landingpage/types'

// Menggabungkan icon material-symbols dengan data lama jika diperlukan
const advantageIcons: Record<string, string> = {
  mentor: 'school',
  modul: 'map',
  tryout: 'rocket_launch',
  monitoring: 'groups',
}

const Advantages = () => {
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
          {advantages.map((advantage: Advantage) => (
            <div key={advantage.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{advantageIcons[advantage.id] || 'star'}</span>
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
