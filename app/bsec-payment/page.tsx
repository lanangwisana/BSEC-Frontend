'use client'

import React from 'react'
import Link from 'next/link'
import { Search, UserPlus, UserCheck, ShieldCheck, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react'

export default function PaymentPortalHome() {
  const features = [
    {
      title: 'Cek Status Pembayaran',
      desc: 'Periksa status tagihan bulanan atau konfirmasi pembayaran Anda dengan No. Invoice atau ID Siswa.',
      href: '/bsec-payment/check-status',
      icon: Search,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      btnText: 'Cek Tagihan',
    },
    {
      title: 'Pendaftaran Siswa Baru',
      desc: 'Formulir online pendaftaran bimbingan belajar BSEC untuk jenjang SD, SMP, SMA, dan Persiapan SNBT.',
      href: '/bsec-payment/register',
      icon: UserPlus,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      btnText: 'Form Pendaftaran',
    },
    {
      title: 'Dashboard Siswa & Orang Tua',
      desc: 'Akses invoice tagihan, upload bukti transfer pembayaran, dan pantau riwayat pembayaran bulanan.',
      href: '/bsec-payment/student-dashboard',
      icon: UserCheck,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      btnText: 'Masuk Dashboard Siswa',
    },
    {
      title: 'Admin Payment Portal',
      desc: 'Kelola data siswa, verifikasi bukti pembayaran, pencatatan transaksi kasir, dan laporan pendapatan.',
      href: '/bsec-payment/admin-dashboard',
      icon: ShieldCheck,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      btnText: 'Kelola Admin Portal',
    },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold mb-6">
            <CreditCard size={14} className="text-yellow-400" />
            <span>Sistem Pembayaran Terpadu BSEC</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Portal Layanan & Pembayaran BSEC
          </h1>
          <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Selamat datang di Portal Layanan & Pembayaran Brown Smart Education Center. Dapatkan kemudahan pendaftaran online, verifikasi tagihan, dan manajemen pembayaran les secara cepat & transparan.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/bsec-payment/check-status"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold text-sm rounded-xl shadow-lg transition-all active:scale-95"
            >
              <Search size={18} />
              <span>Cek Tagihan Sekarang</span>
            </Link>
            <Link
              href="/bsec-payment/register"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all"
            >
              <UserPlus size={18} />
              <span>Daftar Siswa Baru</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Modul & Layanan Utama</h2>
        <p className="text-zinc-500 text-sm mb-8">Pilih modul di bawah ini sesuai kebutuhan akses Anda.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${feat.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{feat.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{feat.desc}</p>
                </div>

                <Link
                  href={feat.href}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs rounded-xl transition-all"
                >
                  <span>{feat.btnText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Verifikasi Cepat</h4>
            <p className="text-xs text-zinc-500 mt-1">Konfirmasi bukti pembayaran otomatis terhubung dengan admin.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <CreditCard size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Berbagai Metode Transfer</h4>
            <p className="text-xs text-zinc-500 mt-1">Mendukung transfer BCA, Mandiri, BRI, BNI & E-Wallet.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Transparan & Aman</h4>
            <p className="text-xs text-zinc-500 mt-1">Sistem pencatatan terpusat untuk orang tua dan pihak bimbel.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
