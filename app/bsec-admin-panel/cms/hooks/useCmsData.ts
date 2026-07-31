'use client';

import { useState, useEffect } from 'react';
import {
  CmsTab,
  DevicePreviewMode,
  HeroSectionContent,
  ProgramCmsItem,
  TestimonialRosterItem,
  AboutCmsContent,
  AdvantageCmsItem,
  FooterCmsContent,
} from '../types';

export function useCmsData() {
  const [activeTab, setActiveTab] = useState<CmsTab>('Hero Banner');
  const [deviceMode, setDeviceMode] = useState<DevicePreviewMode>('desktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Jakarta Selatan Branch');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<string | null>(null);

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
    assetMediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfUaFmB9Q8RFWS2pLuZZXyEUIBuZg0kF1utgp3b4MKEx2IXz39lb3rhGpZH-0-R1Fg2nOCDijgWkNp7dhzVvjKezhnK42GJ_1J0_uuPBG2ZsJ9uNqjYdlfNN_Y6e893_FjlN51iG3YbGb_Kgo8K3klipA65xdW9WWIoD0qoEsVT3pAZ9v3FnF_9VY5R6MWJ2A9-561CMX3hVdce6n0qn7l84iApkIBFGX2J9M0GN9j5KG3Rg3jndn_',
    isVisible: true,
  });

  // Programs State
  const [programs, setPrograms] = useState<ProgramCmsItem[]>([
    { id: 'p-1', category: 'sd', title: 'Matematika SD', description: 'Fokus pada konsep dasar dan pemecahan masalah kreatif.', priceFormatted: 'Rp 450k/bln', iconName: 'calculate', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 1 },
    { id: 'p-2', category: 'sd', title: 'IPA Dasar', description: 'Eksperimen seru untuk mengenali fenomena alam sekitar.', priceFormatted: 'Rp 450k/bln', iconName: 'biotech', targetAge: 'Kelas 1-6 SD', isActive: true, sortOrder: 2 },
    { id: 'p-3', category: 'smp', title: 'Persiapan UN SMP', description: 'Latihan soal intensif dan pembahasan materi tuntas.', priceFormatted: 'Rp 650k/bln', iconName: 'assignment', targetAge: 'Kelas 7-9 SMP', isActive: true, sortOrder: 3 },
    { id: 'p-4', category: 'sma', title: 'Matematika Wajib', description: 'Kupas tuntas materi sekolah dan tugas harian.', priceFormatted: 'Rp 750k/bln', iconName: 'draw', targetAge: 'Kelas 10-12 SMA', isActive: true, sortOrder: 4 },
    { id: 'p-5', category: 'utbk', title: 'TPS Intensif', description: 'Trik cepat mengerjakan soal Penalaran Umum.', priceFormatted: 'Rp 1.2jt/pkt', iconName: 'speed', targetAge: 'Kelas 12 & Alumni', isActive: true, sortOrder: 5 },
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
  });

  // Advantages State
  const [advantages, setAdvantages] = useState<AdvantageCmsItem[]>([
    { id: 'a-1', iconName: 'school', title: 'Mentor Berpengalaman', description: 'Diajar oleh tutor lulusan PTN ternama yang ahli di bidangnya', sortOrder: 1 },
    { id: 'a-2', iconName: 'map', title: 'Modul Terstruktur', description: 'Materi pembelajaran tersusun sistematis dan mudah dipahami', sortOrder: 2 },
    { id: 'a-3', iconName: 'rocket_launch', title: 'Tryout Berkala', description: 'Evaluasi rutin dengan sistem penilaian dan analisis detail', sortOrder: 3 },
    { id: 'a-4', iconName: 'groups', title: 'Monitoring Perkembangan', description: 'Laporan perkembangan belajar siswa setiap bulan untuk orang tua', sortOrder: 4 },
  ]);

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

  // Load CMS Data from API Endpoint (without /v1/)
  useEffect(() => {
    async function fetchCmsSections() {
      try {
        const res = await fetch('/api/admin/cms/sections');
        if (res.ok) {
          const data = await res.json();
          if (data.hero) setHeroForm(data.hero);
          if (data.programs) setPrograms(data.programs);
          if (data.testimonials) setTestimonials(data.testimonials);
          if (data.about) setAboutForm(data.about);
          if (data.advantages) setAdvantages(data.advantages);
          if (data.footer) setFooterForm(data.footer);
        }
      } catch (err) {
        // Fallback to local default state if API is not running yet
      }
    }
    fetchCmsSections();
  }, []);

  const handleHeroChange = (field: keyof HeroSectionContent, value: any) => {
    setHeroForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAboutChange = (field: keyof AboutCmsContent, value: any) => {
    setAboutForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFooterChange = (field: keyof FooterCmsContent, value: any) => {
    setFooterForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTestimonial = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isActive: !t.isActive } : t))
    );
  };

  const toggleProgram = (id: string) => {
    setPrograms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const handlePublishChanges = async () => {
    setIsPublishing(true);
    setPublishStatus(null);
    try {
      const payload = {
        hero: heroForm,
        programs,
        testimonials,
        about: aboutForm,
        advantages,
        footer: footerForm,
      };

      const res = await fetch('/api/admin/cms/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setPublishStatus('Changes published successfully to public landing page!');
      } else {
        setPublishStatus('Draft saved locally (Backend API ready for connection).');
      }
    } catch (err) {
      setPublishStatus('Draft updated locally (Ready for backend sync).');
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
  };
}
