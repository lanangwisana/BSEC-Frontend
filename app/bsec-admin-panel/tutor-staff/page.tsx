'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Users,
  Calendar,
  Star,
  Download,
  UserPlus,
  ChevronDown,
  LayoutGrid,
  List,
  Filter,
  MessageSquare,
  Clock,
  UserCheck,
  AlertCircle,
  MapPin,
} from 'lucide-react';
import { useTutorStaffData } from './hooks/useTutorStaffData';
import { SubjectCategory } from './types';

export default function TutorStaffPage() {
  const {
    selectedSubject,
    setSelectedSubject,
    searchQuery,
    setSearchQuery,
    selectedYearBranch,
    setSelectedYearBranch,
    viewMode,
    setViewMode,
    metrics,
    tutors,
    todayActivities,
  } = useTutorStaffData();

  const subjects: SubjectCategory[] = [
    'All Subjects',
    'Matematika',
    'Fisika',
    'Bahasa Inggris',
    'TPS SNBT',
    'Biologi',
  ];

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
          placeholder="Search tutors, NIP, or subjects..."
          userTitle="Alex Rivera"
          userRole="SUPER ADMIN"
          selectedBranch="Pusat - T.A. 2024/2025"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title & Action Buttons */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Tutor & Teaching Staff Directory
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Manage 85 active tutors, subjects, and schedules across all branches.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Export Roster</span>
              </button>
              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md">
                <UserPlus className="w-4 h-4" />
                <span>Add New Tutor</span>
              </button>
            </div>
          </div>

          {/* 3 Stat Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Total Active Tutors */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Total Active Tutors
                </p>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                  {metrics.totalActiveTutors}
                </p>
              </div>
            </div>

            {/* Card 2: Today's Classes */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Today's Classes
                </p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.todayClasses}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">Sessions</span>
                </div>
              </div>
            </div>

            {/* Card 3: Avg Tutor Rating */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-blue-600 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Avg Tutor Rating
                </p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.avgRating}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Filter & View Toggle Bar */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Subject Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {subjects.map((subj) => (
                <button
                  key={subj}
                  onClick={() => setSelectedSubject(subj)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedSubject === subj
                      ? 'bg-[#1e293b] text-white shadow-xs'
                      : 'bg-gray-100/70 text-gray-600 hover:bg-gray-200/70'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>

            {/* View Mode & More Filters */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="flex items-center bg-gray-100/70 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-400'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-400'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-colors">
                <Filter className="w-3.5 h-3.5 text-gray-400" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          {/* Main Grid Section (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Columns: Tutor Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Tutor Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center border border-blue-200/60">
                              {tutor.avatarInitials}
                            </div>
                            <span
                              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white ${
                                tutor.status === 'ACTIVE'
                                  ? 'bg-emerald-500'
                                  : 'bg-amber-400'
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-extrabold text-gray-900 leading-snug">
                              {tutor.name}
                            </h3>
                            <p className="text-[10px] text-gray-400 font-medium">
                              NIP: {tutor.nip}
                            </p>
                          </div>
                        </div>

                        {/* Role Badge */}
                        <span
                          className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${
                            tutor.roleBadge === 'MASTER TUTOR' || tutor.roleBadge === 'SENIOR TUTOR'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tutor.roleBadge}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-gray-800">
                          {tutor.rating}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          ({tutor.reviewCount} reviews)
                        </span>
                      </div>

                      {/* Subject Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {tutor.subjects.map((subj) => (
                          <span
                            key={subj}
                            className="bg-gray-100/80 text-gray-700 text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                          >
                            {subj}
                          </span>
                        ))}
                      </div>

                      {/* Details Breakdown */}
                      <div className="pt-3 border-t border-gray-100 grid grid-cols-2 text-left mb-4">
                        <div>
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                            Weekly Load
                          </p>
                          <p className="text-xs font-bold text-gray-800 mt-0.5">
                            {tutor.weeklyLoad}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                            Branch
                          </p>
                          <p className="text-xs font-bold text-gray-800 mt-0.5">
                            {tutor.branch}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-center">
                      <button className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors py-1.5 rounded-lg hover:bg-emerald-50/60">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat Tutor</span>
                      </button>
                      <button className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors py-1.5 rounded-lg hover:bg-blue-50/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>View Schedule</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More Tutors Button */}
              <div className="text-center pt-2">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-700 shadow-2xs transition-colors">
                  <span>Show 15 More Tutors</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Column: Today's Status Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-sm font-extrabold text-gray-900 tracking-tight">
                      Today's Status
                    </h2>
                    <span className="flex items-center gap-1 text-[9px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium mb-5">
                    Real-time teaching activity for Monday, Oct 24
                  </p>

                  {/* Schedule Timeline */}
                  <div className="space-y-4">
                    {todayActivities.map((act) => (
                      <div
                        key={act.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          act.isUrgent
                            ? 'bg-red-50/50 border-red-100'
                            : 'bg-gray-50/70 border-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-extrabold text-gray-800 leading-tight">
                            {act.tutorName}
                          </span>
                          <span
                            className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                              act.statusTag === 'TEACHING NOW'
                                ? 'bg-emerald-100 text-emerald-700'
                                : act.statusTag === 'COMPLETED'
                                ? 'bg-gray-200 text-gray-600'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {act.statusTag}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-gray-600 mb-2">
                          {act.sessionName} - {act.room}
                        </p>

                        <div className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-1 text-gray-400 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{act.timeSlot}</span>
                          </div>

                          {act.isUrgent && (
                            <button className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline">
                              Assign Now
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl text-xs font-semibold shadow-2xs transition-colors">
                    <UserCheck className="w-4 h-4 text-gray-600" />
                    <span>Request Substitute Tutor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
