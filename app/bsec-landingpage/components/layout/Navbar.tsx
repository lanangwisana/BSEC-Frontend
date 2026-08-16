'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { navItems } from '@/app/bsec-landingpage/lib/constants'
import { NavItem } from '@/app/bsec-landingpage/types'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home') // Default

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface-container-lowest/90 backdrop-blur-md shadow-sm h-16' : 'bg-surface-container-lowest shadow-sm h-20'
      }`}
    >
      <div className="flex justify-between items-center h-full px-6 md:px-[64px] max-w-[1280px] mx-auto">
        <Link href="/bsec-landingpage" className="text-headline-md font-headline-md font-bold text-primary">
          BSEC
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/bsec-landingpage"
            onClick={() => setActiveItem('Home')}
            className={`font-label-md text-sm transition-colors ${activeItem === 'Home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}
          >
            Home
          </Link>
          {navItems.map((item: NavItem) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`font-label-md text-sm transition-colors ${activeItem === item.label ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
          <Link href="#daftar" className="bg-[#1D4ED8] text-white px-6 py-2.5 rounded-lg font-label-md text-sm shadow-md shadow-[#1D4ED8]/30 hover:brightness-110 active:scale-95 transition-all duration-150 font-semibold">
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface hover:text-primary"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-lowest shadow-lg py-4 px-6 animate-fade-in border-t border-outline-variant/30">
          <Link
            href="/bsec-landingpage"
            onClick={() => { setActiveItem('Home'); setIsOpen(false); }}
            className={`block py-3 font-label-md text-sm transition-colors border-b border-outline-variant/30 ${activeItem === 'Home' ? 'text-primary font-bold' : 'text-secondary'}`}
          >
            Home
          </Link>
          {navItems.map((item: NavItem) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => { setActiveItem(item.label); setIsOpen(false); }}
              className={`block py-3 font-label-md text-sm transition-colors border-b border-outline-variant/30 ${activeItem === item.label ? 'text-primary font-bold' : 'text-secondary'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <Link href="#daftar" onClick={() => setIsOpen(false)} className="block text-center bg-primary text-white px-6 py-3 rounded-lg font-label-md text-sm hover:brightness-110 active:scale-95 transition-all duration-150 shadow-sm font-semibold">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
