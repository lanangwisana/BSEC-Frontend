'use client';

import { useState, useEffect } from 'react';
import {
  CmsTab,
  DevicePreviewMode,
  HeroSectionContent,
  ProgramCategory,
  ProgramCmsItem,
  TestimonialRosterItem,
  AboutCmsContent,
  AdvantageCmsItem,
  LeadCaptureCmsContent,
  FooterCmsContent,
} from '../types';

export function useCmsData() {
  const [activeTab, setActiveTab] = useState<CmsTab>('Hero Banner');
  const [deviceMode, setDeviceMode] = useState<DevicePreviewMode>('desktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Jakarta Selatan Branch');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<string | null>(null);

  // Section Headings State
  const [advantagesTitle, setAdvantagesTitle] = useState('MENGAPA BSEC?');
  const [advantagesSubtitle, setAdvantagesSubtitle] = useState('Dedikasi kami untuk masa depan cerah anak Anda');
  const [programsTitle, setProgramsTitle] = useState('Program Unggulan');
  const [programsSubtitle, setProgramsSubtitle] = useState('Pilih jenjang yang sesuai dengan kebutuhan akademik Anda');
  const [testimonialsTitle, setTestimonialsTitle] = useState('Kisah Sukses Siswa');

  // Hero Section State
  const [heroForm, setHeroForm] = useState<HeroSectionContent>({
    taglineBadge: 'Bimbel No. 1 di Indonesia',
    headline: 'Wujudkan Prestasi Akademik Terbaik Bersama BSEC',
    subHeadline:
      'Metode belajar cerdas untuk hasil maksimal. Kami membantu ribuan siswa meraih mimpi masuk sekolah dan perguruan tinggi favorit.',
    ctaLabel: 'Daftar Kelas Trial',
    ctaRedirectUrl: '#daftar',
    ctaSecondaryLabel: 'Tanya via WhatsApp',
    ctaSecondaryUrl: 'https://wa.me/6281234567890',
    assetFileName: 'hero-banner-2026.png',
    assetHint: 'PNG, JPG up to 10MB (Recommended 1920x1080)',
    assetMediaUrl: '/images/image 1.png',
    floatingBadgeText: '500+ Siswa Lolos',
    floatingBadgeSubtext: 'Pengajar PTN favorit berpengalaman.',
    isVisible: true,
  });

  // Parent Program Categories State
  const [programCategories, setProgramCategories] = useState<ProgramCategory[]>([
    { id: 'sd', name: 'Program SD', sortOrder: 1 },
    { id: 'smp', name: 'Program SMP', sortOrder: 2 },
    { id: 'sma', name: 'Program SMA', sortOrder: 3 },
    { id: 'utbk', name: 'Intensif UTBK/SNBT', sortOrder: 4 },
  ]);

  // Child Programs / Products State
  const [programs, setPrograms] = useState<ProgramCmsItem[]>([
    { id: 'p-1', categoryId: 'sd', title: 'Matematika SD', description: 'Fokus pada konsep dasar dan pemecahan masalah kreatif.', priceFormatted: 'Rp 450k/bln', iconName: 'calculate', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 1 },
    { id: 'p-2', categoryId: 'sd', title: 'IPA Dasar', description: 'Eksperimen seru untuk mengenali fenomena alam sekitar.', priceFormatted: 'Rp 450k/bln', iconName: 'biotech', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 2 },
    { id: 'p-3', categoryId: 'sd', title: 'Bahasa Inggris SD', description: 'Membangun kepercayaan diri berbicara sejak dini.', priceFormatted: 'Rp 500k/bln', iconName: 'language', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 3 },
    { id: 'p-4', categoryId: 'smp', title: 'Persiapan UN SMP', description: 'Latihan soal intensif dan pembahasan materi tuntas.', priceFormatted: 'Rp 650k/bln', iconName: 'assignment', targetAge: 'Kelas 7-9 SMP', isActive: true, sortOrder: 4 },
    { id: 'p-5', categoryId: 'smp', title: 'Matematika Lanjut', description: 'Aljabar dan geometri dengan cara yang menyenangkan.', priceFormatted: 'Rp 600k/bln', iconName: 'functions', targetAge: 'Kelas 7-9 SMP', isActive: true, sortOrder: 5 },
    { id: 'p-6', categoryId: 'sma', title: 'Matematika Wajib', description: 'Kupas tuntas materi sekolah dan tugas harian.', priceFormatted: 'Rp 750k/bln', iconName: 'draw', targetAge: 'Kelas 10-12 SMA', isActive: true, sortOrder: 6 },
    { id: 'p-7', categoryId: 'utbk', title: 'TPS Intensif', description: 'Trik cepat mengerjakan soal Penalaran Umum.', priceFormatted: 'Rp 1.2jt/pkt', iconName: 'speed', targetAge: 'Kelas 12 & Alumni', isActive: true, sortOrder: 7 },
  ]);

  // Testimonials Roster State
  const [testimonials, setTestimonials] = useState<TestimonialRosterItem[]>([
    {
      id: 't-1',
      order: 1,
      studentName: 'Annisa Rahma',
      studentClass: 'Class of 2024',
      avatarInitials: 'AR',
      targetPtnPassed: 'UI - Kedokteran',
      contentSnippet: '"Berkat BSEC, materi UTBK yang tadinya terasa mustahil jadi lebih mudah dipahami. Strategi belajarnya sangat aplikatif."',
      avatarUrl: '/images/image 2.png',
      isActive: true,
    },
    {
      id: 't-2',
      order: 2,
      studentName: 'Budi Santoso',
      studentClass: 'Class of 2025',
      avatarInitials: 'BS',
      targetPtnPassed: 'ITB - STEI',
      contentSnippet: '"Metode belajar interaktif di BSEC benar-benar mengubah cara pandang saya terhadap Matematika."',
      avatarUrl: '/images/image 3.png',
      isActive: true,
    },
    {
      id: 't-3',
      order: 3,
      studentName: 'Citra Lestari',
      studentClass: 'Class of 2024',
      avatarInitials: 'CL',
      targetPtnPassed: 'UGM - Teknik Sipil',
      contentSnippet: '"Tentor di BSEC bukan sekadar pengajar, tapi mentor yang peduli dengan progres setiap siswa."',
      avatarUrl: '/images/image 1.png',
      isActive: true,
    },
  ]);

  // About Content State
  const [aboutForm, setAboutForm] = useState<AboutCmsContent>({
    title: 'Tentang BSEC',
    subtitle: 'Bimbingan belajar profesional yang berkomitmen mencetak generasi unggul',
    descriptionParagraph1:
      'BSEC (Brown Smart Education Center) hadir sebagai solusi pendidikan terpercaya bagi siswa SD, SMP, dan SMA di Indonesia. Dengan metode pembelajaran yang terstruktur dan mentor berpengalaman, kami membantu siswa meraih prestasi akademik terbaik.',
    descriptionParagraph2:
      'Didirikan pada tahun 2014, BSEC telah membantu lebih dari 500 siswa mencapai target akademik mereka, termasuk lolos ke PTN favorit melalui jalur SNBT.',
    visionText: 'Menjadi pusat bimbingan belajar terdepan yang mencetak generasi unggul dan berprestasi di Indonesia.',
    missions: [
      'Menyediakan pendidikan berkualitas dengan metode pembelajaran inovatif',
      'Mengembangkan potensi akademik dan karakter siswa secara optimal',
      'Menciptakan lingkungan belajar yang nyaman dan menyenangkan',
      'Membantu siswa meraih prestasi tertinggi dalam setiap jenjang pendidikan',
    ],
    highlights: [
      { icon: 'school', number: '10+', label: 'Tahun Pengalaman' },
      { icon: 'groups', number: '500+', label: 'Siswa Berprestasi' },
      { icon: 'star', number: '95%', label: 'Kepuasan Siswa' },
    ],
    statCard1Number: '10+',
    statCard1Label: 'TAHUN PENGALAMAN',
    statCard2Number: '500+',
    statCard2Label: 'SISWA BERPRESTASI',
    statCard3Number: '95%',
    statCard3Label: 'KEPUASAN SISWA',
    statCard4Number: '2014',
    statCard4Label: 'TAHUN BERDIRI',
  });

  // Advantages State
  const [advantages, setAdvantages] = useState<AdvantageCmsItem[]>([
    { id: 'a-1', iconName: 'school', title: 'Mentor Berpengalaman', description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya', sortOrder: 1 },
    { id: 'a-2', iconName: 'map', title: 'Modul Terstruktur', description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami', sortOrder: 2 },
    { id: 'a-3', iconName: 'rocket_launch', title: 'Tryout Berkala', description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail', sortOrder: 3 },
    { id: 'a-4', iconName: 'groups', title: 'Monitoring Perkembangan', description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua', sortOrder: 4 },
  ]);

  // Lead Capture State
  const [leadCaptureForm, setLeadCaptureForm] = useState<LeadCaptureCmsContent>({
    title: 'Mulai Perjalanan Prestasimu Sekarang',
    subtitle: 'Dapatkan jadwal konsultasi gratis dan rancang strategi belajar terbaik bersama tim ahli kami.',
    checklistItems: [
      'Tes Diagnostik Kemampuan Gratis',
      'Laporan Progres Belajar Real-time',
      'Akses Bank Soal Terlengkap',
    ],
  });

  // Footer State
  const [footerForm, setFooterForm] = useState<FooterCmsContent>({
    aboutText: 'Menciptakan generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui sistem pendidikan modern.',
    companyAddress: 'Jl. Pendidikan Modern No. 42, Jakarta Selatan',
    companyPhone: '(021) 1234-5678',
    companyEmail: 'info@bsec.com',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
      twitter: '#',
    },
  });

  // Fetch API Endpoint
  useEffect(() => {
    async function fetchCmsSections() {
      try {
        const res = await fetch('/api/admin/cms/sections');
        if (res.ok) {
          const json = await res.json();
          if (json.hero) setHeroForm((prev) => ({ ...prev, ...json.hero }));
          if (json.programCategories) setProgramCategories(json.programCategories);
          if (json.programs) setPrograms(json.programs);
          if (json.testimonials) setTestimonials(json.testimonials);
          if (json.about) setAboutForm((prev) => ({ ...prev, ...json.about }));
          if (json.advantages) setAdvantages(json.advantages);
          if (json.leadCapture) setLeadCaptureForm((prev) => ({ ...prev, ...json.leadCapture }));
          if (json.footer) setFooterForm((prev) => ({ ...prev, ...json.footer }));
          if (json.advantagesTitle) setAdvantagesTitle(json.advantagesTitle);
          if (json.advantagesSubtitle) setAdvantagesSubtitle(json.advantagesSubtitle);
          if (json.programsTitle) setProgramsTitle(json.programsTitle);
          if (json.programsSubtitle) setProgramsSubtitle(json.programsSubtitle);
          if (json.testimonialsTitle) setTestimonialsTitle(json.testimonialsTitle);
        }
      } catch (err) {
        // Fallback to initial state gracefully
      }
    }

    fetchCmsSections();
  }, []);

  // Handlers
  const handleHeroChange = (field: keyof HeroSectionContent, value: any) => {
    setHeroForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAboutChange = (field: keyof AboutCmsContent, value: any) => {
    setAboutForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLeadCaptureChange = (field: keyof LeadCaptureCmsContent, value: any) => {
    setLeadCaptureForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFooterChange = (field: keyof FooterCmsContent, value: any) => {
    setFooterForm((prev) => ({ ...prev, [field]: value }));
  };

  // Program Category CRUD Handlers
  const addProgramCategory = (name: string) => {
    const newId = name.toLowerCase().replace(/\s+/g, '-');
    const newCat: ProgramCategory = {
      id: newId,
      name,
      sortOrder: programCategories.length + 1,
    };
    setProgramCategories((prev) => [...prev, newCat]);
  };

  const deleteProgramCategory = (id: string) => {
    setProgramCategories((prev) => prev.filter((c) => c.id !== id));
    setPrograms((prev) => prev.filter((p) => p.categoryId !== id));
  };

  // Child Product CRUD Handlers
  const addProgramItem = (item: Omit<ProgramCmsItem, 'id' | 'sortOrder'>) => {
    const newItem: ProgramCmsItem = {
      ...item,
      id: `p-${Date.now()}`,
      sortOrder: programs.length + 1,
    };
    setPrograms((prev) => [...prev, newItem]);
  };

  const deleteProgramItem = (id: string) => {
    setPrograms((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleProgramItem = (id: string) => {
    setPrograms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  // Testimonials CRUD Handlers
  const addTestimonial = (item: Omit<TestimonialRosterItem, 'id' | 'order'>) => {
    const newItem: TestimonialRosterItem = {
      ...item,
      id: `t-${Date.now()}`,
      order: testimonials.length + 1,
    };
    setTestimonials((prev) => [...prev, newItem]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTestimonial = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isActive: !t.isActive } : t))
    );
  };

  // Advantages CRUD Handlers
  const addAdvantage = (item: Omit<AdvantageCmsItem, 'id' | 'sortOrder'>) => {
    const newItem: AdvantageCmsItem = {
      ...item,
      id: `a-${Date.now()}`,
      sortOrder: advantages.length + 1,
    };
    setAdvantages((prev) => [...prev, newItem]);
  };

  const deleteAdvantage = (id: string) => {
    setAdvantages((prev) => prev.filter((a) => a.id !== id));
  };

  // Save / Publish All CMS Draft Changes
  const handlePublishChanges = async () => {
    setIsPublishing(true);
    setPublishStatus(null);

    const payload = {
      hero: heroForm,
      programCategories,
      programs,
      testimonials,
      about: aboutForm,
      advantages,
      leadCapture: leadCaptureForm,
      footer: footerForm,
      advantagesTitle,
      advantagesSubtitle,
      programsTitle,
      programsSubtitle,
      testimonialsTitle,
    };

    try {
      const res = await fetch('/api/admin/cms/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setPublishStatus('Success! CMS changes published live.');
      } else {
        setPublishStatus('Draft saved locally.');
      }
    } catch (err) {
      setPublishStatus('Draft saved in local state.');
    } finally {
      setIsPublishing(false);
      setTimeout(() => setPublishStatus(null), 4000);
    }
  };

  return {
    activeTab,
    setActiveTab,
    deviceMode,
    setDeviceMode,
    searchQuery,
    setSearchQuery,
    selectedBranch,
    setSelectedBranch,
    isPublishing,
    publishStatus,
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
  };
}
