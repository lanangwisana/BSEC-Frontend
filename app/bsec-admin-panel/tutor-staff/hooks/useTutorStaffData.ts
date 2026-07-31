'use client';

import { useState, useMemo } from 'react';
import {
  TutorRecord,
  SubjectCategory,
  TutorMetrics,
  TodayTeachingActivity,
} from '../types';

export function useTutorStaffData() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory>('All Subjects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYearBranch, setSelectedYearBranch] = useState('Pusat - T.A. 2024/2025');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Summary Metrics matching Image 3
  const metrics: TutorMetrics = useMemo(() => ({
    totalActiveTutors: 85,
    todayClasses: 42,
    avgRating: 4.9,
  }), []);

  // Tutor Directory list matching Image 3
  const tutors: TutorRecord[] = useMemo(() => [
    {
      id: 'tut-1',
      name: 'Dr. Sarah Wijaya',
      nip: '19940211.2023',
      avatarInitials: 'SW',
      roleBadge: 'SENIOR TUTOR',
      status: 'ACTIVE',
      rating: 4.9,
      reviewCount: 126,
      subjects: ['SNBT Mathematics', 'Calculus'],
      weeklyLoad: '18/24 Sessions',
      branch: 'Pusat & Tebet',
    },
    {
      id: 'tut-2',
      name: 'Budi Santoso, M.Pd',
      nip: '19880515.2021',
      avatarInitials: 'BS',
      roleBadge: 'STAFF',
      status: 'ACTIVE',
      rating: 4.8,
      reviewCount: 92,
      subjects: ['Fisika Mekanika', 'SMA XII'],
      weeklyLoad: '22/24 Sessions',
      branch: 'Pusat',
    },
    {
      id: 'tut-3',
      name: 'Jessica Lim, Ph.D',
      nip: '19910814.2023',
      avatarInitials: 'JL',
      roleBadge: 'MASTER TUTOR',
      status: 'AWAY',
      rating: 5.0,
      reviewCount: 45,
      subjects: ['Bahasa Inggris', 'IELTS Prep'],
      weeklyLoad: '12/20 Sessions',
      branch: 'Remote & Pusat',
    },
    {
      id: 'tut-4',
      name: 'Ahmad Fauzi',
      nip: '19970201.2024',
      avatarInitials: 'AF',
      roleBadge: 'JUNIOR TUTOR',
      status: 'ACTIVE',
      rating: 4.7,
      reviewCount: 31,
      subjects: ['TPS Penalaran', 'SNBT Prep'],
      weeklyLoad: '20/24 Sessions',
      branch: 'Tebet',
    },
  ], []);

  // Today's Status Timeline Activity
  const todayActivities: TodayTeachingActivity[] = useMemo(() => [
    {
      id: 'act-1',
      tutorName: 'Dr. Sarah Wijaya',
      statusTag: 'TEACHING NOW',
      sessionName: 'SNBT TPS Intensive',
      room: 'Room 102',
      timeSlot: '09:00 - 10:30',
    },
    {
      id: 'act-2',
      tutorName: 'Budi Santoso',
      statusTag: 'COMPLETED',
      sessionName: 'Fisika XII',
      room: 'Room 104',
      timeSlot: '08:00 - 09:30',
    },
    {
      id: 'act-3',
      tutorName: 'TBA (Sub Needed)',
      statusTag: 'URGENT',
      sessionName: 'Calculus Prep',
      room: 'Room 201',
      timeSlot: '11:00 - 12:30',
      isUrgent: true,
    },
  ], []);

  // Filtered tutors based on subject filter and search query
  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const matchesSubject =
        selectedSubject === 'All Subjects' ||
        tutor.subjects.some((s) =>
          s.toLowerCase().includes(selectedSubject.toLowerCase())
        );
      const matchesSearch =
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.nip.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subjects.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesSubject && matchesSearch;
    });
  }, [tutors, selectedSubject, searchQuery]);

  return {
    selectedSubject,
    setSelectedSubject,
    searchQuery,
    setSearchQuery,
    selectedYearBranch,
    setSelectedYearBranch,
    viewMode,
    setViewMode,
    metrics,
    tutors: filteredTutors,
    todayActivities,
  };
}
