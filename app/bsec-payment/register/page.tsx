'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { User, Home, BookOpen, Send, RotateCcw, Info, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function StudentRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    birthPlaceDate: '',
    grade: '',
    classroom: '',
    school: '',
    program: 'Reguler',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleGradeChange = (gradeValue: string) => {
    setFormData((prev) => ({
      ...prev,
      grade: gradeValue,
      program: gradeValue === 'SMA' ? prev.program : 'Reguler',
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      birthPlaceDate: '',
      grade: '',
      classroom: '',
      school: '',
      program: 'Reguler',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
    })
    setSubmitted(false)
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/bsec-payment"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Portal Utama</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 text-yellow-300 font-black text-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            B
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">Formulir Pendaftaran Siswa Baru</h1>
          <p className="text-blue-100 text-xs sm:text-sm mt-2">
            Lengkapi data diri siswa dan orang tua di bawah ini untuk bergabung dengan bimbingan belajar BSEC.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-2">Pendaftaran Berhasil Dikirim!</h3>
              <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                Terima kasih <strong>{formData.parentName}</strong>. Tim administrasi BSEC akan segera menghubungi Anda melalui WhatsApp di nomor <strong>{formData.parentPhone}</strong> untuk konfirmasi jadwal dan rincian paket program.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold rounded-xl transition-all"
                >
                  Daftar Siswa Lain
                </button>
                <Link
                  href="/bsec-payment/check-status"
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-md transition-all"
                >
                  Cek Status Tagihan
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Data Siswa */}
              <div>
                <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-200 font-bold text-zinc-900 text-base">
                  <User size={20} className="text-blue-700" />
                  <span>1. Data Pribadi Siswa</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Nama Lengkap Siswa <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap siswa"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Tempat, Tanggal Lahir</label>
                    <input
                      type="text"
                      placeholder="Contoh: Jakarta, 15 Mei 2011"
                      value={formData.birthPlaceDate}
                      onChange={(e) => setFormData({ ...formData, birthPlaceDate: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Jenjang Sekolah <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => handleGradeChange(e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="">-- Pilih Jenjang --</option>
                      <option value="SD">SD (Kelas 1 - 6)</option>
                      <option value="SMP">SMP (Kelas 7 - 9)</option>
                      <option value="SMA">SMA (Kelas 10 - 12)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Kelas / Peminatan</label>
                    <input
                      type="text"
                      placeholder="Contoh: 10 IPA 2"
                      value={formData.classroom}
                      onChange={(e) => setFormData({ ...formData, classroom: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Asal Sekolah <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: SMAN 8 Jakarta"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Pilihan Program <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="Reguler">Program Reguler</option>
                      {formData.grade === 'SMA' && <option value="SNBT">Intensif UTBK / SNBT</option>}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Data Orang Tua */}
              <div>
                <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-200 font-bold text-zinc-900 text-base">
                  <Home size={20} className="text-blue-700" />
                  <span>2. Data Orang Tua / Wali</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Nama Orang Tua / Wali <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama orang tua"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      No. WhatsApp Orang Tua <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Email Orang Tua</label>
                    <input
                      type="email"
                      placeholder="orangtua@email.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Alamat Tempat Tinggal</label>
                    <textarea
                      rows={3}
                      placeholder="Alamat lengkap rumah..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Info Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
                <Info size={20} className="text-blue-700 mt-0.5 shrink-0" />
                <div className="text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-blue-900 block mb-0.5">Catatan Penting Pendaftaran:</strong>
                  Setelah formulir dikirim, admin kami akan mengkonfirmasi jadwal dan membuatkan rincian invoice tagihan pertama melalui nomor WhatsApp yang dicantumkan.
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-200">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 border border-zinc-300 hover:bg-zinc-100 text-zinc-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  <span>Reset Form</span>
                </button>

                <button
                  type="submit"
                  className="px-7 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <Send size={16} />
                  <span>Kirim Pendaftaran</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
