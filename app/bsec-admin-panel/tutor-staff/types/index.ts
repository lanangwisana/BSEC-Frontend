export type SubjectCategory =
  | 'All Subjects'
  | 'Matematika'
  | 'Fisika'
  | 'Bahasa Inggris'
  | 'TPS SNBT'
  | 'Biologi';

export type TutorRoleBadge =
  | 'SENIOR TUTOR'
  | 'STAFF'
  | 'MASTER TUTOR'
  | 'JUNIOR TUTOR';

export type TutorOnlineStatus = 'ACTIVE' | 'AWAY' | 'OFFLINE';

export interface TutorRecord {
  id: string;
  name: string;
  nip: string;
  avatarInitials: string;
  roleBadge: TutorRoleBadge;
  status: TutorOnlineStatus;
  rating: number;
  reviewCount: number;
  subjects: string[];
  weeklyLoad: string; // e.g. "18/24 Sessions"
  branch: string; // e.g. "Pusat & Tebet"
}

export interface TodayTeachingActivity {
  id: string;
  tutorName: string;
  tutorAvatar?: string;
  statusTag: 'TEACHING NOW' | 'COMPLETED' | 'URGENT';
  sessionName: string;
  room: string;
  timeSlot: string;
  isUrgent?: boolean;
}

export interface TutorMetrics {
  totalActiveTutors: number;
  todayClasses: number;
  avgRating: number;
}
