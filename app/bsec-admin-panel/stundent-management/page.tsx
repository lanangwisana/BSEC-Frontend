'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Users,
  Target,
  CheckCircle2,
  Download,
  UserPlus,
  ChevronDown,
  Filter,
  MessageSquare,
} from 'lucide-react';
import { useStudentManagementData } from './hooks/useStudentManagementData';
import { StudentLevelTab } from './types';

export default function StudentManagementPage() {
  const {
    activeTab,
    setActiveTab,
    selectedBranch,
    setSelectedBranch,
    selectedStatusFilter,
    setSelectedStatusFilter,
    searchQuery,
    setSearchQuery,
    selectedStudentIds,
    handleSelectAll,
    handleSelectOne,
    metrics,
    students,
  } = useStudentManagementData();

  const levelTabs: StudentLevelTab[] = [
    'All Levels',
    'SD',
    'SMP',
    'SMA',
    'SNBT Intensive',
  ];

  const isAllSelected =
    students.length > 0 && selectedStudentIds.length === students.length;

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search Student Name or NIS..."
          userTitle="Admin User"
          userRole="Principal"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title Banner & Top Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Student Directory & Academic Records
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Manage and monitor academic progress for 1,240 active students.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Export Data</span>
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md shadow-blue-600/20">
                <UserPlus className="w-4 h-4" />
                <span>Register New Student</span>
              </button>
            </div>
          </div>

          {/* Stat Summary Cards (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Total Registered */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Total Registered
                </p>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                  {metrics.totalRegistered.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            {/* Card 2: SNBT Target Submitted */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  SNBT Target Submitted
                </p>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                  {metrics.snbtTargetSubmitted}
                </p>
              </div>
            </div>

            {/* Card 3: Active SPP Status */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Active SPP Status
                </p>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                  {metrics.activeSppPercentage}%
                </p>
              </div>
            </div>
          </div>

          {/* Level Tabs & Filter Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b md:border-b-0 border-gray-100 overflow-x-auto pb-2 md:pb-0">
              {levelTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-bold transition-all relative py-1 whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-colors">
                <span>{selectedBranch}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-colors">
                <span>{selectedStatusFilter}</span>
                <Filter className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Student Directory Table Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-5 w-10">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                      />
                    </th>
                    <th className="py-4 px-4">Student Info</th>
                    <th className="py-4 px-4">Level & School</th>
                    <th className="py-4 px-4">Target PTN</th>
                    <th className="py-4 px-4">Parent WhatsApp</th>
                    <th className="py-4 px-4">SPP Status</th>
                    <th className="py-4 px-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => {
                    const isSelected = selectedStudentIds.includes(student.id);

                    return (
                      <tr
                        key={student.id}
                        className={`hover:bg-gray-50/70 transition-colors ${
                          isSelected ? 'bg-blue-50/30' : ''
                        }`}
                      >
                        {/* Checkbox */}
                        <td className="py-4 px-5">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) =>
                              handleSelectOne(student.id, e.target.checked)
                            }
                            className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                          />
                        </td>

                        {/* Student Info */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200/50">
                              {student.avatarInitials}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-900 leading-snug">
                                {student.name}
                              </p>
                              <p className="text-[10px] text-gray-400 font-medium">
                                NIS: {student.nis}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Level & School */}
                        <td className="py-4 px-4">
                          <div>
                            <span className="inline-block text-[9px] font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase mb-1">
                              {student.levelBadge}
                            </span>
                            <p className="text-xs font-semibold text-gray-600">
                              {student.schoolName}
                            </p>
                          </div>
                        </td>

                        {/* Target PTN */}
                        <td className="py-4 px-4">
                          <div>
                            <p className="text-xs font-bold text-gray-800 leading-snug">
                              {student.targetPtn}
                            </p>
                            <p className="text-[10px] text-gray-400 font-medium">
                              {student.targetMajor}
                            </p>
                          </div>
                        </td>

                        {/* Parent WhatsApp */}
                        <td className="py-4 px-4">
                          <a
                            href={`https://wa.me/${student.parentWhatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4 fill-emerald-100 text-emerald-600" />
                            <span>Contact Parent</span>
                          </a>
                        </td>

                        {/* SPP Status */}
                        <td className="py-4 px-4">
                          {student.sppStatus === 'Paid' ? (
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 tracking-wider">
                              Paid
                            </span>
                          ) : (
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 tracking-wider">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* Action Link */}
                        <td className="py-4 px-5 text-right">
                          <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                            View Profile
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
