import React from 'react'

interface PaymentStatusBadgeProps {
  status: 'paid' | 'pending' | 'unpaid' | 'confirmed' | string
}

export const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({ status }) => {
  const normalized = status.toLowerCase()

  if (normalized === 'paid' || normalized === 'lunas' || normalized === 'confirmed' || normalized === 'dikonfirmasi') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        Lunas / Dikonfirmasi
      </span>
    )
  }

  if (normalized === 'pending' || normalized === 'menunggu') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        Menunggu Verifikasi
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
      Belum Dibayar
    </span>
  )
}
