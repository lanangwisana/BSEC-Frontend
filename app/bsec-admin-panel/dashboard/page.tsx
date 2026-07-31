'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatCards } from './components/StatCards';
import { AcademicProgressChart } from './components/AcademicProgressChart';
import { CmsLandingCard } from './components/CmsLandingCard';
import { RecentEnrollmentTable } from './components/RecentEnrollmentTable';
import { TodaySchedule } from './components/TodaySchedule';
import { useDashboardData } from './hooks/useDashboardData';

export default function AdminDashboardPage() {
  const {
    selectedBranch,
    searchQuery,
    setSearchQuery,
    selectedGradeFilter,
    setSelectedGradeFilter,
    selectedDateRange,
    setSelectedDateRange,
    metrics,
    analyticsData,
    enrollments,
    scheduleItems,
  } = useDashboardData();

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-gray-800">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedBranch={selectedBranch}
        />

        {/* Dashboard Main Content Area */}
        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Top Metric Stat Cards Grid */}
          <StatCards metrics={metrics} />

          {/* Middle Row: Academic Chart + CMS Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AcademicProgressChart
                data={analyticsData}
                selectedDateRange={selectedDateRange}
                onDateRangeChange={setSelectedDateRange}
              />
            </div>
            <div className="lg:col-span-1">
              <CmsLandingCard />
            </div>
          </div>

          {/* Bottom Row: Recent Enrollments + Today's Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentEnrollmentTable
                enrollments={enrollments}
                selectedGradeFilter={selectedGradeFilter}
                onGradeFilterChange={setSelectedGradeFilter}
              />
            </div>
            <div className="lg:col-span-1">
              <TodaySchedule scheduleItems={scheduleItems} />
            </div>
          </div>
        </main>

        {/* Footer Bar */}
        <footer className="mt-auto px-8 py-4 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-gray-400 gap-2">
          <div>
            © {new Date().getFullYear()} BSEC MANAGEMENT SYSTEM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              SYSTEM STATUS: OPTIMAL
            </span>
            <a href="#" className="hover:text-gray-700 transition-colors">
              HELP CENTER
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              PRIVACY POLICY
            </a>
          </div>
        </footer>
      </div>

      {/* Floating Action Button (+ FAB) */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#364FAB] hover:bg-[#2b3e8c] text-white flex items-center justify-center shadow-lg shadow-[#364FAB]/40 hover:scale-105 active:scale-95 transition-all duration-200 z-50 cursor-pointer"
        title="Add New Record"
      >
        <Plus className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  );
}