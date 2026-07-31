'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Database,
  Play,
  Users,
  BarChart3,
  Download,
  Plus,
  Filter,
  MoreVertical,
  Edit,
  ExternalLink,
  ChevronDown,
  Layers,
  FileText,
  Sigma,
} from 'lucide-react';
import { useSnbtTryoutData } from './hooks/useSnbtTryoutData';
import { SubtestCategory } from './types';

export default function SnbtTryoutPage() {
  const {
    activeSubtest,
    setActiveSubtest,
    searchQuery,
    setSearchQuery,
    selectedBranch,
    setSelectedBranch,
    metrics,
    questionSets,
    ptnThresholds,
    leaderboard,
  } = useSnbtTryoutData();

  const subtests: SubtestCategory[] = [
    'TPS Penalaran Umum',
    'TPS Pemahaman Bacaan',
    'TPS Kuantitatif',
    'Lit. Bahasa Indonesia',
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
          placeholder="Search question bank..."
          userTitle="Alex Rivera"
          userRole="LEAD ADMINISTRATOR"
          selectedBranch="Pusat - T.A. 2024/2025"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title & Top Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                SNBT Exam Bank & IRT Score Analytics
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Advanced Item Response Theory (IRT) monitoring and centralized tryout management.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Export IRT Score Matrix</span>
              </button>
              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md">
                <Plus className="w-4 h-4" />
                <span>Create New Tryout Event</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Question Bank Items */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Question Bank Items
                </p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.questionBankCount.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">Soal</span>
                </div>
                <p className="text-[10px] font-semibold text-blue-600 mt-0.5">
                  TPS, Penalaran, Literasi
                </p>
              </div>
            </div>

            {/* Card 2: Active Tryout */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 fill-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Active Tryout
                  </p>
                  <span className="text-[9px] font-extrabold text-red-600 bg-red-50 px-1.5 py-0.2 rounded-xs uppercase tracking-wider">
                    LIVE
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-900 leading-snug">
                  {metrics.activeTryoutTitle}
                </p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                  Started: {metrics.activeTryoutStartTime}
                </p>
              </div>
            </div>

            {/* Card 3: Total Participants */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Total Participants
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.totalParticipants}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600">
                    {metrics.participantsDonePercentage}% Done
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-emerald-500 h-full rounded-full"
                    style={{ width: `${metrics.participantsDonePercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Card 4: Avg IRT Score */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Avg IRT Score
                </p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.avgIrtScore}
                  </span>
                  <span className="text-xs font-bold text-purple-600">
                    {metrics.targetIrtPercentage}% Target
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                  +{metrics.momGrowth}% from Prev. Event
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section Grid (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Question Bank Subtests (~7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between space-y-5">
              <div>
                {/* Header & Actions */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                    Question Bank Subtests
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <button className="p-1 hover:text-gray-600 transition-colors">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-gray-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtest Tabs */}
                <div className="flex items-center gap-6 border-b border-gray-100 overflow-x-auto pb-2 mb-5">
                  {subtests.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubtest(sub)}
                      className={`text-xs font-bold transition-all relative py-1 whitespace-nowrap ${
                        activeSubtest === sub
                          ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                          : 'text-gray-400 hover:text-gray-700'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                {/* Question Sets List */}
                <div className="space-y-3">
                  {questionSets.map((qs) => (
                    <div
                      key={qs.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50/70 border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          {qs.code.includes('04') ? (
                            <Layers className="w-5 h-5" />
                          ) : qs.code.includes('02') ? (
                            <FileText className="w-5 h-5" />
                          ) : (
                            <Sigma className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900 leading-snug">
                            {qs.code} - {qs.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-gray-400 font-semibold">
                              {qs.questionCount} Questions
                            </span>
                            <span className="text-gray-300">•</span>
                            <span
                              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase ${qs.difficultyColor}`}
                            >
                              {qs.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                        Edit Questions
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right PTN Thresholds Card (~5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between space-y-5">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                    Avg Score vs PTN Thresholds
                  </h2>
                  <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    IRT FORMULA ACTIVE
                  </span>
                </div>

                {/* Progress Bars List */}
                <div className="space-y-5 my-4">
                  {ptnThresholds.map((ptn) => (
                    <div key={ptn.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-gray-800">{ptn.majorName}</span>
                        <span className="font-extrabold text-blue-600">
                          Avg: {ptn.avgScore} / {ptn.targetScore}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${ptn.color}`}
                          style={{ width: `${ptn.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-1 bg-blue-600 rounded-xs" />
                  <span className="text-xs font-semibold text-gray-600">Current Avg</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-1 bg-gray-200 rounded-xs" />
                  <span className="text-xs font-semibold text-gray-600">PTN Threshold</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Table Card: Top Student Tryout Leaderboard */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                Top Student Tryout Leaderboard
              </h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-gray-100/70 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-700">
                  <span>{selectedBranch}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  View All Results
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-4 w-12">Rank</th>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Branch</th>
                    <th className="py-3 px-4">Score</th>
                    <th className="py-3 px-4">Target PTN</th>
                    <th className="py-3 px-4">Passing Chance</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leaderboard.map((lb) => (
                    <tr key={lb.id} className="hover:bg-gray-50/70 transition-colors">
                      {/* Rank Circle */}
                      <td className="py-3.5 px-4">
                        <div
                          className={`w-7 h-7 rounded-full font-extrabold text-xs flex items-center justify-center ${
                            lb.rank === 1
                              ? 'bg-amber-100 text-amber-700'
                              : lb.rank === 2
                              ? 'bg-slate-100 text-slate-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}
                        >
                          {lb.rank}
                        </div>
                      </td>

                      {/* Student Info */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {lb.avatarInitials}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 leading-snug">
                              {lb.studentName}
                            </p>
                            <p className="text-[10px] text-gray-400 font-medium">
                              {lb.nis}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Branch */}
                      <td className="py-3.5 px-4 text-xs font-semibold text-gray-600">
                        {lb.branch}
                      </td>

                      {/* IRT Score */}
                      <td className="py-3.5 px-4 text-sm font-extrabold text-blue-600">
                        {lb.score}
                      </td>

                      {/* Target PTN */}
                      <td className="py-3.5 px-4">
                        <div>
                          <p className="text-xs font-bold text-gray-900 leading-snug">
                            {lb.targetPtn}
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium">
                            {lb.targetMajor}
                          </p>
                        </div>
                      </td>

                      {/* Passing Chance Badge */}
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block text-[9px] font-extrabold px-2.5 py-1 rounded-md uppercase ${lb.passingChanceColor}`}
                        >
                          {lb.passingChance}
                        </span>
                      </td>

                      {/* Action Link */}
                      <td className="py-3.5 px-4 text-right">
                        <button className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                          <span>View Radar Score</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
