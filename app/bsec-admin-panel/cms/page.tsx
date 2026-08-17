'use client';

import React, { useState } from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import { Send, CheckCircle2 } from 'lucide-react';
import { useCmsData } from './hooks/useCmsData';
import { CmsTab } from './types';

// Import Modular Tab Components
import { HeroTab } from './components/tabs/HeroTab';
import { AboutTab } from './components/tabs/AboutTab';
import { ProgramsTab } from './components/tabs/ProgramsTab';
import { AdvantagesTab } from './components/tabs/AdvantagesTab';
import { TestimonialsTab } from './components/tabs/TestimonialsTab';
import { LeadCaptureTab } from './components/tabs/LeadCaptureTab';
import { FooterTab } from './components/tabs/FooterTab';

// Import Live Preview Panel
import { LivePreviewPanel } from './components/LivePreviewPanel';

// Import Modals
import { AddCategoryModal } from './components/modals/AddCategoryModal';
import { AddProductModal } from './components/modals/AddProductModal';
import { AddTestimonialModal } from './components/modals/AddTestimonialModal';
import { AddAdvantageModal } from './components/modals/AddAdvantageModal';

const tabs: CmsTab[] = [
  'Hero Banner',
  'About',
  'Programs',
  'Advantages',
  'Testimonials',
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

  // Modal Submit Handlers
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

  const selectedCategoryName =
    programCategories.find((c) => c.id === selectedCategoryId)?.name || selectedCategoryId;

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
                  Landing Page Content Manager
                </h1>
              </div>
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

          {/* CMS Tabs Navigation Bar */}
          <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-xs flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#1D4ED8] text-white shadow-xs'
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
              {activeTab === 'Hero Banner' && (
                <HeroTab heroForm={heroForm} handleHeroChange={handleHeroChange} />
              )}

              {activeTab === 'About' && (
                <AboutTab aboutForm={aboutForm} handleAboutChange={handleAboutChange} />
              )}

              {activeTab === 'Programs' && (
                <ProgramsTab
                  programsTitle={programsTitle}
                  setProgramsTitle={setProgramsTitle}
                  programsSubtitle={programsSubtitle}
                  setProgramsSubtitle={setProgramsSubtitle}
                  programCategories={programCategories}
                  selectedCategoryId={selectedCategoryId}
                  setSelectedCategoryId={setSelectedCategoryId}
                  deleteProgramCategory={deleteProgramCategory}
                  programs={programs}
                  toggleProgramItem={toggleProgramItem}
                  deleteProgramItem={deleteProgramItem}
                  onOpenAddCategoryModal={() => setShowAddCategoryModal(true)}
                  onOpenAddProductModal={() => setShowAddProductModal(true)}
                />
              )}

              {activeTab === 'Advantages' && (
                <AdvantagesTab
                  advantagesTitle={advantagesTitle}
                  setAdvantagesTitle={setAdvantagesTitle}
                  advantagesSubtitle={advantagesSubtitle}
                  setAdvantagesSubtitle={setAdvantagesSubtitle}
                  advantages={advantages}
                  deleteAdvantage={deleteAdvantage}
                  onOpenAddAdvantageModal={() => setShowAddAdvantageModal(true)}
                />
              )}

              {activeTab === 'Testimonials' && (
                <TestimonialsTab
                  testimonialsTitle={testimonialsTitle}
                  setTestimonialsTitle={setTestimonialsTitle}
                  testimonials={testimonials}
                  toggleTestimonial={toggleTestimonial}
                  deleteTestimonial={deleteTestimonial}
                  onOpenAddTestimonialModal={() => setShowAddTestimonialModal(true)}
                />
              )}

              {activeTab === 'Lead Capture CTA' && (
                <LeadCaptureTab
                  leadCaptureForm={leadCaptureForm}
                  handleLeadCaptureChange={handleLeadCaptureChange}
                />
              )}

              {activeTab === 'Footer & Contact' && (
                <FooterTab footerForm={footerForm} handleFooterChange={handleFooterChange} />
              )}
            </div>

            {/* Right Live Preview (~5 Cols) */}
            <LivePreviewPanel
              activeTab={activeTab}
              deviceMode={deviceMode}
              setDeviceMode={setDeviceMode}
              heroForm={heroForm}
              aboutForm={aboutForm}
              advantagesTitle={advantagesTitle}
              advantagesSubtitle={advantagesSubtitle}
              advantages={advantages}
              programsTitle={programsTitle}
              programsSubtitle={programsSubtitle}
              programCategories={programCategories}
              programs={programs}
              testimonialsTitle={testimonialsTitle}
              testimonials={testimonials}
              leadCaptureForm={leadCaptureForm}
              footerForm={footerForm}
            />
          </div>
        </main>
      </div>

      {/* Modals */}
      <AddCategoryModal
        isOpen={showAddCategoryModal}
        onClose={() => setShowAddCategoryModal(false)}
        newCategoryName={newCategoryName}
        setNewCategoryName={setNewCategoryName}
        handleCreateCategory={handleCreateCategory}
      />

      <AddProductModal
        isOpen={showAddProductModal}
        onClose={() => setShowAddProductModal(false)}
        selectedCategoryName={selectedCategoryName}
        productForm={productForm}
        setProductForm={setProductForm}
        handleCreateProduct={handleCreateProduct}
      />

      <AddTestimonialModal
        isOpen={showAddTestimonialModal}
        onClose={() => setShowAddTestimonialModal(false)}
        testimonialForm={testimonialForm}
        setTestimonialForm={setTestimonialForm}
        handleCreateTestimonial={handleCreateTestimonial}
      />

      <AddAdvantageModal
        isOpen={showAddAdvantageModal}
        onClose={() => setShowAddAdvantageModal(false)}
        advantageForm={advantageForm}
        setAdvantageForm={setAdvantageForm}
        handleCreateAdvantage={handleCreateAdvantage}
      />
    </div>
  );
}
