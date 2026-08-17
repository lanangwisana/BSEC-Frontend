'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { ProgramCmsItem } from '../../../bsec-admin-panel/cms/types'

const fallbackPrograms: Record<string, {
  title: string;
  category: string;
  desc: string;
  price: string;
  targetAge: string;
  icon: string;
  objectives: string;
  focus: string;
}> = {
  'p-1': {
    title: 'Matematika SD',
    category: 'Program SD',
    desc: 'Fokus pada konsep dasar dan pemecahan masalah kreatif untuk mencetak juara matematika sejak dini.',
    price: 'Rp 450k/bln',
    targetAge: 'Kelas 1 - 6 SD',
    icon: 'calculate',
    objectives: '1. Menguasai konsep aritmatika dasar & logika matematika dengan mudah.\n2. Siap menghadapi Ujian Sekolah dan Olimpiade Matematika SD.\n3. Membangun rasa percaya diri dan antusiasme terhadap pelajaran berhitung.',
    focus: '• Pemahaman Konsep (Bukan Sekadar Menghafal Rumus)\n• Visualisasi Soal Cerita & Logika Logis\n• Latihan Soal Variatif & Pembahasan Tuntas',
  },
  'p-2': {
    title: 'IPA Dasar',
    category: 'Program SD',
    desc: 'Eksperimen seru untuk mengenali fenomena alam sekitar dan menumbuhkan rasa ingin tahu ilmiah.',
    price: 'Rp 450k/bln',
    targetAge: 'Kelas 1 - 6 SD',
    icon: 'biotech',
    objectives: '1. Memahami dasar-dasar ilmu pengetahuan alam melalui observasi langsung.\n2. Melatih berpikir kritis dan rasa ingin tahu terhadap fenomena sekitar.\n3. Nilai akademik tinggi untuk pelajaran IPA di sekolah.',
    focus: '• Eksperimen Sains Sederhana & Praktikum Visual\n• Pengenalan Makhluk Hidup, Energi, dan Lingkungan\n• Kuis Interaktif & Penguatan Materi Sekolah',
  },
}

export default function ProgramDetailPage() {
  const params = useParams()
  const programId = params?.id as string

  const [program, setProgram] = useState<ProgramCmsItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProgramDetail() {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/landing-page')
        if (res.ok) {
          const json = await res.json()
          if (json.success && json.data?.programs) {
            const found = json.data.programs.find((p: ProgramCmsItem) => p.id === programId)
            if (found) {
              setProgram(found)
            }
          }
        }
      } catch (err) {
        console.warn('Backend API connection failed, using fallback client data.', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProgramDetail()
  }, [programId])

  // Fallback data mapping if not found in dynamic state
  const fallback = fallbackPrograms[programId] || {
    title: program?.title || 'Program Kelas BSEC',
    category: 'Program Unggulan',
    desc: program?.description || 'Bimbingan belajar intensif dengan pengajar profesional dari PTN favorit.',
    price: program?.priceFormatted || 'Rp 450k/bln',
    targetAge: program?.targetAge || 'SD / SMP / SMA',
    icon: program?.iconName || 'school',
    objectives: program?.learningObjectives || '1. Menguasai materi kurikulum sekolah secara menyeluruh.\n2. Meningkatkan pemahaman konsep dan keterampilan memecahkan soal rumit.\n3. Meraih nilai akademis terbaik dan masuk sekolah / PTN impian.',
    focus: program?.learningFocus || '• Latihan Soal Intensif & Pembahasan Tuntas\n• Pendampingan Tugas Sekolah & Persiapan Ujian\n• Evaluasi Perkembangan Belajar Rutin',
  }

  const displayTitle = program?.title || fallback.title
  const displayDesc = program?.description || fallback.desc
  const displayPrice = program?.priceFormatted || fallback.price
  const displayTargetAge = program?.targetAge || fallback.targetAge
  const displayObjectives = program?.learningObjectives || fallback.objectives
  const displayFocus = program?.learningFocus || fallback.focus
  const displayIcon = program?.iconName || fallback.icon

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-[#1E293B] flex flex-col">
      <Navbar />

      {/* Bento Main Section */}
      <main className="flex-1 pt-28 pb-16 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 space-y-6">

          {/* Top Bento Header Card (Full Width) */}
          <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] text-white p-8 md:p-10 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 max-w-3xl relative z-10">
              <nav className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">
                <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                <span>/</span>
                <Link href="/#programs" className="hover:text-white transition-colors">Program Unggulan</Link>
                <span>/</span>
                <span className="text-white">{displayTitle}</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold text-blue-100 border border-white/20">
                <span className="material-symbols-outlined text-sm text-yellow-300">verified</span>
                <span>{displayTargetAge}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                {displayTitle}
              </h1>

              <p className="text-blue-100 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                {displayDesc}
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[28px] text-center w-full md:w-auto min-w-[240px] shadow-xl relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 block mb-1">Investasi Pendidikan</span>
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight">{displayPrice}</div>
              <p className="text-[11px] text-blue-100 font-medium mt-1">Fasilitas Modul Tuntas + 1x Trial Gratis</p>
            </div>
          </div>

          {/* Grid Bento Layout: 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 8 Columns: Content Cards */}
            <div className="lg:col-span-8 space-y-6">

              {/* BENTO CARD 1: FOKUS PEMBELAJARAN (POSISI ATAS - MANDATORY TOP) */}
              <div className="bg-white p-8 md:p-9 rounded-[32px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-black shadow-xs">
                      <span className="material-symbols-outlined text-2xl">psychology</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-[#1E293B]">Fokus Pembelajaran</h2>
                      <p className="text-[11px] text-gray-500 font-medium">Metode & pendekatan belajar khusus pengajar BSEC</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex text-[10px] font-extrabold uppercase bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
                    Prioritas Utama
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-700 whitespace-pre-line leading-relaxed pl-4 border-l-4 border-amber-500 bg-amber-50/40 p-5 rounded-r-2xl border-y border-r border-amber-100">
                  {displayFocus}
                </div>
              </div>

              {/* BENTO CARD 2: TUJUAN PEMBELAJARAN (POSISI BAWAH - MANDATORY ALWAYS BELOW FOKUS) */}
              <div className="bg-white p-8 md:p-9 rounded-[32px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#EFF6FF] text-[#1D4ED8] rounded-2xl flex items-center justify-center font-black shadow-xs">
                      <span className="material-symbols-outlined text-2xl">target</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-[#1E293B]">Tujuan Pembelajaran</h2>
                      <p className="text-[11px] text-gray-500 font-medium">Capaian & target akademis siswa setelah mengikuti kelas</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex text-[10px] font-extrabold uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    Target Akademik
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-700 whitespace-pre-line leading-relaxed pl-4 border-l-4 border-[#1D4ED8] bg-blue-50/40 p-5 rounded-r-2xl border-y border-r border-blue-100">
                  {displayObjectives}
                </div>
              </div>

              {/* BENTO CARD 3: FASILITAS UNGGULAN (4 GRID BENTO) */}
              {/* BENTO CARD 3: FASILITAS UNGGULAN (4 GRID BENTO) */}
<div className="bg-white/5 text-slate-800 p-8 md:p-9 rounded-[32px] shadow-xl space-y-5 border border-slate-200/30">
  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
    <h3 className="text-lg font-extrabold flex items-center gap-2 text-slate-800">
      <span className="material-symbols-outlined text-amber-600">auto_awesome</span>
      Fasilitas Unggulan {displayTitle}
    </h3>
    <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
      BSEC Quality Assurance
    </span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-slate-200 hover:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-emerald-600">meeting_room</span>
      <div>
        <h4 className="text-xs font-bold text-slate-800">Ruang Belajar</h4>
        <p className="text-[11px] text-slate-600 mt-0.5">Kelas virtual interaktif dengan materi visual berkualitas.</p>
      </div>
    </div>

    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-slate-200 hover:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-emerald-600">person_search</span>
      <div>
        <h4 className="text-xs font-bold text-slate-800">Tutor Berpengalaman</h4>
        <p className="text-[11px] text-slate-600 mt-0.5">Pengajar PTN favorit dengan pengalaman mengajar berjam-jam.</p>
      </div>
    </div>

    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-slate-200 hover:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-emerald-600">schedule</span>
      <div>
        <h4 className="text-xs font-bold text-slate-800">Durasi Belajar</h4>
        <p className="text-[11px] text-slate-600 mt-0.5">Program intensif 3-6 bulan dengan modul lengkap.</p>
      </div>
    </div>

    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-slate-200 hover:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-emerald-600">help</span>
      <div>
        <h4 className="text-xs font-bold text-slate-800">Konsultasi PR Gratis</h4>
        <p className="text-[11px] text-slate-600 mt-0.5">Pendampingan penuh untuk tugas harian dan PR.</p>
      </div>
    </div>
  </div>
</div>

            </div>

            {/* Right 4 Columns: Sticky Registration Bento Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-7 rounded-[32px] border border-slate-200/80 shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-ping" />
                    <span>Trial Class Ready</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#1E293B]">Daftar Kelas Trial</h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                    Dapatkan 1x Sesi Trial GRATIS untuk merasakan metode pengajaran interaktif BSEC.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-600">
                    <span>Program</span>
                    <span className="text-[#1D4ED8] font-black">{displayTitle}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-gray-600">
                    <span>Jenjang</span>
                    <span className="text-slate-800">{displayTargetAge}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-gray-600 border-t border-slate-200/80 pt-2.5">
                    <span>Biaya Belajar</span>
                    <span className="text-lg font-black text-[#1D4ED8]">{displayPrice}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <a
                    href="https://wa.me/6285606201036?text=Halo%20BSEC,%20saya%20tertarik%20mendaftar%20Trial%20Gratis%20untuk%20program%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1D4ED8] text-white py-4 rounded-2xl text-center text-xs font-black hover:bg-[#1e40af] transition-all duration-300 shadow-lg shadow-[#1D4ED8]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                    <span>Daftar Trial via WhatsApp</span>
                  </a>

                  <Link
                    href="/#programs"
                    className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-2xl text-center text-xs font-extrabold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer block"
                  >
                    <span>← Kembali ke Semua Program</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
