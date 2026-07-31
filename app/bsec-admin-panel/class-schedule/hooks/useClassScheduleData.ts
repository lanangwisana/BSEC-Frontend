'use client';

import { useState, useMemo } from 'react';
import {
  CalendarViewMode,
  ScheduleLevelFilter,
  ScheduleSession,
  RoomOccupancyItem,
  ScheduleConflict,
  AvailableTutor,
} from '../types';

export function useClassScheduleData() {
  const [viewMode, setViewMode] = useState<CalendarViewMode>('Week');
  const [selectedLevel, setSelectedLevel] = useState<ScheduleLevelFilter>('All Levels');
  const [selectedRoom, setSelectedRoom] = useState('All Rooms');
  const [searchQuery, setSearchQuery] = useState('');
  const [tutorFilter, setTutorFilter] = useState('');
  const [dateRangeLabel, setDateRangeLabel] = useState('Mon, Oct 20 - Sat, Oct 25, 2026');

  // Timetable Sessions matching Image 4
  const sessions: ScheduleSession[] = useMemo(() => [
    {
      id: 'sess-1',
      title: 'Intensive...',
      tutor: 'Dr. Sarah Johnson',
      room: 'Room 101',
      dayIndex: 0, // MON
      startTime: '09:00',
      endTime: '11:00',
      variant: 'dark-blue',
    },
    {
      id: 'sess-2',
      title: 'SMA Physics',
      tutor: 'Tutor Michael K.',
      room: 'Room 204',
      dayIndex: 1, // TUE
      startTime: '10:00',
      endTime: '12:00',
      variant: 'light-blue',
    },
    {
      id: 'sess-3',
      title: 'SMP English',
      tutor: 'Jane Doe',
      room: 'Room 103',
      dayIndex: 3, // THU
      startTime: '09:00',
      endTime: '11:00',
      variant: 'light-green',
    },
  ], []);

  // Room Occupancy Items matching Image 4
  const roomsOccupancy: RoomOccupancyItem[] = useMemo(() => [
    {
      id: 'room-1',
      name: 'Room 101',
      seatsInfo: '22/30 SEATS FILLED',
      status: 'Occupied',
      statusBadge: 'Occupied',
      color: 'bg-red-500',
    },
    {
      id: 'room-2',
      name: 'Room 102',
      seatsInfo: '0/24 SEATS FILLED',
      status: 'Available',
      statusBadge: 'Available',
      color: 'bg-emerald-500',
    },
    {
      id: 'room-3',
      name: 'Virtual Room A',
      seatsInfo: 'ZOOM CONNECTOR',
      status: 'Online',
      statusBadge: 'Online',
      color: 'bg-blue-500',
    },
    {
      id: 'room-4',
      name: 'Room 103',
      seatsInfo: 'UNDER MAINTENANCE',
      status: 'Offline',
      statusBadge: 'Offline',
      color: 'bg-gray-400',
    },
  ], []);

  // Schedule Conflict Warning
  const activeConflict: ScheduleConflict = useMemo(() => ({
    id: 'conf-1',
    title: 'SCHEDULE CONFLICTS',
    message:
      '1 Room Overlap Warning: Room 101 requested for two parallel classes at 01:00 PM on Wednesday.',
    day: 'Wednesday',
    time: '01:00 PM',
  }), []);

  // Available Tutors on Break
  const availableTutors: AvailableTutor[] = useMemo(() => [
    { id: 'tut-1', name: 'Dr. Sarah W.', initials: 'SW' },
    { id: 'tut-2', name: 'Budi Santoso', initials: 'BS' },
    { id: 'tut-3', name: 'Jessica Lim', initials: 'JL' },
    { id: 'tut-4', name: 'Ahmad Fauzi', initials: 'AF' },
  ], []);

  return {
    viewMode,
    setViewMode,
    selectedLevel,
    setSelectedLevel,
    selectedRoom,
    setSelectedRoom,
    searchQuery,
    setSearchQuery,
    tutorFilter,
    setTutorFilter,
    dateRangeLabel,
    sessions,
    roomsOccupancy,
    activeConflict,
    availableTutors,
  };
}
