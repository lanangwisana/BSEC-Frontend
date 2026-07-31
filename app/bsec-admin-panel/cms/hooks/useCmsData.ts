'use client';

import { useState, useMemo } from 'react';
import {
  CmsTab,
  DevicePreviewMode,
  HeroSectionContent,
  TestimonialRosterItem,
} from '../types';

export function useCmsData() {
  const [activeTab, setActiveTab] = useState<CmsTab>('Hero Banner');
  const [deviceMode, setDeviceMode] = useState<DevicePreviewMode>('desktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Jakarta Selatan Branch');

  // Hero Section State matching Image 5
  const [heroForm, setHeroForm] = useState<HeroSectionContent>({
    headline: 'Unlock Your Potential with BSEC 2026',
    subHeadline:
      'Personalized tutoring and expert guidance for SNBT and top-tier PTN admissions. Join 5000+ successful students today.',
    ctaLabel: 'Register Now',
    ctaRedirectUrl: 'https://bsec.edu.id/enroll',
    assetFileName: 'hero-banner-2026.png',
    assetHint: 'PNG, JPG up to 10MB (Recommended 1920x1080)',
    isVisible: true,
  });

  // Testimonials Roster matching Image 5
  const [testimonials, setTestimonials] = useState<TestimonialRosterItem[]>([
    {
      id: 't-1',
      order: 1,
      studentName: 'Anindya Jati',
      studentClass: 'Class of 2024',
      avatarInitials: 'AJ',
      targetPtnPassed: 'UI - Kedokteran',
      contentSnippet: '"BSEC transformed how I approach tough math problems."',
      isActive: true,
    },
    {
      id: 't-2',
      order: 2,
      studentName: 'Raka Mahendra',
      studentClass: 'Class of 2025',
      avatarInitials: 'RM',
      targetPtnPassed: 'ITB - STEI',
      contentSnippet: '"The mock tests were scary accurate and helpful."',
      isActive: true,
    },
  ]);

  const handleHeroChange = (field: keyof HeroSectionContent, value: any) => {
    setHeroForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTestimonial = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isActive: !t.isActive } : t))
    );
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
    testimonials,
    toggleTestimonial,
  };
}
