import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Globe,
  Star,
  Check,
  Building2,
  Phone,
  Mail,
  MapPin,
  Send,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
} from 'lucide-react';
import {
  CmsTab,
  DevicePreviewMode,
  HeroSectionContent,
  AboutCmsContent,
  AdvantageCmsItem,
  ProgramCategory,
  ProgramCmsItem,
  TestimonialRosterItem,
  LeadCaptureCmsContent,
  FooterCmsContent,
} from '../types';

interface LivePreviewPanelProps {
  activeTab: CmsTab;
  deviceMode: DevicePreviewMode;
  setDeviceMode: (mode: DevicePreviewMode) => void;
  heroForm: HeroSectionContent;
  aboutForm: AboutCmsContent;
  advantagesTitle?: string;
  advantagesSubtitle?: string;
  advantages?: AdvantageCmsItem[];
  programsTitle?: string;
  programsSubtitle?: string;
  programCategories?: ProgramCategory[];
  programs?: ProgramCmsItem[];
  testimonialsTitle?: string;
  testimonials?: TestimonialRosterItem[];
  leadCaptureForm?: LeadCaptureCmsContent;
  footerForm?: FooterCmsContent;
}

export const LivePreviewPanel: React.FC<LivePreviewPanelProps> = ({
  activeTab,
  deviceMode,
  setDeviceMode,
  heroForm,
  aboutForm,
  advantagesTitle = 'Keunggulan Utama BSEC',
  advantagesSubtitle = 'Mengapa Ribuan Siswa Memilih Kami',
  advantages = [],
  programsTitle = 'Program Bimbingan Belajar Unggulan',
  programsSubtitle = 'Pilihan Program Sesuai Jenjang & Target Impian Anda',
  programCategories = [],
  programs = [],
  testimonialsTitle = 'Kisah Sukses Siswa & Orang Tua',
  testimonials = [],
  leadCaptureForm = {
    title: 'Mulai Konsultasi & Coba Kelas Gratis',
    subtitle: 'Tinggalkan kontak Anda untuk mendapatkan informasi lengkap program bimbingan BSEC.',
    checklistItems: [
      'Gratis Sesi Diagnostik Kemampuan Akademik',
      'Konsultasi Pilihan Jurusan & PTN Impian',
      'Akses Modul Tryout SNBT Berbasis IRT Engine',
    ],
  },
  footerForm = {
    aboutText: 'BSEC adalah pusat bimbingan belajar terpercaya yang berfokus pada pengembangan potensi akademik dan pembentukan karakter juara siswa.',
    companyAddress: 'Jl. Pendidikan No. 88, Jakarta Selatan',
    companyPhone: '+62 812-3456-7890',
    companyEmail: 'info@bsec.sch.id',
    socialLinks: { instagram: '@bsec.official', facebook: 'BSEC Official' },
  },
}) => {
  const [activePreviewCategory, setActivePreviewCategory] = useState<string>(
    programCategories[0]?.id || 'sd'
  );

  // Filter programs based on selected category in preview
  const activeCategoryPrograms = programs.filter(
    (p) => p.categoryId === activePreviewCategory && p.isActive
  );

  return (
    <div className="lg:col-span-5 flex flex-col">
      <div className="bg-gray-100/80 rounded-2xl p-4 border border-gray-200/60 shadow-xs flex-1 flex flex-col justify-between">
        <div>
          {/* Header Controls */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xs font-bold text-gray-700 tracking-tight">
                Live Preview: <span className="text-[#1D4ED8]">{activeTab}</span>
              </h3>
            </div>
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl shadow-2xs border border-gray-200/50">
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-blue-50 text-[#1D4ED8]' : 'text-gray-400'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('tablet')}
                title="Tablet View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'tablet' ? 'bg-blue-50 text-[#1D4ED8]' : 'text-gray-400'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                title="Mobile View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-blue-50 text-[#1D4ED8]' : 'text-gray-400'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dynamic Section Preview Canvas Container */}
          <div className="bg-slate-900/5 p-3 rounded-2xl border border-gray-200/60 overflow-hidden my-2 flex items-center justify-center min-h-[500px]">
            {/* Device Container Frame */}
            <div
              className={`bg-white shadow-xl overflow-hidden transition-all duration-300 ${
                deviceMode === 'mobile'
                  ? 'max-w-[300px] w-full rounded-[2rem] border-[6px] border-slate-800 shadow-2xl text-xs'
                  : deviceMode === 'tablet'
                  ? 'max-w-[420px] w-full rounded-2xl border-4 border-slate-700 shadow-xl text-xs'
                  : 'w-full rounded-xl border border-gray-200 shadow-md text-xs'
              }`}
            >
              {/* TOP DEVICE FRAME BAR */}
              {deviceMode === 'desktop' && (
                <div className="bg-gray-100 px-3 py-2 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="bg-white px-3 py-0.5 rounded-md text-[10px] text-gray-400 font-mono border border-gray-200 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-gray-400" />
                    <span>https://bsec.sch.id</span>
                  </div>
                  <div className="text-[10px] font-bold text-gray-400">Desktop 1280px</div>
                </div>
              )}

              {deviceMode === 'tablet' && (
                <div className="bg-slate-700 py-1.5 flex justify-center items-center">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                </div>
              )}

              {deviceMode === 'mobile' && (
                <div className="bg-slate-800 py-2 flex justify-center items-center relative">
                  <div className="w-16 h-3 bg-slate-900 rounded-full flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                  </div>
                </div>
              )}

              {/* SECTION CONTENT PREVIEWS */}
              {/* TAB 1: HERO BANNER PREVIEW */}
              {activeTab === 'Hero Banner' && (
                <div className={`relative bg-white overflow-hidden ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4ED8]/5 -skew-x-12 transform translate-x-1/4 -z-10" />

                  {/* Top Badge */}
                  <div className={`inline-flex items-center gap-1.5 bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#1D4ED8]/10 mb-3 ${deviceMode === 'mobile' ? 'mx-auto flex justify-center' : ''}`}>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                      {heroForm.taglineBadge || 'Bimbel No. 1 di Indonesia'}
                    </span>
                  </div>

                  {/* Hero Grid: Desktop = 2 Cols Side-by-Side; Tablet & Mobile = 1 Col Stacked */}
                  <div className={`grid items-center gap-4 ${deviceMode === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    <div className={`space-y-2.5 ${deviceMode === 'mobile' ? 'text-center' : 'text-left'}`}>
                      <h1 className={`font-extrabold text-[#1E293B] leading-tight whitespace-pre-line tracking-tight ${
                        deviceMode === 'desktop'
                          ? 'text-lg lg:text-xl'
                          : deviceMode === 'tablet'
                          ? 'text-base'
                          : 'text-sm'
                      }`}>
                        {heroForm.headline || 'Learn, Grow and Achieve.\nWith Brown Smart Education Center (BSEC).'}
                      </h1>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-relaxed">
                        {heroForm.subHeadline || 'Kami percaya setiap anak punya potensi. BSEC Hadir untuk Mengembangkannya.'}
                      </p>
                      <div className={`flex flex-wrap gap-2 pt-1 ${deviceMode === 'mobile' ? 'justify-center' : 'justify-start'}`}>
                        <span className="bg-[#1D4ED8] text-white px-3.5 py-2 rounded-xl font-bold text-[10px] shadow-sm cursor-default">
                          {heroForm.ctaLabel || 'Daftar Kelas Trial'}
                        </span>
                        <span className="bg-white border border-gray-200 text-[#1E293B] px-3 py-2 rounded-xl font-bold text-[10px] flex items-center gap-1">
                          {heroForm.ctaSecondaryLabel || 'Tanya via WhatsApp'}
                        </span>
                      </div>
                    </div>

                    {/* Hero Portrait & Blob Container */}
                    <div className="relative pt-1">
                      <div className={`hero-blob overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-[#EFF6FF] to-white relative ${
                        deviceMode === 'desktop'
                          ? 'h-[230px]'
                          : deviceMode === 'tablet'
                          ? 'h-[200px]'
                          : 'h-[170px]'
                      }`}>
                        <img
                          src={heroForm.assetMediaUrl || '/images/image 1.png'}
                          alt="Hero Student Portrait"
                          className={`w-full h-full object-cover ${
                            (heroForm.assetMediaPosition || '').startsWith('object-')
                              ? heroForm.assetMediaPosition
                              : ''
                          }`}
                          style={
                            (heroForm.assetMediaPosition || '').includes('%')
                              ? { objectPosition: heroForm.assetMediaPosition }
                              : undefined
                          }
                        />
                      </div>

                      {/* Floating Badge */}
                      <div className={`absolute -bottom-2 bg-white p-2 rounded-xl shadow-xl border border-gray-100 ${
                        deviceMode === 'mobile'
                          ? 'right-1 max-w-[140px]'
                          : 'right-2 max-w-[165px]'
                      }`}>
                        <div className="flex items-center gap-1 mb-0.5">
                          <span className="bg-emerald-100 text-emerald-600 p-0.5 rounded-full">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="text-[9px] font-bold text-[#1E293B]">
                            {heroForm.floatingBadgeText || '15 Th+ Pengalaman'}
                          </span>
                        </div>
                        <p className="text-[8px] text-gray-500 leading-tight">
                          {heroForm.floatingBadgeSubtext || 'Lulusan berprestasi & berpengalaman.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ABOUT PREVIEW */}
              {activeTab === 'About' && (
                <div className={`p-4 bg-white space-y-3 ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-[#1D4ED8] uppercase tracking-wider">
                      Profil & Statistik
                    </span>
                    <h2 className="text-sm font-extrabold text-gray-900">
                      {aboutForm.title || 'Tentang Brown Smart Education Center'}
                    </h2>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {aboutForm.subtitle || 'Lembaga Bimbingan Belajar Terpercaya di Indonesia'}
                    </p>
                  </div>

                  {/* 4 Stat Cards Grid: Desktop = 4 Cols or 2 Cols */}
                  <div className={`grid gap-2 ${deviceMode === 'desktop' ? 'grid-cols-4' : 'grid-cols-2'}`}>
                    <div className="bg-[#1D4ED8] text-white p-2 rounded-xl shadow-xs">
                      <span className="font-extrabold block text-sm leading-none mb-1">
                        {aboutForm.statCard1Number || '10+'}
                      </span>
                      <span className="text-[7px] uppercase tracking-wider font-semibold opacity-90 block">
                        {aboutForm.statCard1Label || 'TAHUN PENGALAMAN'}
                      </span>
                    </div>
                    <div className="bg-[#EFF6FF] text-[#1E293B] p-2 rounded-xl border border-blue-100">
                      <span className="font-extrabold block text-sm leading-none mb-1 text-[#1D4ED8]">
                        {aboutForm.statCard2Number || '500+'}
                      </span>
                      <span className="text-[7px] uppercase tracking-wider font-semibold text-gray-500 block">
                        {aboutForm.statCard2Label || 'SISWA BERPRESTASI'}
                      </span>
                    </div>
                    <div className="bg-[#EFF6FF] text-[#1E293B] p-2 rounded-xl border border-blue-100">
                      <span className="font-extrabold block text-sm leading-none mb-1 text-[#1D4ED8]">
                        {aboutForm.statCard3Number || '95%'}
                      </span>
                      <span className="text-[7px] uppercase tracking-wider font-semibold text-gray-500 block">
                        {aboutForm.statCard3Label || 'KEPUASAN SISWA'}
                      </span>
                    </div>
                    <div className="bg-[#1E293B] text-white p-2 rounded-xl">
                      <span className="font-extrabold block text-sm leading-none mb-1">
                        {aboutForm.statCard4Number || '2014'}
                      </span>
                      <span className="text-[7px] uppercase tracking-wider font-semibold text-gray-300 block">
                        {aboutForm.statCard4Label || 'TAHUN BERDIRI'}
                      </span>
                    </div>
                  </div>

                  {aboutForm.visionText && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-[9px] font-bold text-[#1D4ED8] uppercase block mb-0.5">Visi Utama</span>
                      <p className="text-[10px] text-gray-600 italic leading-relaxed">&quot;{aboutForm.visionText}&quot;</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PROGRAMS PREVIEW */}
              {activeTab === 'Programs' && (
                <div className={`p-4 bg-gray-50/50 space-y-3 ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="text-center space-y-1">
                    <span className="text-[9px] font-bold text-[#1D4ED8] uppercase tracking-wider">
                      Program Belajar
                    </span>
                    <h2 className="text-sm font-extrabold text-[#1E293B]">
                      {programsTitle}
                    </h2>
                    <p className="text-[10px] text-gray-500 max-w-xs mx-auto">
                      {programsSubtitle}
                    </p>
                  </div>

                  {/* Category Pills */}
                  {programCategories.length > 0 && (
                    <div className="flex gap-1.5 overflow-x-auto pb-1 justify-center">
                      {programCategories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActivePreviewCategory(cat.id)}
                          className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all ${
                            activePreviewCategory === cat.id
                              ? 'bg-[#1D4ED8] text-white shadow-xs'
                              : 'bg-white text-gray-600 border border-gray-200'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Program Cards Grid: Desktop = 2 Cols; Tablet/Mobile = 1 Col */}
                  <div className={`grid gap-2.5 pt-1 ${deviceMode === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {activeCategoryPrograms.length > 0 ? (
                      activeCategoryPrograms.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white p-3 rounded-xl border border-gray-200 shadow-2xs space-y-2 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-[9px] font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-md">
                                {item.targetAge || 'SD/SMP/SMA'}
                              </span>
                              <GraduationCap className="w-3.5 h-3.5 text-[#1D4ED8]" />
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 line-clamp-2 mt-1">
                              {item.description}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-black text-[#1D4ED8]">
                              {item.priceFormatted}
                            </span>
                            <span className="bg-[#1D4ED8] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold">
                              Pilih
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-6 text-gray-400 text-[10px]">
                        Tidak ada program aktif pada kategori ini.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: ADVANTAGES PREVIEW */}
              {activeTab === 'Advantages' && (
                <div className={`p-4 bg-white space-y-3 ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-[#1D4ED8] uppercase tracking-wider">
                      Keunggulan BSEC
                    </span>
                    <h2 className="text-sm font-extrabold text-gray-900">
                      {advantagesTitle}
                    </h2>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {advantagesSubtitle}
                    </p>
                  </div>

                  {advantages.length > 0 ? (
                    <div className={`grid gap-2.5 pt-1 ${deviceMode === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {advantages.map((adv) => (
                        <div
                          key={adv.id}
                          className="bg-gray-50/80 p-3 rounded-xl border border-gray-200 flex items-start gap-2.5 shadow-2xs"
                        >
                          <div className="p-1.5 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] shrink-0">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 leading-tight">
                              {adv.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                              {adv.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-400 text-[10px]">
                      Belum ada poin keunggulan ditambahkan.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: LEAD CAPTURE CTA PREVIEW */}
              {activeTab === 'Lead Capture CTA' && (
                <div className={`p-4 bg-gradient-to-br from-[#1D4ED8] to-[#1E293B] text-white space-y-3 ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-blue-200 uppercase tracking-wider">
                      Konsultasi Gratis
                    </span>
                    <h2 className="text-sm font-extrabold text-white">
                      {leadCaptureForm.title || 'Mulai Konsultasi & Coba Kelas Gratis'}
                    </h2>
                    <p className="text-[10px] text-blue-100 opacity-90">
                      {leadCaptureForm.subtitle || 'Dapatkan informasi lengkap bimbingan belajar BSEC.'}
                    </p>
                  </div>

                  {/* Checklist */}
                  {leadCaptureForm.checklistItems && leadCaptureForm.checklistItems.length > 0 && (
                    <div className="space-y-1.5 py-1">
                      {leadCaptureForm.checklistItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[9px]">
                          <span className="bg-emerald-400 text-[#1E293B] p-0.5 rounded-full">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="text-white font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Lead Capture Mock Input Form */}
                  <div className="bg-white text-gray-800 p-3 rounded-xl space-y-2 shadow-lg">
                    <span className="text-[10px] font-bold text-[#1D4ED8] block">
                      Formulir Coba Kelas Trial
                    </span>
                    <div className="space-y-1.5">
                      <div className="bg-gray-100 p-1.5 rounded-lg text-[9px] text-gray-400 font-medium">
                        Nama Lengkap Siswa
                      </div>
                      <div className="bg-gray-100 p-1.5 rounded-lg text-[9px] text-gray-400 font-medium">
                        Nomor WhatsApp (Aktif)
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-[#1D4ED8] text-white py-1.5 rounded-lg text-[9px] font-bold flex items-center justify-center gap-1 shadow-xs"
                    >
                      <Send className="w-3 h-3" />
                      <span>Kirim Sekarang</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 6: FOOTER & CONTACT PREVIEW */}
              {activeTab === 'Footer & Contact' && (
                <div className={`p-4 bg-[#1E293B] text-white space-y-3 ${deviceMode === 'mobile' ? 'p-3' : 'p-5'}`}>
                  <div className="space-y-2 pb-2 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-xs">
                        <Building2 className="w-3 h-3" />
                      </div>
                      <span className="font-bold text-xs tracking-wider">BSEC</span>
                    </div>
                    <p className="text-[9px] text-gray-300 leading-relaxed max-w-xs">
                      {footerForm.aboutText || 'BSEC adalah pusat bimbingan belajar terpercaya.'}
                    </p>
                  </div>

                  <div className="space-y-1 text-[9px] text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[#1D4ED8] shrink-0" />
                      <span>{footerForm.companyAddress || 'Jl. Pendidikan No. 88'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-[#1D4ED8] shrink-0" />
                      <span>{footerForm.companyPhone || '+62 812-3456-7890'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-[#1D4ED8] shrink-0" />
                      <span>{footerForm.companyEmail || 'info@bsec.sch.id'}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-700 flex items-center justify-between text-[8px] text-gray-400">
                    <span>© {new Date().getFullYear()} BSEC. All rights reserved.</span>
                    <span className="text-blue-300 font-semibold">Public Footer Preview</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

