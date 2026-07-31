'use client';

import React, { useState } from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Monitor,
  Smartphone,
  Tablet,
  Plus,
  Trash2,
  Send,
  CheckCircle2,
  Globe,
  ArrowRight,
  X,
  Layers,
  Star,
  Check,
} from 'lucide-react';
import { useCmsData } from './hooks/useCmsData';
import { CmsTab, ProgramCmsItem, TestimonialRosterItem, AdvantageCmsItem } from './types';

const tabs: CmsTab[] = [
  'Hero Banner',
  'Programs',
  'Testimonials',
  'About & Advantages',
  'Lead Capture CTA',
  'Footer & Contact',
];

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
    programCategories,
    addProgramCategory,
    deleteProgramCategory,
    programs,
    addProgramItem,
    deleteProgramItem,
    toggleProgramItem,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    toggleTestimonial,
    aboutForm,
    handleAboutChange,
    advantages,
    addAdvantage,
    deleteAdvantage,
    leadCaptureForm,
    handleLeadCaptureChange,
    footerForm,
    handleFooterChange,
    advantagesTitle,
    setAdvantagesTitle,
    advantagesSubtitle,
    setAdvantagesSubtitle,
    programsTitle,
    setProgramsTitle,
    programsSubtitle,
    setProgramsSubtitle,
    testimonialsTitle,
    setTestimonialsTitle,
    handlePublishChanges,
    isPublishing,
    publishStatus,
  } = useCmsData();

  // Active Category state inside Programs tab
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('sd');

  // Modals visibility states
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddTestimonialModal, setShowAddTestimonialModal] = useState(false);
  const [showAddAdvantageModal, setShowAddAdvantageModal] = useState(false);

  // Form states for Modals
  const [newCategoryName, setNewCategoryName] = useState('');
  const [productForm, setProductForm] = useState({
    title: '',
    description: '',
    priceFormatted: '',
    iconName: 'school',
    targetAge: '',
  });
  const [testimonialForm, setTestimonialForm] = useState({
    studentName: '',
    targetPtnPassed: '',
    contentSnippet: '',
    studentClass: 'Class of 2024',
    avatarInitials: 'BS',
  });
  const [advantageForm, setAdvantageForm] = useState({
    title: '',
    description: '',
    iconName: 'star',
  });

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    addProgramCategory(newCategoryName);
    setNewCategoryName('');
    setShowAddCategoryModal(false);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.title || !productForm.priceFormatted) return;
    addProgramItem({
      categoryId: selectedCategoryId,
      title: productForm.title,
      description: productForm.description,
      priceFormatted: productForm.priceFormatted,
      iconName: productForm.iconName || 'school',
      targetAge: productForm.targetAge || 'SD/SMP/SMA',
      isActive: true,
    });
    setProductForm({ title: '', description: '', priceFormatted: '', iconName: 'school', targetAge: '' });
    setShowAddProductModal(false);
  };

  const handleCreateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.studentName || !testimonialForm.contentSnippet) return;
    addTestimonial({
      studentName: testimonialForm.studentName,
      targetPtnPassed: testimonialForm.targetPtnPassed || 'PTN Target',
      contentSnippet: testimonialForm.contentSnippet,
      studentClass: testimonialForm.studentClass,
      avatarInitials: testimonialForm.studentName.substring(0, 2).toUpperCase(),
      isActive: true,
    });
    setTestimonialForm({ studentName: '', targetPtnPassed: '', contentSnippet: '', studentClass: 'Class of 2024', avatarInitials: 'BS' });
    setShowAddTestimonialModal(false);
  };

  const handleCreateAdvantage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!advantageForm.title || !advantageForm.description) return;
    addAdvantage({
      title: advantageForm.title,
      description: advantageForm.description,
      iconName: advantageForm.iconName || 'star',
    });
    setAdvantageForm({ title: '', description: '', iconName: 'star' });
    setShowAddAdvantageModal(false);
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                  CMS Landing Page Content Manager
                </h1>
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  PUBLIC SITE: ONLINE
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Manage branding, hero floating badges, stat cards, categories, products, and lead capture.
              </p>
            </div>

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
                className="flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] disabled:opacity-50 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md shadow-[#1D4ED8]/20 active:scale-95 cursor-pointer"
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
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Workspace (Editor & Live Preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Form Editor (~7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-5">
              
              {/* TAB 1: HERO BANNER */}
              {activeTab === 'Hero Banner' && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Hero Section Content & Floating Badges
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-400 font-semibold">
                        Visible on site
                      </span>
                      <input
                        type="checkbox"
                        checked={heroForm.isVisible}
                        onChange={(e) => handleHeroChange('isVisible', e.target.checked)}
                        className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Tagline Badge Pill
                    </label>
                    <input
                      type="text"
                      value={heroForm.taglineBadge}
                      onChange={(e) => handleHeroChange('taglineBadge', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Main Headline
                    </label>
                    <textarea
                      rows={2}
                      value={heroForm.headline}
                      onChange={(e) => handleHeroChange('headline', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Sub-Headline / Description
                    </label>
                    <textarea
                      rows={3}
                      value={heroForm.subHeadline}
                      onChange={(e) => handleHeroChange('subHeadline', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Primary CTA Label
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaLabel}
                        onChange={(e) => handleHeroChange('ctaLabel', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Secondary CTA Label
                      </label>
                      <input
                        type="text"
                        value={heroForm.ctaSecondaryLabel}
                        onChange={(e) => handleHeroChange('ctaSecondaryLabel', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Floating Badge Controls */}
                  <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Floating Card Text
                      </label>
                      <input
                        type="text"
                        value={heroForm.floatingBadgeText || '500+ Siswa Lolos'}
                        onChange={(e) => handleHeroChange('floatingBadgeText', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Floating Card Subtext
                      </label>
                      <input
                        type="text"
                        value={heroForm.floatingBadgeSubtext || 'Pengajar PTN favorit berpengalaman.'}
                        onChange={(e) => handleHeroChange('floatingBadgeSubtext', e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Hero Student Image Path / URL
                    </label>
                    <input
                      type="text"
                      value={heroForm.assetMediaUrl}
                      onChange={(e) => handleHeroChange('assetMediaUrl', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>
                </>
              )}

              {/* TAB 2: PROGRAMS */}
              {activeTab === 'Programs' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 pb-3 border-b border-gray-100">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={programsTitle}
                        onChange={(e) => setProgramsTitle(e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Section Subtitle
                      </label>
                      <input
                        type="text"
                        value={programsSubtitle}
                        onChange={(e) => setProgramsSubtitle(e.target.value)}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#1D4ED8]" />
                      Parent Categories & Child Products
                    </h2>
                    <button
                      onClick={() => setShowAddCategoryModal(true)}
                      className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#dbeafe] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Tambah Parent Category</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {programCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          selectedCategoryId === cat.id
                            ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-xs'
                            : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <span onClick={() => setSelectedCategoryId(cat.id)} className="flex-1">
                          {cat.name}
                        </span>
                        {programCategories.length > 1 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Hapus Parent Program "${cat.name}" dan semua produk turunannya?`)) {
                                deleteProgramCategory(cat.id);
                                setSelectedCategoryId(programCategories[0].id);
                              }
                            }}
                            className={`p-0.5 rounded hover:bg-red-500 hover:text-white transition-colors ${
                              selectedCategoryId === cat.id ? 'text-blue-200' : 'text-gray-400'
                            }`}
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-700">
                        Produk Turunan di Kategori &quot;{programCategories.find((c) => c.id === selectedCategoryId)?.name || selectedCategoryId}&quot;
                      </span>
                      <button
                        onClick={() => setShowAddProductModal(true)}
                        className="flex items-center gap-1.5 bg-[#1D4ED8] text-white hover:bg-[#1e40af] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Tambah Produk Kelas</span>
                      </button>
                    </div>

                    {programs.filter((p) => p.categoryId === selectedCategoryId).length === 0 ? (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-xs font-semibold text-gray-500">
                          Belum ada produk turunan di kategori ini. Klik &quot;Tambah Produk Kelas&quot; di atas.
                        </p>
                      </div>
                    ) : (
                      programs
                        .filter((p) => p.categoryId === selectedCategoryId)
                        .map((product) => (
                          <div
                            key={product.id}
                            className="p-4 bg-gray-50/80 rounded-xl border border-gray-200 flex items-center justify-between gap-4 hover:border-gray-300 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-900">{product.title}</span>
                                <span className="text-[10px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2 py-0.5 rounded">
                                  {product.priceFormatted}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 mt-1">{product.description}</p>
                            </div>

                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={product.isActive}
                                onChange={() => toggleProgramItem(product.id)}
                                className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
                              />
                              <button
                                onClick={() => deleteProgramItem(product.id)}
                                className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTIMONIALS */}
              {activeTab === 'Testimonials' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={testimonialsTitle}
                      onChange={(e) => setTestimonialsTitle(e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Active Testimonial Roster
                    </h2>
                    <button
                      onClick={() => setShowAddTestimonialModal(true)}
                      className="flex items-center gap-1.5 bg-[#1D4ED8] text-white hover:bg-[#1e40af] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Tambah Testimoni</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-4 bg-gray-50/80 rounded-xl border border-gray-200/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold text-xs flex items-center justify-center shrink-0">
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

                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={t.isActive}
                            onChange={() => toggleTestimonial(t.id)}
                            className="w-4 h-4 text-[#1D4ED8] rounded border-gray-300 cursor-pointer"
                          />
                          <button
                            onClick={() => deleteTestimonial(t.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: ABOUT & ADVANTAGES */}
              {activeTab === 'About & Advantages' && (
                <div className="space-y-5">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      About Us, 4 Stat Cards & Advantages Content
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

                  {/* 4 Stat Cards Settings Grid */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-3">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Pengaturan 4 Stat Card Overlapping
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Card 1 Number & Label</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={aboutForm.statCard1Number || '10+'}
                            onChange={(e) => handleAboutChange('statCard1Number', e.target.value)}
                            className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
                          />
                          <input
                            type="text"
                            value={aboutForm.statCard1Label || 'TAHUN PENGALAMAN'}
                            onChange={(e) => handleAboutChange('statCard1Label', e.target.value)}
                            className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Card 2 Number & Label</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={aboutForm.statCard2Number || '500+'}
                            onChange={(e) => handleAboutChange('statCard2Number', e.target.value)}
                            className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
                          />
                          <input
                            type="text"
                            value={aboutForm.statCard2Label || 'SISWA BERPRESTASI'}
                            onChange={(e) => handleAboutChange('statCard2Label', e.target.value)}
                            className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Card 3 Number & Label</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={aboutForm.statCard3Number || '95%'}
                            onChange={(e) => handleAboutChange('statCard3Number', e.target.value)}
                            className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
                          />
                          <input
                            type="text"
                            value={aboutForm.statCard3Label || 'KEPUASAN SISWA'}
                            onChange={(e) => handleAboutChange('statCard3Label', e.target.value)}
                            className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Card 4 Number & Label</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={aboutForm.statCard4Number || '2014'}
                            onChange={(e) => handleAboutChange('statCard4Number', e.target.value)}
                            className="w-1/3 bg-white text-xs font-bold p-2 rounded-lg border border-gray-300"
                          />
                          <input
                            type="text"
                            value={aboutForm.statCard4Label || 'TAHUN BERDIRI'}
                            onChange={(e) => handleAboutChange('statCard4Label', e.target.value)}
                            className="w-2/3 bg-white text-xs p-2 rounded-lg border border-gray-300"
                          />
                        </div>
                      </div>
                    </div>
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

                  {/* Keunggulan Items Section */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase">Advantages Title</label>
                        <input
                          type="text"
                          value={advantagesTitle}
                          onChange={(e) => setAdvantagesTitle(e.target.value)}
                          className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase">Advantages Subtitle</label>
                        <input
                          type="text"
                          value={advantagesSubtitle}
                          onChange={(e) => setAdvantagesSubtitle(e.target.value)}
                          className="w-full bg-gray-50 text-xs p-2 rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Poin Keunggulan BSEC (Advantages)
                      </h3>
                      <button
                        onClick={() => setShowAddAdvantageModal(true)}
                        className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#dbeafe] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Tambah Keunggulan</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {advantages.map((adv) => (
                        <div key={adv.id} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold text-gray-900">{adv.title}</span>
                            <p className="text-[11px] text-gray-500 mt-0.5">{adv.description}</p>
                          </div>
                          <button
                            onClick={() => deleteAdvantage(adv.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: LEAD CAPTURE CTA */}
              {activeTab === 'Lead Capture CTA' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Formulir Pendaftaran & Lead Capture Settings
                    </h2>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      CTA Banner Title
                    </label>
                    <input
                      type="text"
                      value={leadCaptureForm.title}
                      onChange={(e) => handleLeadCaptureChange('title', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      CTA Banner Subtitle
                    </label>
                    <textarea
                      rows={2}
                      value={leadCaptureForm.subtitle}
                      onChange={(e) => handleLeadCaptureChange('subtitle', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Checklist Benefits List
                    </label>
                    {leadCaptureForm.checklistItems.map((item, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...leadCaptureForm.checklistItems];
                          newItems[idx] = e.target.value;
                          handleLeadCaptureChange('checklistItems', newItems);
                        }}
                        className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-2.5 rounded-xl border border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: FOOTER & CONTACT */}
              {activeTab === 'Footer & Contact' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Footer Branding & Contact Settings
                    </h2>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Company About Text
                    </label>
                    <textarea
                      rows={3}
                      value={footerForm.aboutText}
                      onChange={(e) => handleFooterChange('aboutText', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Company Address
                    </label>
                    <input
                      type="text"
                      value={footerForm.companyAddress}
                      onChange={(e) => handleFooterChange('companyAddress', e.target.value)}
                      className="w-full bg-gray-50/80 text-xs font-semibold text-gray-800 p-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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

            {/* Right Live Preview (~5 Cols) - Harmonized Mood matching Landing Page Redesign */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-gray-100/80 rounded-2xl p-4 border border-gray-200/60 shadow-xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-gray-700 tracking-tight flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Preview Mood Canvas
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

                  {/* Harmonized Preview Container */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 space-y-4 overflow-hidden my-2 text-gray-800">
                    {/* Hero Preview Card */}
                    <div className="bg-[#EFF6FF]/60 rounded-xl p-4 border border-blue-100 relative overflow-hidden">
                      <span className="px-2 py-0.5 bg-[#EFF6FF] text-[#1D4ED8] text-[9px] font-bold rounded-full inline-block mb-1.5">
                        {heroForm.taglineBadge}
                      </span>
                      <h4 className="text-xs font-black text-[#1E293B] leading-tight mb-1">
                        {heroForm.headline}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-xs mb-3">
                        {heroForm.subHeadline}
                      </p>
                      <div className="flex gap-2">
                        <button className="bg-[#1D4ED8] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xs">
                          {heroForm.ctaLabel}
                        </button>
                        <button className="bg-white border border-gray-200 text-[#1E293B] px-3 py-1.5 rounded-lg text-[10px] font-bold">
                          {heroForm.ctaSecondaryLabel}
                        </button>
                      </div>
                    </div>

                    {/* Stat Cards Overlapping Preview */}
                    <div className="bg-white p-3 rounded-xl border border-gray-100 space-y-1.5">
                      <span className="text-[10px] font-bold text-[#1D4ED8] uppercase tracking-wider block">
                        About 4 Stat Cards Preview
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="bg-[#1D4ED8] text-white p-2.5 rounded-xl shadow-xs">
                          <span className="font-extrabold block text-sm">{aboutForm.statCard1Number || '10+'}</span>
                          <span className="text-[8px] uppercase opacity-80">{aboutForm.statCard1Label || 'TAHUN PENGALAMAN'}</span>
                        </div>
                        <div className="bg-white border border-gray-200 text-[#1E293B] p-2.5 rounded-xl">
                          <span className="font-extrabold block text-sm">{aboutForm.statCard2Number || '500+'}</span>
                          <span className="text-[8px] uppercase text-gray-400">{aboutForm.statCard2Label || 'SISWA BERPRESTASI'}</span>
                        </div>
                        <div className="bg-[#EFF6FF] text-[#1E293B] p-2.5 rounded-xl -mt-1.5">
                          <span className="font-extrabold block text-sm">{aboutForm.statCard3Number || '95%'}</span>
                          <span className="text-[8px] uppercase text-gray-500">{aboutForm.statCard3Label || 'KEPUASAN SISWA'}</span>
                        </div>
                        <div className="bg-white border border-gray-200 text-[#1E293B] p-2.5 rounded-xl">
                          <span className="font-extrabold block text-sm">{aboutForm.statCard4Number || '2014'}</span>
                          <span className="text-[8px] uppercase text-gray-400">{aboutForm.statCard4Label || 'TAHUN BERDIRI'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonials Dark Navy Preview */}
                    <div className="bg-[#1D4ED8] text-white p-3 rounded-xl space-y-2">
                      <span className="text-[10px] font-extrabold tracking-tight block">{testimonialsTitle}</span>
                      <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/20 text-[9px]">
                        <span className="font-bold block">Annisa Rahma (UI)</span>
                        <p className="italic opacity-90 mt-0.5">&quot;Berkat BSEC, materi UTBK jadi lebih mudah...&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E293B] text-white p-3 rounded-xl flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide">
                  <Globe className="w-3.5 h-3.5 text-[#1D4ED8] animate-spin" />
                  <span>Live changes syncing enabled</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL 1: Tambah Parent Category */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Tambah Parent Category Program Baru</h3>
              <button onClick={() => setShowAddCategoryModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Kategori (Parent)</label>
                <input
                  type="text"
                  placeholder="Contoh: Program TK / Kedokteran"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full bg-gray-50 text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1D4ED8]"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCategoryModal(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs"
                >
                  Simpan Kategori
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Tambah Produk Kelas */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">
                Tambah Produk Turunan di &quot;{programCategories.find((c) => c.id === selectedCategoryId)?.name}&quot;
              </h3>
              <button onClick={() => setShowAddProductModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreateProduct} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Judul Kelas / Program</label>
                <input
                  type="text"
                  placeholder="Contoh: Matematika SD / TPS Intensif"
                  value={productForm.title}
                  onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Deskripsi Singkat</label>
                <textarea
                  rows={2}
                  placeholder="Deskripsi materi dan keunggulan kelas..."
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Harga (Format)</label>
                <input
                  type="text"
                  placeholder="Rp 450k/bln"
                  value={productForm.priceFormatted}
                  onChange={(e) => setProductForm({ ...productForm, priceFormatted: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs"
                >
                  Tambah Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Tambah Testimoni */}
      {showAddTestimonialModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Tambah Testimoni Siswa Baru</h3>
              <button onClick={() => setShowAddTestimonialModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreateTestimonial} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Nama Siswa</label>
                <input
                  type="text"
                  placeholder="Contoh: Annisa Rahma"
                  value={testimonialForm.studentName}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, studentName: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Kelulusan PTN Target</label>
                <input
                  type="text"
                  placeholder="Contoh: UI - Kedokteran"
                  value={testimonialForm.targetPtnPassed}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, targetPtnPassed: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Kutipan Testimoni</label>
                <textarea
                  rows={3}
                  placeholder="Kesan dan pesan pembelajaran..."
                  value={testimonialForm.contentSnippet}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, contentSnippet: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddTestimonialModal(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs"
                >
                  Tambah Testimoni
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: Tambah Keunggulan */}
      {showAddAdvantageModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Tambah Poin Keunggulan BSEC</h3>
              <button onClick={() => setShowAddAdvantageModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreateAdvantage} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Judul Keunggulan</label>
                <input
                  type="text"
                  placeholder="Contoh: Mentor Berpengalaman"
                  value={advantageForm.title}
                  onChange={(e) => setAdvantageForm({ ...advantageForm, title: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Deskripsi</label>
                <textarea
                  rows={2}
                  placeholder="Penjelasan keunggulan..."
                  value={advantageForm.description}
                  onChange={(e) => setAdvantageForm({ ...advantageForm, description: e.target.value })}
                  className="w-full bg-gray-50 text-xs p-2.5 rounded-xl border border-gray-200"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddAdvantageModal(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl shadow-xs"
                >
                  Tambah Keunggulan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
