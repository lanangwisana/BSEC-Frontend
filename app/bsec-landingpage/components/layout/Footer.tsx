import React from 'react'
import Link from 'next/link'
import { FooterCmsContent } from '@/app/bsec-admin-panel/cms/types'

interface FooterProps {
  data?: FooterCmsContent
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const aboutText = data?.aboutText || 'Menciptakan generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui sistem pendidikan modern.'
  const address = data?.companyAddress || 'Jl. Pendidikan Modern No. 42, Jakarta Selatan'
  const phone = data?.companyPhone || '(021) 1234-5678'
  const email = data?.companyEmail || 'info@bsec.com'

  return (
    <footer className="bg-white w-full py-16 border-t border-gray-200 mt-20" id="kontak">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black text-[#1D4ED8] tracking-tight mb-4 flex items-center gap-2">
            <span className="bg-[#1D4ED8] text-white px-2 py-0.5 rounded-lg text-lg">B</span>SEC
          </div>
          <p className="text-gray-500 text-xs leading-relaxed font-medium">{aboutText}</p>
        </div>
        <div>
          <h4 className="font-extrabold text-sm text-[#1E293B] uppercase tracking-wider mb-4">Program</h4>
          <ul className="space-y-2.5">
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#programs">Program SD</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#programs">Program SMP</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#programs">Program SMA</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#programs">Intensif UTBK/SNBT</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-sm text-[#1E293B] uppercase tracking-wider mb-4">Perusahaan</h4>
          <ul className="space-y-2.5">
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#tentang">Tentang Kami</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#keunggulan">Keunggulan</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#testimonials">Testimoni</Link></li>
            <li><Link className="text-xs font-semibold text-gray-500 hover:text-[#1D4ED8] transition-colors" href="#kontak">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-sm text-[#1E293B] uppercase tracking-wider mb-4">Hubungi Kami</h4>
          <p className="text-xs text-gray-500 mb-2 leading-relaxed font-medium">{address}</p>
          <p className="text-xs text-gray-500 mb-1 font-medium">Telp: {phone}</p>
          <p className="text-xs text-gray-500 mb-4 font-medium">Email: {email}</p>
          <div className="flex gap-3">
            <a className="text-[#1D4ED8] hover:scale-110 transition-transform bg-[#EFF6FF] p-2 rounded-xl flex items-center justify-center" href="#">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a className="text-[#1D4ED8] hover:scale-110 transition-transform bg-[#EFF6FF] p-2 rounded-xl flex items-center justify-center" href={`mailto:${email}`}>
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <a className="text-[#1D4ED8] hover:scale-110 transition-transform bg-[#EFF6FF] p-2 rounded-xl flex items-center justify-center" href={`tel:${phone}`}>
              <span className="material-symbols-outlined text-[18px]">call</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-gray-400 gap-2">
        <p>© {new Date().getFullYear()} Brown Smart Education Center. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-[#1D4ED8] transition-colors">PRIVACY POLICY</Link>
          <Link href="#" className="hover:text-[#1D4ED8] transition-colors">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
