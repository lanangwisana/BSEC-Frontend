export type GradeLevel = 'All' | 'SD' | 'SMP' | 'SMA' | 'SNBT';

export type EnrollmentStatus = 'ACTIVE' | 'PENDING' | 'INACTIVE';

export interface StudentEnrollment {
  id: string;
  name: string;
  code: string;
  avatarInitials: string;
  gradeLevel: string;
  gradeCategory: 'SD' | 'SMP' | 'SMA' | 'SNBT';
  dateEnrolled: string;
  status: EnrollmentStatus;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  tutor: string;
  isCurrent?: boolean;
}

export interface AnalyticsPoint {
  month: string;
  avgScore: number;
  tryoutAverage: number;
}

export interface DashboardMetrics {
  totalActiveStudents: number;
  momGrowth: number;
  breakdown: {
    sd: number;
    smp: number;
    sma: number;
    snbt: number;
  };
  totalTutors: number;
  classesToday: number;
  capacityPercentage: number;
  snbtParticipationRate: number;
  monthlyRevenue: number;
  targetRevenue: number;
}
