'use client';

import { useState, useMemo } from 'react';
import {
  SubtestCategory,
  QuestionSetItem,
  PtnThresholdItem,
  LeaderboardStudent,
  SnbtTryoutMetrics,
} from '../types';

export function useSnbtTryoutData() {
  const [activeSubtest, setActiveSubtest] = useState<SubtestCategory>('TPS Penalaran Umum');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');

  // Metrics Data matching Image 6
  const metrics: SnbtTryoutMetrics = useMemo(() => ({
    questionBankCount: 2450,
    activeTryoutTitle: 'Tryout Ke-5 SNBT 2026',
    activeTryoutStartTime: '08:00 AM',
    totalParticipants: 420,
    participantsDonePercentage: 94,
    avgIrtScore: 645.5,
    targetIrtPercentage: 82,
    momGrowth: 4.2,
  }), []);

  // Question Sets matching Image 6
  const questionSets: QuestionSetItem[] = useMemo(() => [
    {
      id: 'set-1',
      code: 'Set 04',
      title: 'Penalaran Matematika Moderat',
      questionCount: 20,
      difficulty: 'Medium',
      difficultyColor: 'text-amber-600 bg-amber-50',
    },
    {
      id: 'set-2',
      code: 'Set 02',
      title: 'Literasi Bahasa Indonesia',
      questionCount: 30,
      difficulty: 'Easy',
      difficultyColor: 'text-emerald-600 bg-emerald-50',
    },
    {
      id: 'set-3',
      code: 'Set 09',
      title: 'Pengetahuan Kuantitatif Advanced',
      questionCount: 15,
      difficulty: 'Hard',
      difficultyColor: 'text-red-600 bg-red-50',
    },
  ], []);

  // PTN Thresholds matching Image 6
  const ptnThresholds: PtnThresholdItem[] = useMemo(() => [
    {
      id: 'ptn-1',
      majorName: 'Kedokteran UI',
      avgScore: 645,
      targetScore: 720,
      percentage: 89,
      color: 'bg-blue-600',
    },
    {
      id: 'ptn-2',
      majorName: 'STEI ITB',
      avgScore: 645,
      targetScore: 710,
      percentage: 90,
      color: 'bg-blue-600',
    },
    {
      id: 'ptn-3',
      majorName: 'Hukum UGM',
      avgScore: 645,
      targetScore: 670,
      percentage: 96,
      color: 'bg-emerald-500',
    },
  ], []);

  // Leaderboard Students matching Image 6
  const leaderboard: LeaderboardStudent[] = useMemo(() => [
    {
      rank: 1,
      id: 'lb-1',
      studentName: 'Alya Rahmawati',
      nis: 'ST-2024-001',
      avatarInitials: 'AR',
      branch: 'Pusat',
      score: 785.4,
      targetPtn: 'ITB',
      targetMajor: 'Teknik Informatika',
      passingChance: 'High',
      passingChanceColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      rank: 2,
      id: 'lb-2',
      studentName: 'Budi Pratama',
      nis: 'ST-2024-005',
      avatarInitials: 'BP',
      branch: 'Bandung 1',
      score: 762.1,
      targetPtn: 'UI',
      targetMajor: 'FK Kedokteran',
      passingChance: 'High',
      passingChanceColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      rank: 3,
      id: 'lb-3',
      studentName: 'Citra Lestari',
      nis: 'ST-2024-012',
      avatarInitials: 'CL',
      branch: 'Pusat',
      score: 744.9,
      targetPtn: 'UGM',
      targetMajor: 'Psikologi',
      passingChance: 'Medium',
      passingChanceColor: 'bg-blue-100 text-blue-700',
    },
  ], []);

  return {
    activeSubtest,
    setActiveSubtest,
    searchQuery,
    setSearchQuery,
    selectedBranch,
    setSelectedBranch,
    metrics,
    questionSets,
    ptnThresholds,
    leaderboard,
  };
}
