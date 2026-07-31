export type CalendarViewMode = 'Day' | 'Week' | 'Month';

export type ScheduleLevelFilter = 'All Levels' | 'SMA' | 'SMP' | 'Primary';

export type RoomOccupancyStatus = 'Occupied' | 'Available' | 'Online' | 'Offline';

export interface ScheduleSession {
  id: string;
  title: string;
  tutor: string;
  room: string;
  dayIndex: number; // 0: Mon, 1: Tue, 2: Wed, 3: Thu, 4: Fri, 5: Sat
  startTime: string; // e.g. "09:00"
  endTime: string; // e.g. "11:00"
  variant: 'dark-blue' | 'light-blue' | 'light-green';
}

export interface RoomOccupancyItem {
  id: string;
  name: string;
  seatsInfo: string;
  status: RoomOccupancyStatus;
  statusBadge: string;
  color: string;
}

export interface ScheduleConflict {
  id: string;
  title: string;
  message: string;
  day: string;
  time: string;
}

export interface AvailableTutor {
  id: string;
  name: string;
  initials: string;
}
