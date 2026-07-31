'use client';

import React from 'react';
import { Users, GraduationCap, ClipboardCheck, Wallet } from 'lucide-react';
import { DashboardMetrics } from '../types';

interface StatCardsProps {
  metrics: DashboardMetrics;
}

export function StatCards({ metrics }: StatCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Card 1: Total Active Students */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-full">
              +{metrics.momGrowth}% MoM
            </span>
          </div>

          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Total Active Students
          </p>
          <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {metrics.totalActiveStudents.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Breakdown Sub-metrics */}
        <div className="mt-5 pt-3 border-t border-gray-100 grid grid-cols-4 text-center divide-x divide-gray-100">
          <div>
            <span className="block text-[10px] font-bold text-gray-400">SD</span>
            <span className="block text-xs font-bold text-gray-700">{metrics.breakdown.sd}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold text-gray-400">SMP</span>
            <span className="block text-xs font-bold text-gray-700">{metrics.breakdown.smp}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold text-gray-400">SMA</span>
            <span className="block text-xs font-bold text-gray-700">{metrics.breakdown.sma}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold text-gray-400">SNBT</span>
            <span className="block text-xs font-bold text-gray-700">{metrics.breakdown.snbt}</span>
          </div>
        </div>
      </div>

      {/* Card 2: Tutors & Classes */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
            <GraduationCap className="w-5 h-5" />
          </div>

          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Tutors & Classes
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {metrics.totalTutors}
            </span>
            <span className="text-sm font-semibold text-gray-400">
              / {metrics.classesToday} Today
            </span>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mt-5">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            <span>Capacity</span>
            <span className="text-blue-600">{metrics.capacityPercentage}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${metrics.capacityPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card 3: SNBT Participation */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
            <ClipboardCheck className="w-5 h-5" />
          </div>

          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            SNBT Participation
          </p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {metrics.snbtParticipationRate}%
            </span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-xs tracking-wider">
              HIGH
            </span>
          </div>
        </div>

        {/* Segmented Progress */}
        <div className="mt-5">
          <div className="flex gap-1.5">
            <div className="h-1.5 flex-1 bg-blue-600 rounded-full" />
            <div className="h-1.5 flex-1 bg-blue-600 rounded-full" />
            <div className="h-1.5 flex-1 bg-blue-600 rounded-full" />
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 4: Monthly Revenue */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
            <Wallet className="w-5 h-5" />
          </div>

          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Monthly Revenue
          </p>
          <p className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
            Rp {(metrics.monthlyRevenue / 1000).toLocaleString('id-ID')}.000
          </p>
        </div>

        {/* Target Subtitle */}
        <div className="mt-5 pt-3 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500">
            TARGET: Rp 200M (92.5%)
          </p>
        </div>
      </div>
    </div>
  );
}
