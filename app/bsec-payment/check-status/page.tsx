'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, CreditCard, User, Phone, AlertCircle, CheckCircle2, HelpCircle, ArrowLeft } from 'lucide-react'
import { PaymentStatusBadge } from '../components/PaymentStatusBadge'

export default function CheckPaymentStatusPage() {
  const [searchType, setSearchType] = useState<'invoice' | 'student'>('invoice')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [studentId, setStudentId] = useState('')
  const [phone, setPhone] = useState('')
  const [searched, setSearched] = useState(false)
  const [searchResult, setSearchResult] = useState<any>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)

    // Demo data response matching bsec-payment logic
    if (invoiceNumber.trim() || studentId.trim()) {
      setSearchResult({
        invoiceNumber: invoiceNumber || 'INV-2026-07-001',
        studentName: 'Ahmad Fauzi',
        studentId: studentId || 'SIS26001',
        grade: '10 SMA',
        program: 'Program SMA Reguler',
        month: 'Juli',
        year: 2026,
        amount: 750000,
        dueDate: '10 Juli 2026',
        status: 'pending',
        phone: phone || '0812-3456-7890',
      })
    } else {
      setSearchResult(null)
    }
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

      <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden mb-8">
        {/* Header */}
        <div className="bg-blue-700 text-white p-6 sm:p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-yellow-300 flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Search size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">Cek Status Pembayaran</h1>
          <p className="text-blue-100 text-xs sm:text-sm mt-2">
            Masukkan nomor invoice atau ID siswa beserta nomor HP terdaftar untuk melihat detail tagihan Anda.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <form onSubmit={handleSearch} className="space-y-6">
            {/* Search Type Selector */}
            <div className="flex gap-4 p-1 bg-zinc-100 rounded-xl max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setSearchType('invoice')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
                  searchType === 'invoice'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Cari No. Invoice
              </button>
              <button
                type="button"
                onClick={() => setSearchType('student')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
                  searchType === 'student'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Cari ID Siswa
              </button>
            </div>

            {/* Field: Invoice or Student ID */}
            {searchType === 'invoice' ? (
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">
                  Nomor Invoice <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <ReceiptIcon size={18} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    placeholder="Contoh: INV-2026-07-001"
                    className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                    required
                  />
                </div>
                <p className="text-xs text-zinc-500 mt-1.5">
                  Nomor invoice dapat ditemukan pada pesan WhatsApp/email tagihan bulanan.
                </p>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">
                  ID Siswa <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="Contoh: SIS26001"
                    className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                    required
                  />
                </div>
                <p className="text-xs text-zinc-500 mt-1.5">
                  ID Siswa tertera pada kartu siswa atau dapat dikonfirmasi ke admin.
                </p>
              </div>
            )}

            {/* Field: Phone Number */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-2">
                No. HP Orang Tua / Wali <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3.5 top-3.5 text-zinc-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 0812-3456-7890"
                  className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                  required
                />
              </div>
              <p className="text-xs text-zinc-500 mt-1.5">
                Gunakan nomor HP yang didaftarkan saat pendaftaran pertama kali.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Search size={18} />
              <span>Cek Status Pembayaran</span>
            </button>
          </form>

          {/* Search Result */}
          {searched && searchResult && (
            <div className="mt-10 p-6 bg-blue-50/60 border border-blue-200 rounded-2xl animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-blue-200/80 mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-900 block">Detail Tagihan Siswa</span>
                  <h3 className="text-lg font-extrabold text-blue-950">{searchResult.studentName}</h3>
                </div>
                <PaymentStatusBadge status={searchResult.status} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500 block">No. Invoice:</span>
                  <span className="font-bold text-zinc-800">{searchResult.invoiceNumber}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">ID Siswa:</span>
                  <span className="font-bold text-zinc-800">{searchResult.studentId}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Program Belajar:</span>
                  <span className="font-bold text-zinc-800">{searchResult.program} ({searchResult.grade})</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Periode & Jatuh Tempo:</span>
                  <span className="font-bold text-zinc-800">{searchResult.month} {searchResult.year} • {searchResult.dueDate}</span>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-blue-200/50 flex justify-between items-center">
                  <span className="text-sm font-semibold text-zinc-700">Total Nominal:</span>
                  <span className="text-xl font-black text-blue-800">Rp {searchResult.amount.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/bsec-payment/student-dashboard"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-bold hover:bg-blue-800 transition-all"
                >
                  Upload Bukti Transfer
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-all inline-flex items-center gap-1.5"
                >
                  Konfirmasi ke Admin WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm flex items-start gap-4">
        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
          <HelpCircle size={24} />
        </div>
        <div className="text-xs space-y-1">
          <h4 className="font-bold text-zinc-900 text-sm">Butuh Bantuan Cek Tagihan?</h4>
          <p className="text-zinc-500">
            Jika kendala nomor invoice tidak ditemukan atau ada pertanyaan mengenai rincian biaya, silakan hubungi tim administrasi kami via WhatsApp di <strong>0812-3456-7890</strong> (Senin - Sabtu: 08.00 - 17.00 WIB).
          </p>
        </div>
      </div>
    </div>
  )
}

function ReceiptIcon(props: any) {
  return <CreditCard {...props} />
}
