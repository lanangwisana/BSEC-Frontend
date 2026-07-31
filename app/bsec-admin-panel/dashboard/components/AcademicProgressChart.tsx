'use client';

import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';
import { AnalyticsPoint } from '../types';

interface AcademicProgressChartProps {
  data: AnalyticsPoint[];
  selectedDateRange: string;
  onDateRangeChange: (range: string) => void;
}

export function AcademicProgressChart({
  data,
  selectedDateRange,
  onDateRangeChange,
}: AcademicProgressChartProps) {
  // Compute SVG viewBox coordinates for clean responsive line chart
  const width = 600;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;

  const minVal = 50;
  const maxVal = 100;

  const pointsCount = data.length;
  const stepX = (width - paddingX * 2) / (pointsCount - 1);

  // Helper to map (index, score) to SVG coordinates
  const getCoords = (index: number, score: number) => {
    const x = paddingX + index * stepX;
    const y = height - paddingY - ((score - minVal) / (maxVal - minVal)) * (height - paddingY * 2);
    return { x, y };
  };

  // Build SVG path strings
  const avgScorePoints = data.map((d, i) => getCoords(i, d.avgScore));
  const tryoutPoints = data.map((d, i) => getCoords(i, d.tryoutAverage));

  const buildPathString = (points: { x: number; y: number }[]) => {
    return points.reduce((acc, pt, i) => {
      return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, '');
  };

  const avgScorePath = buildPathString(avgScorePoints);
  const tryoutPath = buildPathString(tryoutPoints);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 tracking-tight">
            Student Academic Progress & SNBT Analytics
          </h2>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Average score comparison across all active branches
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button className="flex items-center gap-2 bg-gray-100/80 hover:bg-gray-200/80 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 transition-colors">
            <span>{selectedDateRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>
          <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Line Chart */}
      <div className="relative w-full overflow-hidden my-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible"
        >
          {/* Horizontal Grid lines */}
          {[60, 75, 90].map((val) => {
            const y = height - paddingY - ((val - minVal) / (maxVal - minVal)) * (height - paddingY * 2);
            return (
              <line
                key={val}
                x1={paddingX - 10}
                y1={y}
                x2={width - paddingX + 10}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            );
          })}

          {/* Lines */}
          <path
            d={avgScorePath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={tryoutPath}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {avgScorePoints.map((pt, i) => (
            <g key={`avg-${i}`}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4"
                className="fill-white stroke-blue-600 stroke-[3]"
              />
            </g>
          ))}

          {tryoutPoints.map((pt, i) => (
            <g key={`try-${i}`}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="3.5"
                className="fill-white stroke-slate-800 stroke-[2.5]"
              />
            </g>
          ))}

          {/* X Axis Labels */}
          {data.map((d, i) => {
            const x = paddingX + i * stepX;
            return (
              <text
                key={d.month}
                x={x}
                y={height - 5}
                textAnchor="middle"
                className="text-[11px] font-semibold fill-gray-500"
              >
                {d.month}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-1 bg-blue-600 rounded-xs"></span>
          <span className="text-xs font-semibold text-gray-700">Avg Score</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-1 bg-slate-800 rounded-xs"></span>
          <span className="text-xs font-semibold text-gray-700">Tryout Average</span>
        </div>
      </div>
    </div>
  );
}
