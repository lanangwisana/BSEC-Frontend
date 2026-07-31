'use client'

import React, { useState } from 'react'
import { Users, Clock, Wallet, TrendingUp, AlertTriangle, CheckCircle, Search, PlusCircle, Printer, FileText } from 'lucide-react'
import { PaymentStatusBadge } from '../components/PaymentStatusBadge'

export default function AdminPaymentDashboardPage() {
  const [activeTab, setActiveTab] = useState<'transaksi' | 'siswa'>('transaksi')

  const stats = {
    totalStudents: 142,
    unpaidInvoices: 18,
    todayRevenue: 2250000,
    monthRevenue: 45750000,
    pendingPaymentsCount: 3,
  }

  const recentPayments = [
    { student: 'Budi Santoso', invoice: 'INV-2026-07-005', method: 'BCA Transfer', amount: 750000, time: '31 Jul, 10:45', admin: 'Siti Admin', status: 'confirmed' },
    { student: 'Citra Lestari', invoice: 'INV-2026-07-004', method: 'QRIS E-Wallet', amount: 650000, time: '31 Jul, 09:30', admin: 'Kasir Utama', status: 'confirmed' },
    { student: 'Dewi Anggraini', invoice: 'INV-2026-07-003', method: 'Tunai Kasir', amount: 500000, time: '30 Jul, 16:15', admin: 'Kasir Utama', status: 'confirmed' },
  ]

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-zinc-900">Admin Payment Dashboard</h1>
          <p className="text-xs text-zinc-500 font-medium">Ringkasan Sistem Pembayaran & Kelola Kasir BSEC</p>
        </div>
      </div>

      {/* Warning Notice for Pending Payments */}
      {stats.pendingPaymentsCount > 0 && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-amber-900">
            <AlertTriangle size={24} className="text-amber-600 shrink-0" />
            <div>
              <strong className="text-sm block">
                {stats.pendingPaymentsCount} Pembayaran Menunggu Verifikasi Admin
              </strong>
              <p className="text-xs text-amber-800 mt-0.5">
                Terdapat pembayaran baru dari siswa yang memerlukan konfirmasi Anda agar masuk ke laporan pendapatan resmi.
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-sm transition-all whitespace-nowrap">
            Verifikasi Sekarang
          </button>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Siswa Aktif</span>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <Users size={20} />
            </div>
          </div>
          <span className="text-2xl font-black text-zinc-900">{stats.totalStudents}</span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Tagihan Menunggu</span>
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
              <Clock size={20} />
            </div>
          </div>
          <span className="text-2xl font-black text-zinc-900">{stats.unpaidInvoices}</span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Revenue Hari Ini</span>
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <Wallet size={20} />
            </div>
          </div>
          <span className="text-xl font-black text-zinc-900">
            Rp {stats.todayRevenue.toLocaleString('id-ID')}
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Revenue Bulan Ini</span>
            <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-xl">
              <TrendingUp size={20} />
            </div>
          </div>
          <span className="text-xl font-black text-zinc-900">
            Rp {stats.monthRevenue.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      {/* Main Grid: Transactions & Quick Entry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table Column (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
            <h3 className="font-bold text-sm text-zinc-900">Transaksi Pembayaran Terbaru</h3>
            <button className="text-xs font-bold text-blue-700 hover:underline">Lihat Semua Data</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase font-semibold">
                <tr>
                  <th className="px-5 py-3">Siswa</th>
                  <th className="px-5 py-3">Metode</th>
                  <th className="px-5 py-3">Nominal</th>
                  <th className="px-5 py-3">Waktu</th>
                  <th className="px-5 py-3">Admin Kasir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-medium text-zinc-700">
                {recentPayments.map((p, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-bold text-zinc-900">{p.student}</div>
                      <div className="text-[10px] text-zinc-400 font-mono">#{p.invoice}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="px-2 py-1 rounded bg-sky-50 text-sky-700 text-[11px] font-semibold">
                        {p.method}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-bold text-emerald-700">
                      Rp {p.amount.toLocaleString('id-ID')}
                    </td>
                    <td className="px-5 py-3.5 text-zinc-400">{p.time}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 text-[11px]">
                        {p.admin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Column (1 col) */}
        <div className="space-y-6">
          {/* Quick Cashier Action */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 text-white shadow-md">
            <h3 className="font-bold text-base mb-2">Pencatatan Tunai Kasir</h3>
            <p className="text-xs text-blue-100 leading-relaxed mb-6">
              Catatkan pembayaran langsung bagi orang tua/siswa yang membayar di kantor bimbel.
            </p>

            <button className="w-full py-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
              <PlusCircle size={16} />
              <span>Input Pembayaran Baru</span>
            </button>
          </div>

          {/* Report Links */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <h4 className="font-bold text-xs uppercase text-zinc-500 tracking-wider mb-3">Laporan & Audit</h4>
            <div className="space-y-2">
              <button className="w-full p-3 bg-zinc-50 hover:bg-zinc-100 rounded-xl text-left text-xs font-semibold text-zinc-700 flex items-center justify-between transition-colors">
                <span className="flex items-center gap-2">
                  <Printer size={16} className="text-zinc-500" />
                  <span>Cetak Laporan Harian</span>
                </span>
              </button>

              <button className="w-full p-3 bg-zinc-50 hover:bg-zinc-100 rounded-xl text-left text-xs font-semibold text-zinc-700 flex items-center justify-between transition-colors">
                <span className="flex items-center gap-2">
                  <FileText size={16} className="text-zinc-500" />
                  <span>Export Rekap Keuangan PDF</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
