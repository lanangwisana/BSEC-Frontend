import React from 'react'
import { LeadCaptureCmsContent } from '@/app/bsec-admin-panel/cms/types'

interface CTAProps {
  data?: LeadCaptureCmsContent
}

const CTA: React.FC<CTAProps> = ({ data }) => {
  const title = data?.title || 'Mulai Perjalanan Prestasimu Sekarang'
  const subtitle = data?.subtitle || 'Dapatkan jadwal konsultasi gratis dan rancang strategi belajar terbaik bersama tim ahli kami.'
  const checklist = data?.checklistItems || [
    'Tes Diagnostik Kemampuan Gratis',
    'Laporan Progres Belajar Real-time',
    'Akses Bank Soal Terlengkap',
  ]

  return (
    <section className="py-24 relative" id="daftar">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-white border border-gray-200 overflow-hidden rounded-[48px] shadow-2xl flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-[#1D4ED8] text-white relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed font-medium">
              {subtitle}
            </p>
            <div className="space-y-4">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-[#1D4ED8] p-2 bg-white rounded-xl text-xl">check_circle</span>
                  <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 p-10 md:p-14 flex items-center bg-white">
            <div className="w-full">
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-widest">
                    Nama Lengkap
                  </label>
                  <input 
                    className="w-full border-2 border-gray-200 rounded-2xl focus:ring-[#1D4ED8] focus:border-[#1D4ED8] px-5 py-3.5 bg-[#EFF6FF]/70 text-xs font-semibold text-[#1E293B] transition-all" 
                    placeholder="Masukkan nama Anda" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-widest">
                    Jenjang Pendidikan
                  </label>
                  <select className="w-full border-2 border-gray-200 rounded-2xl focus:ring-[#1D4ED8] focus:border-[#1D4ED8] px-5 py-3.5 bg-[#EFF6FF]/70 text-xs font-semibold text-[#1E293B] transition-all">
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                    <option>Lulus SMA (Gap Year)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-widest">
                    No. WhatsApp
                  </label>
                  <input 
                    className="w-full border-2 border-gray-200 rounded-2xl focus:ring-[#1D4ED8] focus:border-[#1D4ED8] px-5 py-3.5 bg-[#EFF6FF]/70 text-xs font-semibold text-[#1E293B] transition-all" 
                    placeholder="081234567XXX" 
                    type="tel"
                  />
                </div>
                <button 
                  className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#1D4ED8]/30 transition-all active:scale-95 mt-2 cursor-pointer" 
                  type="button"
                >
                  DAFTAR SEKARANG
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-3 font-semibold">
                  Kami menjamin privasi data Anda.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
