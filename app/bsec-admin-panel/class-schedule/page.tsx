'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Plus,
  ChevronDown,
  Search,
  AlertTriangle,
  FolderKanban,
  Users,
} from 'lucide-react';
import { useClassScheduleData } from './hooks/useClassScheduleData';
import { CalendarViewMode, ScheduleLevelFilter } from './types';

export default function ClassSchedulePage() {
  const {
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
  } = useClassScheduleData();

  const viewModes: CalendarViewMode[] = ['Day', 'Week', 'Month'];
  const levelFilters: ScheduleLevelFilter[] = ['All Levels', 'SMA', 'SMP', 'Primary'];
  const weekDays = [
    { name: 'MON', date: '20' },
    { name: 'TUE', date: '21' },
    { name: 'WED', date: '22', isToday: true },
    { name: 'THU', date: '23' },
    { name: 'FRI', date: '24' },
    { name: 'SAT', date: '25' },
  ];

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '01:00', '03:00'];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search for class, student, or tutor..."
          userTitle="Alex Rivera"
          userRole="SENIOR ADMINISTRATOR"
          selectedBranch="Pusat - T.A. 2024/2025"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title & Top Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Class Schedule & Room Allocations
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Manage weekly academic flow and academic resource distribution.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Export Weekly Schedule</span>
              </button>
              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md">
                <Plus className="w-4 h-4" />
                <span>Create New Session</span>
              </button>
            </div>
          </div>

          {/* Calendar Controls & Filters Card */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs space-y-4">
            {/* Top Date Navigator & View Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-100/80 rounded-xl p-1 border border-gray-200/50">
                  <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <h2 className="text-sm font-extrabold text-gray-900 tracking-tight">
                  {dateRangeLabel}
                </h2>

                <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors ml-1">
                  Today
                </button>
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center bg-gray-100/80 p-1 rounded-xl border border-gray-200/50 self-start md:self-auto">
                {viewModes.map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === mode
                        ? 'bg-white text-gray-900 shadow-2xs'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Pills & Selectors Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-gray-100">
              {/* Level Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                {levelFilters.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                      selectedLevel === lvl
                        ? 'bg-blue-100 text-blue-700 font-bold'
                        : 'bg-gray-100/70 text-gray-600 hover:bg-gray-200/70'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

              {/* Room & Tutor Selectors */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-100/70 px-3.5 py-1.5 rounded-xl border border-transparent text-xs font-semibold text-gray-700">
                  <span className="text-gray-400 font-medium">Room:</span>
                  <span>{selectedRoom}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>

                <div className="relative min-w-[160px]">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={tutorFilter}
                    onChange={(e) => setTutorFilter(e.target.value)}
                    placeholder="Filter Tutor"
                    className="w-full bg-gray-100/70 text-xs font-semibold text-gray-700 pl-3.5 pr-8 py-1.5 rounded-xl border border-transparent focus:bg-white focus:border-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid (Timetable + Widgets) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Timetable Grid (~70% width) */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-xs overflow-x-auto">
              <div className="min-w-[640px]">
                {/* Timetable Header (Days) */}
                <div className="grid grid-cols-7 border-b border-gray-100 text-center pb-3">
                  <div className="flex items-center justify-center text-gray-300">
                    <Calendar className="w-4 h-4" />
                  </div>
                  {weekDays.map((day) => (
                    <div key={day.name} className="space-y-0.5">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {day.name}
                      </p>
                      <p
                        className={`text-sm font-extrabold ${
                          day.isToday ? 'text-blue-600' : 'text-gray-800'
                        }`}
                      >
                        {day.date}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Timetable Rows & Class Cards */}
                <div className="relative divide-y divide-gray-100 min-h-[380px]">
                  {timeSlots.map((slot) => (
                    <div key={slot} className="grid grid-cols-7 h-20 items-start pt-2">
                      <div className="text-[11px] font-semibold text-gray-400 pr-3 text-right">
                        {slot}
                      </div>
                      <div className="border-l border-gray-100/80 h-full" />
                      <div className="border-l border-gray-100/80 h-full" />
                      <div className="border-l border-gray-100/80 h-full" />
                      <div className="border-l border-gray-100/80 h-full" />
                      <div className="border-l border-gray-100/80 h-full" />
                      <div className="border-l border-gray-100/80 h-full" />
                    </div>
                  ))}

                  {/* Absolute Positioned Class Session Blocks */}

                  {/* 1. MON Class (Dr. Sarah Johnson) */}
                  <div className="absolute top-12 left-[14.8%] w-[13%] bg-[#3b5998] text-white p-3 rounded-xl shadow-md z-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-semibold text-blue-100">09:00 - 11:00</span>
                    </div>
                    <p className="text-xs font-extrabold truncate mt-0.5">Intensive...</p>
                    <p className="text-[10px] text-blue-200 font-medium truncate">Dr. Sarah Johnson</p>
                    <span className="inline-block mt-2 text-[9px] font-bold bg-blue-900/60 px-1.5 py-0.5 rounded-xs">
                      Room 101
                    </span>
                  </div>

                  {/* 2. TUE Class (SMA Physics - Michael K) */}
                  <div className="absolute top-24 left-[29.1%] w-[13%] bg-blue-100 border border-blue-200 text-blue-900 p-3 rounded-xl shadow-sm z-10">
                    <span className="text-[9px] font-bold text-blue-600">10:00 - 12:00</span>
                    <p className="text-xs font-extrabold truncate mt-0.5">SMA Physics</p>
                    <p className="text-[10px] text-blue-700 font-medium truncate">Tutor Michael K.</p>
                    <span className="inline-block mt-2 text-[9px] font-bold bg-white text-blue-700 px-1.5 py-0.5 rounded-xs border border-blue-200">
                      Room 204
                    </span>
                  </div>

                  {/* 3. THU Class (SMP English - Jane Doe) */}
                  <div className="absolute top-12 left-[57.7%] w-[13%] bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-xl shadow-sm z-10">
                    <span className="text-[9px] font-bold text-emerald-600">09:00 - 11:00</span>
                    <p className="text-xs font-extrabold truncate mt-0.5">SMP English</p>
                    <p className="text-[10px] text-emerald-700 font-medium truncate">Jane Doe</p>
                    <span className="inline-block mt-2 text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-xs">
                      Room 103
                    </span>
                  </div>

                  {/* 4. WED Conflict Alert Banner */}
                  <div className="absolute bottom-12 left-[43.4%] -translate-x-1/2 w-[160px] bg-red-100 border border-red-300 rounded-xl p-2.5 shadow-sm text-center z-20">
                    <div className="flex items-center justify-center gap-1.5 text-red-700 text-xs font-bold mb-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Conflict: Room 101</span>
                    </div>
                    <p className="text-[9px] text-red-600 font-semibold leading-tight">
                      Two classes at 01:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets (~30% width) */}
            <div className="lg:col-span-1 space-y-6">
              {/* Widget 1: SCHEDULE CONFLICTS Alert Card */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 shadow-2xs">
                <div className="flex items-center gap-2.5 text-amber-800 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider">
                    Schedule Conflicts
                  </h3>
                </div>

                <p className="text-xs text-amber-900 font-medium leading-relaxed mb-4">
                  {activeConflict.message}
                </p>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-xs transition-colors">
                  Resolve Conflict
                </button>
              </div>

              {/* Widget 2: ROOM OCCUPANCY Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Room Occupancy
                  </h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800">
                    Live View
                  </button>
                </div>

                {/* Rooms Status List */}
                <div className="space-y-3">
                  {roomsOccupancy.map((rm) => (
                    <div
                      key={rm.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/70 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${rm.color}`} />
                        <div>
                          <p className="text-xs font-bold text-gray-900 leading-snug">
                            {rm.name}
                          </p>
                          <p className="text-[9px] text-gray-400 font-semibold uppercase">
                            {rm.seatsInfo}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-gray-600">
                        {rm.statusBadge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-gray-100 text-center">
                  <button className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    <FolderKanban className="w-4 h-4" />
                    <span>Manage Resources</span>
                  </button>
                </div>
              </div>

              {/* Widget 3: TUTOR AVAILABILITY Card */}
              <div className="bg-[#1e293b] text-white rounded-2xl p-5 shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    Tutor Availability
                  </h3>
                </div>

                <p className="text-xs text-gray-300 font-medium leading-relaxed">
                  4 Tutors are currently on break and available for substitution.
                </p>

                {/* Avatars */}
                <div className="flex items-center gap-1.5 pt-2">
                  {availableTutors.map((tut) => (
                    <div
                      key={tut.id}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-[#1e293b]"
                      title={tut.name}
                    >
                      {tut.initials}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-slate-700 text-gray-300 font-bold text-xs flex items-center justify-center ring-2 ring-[#1e293b]">
                    +1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
