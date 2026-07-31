'use client';

import React from 'react';
import { Search, Bell, HelpCircle, User } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedBranch?: string;
  placeholder?: string;
  userTitle?: string;
  userRole?: string;
}

export function Header({
  searchQuery,
  onSearchChange,
  placeholder = 'Search Student Name or NIS...',
  userTitle = 'Admin User',
  userRole = 'Principal',
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4 bg-white px-8 py-4 border-b border-gray-100 shadow-2xs">
      {/* Search Bar Pill */}
      <div className="relative flex-1 max-w-lg">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#F0F4F8]/70 hover:bg-[#F0F4F8] focus:bg-white text-xs font-medium text-[#2B2D42] pl-11 pr-4 py-2.5 rounded-xl border border-transparent focus:border-[#364FAB] focus:outline-hidden transition-all duration-200"
        />
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
          <Bell className="w-4 h-4 text-[#2B2D42]" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <button className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
          <HelpCircle className="w-4 h-4 text-gray-500" />
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-[#2B2D42] leading-tight">{userTitle}</p>
            <p className="text-[10px] font-semibold text-gray-400 mt-0.5">{userRole}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#364FAB] to-[#2B2D42] p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <User className="w-5 h-5 text-[#2B2D42]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
