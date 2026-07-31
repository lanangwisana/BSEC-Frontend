'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Calendar,
  Monitor,
  FileSpreadsheet,
  Wallet,
  Settings,
  Building2,
  Plus,
  LogOut,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

export function Sidebar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/admin-panel/dashboard', icon: LayoutDashboard },
    { label: 'Student Management', href: '/admin-panel/stundent-management', icon: GraduationCap },
    { label: 'Tutor & Staff', href: '/admin-panel/tutor-staff', icon: Users },
    { label: 'Class Schedule', href: '/admin-panel/class-schedule', icon: Calendar },
    { label: 'CMS Landing Page', href: '/admin-panel/cms', icon: Monitor },
    { label: 'SNBT Tryout', href: '/admin-panel/snbt-tryout', icon: FileSpreadsheet },
    { label: 'Financials', href: '/admin-panel/finance', icon: Wallet },
  ];

  return (
    <aside className="w-60 bg-[#1f2436] text-gray-300 min-h-screen flex flex-col justify-between p-4 shrink-0 transition-all duration-300">
      <div>
        {/* Logo & Header */}
        <div className="px-3 py-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wider text-sm leading-none">
                BSEC Admin
              </h1>
              <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">
                Management Portal
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '#' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl font-medium text-xs transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-[#293047]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls & Actions */}
      <div className="space-y-2 pt-4 border-t border-gray-800/60">
        {/* New Enrollment Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#293047] hover:bg-[#323b56] text-white py-2.5 px-3 rounded-xl text-xs font-semibold border border-gray-700/50 transition-all shadow-xs">
          <Plus className="w-4 h-4" />
          <span>New Enrollment</span>
        </button>

        {/* System Status Banner */}
        <div className="bg-[#283149]/60 border border-gray-800/80 rounded-xl p-3 text-[11px]">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
            System Status
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>IRT Engine Online</span>
          </div>
        </div>

        <Link
          href="#"
          className="flex items-center gap-3.5 px-4 py-2 rounded-xl font-medium text-xs text-gray-400 hover:text-white hover:bg-[#293047] transition-all duration-200"
        >
          <Settings className="w-4 h-4 text-gray-400" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
