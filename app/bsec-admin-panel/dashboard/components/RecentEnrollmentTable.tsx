'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { StudentEnrollment, GradeLevel } from '../types';

interface RecentEnrollmentTableProps {
  enrollments: StudentEnrollment[];
  selectedGradeFilter: GradeLevel;
  onGradeFilterChange: (grade: GradeLevel) => void;
}

export function RecentEnrollmentTable({
  enrollments,
  selectedGradeFilter,
  onGradeFilterChange,
}: RecentEnrollmentTableProps) {
  const gradeFilters: GradeLevel[] = ['All', 'SD', 'SMP', 'SMA', 'SNBT'];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 tracking-tight">
            Recent Student Enrollment
          </h2>
          <p className="text-xs text-gray-400 mt-0.5 font-medium">
            Manage and track newly admitted students
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-gray-100/80 p-1 rounded-full self-start md:self-auto overflow-x-auto max-w-full">
          {gradeFilters.map((grade) => (
            <button
              key={grade}
              onClick={() => onGradeFilterChange(grade)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedGradeFilter === grade
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 pr-4">Avatar / Student Name</th>
              <th className="pb-3 px-4">Grade Level</th>
              <th className="pb-3 px-4">Date Enrolled</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 pl-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/80">
            {enrollments.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50/60 transition-colors group">
                {/* Student Avatar & Name */}
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {student.avatarInitials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 leading-snug">
                        {student.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium">
                        ID: {student.code}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Grade Level */}
                <td className="py-3.5 px-4 text-xs font-semibold text-gray-600">
                  {student.gradeLevel}
                </td>

                {/* Date Enrolled */}
                <td className="py-3.5 px-4 text-xs font-medium text-gray-500">
                  {student.dateEnrolled}
                </td>

                {/* Status */}
                <td className="py-3.5 px-4">
                  {student.status === 'ACTIVE' ? (
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 tracking-wider">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 tracking-wider">
                      PENDING
                    </span>
                  )}
                </td>

                {/* Action Link */}
                <td className="py-3.5 pl-4 text-right">
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Load More */}
      <div className="mt-4 pt-3 text-center border-t border-gray-100">
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors">
          <span>Load more records</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
