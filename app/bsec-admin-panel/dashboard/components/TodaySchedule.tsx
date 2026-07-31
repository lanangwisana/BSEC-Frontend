'use client';

import React from 'react';
import { PlusCircle } from 'lucide-react';
import { ScheduleItem } from '../types';

interface TodayScheduleProps {
  scheduleItems: ScheduleItem[];
}

export function TodaySchedule({ scheduleItems }: TodayScheduleProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Today's Schedule
          </h2>
          <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider">
            View Full Calendar
          </button>
        </div>

        {/* Schedule Items List */}
        <div className="relative pl-4 space-y-6 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
          {scheduleItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[19px] top-1 w-3 h-3 rounded-full ring-4 ring-white ${
                  item.isCurrent ? 'bg-blue-600 ring-blue-100' : 'bg-blue-500'
                }`}
              />

              <div>
                {/* Time & NOW Badge */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold text-gray-400">{item.time}</span>
                  {item.isCurrent && (
                    <span className="text-[9px] font-extrabold text-white bg-blue-600 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">
                      NOW
                    </span>
                  )}
                </div>

                {/* Class Title */}
                <h3 className="text-xs font-extrabold text-gray-800 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Tags & Tutor */}
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-xs uppercase">
                    {item.location}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="font-medium text-gray-500">{item.tutor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Conflict Notice Card */}
      <div className="mt-6 bg-blue-50/60 border border-blue-100 rounded-xl p-3.5 flex items-start gap-3">
        <PlusCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-gray-800 leading-snug">
            Schedule conflict?
          </p>
          <p className="text-[10px] text-gray-500 mt-0.5 font-medium leading-normal">
            Update class slot directly from calendar.
          </p>
        </div>
      </div>
    </div>
  );
}
