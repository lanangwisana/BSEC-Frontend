import type { Metadata } from 'next'
import { PaymentNavbar } from './components/PaymentNavbar'

export const metadata: Metadata = {
  title: 'BSEC Payment - Sistem Pembayaran Les Online',
  description: 'Portal pembayaran resmi BSEC (Brown Smart Education Center) untuk tagihan les SD, SMP, SMA, dan SNBT.',
}

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 flex flex-col">
      <PaymentNavbar />
      <div className="flex-1">
        {children}
      </div>
      <footer className="bg-white border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 font-medium">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} BSEC - Brown Smart Education Center. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
