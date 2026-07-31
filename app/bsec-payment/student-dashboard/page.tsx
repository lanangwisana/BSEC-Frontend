'use client'

import React, { useState } from 'react'
import { Receipt, CreditCard, Clock, UserCheck, CheckCircle2, Upload, Phone, Mail, GraduationCap, ArrowUpRight } from 'lucide-react'
import { PaymentStatusBadge } from '../components/PaymentStatusBadge'
import { InvoiceCard } from '../components/InvoiceCard'

export default function StudentPaymentDashboardPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const studentInfo = {
    name: 'Ahmad Fauzi',
    studentId: 'SIS26001',
    grade: '10 SMA',
    school: 'SMAN 8 Jakarta',
    program: 'Program SMA Reguler',
    parentPhone: '0812-3456-7890',
    parentEmail: 'fauzi.parent@email.com',
    status: 'Aktif',
  }

  const currentInvoice = {
    invoiceNumber: 'INV-2026-07-001',
    studentName: studentInfo.name,
    program: studentInfo.program,
    month: 'Juli',
    year: 2026,
    amount: 750000,
    dueDate: '10 Juli 2026',
    status: 'pending' as const,
  }

  const recentPayments = [
    { month: 'Juni 2026', date: '05/06/2026', method: 'Transfer Bank BCA', amount: 750000, status: 'confirmed' },
    { month: 'Mei 2026', date: '04/05/2026', method: 'Transfer Bank Mandiri', amount: 750000, status: 'confirmed' },
    { month: 'April 2026', date: '08/04/2026', method: 'E-Wallet QRIS', amount: 750000, status: 'confirmed' },
  ]

  const upcomingInvoices = [
    { month: 'Agustus 2026', dueDate: '10 Agt', amount: 750000, status: 'pending' },
    { month: 'September 2026', dueDate: '10 Sep', amount: 750000, status: 'pending' },
  ]

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFile) {
      setUploadSuccess(true)
      setTimeout(() => {
        setUploadSuccess(false)
        setShowUploadModal(false)
      }, 2000)
    }
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200">
        <div>
          <h1 className="text-2xl font-black text-zinc-900">Dashboard Pembayaran Siswa</h1>
          <p className="text-xs text-zinc-500 font-medium">
            Selamat datang kembali, <strong className="text-zinc-800">{studentInfo.name}</strong> ({studentInfo.studentId})
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
        >
          <Upload size={16} />
          <span>Upload Bukti Bayar</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Tagihan Bulan Ini
            </span>
            <span className="text-xl font-black text-zinc-900">Rp 750.000</span>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Receipt size={24} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Total Dibayar
            </span>
            <span className="text-xl font-black text-zinc-900">Rp 2.250.000</span>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CreditCard size={24} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Tagihan Tertunda
            </span>
            <span className="text-xl font-black text-zinc-900">1</span>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock size={24} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
              Status Keanggotaan
            </span>
            <span className="text-xl font-black text-zinc-900">{studentInfo.status}</span>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <UserCheck size={24} />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Active Invoice */}
          <div>
            <h2 className="text-base font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Receipt size={18} className="text-blue-700" />
              <span>Tagihan Terbaru</span>
            </h2>
            <InvoiceCard
              {...currentInvoice}
              onPayClick={() => setShowUploadModal(true)}
            />
          </div>

          {/* Payment History Table */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-zinc-100 flex justify-between items-center">
              <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                <Clock size={16} className="text-blue-700" />
                <span>Riwayat Pembayaran</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase font-semibold">
                  <tr>
                    <th className="px-5 py-3">Bulan</th>
                    <th className="px-5 py-3">Tanggal</th>
                    <th className="px-5 py-3">Metode</th>
                    <th className="px-5 py-3">Jumlah</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 font-medium text-zinc-700">
                  {recentPayments.map((p, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="px-5 py-3.5 font-bold text-zinc-900">{p.month}</td>
                      <td className="px-5 py-3.5 text-zinc-500">{p.date}</td>
                      <td className="px-5 py-3.5">{p.method}</td>
                      <td className="px-5 py-3.5 font-bold text-blue-700">
                        Rp {p.amount.toLocaleString('id-ID')}
                      </td>
                      <td className="px-5 py-3.5">
                        <PaymentStatusBadge status={p.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (1 col) */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 font-black text-xl flex items-center justify-center mx-auto mb-3">
              AF
            </div>
            <h3 className="font-bold text-base text-zinc-900">{studentInfo.name}</h3>
            <p className="text-xs text-zinc-500 flex items-center justify-center gap-1 mt-1">
              <GraduationCap size={14} />
              <span>{studentInfo.grade} • {studentInfo.school}</span>
            </p>
            <p className="text-xs text-blue-700 font-semibold mt-1">{studentInfo.program}</p>

            <div className="mt-4 pt-4 border-t border-zinc-100 text-left text-xs space-y-2 text-zinc-600">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-zinc-400" />
                <span>{studentInfo.parentPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-zinc-400" />
                <span>{studentInfo.parentEmail}</span>
              </div>
            </div>
          </div>

          {/* Schedule List */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <h4 className="font-bold text-xs uppercase text-zinc-500 tracking-wider mb-4">
              Jadwal Tagihan Mendatang
            </h4>
            <div className="space-y-3">
              {upcomingInvoices.map((inv, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-zinc-800 block">{inv.month}</span>
                    <span className="text-zinc-400">Jatuh Tempo: {inv.dueDate}</span>
                  </div>
                  <span className="font-bold text-zinc-700">Rp {inv.amount.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-fade-in relative">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Upload Bukti Transfer</h3>
            <p className="text-xs text-zinc-500 mb-4">
              Upload foto/scan struk transfer pembayaran invoice <strong>#{currentInvoice.invoiceNumber}</strong>.
            </p>

            {uploadSuccess ? (
              <div className="py-8 text-center text-emerald-600 space-y-2">
                <CheckCircle2 size={48} className="mx-auto" />
                <p className="font-bold text-sm">Bukti Berhasil Diupload!</p>
                <p className="text-xs text-zinc-500">Admin akan segera mengonfirmasi pembayaran Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleUploadSubmit} className="space-y-4">
                <div className="border-2 border-dashed border-zinc-300 hover:border-blue-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-zinc-50">
                  <Upload size={32} className="mx-auto text-zinc-400 mb-2" />
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer text-xs font-semibold text-blue-700 hover:underline">
                    {selectedFile ? selectedFile.name : 'Pilih file struk transfer (PNG, JPG, PDF)'}
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-md"
                  >
                    Kirim Bukti
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
