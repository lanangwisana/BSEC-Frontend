export type SubtestCategory =
  | 'TPS Penalaran Umum'
  | 'TPS Pemahaman Bacaan'
  | 'TPS Kuantitatif'
  | 'Lit. Bahasa Indonesia';

export interface QuestionSetItem {
  id: string;
  code: string; // e.g. "Set 04"
  title: string; // e.g. "Penalaran Matematika Moderat"
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyColor: string;
}

export interface PtnThresholdItem {
  id: string;
  majorName: string;
  avgScore: number;
  targetScore: number;
  percentage: number;
  color: string;
}

export interface LeaderboardStudent {
  rank: number;
  id: string;
  studentName: string;
  nis: string;
  avatarInitials: string;
  branch: string;
  score: number;
  targetPtn: string;
  targetMajor: string;
  passingChance: 'High' | 'Medium' | 'Low';
  passingChanceColor: string;
}

export interface SnbtTryoutMetrics {
  questionBankCount: number;
  activeTryoutTitle: string;
  activeTryoutStartTime: string;
  totalParticipants: number;
  participantsDonePercentage: number;
  avgIrtScore: number;
  targetIrtPercentage: number;
  momGrowth: number;
}
