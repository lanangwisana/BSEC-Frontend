'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ProgramCmsItem } from '@/app/bsec-admin-panel/cms/types'

interface ProgramsProps {
  data?: ProgramCmsItem[]
}

const defaultPrograms: Record<'sd' | 'smp' | 'sma' | 'utbk', { title: string; desc: string; price: string; icon: string }[]> = {
  sd: [
    { title: 'Matematika SD', desc: 'Fokus pada konsep dasar dan pemecahan masalah kreatif.', price: 'Rp 450k/bln', icon: 'calculate' },
    { title: 'IPA Dasar', desc: 'Eksperimen seru untuk mengenali fenomena alam sekitar.', price: 'Rp 450k/bln', icon: 'biotech' },
    { title: 'Bahasa Inggris SD', desc: 'Membangun kepercayaan diri berbicara sejak dini.', price: 'Rp 500k/bln', icon: 'language' }
  ],
  smp: [
    { title: 'Persiapan UN SMP', desc: 'Latihan soal intensif dan pembahasan materi tuntas.', price: 'Rp 650k/bln', icon: 'assignment' },
    { title: 'Matematika Lanjut', desc: 'Aljabar dan geometri dengan cara yang menyenangkan.', price: 'Rp 600k/bln', icon: 'functions' },
    { title: 'Fisika & Kimia', desc: 'Dasar-dasar sains untuk persiapan jenjang SMA.', price: 'Rp 600k/bln', icon: 'science' }
  ],
  sma: [
    { title: 'Matematika Wajib', desc: 'Kupas tuntas materi sekolah dan tugas harian.', price: 'Rp 750k/bln', icon: 'draw' },
    { title: 'Biologi & Kimia', desc: 'Materi mendalam untuk peminatan IPA murni.', price: 'Rp 800k/bln', icon: 'medication' },
    { title: 'Ekonomi & Akuntansi', desc: 'Analisis data dan logika keuangan untuk IPS.', price: 'Rp 750k/bln', icon: 'trending_up' }
  ],
  utbk: [
    { title: 'TPS Intensif', desc: 'Trik cepat mengerjakan soal Penalaran Umum.', price: 'Rp 1.2jt/pkt', icon: 'speed' },
    { title: 'TKA Saintek', desc: 'Bedah materi Fisika, Kimia, Biologi level tinggi.', price: 'Rp 1.5jt/pkt', icon: 'architecture' },
    { title: 'TKA Soshum', desc: 'Sejarah, Geografi, dan Sosiologi terpadu.', price: 'Rp 1.5jt/pkt', icon: 'history_edu' }
  ]
}

type TabType = 'sd' | 'smp' | 'sma' | 'utbk'

const Programs: React.FC<ProgramsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<TabType>('sd')

  // Filter items by activeTab if dynamic CMS data is passed
  const activeDynamicItems = data
    ? data.filter((item) => item.category === activeTab && item.isActive)
    : []

  const currentDisplayList = activeDynamicItems.length > 0
    ? activeDynamicItems.map((item) => ({
        title: item.title,
        desc: item.description,
        price: item.priceFormatted,
        icon: item.iconName,
      }))
    : defaultPrograms[activeTab]

  return (
    <section className="py-24" id="program">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-2">Program Unggulan</h2>
            <p className="font-body-lg text-lg text-on-surface-variant">Pilih jenjang yang sesuai dengan kebutuhan akademik Anda</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 border-b border-outline-variant w-full md:w-auto scrollbar-hide">
            <button 
              className={`px-6 py-2 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'sd' ? 'active-tab' : 'text-secondary'}`}
              onClick={() => setActiveTab('sd')}
            >
              Program SD
            </button>
            <button 
              className={`px-6 py-2 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'smp' ? 'active-tab' : 'text-secondary'}`}
              onClick={() => setActiveTab('smp')}
            >
              Program SMP
            </button>
            <button 
              className={`px-6 py-2 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'sma' ? 'active-tab' : 'text-secondary'}`}
              onClick={() => setActiveTab('sma')}
            >
              Program SMA
            </button>
            <button 
              className={`px-6 py-2 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'utbk' ? 'active-tab' : 'text-secondary'}`}
              onClick={() => setActiveTab('utbk')}
            >
              Intensif UTBK/SNBT
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {currentDisplayList.map((item, index) => (
            <div key={index} className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl flex flex-col hover:border-primary/50 hover:shadow-md transition-all shadow-sm group">
              <span className="material-symbols-outlined text-primary text-[40px] mb-4 group-hover:scale-110 transition-transform">
                {item.icon || 'school'}
              </span>
              <h4 className="font-headline-md text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-on-surface-variant mb-6 flex-grow leading-relaxed">{item.desc}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-primary">{item.price}</span>
                <Link href="#daftar" className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary-container transition-colors shadow-sm inline-block">
                  Pilih Program
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
