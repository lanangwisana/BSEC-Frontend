import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-surface-container-highest w-full py-16 border-t border-outline-variant mt-20" id="kontak">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-[64px] max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-primary mb-4">BSEC</div>
          <p className="text-on-surface-variant font-body-md text-base leading-relaxed">Menciptakan generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui sistem pendidikan modern.</p>
        </div>
        <div>
          <h4 className="font-headline-md text-xl font-bold text-primary mb-4">Program</h4>
          <ul className="space-y-3">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">Program SD</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">Program SMP</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">Program SMA</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">UTBK Khusus</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-xl font-bold text-primary mb-4">Perusahaan</h4>
          <ul className="space-y-3">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#tentang">Tentang Kami</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">Karir</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#">Kebijakan Privasi</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm" href="#kontak">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-xl font-bold text-primary mb-4">Hubungi Kami</h4>
          <p className="text-on-surface-variant font-body-md text-base mb-4 leading-relaxed">Jl. Pendidikan Modern No. 42, Jakarta Selatan</p>
          <div className="flex gap-4">
            <a className="text-primary hover:scale-110 transition-transform bg-primary/10 p-2 rounded-full flex items-center justify-center" href="#"><span className="material-symbols-outlined text-[20px]">public</span></a>
            <a className="text-primary hover:scale-110 transition-transform bg-primary/10 p-2 rounded-full flex items-center justify-center" href="#"><span className="material-symbols-outlined text-[20px]">mail</span></a>
            <a className="text-primary hover:scale-110 transition-transform bg-primary/10 p-2 rounded-full flex items-center justify-center" href="#"><span className="material-symbols-outlined text-[20px]">call</span></a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[64px] mt-16 pt-6 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant font-label-md text-sm">© {new Date().getFullYear()} Brown Smart Education Center. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
