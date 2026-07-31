'use client';

import React from 'react';
import { ChevronRight, LayoutTemplate, MessageSquare, Newspaper, ExternalLink } from 'lucide-react';

export function CmsLandingCard() {
  const quickLinks = [
    { label: 'Hero Section', icon: LayoutTemplate },
    { label: 'Testimonials', icon: MessageSquare },
    { label: 'Latest News', icon: Newspaper },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            CMS Landing Page
          </h2>
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            LIVE SYSTEM
          </span>
        </div>

        {/* Website Preview Card */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl p-3 mb-4 border border-blue-100/60 overflow-hidden group">
          <div className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-200/60">
            {/* Browser top bar */}
            <div className="flex items-center gap-1 mb-2 pb-1.5 border-b border-gray-100">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[9px] text-gray-400 ml-2 truncate">
                bsec.ac.id/home
              </span>
            </div>

            {/* Hero Mockup Content */}
            <div className="grid grid-cols-2 gap-2 items-center">
              <div>
                <div className="h-2 w-16 bg-blue-600 rounded-xs mb-1"></div>
                <div className="h-1.5 w-20 bg-gray-300 rounded-xs mb-2"></div>
                <div className="h-3 w-10 bg-blue-600 rounded-xs"></div>
              </div>
              <div className="bg-gray-200 rounded-md h-12 flex items-center justify-center text-gray-400">
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* CMS Links List */}
        <div className="space-y-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all font-semibold text-xs border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
