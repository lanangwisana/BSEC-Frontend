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
} from 'lucide-react';
import { useCmsData } from './hooks/useCmsData';
import { CmsTab, DevicePreviewMode } from './types';

export default function CmsLandingPage() {
  const {
    activeTab,
    setActiveTab,
    deviceMode,
    setDeviceMode,
    searchQuery,
    setSearchQuery,
    selectedBranch,
    setSelectedBranch,
    heroForm,
    handleHeroChange,
    testimonials,
    toggleTestimonial,
  } = useCmsData();

  const tabs: CmsTab[] = [
    'Hero Banner',
    'Programs',
    'Testimonials',
    'Articles',
    'FAQ',
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
                Manage branding, hero sections, and social proof for the 2026 academic enrollment site.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <RotateCcw className="w-4 h-4 text-gray-500" />
                <span>Discard Draft</span>
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md shadow-blue-600/20">
                <Send className="w-4 h-4" />
                <span>Publish Changes</span>
              </button>
            </div>
          </div>

          {/* CMS Tabs Bar */}
          <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-xs flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
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
              {/* Form Section Header */}
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

              {/* Input: Main Headline */}
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

              {/* Input: Sub-headline Description */}
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

              {/* Inputs: CTA Label & CTA Redirect URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    CTA Label
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
                    CTA Redirect URL
                  </label>
                  <input
                    type="text"
                    value={heroForm.ctaRedirectUrl}
                    onChange={(e) => handleHeroChange('ctaRedirectUrl', e.target.value)}
                    className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-xs font-medium text-gray-700 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Asset Upload Box */}
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Section Media (Image/Video)
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                    <FileUp className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-gray-800">
                    {heroForm.assetFileName}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5 mb-4">
                    {heroForm.assetHint}
                  </p>
                  <button className="bg-[#1e293b] hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs">
                    Replace Asset
                  </button>
                </div>
              </div>
            </div>

            {/* Right Live Preview (~5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-gray-100/80 rounded-2xl p-5 border border-gray-200/60 shadow-xs flex-1 flex flex-col justify-between">
                <div>
                  {/* Card Header & Device Switcher */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-gray-700 tracking-tight">
                      Real-Time Preview
                    </h3>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl shadow-2xs border border-gray-200/50">
                      <button
                        onClick={() => setDeviceMode('desktop')}
                        className={`p-1.5 rounded-lg transition-colors ${
                          deviceMode === 'desktop' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('tablet')}
                        className={`p-1.5 rounded-lg transition-colors ${
                          deviceMode === 'tablet' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Tablet className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('mobile')}
                        className={`p-1.5 rounded-lg transition-colors ${
                          deviceMode === 'mobile' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Mockup Frame Canvas */}
                  <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-blue-800/40 min-h-[260px] flex flex-col justify-between relative overflow-hidden my-4">
                    {/* Background Accent Graphics */}
                    <div className="absolute right-0 top-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      <span className="w-8 h-1 bg-amber-400 rounded-full block mb-3" />
                      <h4 className="text-lg font-bold leading-tight mb-2 tracking-tight">
                        {heroForm.headline}
                      </h4>
                      <p className="text-xs text-blue-100/80 font-medium leading-relaxed max-w-xs">
                        {heroForm.subHeadline}
                      </p>
                    </div>

                    <div className="pt-4">
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

          {/* Bottom Table Card: Active Landing Page Testimonials Roster */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                Active Landing Page Testimonials Roster
              </h2>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add New Testimonial</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-4 w-12">Order</th>
                    <th className="py-3 px-4">Student Info</th>
                    <th className="py-3 px-4">Target PTN Passed</th>
                    <th className="py-3 px-4">Content Snippet</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {testimonials.map((t) => (
                    <tr key={t.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-3.5 px-4 text-xs font-bold text-gray-500">
                        {t.order}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {t.avatarInitials}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 leading-snug">
                              {t.studentName}
                            </p>
                            <p className="text-[10px] text-gray-400 font-medium">
                              {t.studentClass}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase">
                          {t.targetPtnPassed}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs font-medium text-gray-600 max-w-xs truncate">
                        {t.contentSnippet}
                      </td>

                      <td className="py-3.5 px-4">
                        <input
                          type="checkbox"
                          checked={t.isActive}
                          onChange={() => toggleTestimonial(t.id)}
                          className="w-4 h-4 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
