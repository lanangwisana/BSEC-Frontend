'use client';

import { useState, useMemo } from 'react';
import { StudentRecord, StudentLevelTab, StudentSummaryMetrics, SppStatus } from '../types';

export function useStudentManagementData() {
  const [activeTab, setActiveTab] = useState<StudentLevelTab>('All Levels');
  const [selectedBranch, setSelectedBranch] = useState('Central Jakarta Branch');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('Active Status');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);

  // Summary Cards Metrics matching Image 2
  const metrics: StudentSummaryMetrics = useMemo(() => ({
    totalRegistered: 1240,
    snbtTargetSubmitted: 198,
    activeSppPercentage: 94,
  }), []);

  // Student directory list matching Image 2
  const initialStudents: StudentRecord[] = useMemo(() => [
    {
      id: 'std-1',
      name: 'Adinda Putri Maharani',
      nis: '20240012',
      avatarInitials: 'AP',
      levelBadge: 'SMA CLASS 12',
      levelCategory: 'SMA',
      schoolName: 'SMAN 8 Jakarta',
      targetPtn: 'Universitas Indonesia',
      targetMajor: 'Kedokteran',
      parentWhatsapp: '6281234567890',
      sppStatus: 'Paid',
    },
    {
      id: 'std-2',
      name: 'Rizky Ramadhan',
      nis: '20240105',
      avatarInitials: 'RR',
      levelBadge: 'SMP CLASS 9',
      levelCategory: 'SMP',
      schoolName: 'SMPN 115 Jakarta',
      targetPtn: 'SMA Unggulan',
      targetMajor: 'IPA Target',
      parentWhatsapp: '6281987654321',
      sppStatus: 'Pending',
    },
    {
      id: 'std-3',
      name: 'Fiona Az-Zahra',
      nis: '20240220',
      avatarInitials: 'FA',
      levelBadge: 'SNBT INTENSIVE',
      levelCategory: 'SNBT Intensive',
      schoolName: 'SMA Labschool Jakarta',
      targetPtn: 'Institut Teknologi Bandung',
      targetMajor: 'Teknik Informatika',
      parentWhatsapp: '6281311223344',
      sppStatus: 'Paid',
    },
    {
      id: 'std-4',
      name: 'Bintang Pratama',
      nis: '20240311',
      avatarInitials: 'BP',
      levelBadge: 'SD CLASS 6',
      levelCategory: 'SD',
      schoolName: 'SDN Menteng 01',
      targetPtn: 'SMP Al-Azhar',
      targetMajor: 'Reguler Target',
      parentWhatsapp: '6281566778899',
      sppStatus: 'Paid',
    },
  ], []);

  // Filtered Students list
  const filteredStudents = useMemo(() => {
    return initialStudents.filter((student) => {
      const matchesTab =
        activeTab === 'All Levels' || student.levelCategory === activeTab;
      const matchesSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.nis.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.schoolName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [initialStudents, activeTab, searchQuery]);

  // Checkbox handlers
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStudentIds(filteredStudents.map((s) => s.id));
    } else {
      setSelectedStudentIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedStudentIds((prev) => [...prev, id]);
    } else {
      setSelectedStudentIds((prev) => prev.filter((item) => item !== id));
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedBranch,
    setSelectedBranch,
    selectedStatusFilter,
    setSelectedStatusFilter,
    searchQuery,
    setSearchQuery,
    selectedStudentIds,
    handleSelectAll,
    handleSelectOne,
    metrics,
    students: filteredStudents,
  };
}
