'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ProgramCategory, ProgramCmsItem } from '@/app/bsec-admin-panel/cms/types'

interface ProgramsProps {
  categories?: ProgramCategory[]
  data?: ProgramCmsItem[]
}

const defaultCategories: ProgramCategory[] = [
  { id: 'sd', name: 'Program SD', sortOrder: 1 },
  { id: 'smp', name: 'Program SMP', sortOrder: 2 },
  { id: 'sma', name: 'Program SMA', sortOrder: 3 },
  { id: 'utbk', name: 'Intensif UTBK/SNBT', sortOrder: 4 },
]

const defaultPrograms: Record<string, { title: string; desc: string; price: string; icon: string }[]> = {
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

const Programs: React.FC<ProgramsProps> = ({ categories, data }) => {
  const activeCategories = categories && categories.length > 0 ? categories : defaultCategories
  const [activeTabId, setActiveTabId] = useState<string>(activeCategories[0]?.id || 'sd')

  const activeDynamicItems = data
    ? data.filter((item) => (item.categoryId === activeTabId || (item as any).category === activeTabId) && item.isActive)
    : []

  const currentDisplayList = activeDynamicItems.length > 0
    ? activeDynamicItems.map((item) => ({
        id: item.id,
        title: item.title,
        desc: item.description,
        price: item.priceFormatted,
        icon: item.iconName,
      }))
    : (defaultPrograms[activeTabId] || []).map((item, idx) => ({
        id: `${activeTabId}-${idx + 1}`,
        title: item.title,
        desc: item.desc,
        price: item.price,
        icon: item.icon,
      }))

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">Program Unggulan</h2>
          <p className="text-lg text-gray-600 mb-10 font-medium">Pilih jenjang yang sesuai dengan kebutuhan akademik Anda</p>
          
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-[#EFF6FF] rounded-full border border-gray-200">
            {activeCategories.map((cat) => (
              <button 
                key={cat.id}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTabId === cat.id 
                    ? 'bg-[#1D4ED8] text-white shadow-lg shadow-[#1D4ED8]/30' 
                    : 'text-[#1E293B] hover:bg-white/80'
                }`}
                onClick={() => setActiveTabId(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentDisplayList.length === 0 ? (
            <div className="col-span-3 text-center py-12 bg-[#EFF6FF] rounded-3xl border border-dashed border-gray-300 text-gray-500 font-medium">
              Belum ada program kelas untuk kategori ini.
            </div>
          ) : (
            currentDisplayList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border-2 border-gray-200/80 p-8 md:p-10 rounded-[40px] flex flex-col hover:border-[#1D4ED8] hover:shadow-2xl hover:shadow-[#1D4ED8]/10 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1D4ED8]/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                <span className="material-symbols-outlined text-[#1D4ED8] text-[56px] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform inline-block">
                  {item.icon || 'school'}
                </span>
                <h4 className="text-2xl mb-4 font-black text-[#1E293B]">{item.title}</h4>
                <p className="text-gray-600 mb-10 flex-grow leading-relaxed font-medium">{item.desc}</p>
                <div className="flex flex-col gap-3 mt-auto">
                  <span className="text-2xl font-black text-[#1D4ED8] mb-1">{item.price}</span>
                  
                  <div className="flex flex-col gap-2.5 pt-1">
                    <Link 
                      href="#daftar" 
                      className="w-full bg-[#1D4ED8] text-white py-3.5 px-4 rounded-2xl text-center text-xs font-black hover:bg-[#1e40af] transition-all duration-300 shadow-md shadow-[#1D4ED8]/20 cursor-pointer block"
                    >
                      Pilih Program
                    </Link>

                    <div className="flex justify-end pt-1">
                      <Link 
                        href={`/bsec-landingpage/programs/${item.id}`}
                        className="text-gray-500 hover:text-[#1D4ED8] text-[11px] font-bold transition-colors duration-200 flex items-center gap-1 cursor-pointer group/link"
                      >
                        <span>Learn More</span>
                        <span className="text-xs group-hover/link:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Programs
