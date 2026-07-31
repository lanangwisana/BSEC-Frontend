import React from 'react'
import { PaymentStatusBadge } from './PaymentStatusBadge'
import { Calendar, Receipt, CreditCard } from 'lucide-react'

interface InvoiceCardProps {
  invoiceNumber: string
  studentName: string
  program: string
  month: string
  year: number
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'unpaid'
  onPayClick?: () => void
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  invoiceNumber,
  studentName,
  program,
  month,
  year,
  amount,
  dueDate,
  status,
  onPayClick,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-1">
            <Receipt size={14} className="text-blue-600" />
            <span>#{invoiceNumber}</span>
          </div>
          <h4 className="text-lg font-bold text-zinc-900">{studentName}</h4>
          <p className="text-xs text-zinc-500 font-medium">{program}</p>
        </div>
        <PaymentStatusBadge status={status} />
      </div>

      <div className="py-4 grid grid-cols-2 gap-4">
        <div>
          <span className="text-xs text-zinc-400 block font-medium">Periode Tagihan</span>
          <span className="text-sm font-semibold text-zinc-800">{month} {year}</span>
        </div>
        <div>
          <span className="text-xs text-zinc-400 block font-medium">Jatuh Tempo</span>
          <div className="flex items-center gap-1 text-sm font-semibold text-zinc-800">
            <Calendar size={14} className="text-zinc-500" />
            <span>{dueDate}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-zinc-400 block font-medium">Total Tagihan</span>
          <span className="text-xl font-black text-blue-700">
            Rp {amount.toLocaleString('id-ID')}
          </span>
        </div>

        {status !== 'paid' && onPayClick && (
          <button
            onClick={onPayClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95"
          >
            <CreditCard size={14} />
            <span>Bayar Sekarang</span>
          </button>
        )}
      </div>
    </div>
  )
}
