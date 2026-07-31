export type StudentLevelTab = 'All Levels' | 'SD' | 'SMP' | 'SMA' | 'SNBT Intensive';

export type SppStatus = 'Paid' | 'Pending' | 'Overdue';

export interface StudentRecord {
  id: string;
  name: string;
  nis: string;
  avatarUrl?: string;
  avatarInitials: string;
  levelBadge: string;
  levelCategory: 'SD' | 'SMP' | 'SMA' | 'SNBT Intensive';
  schoolName: string;
  targetPtn: string;
  targetMajor: string;
  parentWhatsapp: string;
  sppStatus: SppStatus;
}

export interface StudentSummaryMetrics {
  totalRegistered: number;
  snbtTargetSubmitted: number;
  activeSppPercentage: number;
}
