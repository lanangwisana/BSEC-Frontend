'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Monitor,
  Smartphone,
  Tablet,
  FileUp,
  Plus,
  Edit2,
  Send,
  RotateCcw,
  CheckCircle2,
  Globe,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useCmsData } from './hooks/useCmsData';
import { CmsTab } from './types';

export default function CmsLandingPage() {
  const {
    activeTab,
    setActiveTab,
    deviceMode,
    setDeviceMode,
    searchQuery,
    setSearchQuery,
    heroForm,
    handleHeroChange,
    programs,
    toggleProgram,
    testimonials,
    toggleTestimonial,
    aboutForm,
    handleAboutChange,
    advantages,
    footerForm,
    handleFooterChange,
    handlePublishChanges,
    isPublishing,
    publishStatus,
  } = useCmsData();

  const tabs: CmsTab[] = [
    'Hero Banner',
    'Programs',
    'Testimonials',
    'About & Advantages',
    'Footer & Contact',
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search CMS sections or settings..."
          userTitle="Dian Sastrowardoyo"
          userRole="Chief Academic Officer"
          selectedBranch="Jakarta Selatan Branch"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title & Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Landing Page CMS Manager
                </h1>
                <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PUBLIC SITE: ONLINE
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Manage branding, hero sections, learning programs, and social proof for BSEC.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {publishStatus && (
                <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl flex items-center gap-1.5 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{publishStatus}</span>
                </div>
              )}

              <button
                onClick={handlePublishChanges}
                disabled={isPublishing}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isPublishing ? 'Publishing...' : 'Publish Changes'}</span>
              </button>
            </div>
          </div>

          {/* CMS Tabs Bar */}
          <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-xs flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#1e293b] text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Middle Main Content (2 Columns: Editor & Live Preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Form Editor (~7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-5">
              
              {/* TAB 1: HERO BANNER */}
              {activeTab === 'Hero Banner' && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Hero Section Content
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-400 font-semibold">
                        Visible on site
                      </span>
                      <input
                        type="checkbox"
                        checked={heroForm.isVisible}
                        onChange={(e) => handleHeroChange('isVisible', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Tagline Badge
                    </label>
                    <input
                      type="text"
                      value={heroForm.taglineBadge}
                      onChange={(e) => handleHeroChange('taglineBadge', e.target.value)}
                      className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Main Headline
                    </label>
                    <input
                      type="text"
                      value={heroForm.headline}
                      onChange={(e) => handleHeroChange('headline', e.target.value)}
                      className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Sub-headline Description
                    </label>
                    <textarea
                      rows={3}
                      value={heroForm.subHeadline}
                      onChange={(e) => handleHeroChange('subHeadline', e.target.value)}
                      className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Primary CTA Label
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaLabel}
                        onChange={(e) => handleHeroChange('ctaLabel', e.target.value)}
                        className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Primary CTA Redirect URL
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaRedirectUrl}
                        onChange={(e) => handleHeroChange('ctaRedirectUrl', e.target.value)}
                        className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Secondary CTA Label
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaSecondaryLabel}
                        onChange={(e) => handleHeroChange('ctaSecondaryLabel', e.target.value)}
                        className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Secondary CTA URL
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaSecondaryUrl}
                        onChange={(e) => handleHeroChange('ctaSecondaryUrl', e.target.value)}
                        className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* TAB 2: PROGRAMS */}
              {activeTab === 'Programs' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Learning Programs Manager
                    </h2>
                    <span className="text-xs text-gray-400 font-medium">
                      {programs.length} Active Programs
                    </span>
                  </div>

                  <div className="space-y-3">
                    {programs.map((p) => (
                      <div key={p.id} className="p-4 bg-gray-50/80 rounded-xl border border-gray-200/80 flex items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-900">{p.title}</span>
                            <span className="uppercase text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                              {p.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-1">{p.description}</p>
                          <span className="text-xs font-bold text-blue-600 mt-1 block">{p.priceFormatted}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={p.isActive}
                              onChange={() => toggleProgram(p.id)}
                              className="w-4 h-4 text-blue-600 rounded border-gray-300"
                            />
                            <span>Active</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTIMONIALS */}
              {activeTab === 'Testimonials' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Active Testimonial Roster
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-4 bg-gray-50/80 rounded-xl border border-gray-200/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {t.avatarInitials}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-900">{t.studentName}</span>
                            <span className="ml-2 text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                              {t.targetPtnPassed}
                            </span>
                            <p className="text-[11px] text-gray-500 italic mt-0.5">{t.contentSnippet}</p>
                          </div>
                        </div>

                        <input
                          type="checkbox"
                          checked={t.isActive}
                          onChange={() => toggleTestimonial(t.id)}
                          className="w-4 h-4 text-blue-600 rounded border-gray-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: ABOUT & ADVANTAGES */}
              {activeTab === 'About & Advantages' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      About Us & Vision Mission Content
                    </h2>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={aboutForm.subtitle}
                      onChange={(e) => handleAboutChange('subtitle', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Paragraph 1 Description
                    </label>
                    <textarea
                      rows={2}
                      value={aboutForm.descriptionParagraph1}
                      onChange={(e) => handleAboutChange('descriptionParagraph1', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Vision Statement
                    </label>
                    <input
                      type="text"
                      value={aboutForm.visionText}
                      onChange={(e) => handleAboutChange('visionText', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>
                </div>
              )}

              {/* TAB 5: FOOTER & CONTACT */}
              {activeTab === 'Footer & Contact' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Footer Branding & Contact Settings
                    </h2>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      About Text (Footer)
                    </label>
                    <textarea
                      rows={2}
                      value={footerForm.aboutText}
                      onChange={(e) => handleFooterChange('aboutText', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Company Phone
                      </label>
                      <input
                        type="text"
                        value={footerForm.companyPhone}
                        onChange={(e) => handleFooterChange('companyPhone', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Company Email
                      </label>
                      <input
                        type="text"
                        value={footerForm.companyEmail}
                        onChange={(e) => handleFooterChange('companyEmail', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Live Preview (~5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-gray-100/80 rounded-2xl p-5 border border-gray-200/60 shadow-xs flex-1 flex flex-col justify-between">
                <div>
                  {/* Card Header & Device Switcher */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-gray-700 tracking-tight">
                      Real-Time Live Preview
                    </h3>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl shadow-2xs border border-gray-200/50">
                      <button
                        onClick={() => setDeviceMode('desktop')}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          deviceMode === 'desktop' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('tablet')}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          deviceMode === 'tablet' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Tablet className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('mobile')}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          deviceMode === 'mobile' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Mockup Frame Canvas */}
                  <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-blue-800/40 min-h-[260px] flex flex-col justify-between relative overflow-hidden my-4">
                    <div className="absolute right-0 top-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      <span className="px-2.5 py-1 bg-yellow-400/20 text-yellow-300 text-[10px] font-bold rounded-full inline-block mb-3">
                        {heroForm.taglineBadge}
                      </span>
                      <h4 className="text-lg font-bold leading-tight mb-2 tracking-tight">
                        {heroForm.headline}
                      </h4>
                      <p className="text-xs text-blue-100/80 font-medium leading-relaxed max-w-xs">
                        {heroForm.subHeadline}
                      </p>
                    </div>

                    <div className="pt-4 flex gap-2">
                      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
                        <span>{heroForm.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Syncing Bar */}
                <div className="bg-[#1e2538] text-white p-3 rounded-xl flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide">
                  <Globe className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                  <span>Live changes syncing enabled</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
