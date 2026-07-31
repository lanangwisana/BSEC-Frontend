'use client';

import { useState, useMemo } from 'react';
import {
  DashboardMetrics,
  StudentEnrollment,
  ScheduleItem,
  AnalyticsPoint,
  GradeLevel,
} from '../types';

export function useDashboardData() {
  const [selectedBranch, setSelectedBranch] = useState('Central Jakarta');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<GradeLevel>('All');
  const [selectedDateRange, setSelectedDateRange] = useState('Jan - Jun 2023');

  // Metrics Data matching mock
  const metrics: DashboardMetrics = useMemo(() => ({
    totalActiveStudents: 1240,
    momGrowth: 12,
    breakdown: {
      sd: 300,
      smp: 340,
      sma: 400,
      snbt: 200,
    },
    totalTutors: 85,
    classesToday: 42,
    capacityPercentage: 82,
    snbtParticipationRate: 88,
    monthlyRevenue: 185000000,
    targetRevenue: 200000000,
  }), []);

  // Academic chart analytics data
  const analyticsData: AnalyticsPoint[] = useMemo(() => [
    { month: 'JAN', avgScore: 68, tryoutAverage: 62 },
    { month: 'FEB', avgScore: 72, tryoutAverage: 65 },
    { month: 'MAR', avgScore: 78, tryoutAverage: 71 },
    { month: 'APR', avgScore: 75, tryoutAverage: 73 },
    { month: 'MAY', avgScore: 84, tryoutAverage: 80 },
    { month: 'JUN', avgScore: 88, tryoutAverage: 85 },
  ], []);

  // Initial Enrollment List matching image
  const initialEnrollments: StudentEnrollment[] = useMemo(() => [
    {
      id: '1',
      name: 'Aditya Saputra',
      code: '#BSEC-2023-001',
      avatarInitials: 'AS',
      gradeLevel: 'SMA (Class 12)',
      gradeCategory: 'SMA',
      dateEnrolled: 'Oct 24, 2023',
      status: 'ACTIVE',
    },
    {
      id: '2',
      name: 'Rina Putri',
      code: '#BSEC-2023-042',
      avatarInitials: 'RP',
      gradeLevel: 'SNBT Intensive',
      gradeCategory: 'SNBT',
      dateEnrolled: 'Oct 23, 2023',
      status: 'ACTIVE',
    },
    {
      id: '3',
      name: 'Dimas Fajar',
      code: '#BSEC-2023-012',
      avatarInitials: 'DF',
      gradeLevel: 'SMP (Class 8)',
      gradeCategory: 'SMP',
      dateEnrolled: 'Oct 20, 2023',
      status: 'PENDING',
    },
    {
      id: '4',
      name: 'Siti Rahma',
      code: '#BSEC-2023-055',
      avatarInitials: 'SR',
      gradeLevel: 'SD (Class 5)',
      gradeCategory: 'SD',
      dateEnrolled: 'Oct 18, 2023',
      status: 'ACTIVE',
    },
  ], []);

  // Today's schedule data matching image
  const scheduleItems: ScheduleItem[] = useMemo(() => [
    {
      id: 'sch-1',
      time: '09:00 - 10:30 AM',
      title: 'SNBT Mathematics Intensive',
      location: 'ROOM 02',
      tutor: 'Sarah Johnson',
      isCurrent: false,
    },
    {
      id: 'sch-2',
      time: '11:00 - 12:30 PM',
      title: 'SMA Physics Class 11',
      location: 'ROOM 04',
      tutor: 'Robert Chen',
      isCurrent: false,
    },
    {
      id: 'sch-3',
      time: '01:30 - 03:00 PM',
      title: 'SMP English Literature',
      location: 'ONLINE',
      tutor: 'Emily White',
      isCurrent: true,
    },
  ], []);

  // Filtered enrollment list based on search and grade filter
  const filteredEnrollments = useMemo(() => {
    return initialEnrollments.filter((student) => {
      const matchesFilter =
        selectedGradeFilter === 'All' || student.gradeCategory === selectedGradeFilter;
      const matchesSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [initialEnrollments, selectedGradeFilter, searchQuery]);

  return {
    selectedBranch,
    setSelectedBranch,
    searchQuery,
    setSearchQuery,
    selectedGradeFilter,
    setSelectedGradeFilter,
    selectedDateRange,
    setSelectedDateRange,
    metrics,
    analyticsData,
    enrollments: filteredEnrollments,
    scheduleItems,
  };
}
