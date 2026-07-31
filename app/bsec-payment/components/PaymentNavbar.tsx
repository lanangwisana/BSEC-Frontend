'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CreditCard, Search, UserPlus, UserCheck, ShieldCheck, Menu, X } from 'lucide-react'

export const PaymentNavbar = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Portal Utama', href: '/bsec-payment', icon: CreditCard },
    { name: 'Cek Status Pembayaran', href: '/bsec-payment/check-status', icon: Search },
    { name: 'Daftar Siswa Baru', href: '/bsec-payment/register', icon: UserPlus },
    { name: 'Dashboard Siswa', href: '/bsec-payment/student-dashboard', icon: UserCheck },
    { name: 'Admin Portal', href: '/bsec-payment/admin-dashboard', icon: ShieldCheck },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/bsec-payment" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-black text-xl flex items-center justify-center shadow-md">
              B
            </div>
            <div>
              <span className="font-bold text-lg text-zinc-900 tracking-tight block leading-none">BSEC Payment</span>
              <span className="text-xs text-zinc-500 font-medium">Sistem Pembayaran Les Online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
