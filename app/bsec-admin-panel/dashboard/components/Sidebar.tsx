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
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

export function Sidebar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/bsec-admin-panel/dashboard', icon: LayoutDashboard },
    { label: 'Student Management', href: '/bsec-admin-panel/stundent-management', icon: GraduationCap },
    { label: 'Tutor & Staff', href: '/bsec-admin-panel/tutor-staff', icon: Users },
    { label: 'Class Schedule', href: '/bsec-admin-panel/class-schedule', icon: Calendar },
    { label: 'CMS Landing Page', href: '/bsec-admin-panel/cms', icon: Monitor },
    { label: 'SNBT Tryout', href: '/bsec-admin-panel/snbt-tryout', icon: FileSpreadsheet },
    { label: 'Financials', href: '/bsec-admin-panel/finance', icon: Wallet },
  ];

  return (
    <aside className="w-60 bg-[#1D4ED8] text-blue-100 min-h-screen flex flex-col justify-between p-4 shrink-0 transition-all duration-300">
      <div>
        {/* Logo & Header */}
        <div className="px-3 py-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#1D4ED8] font-bold shadow-sm">
              <Building2 className="w-4 h-4 text-[#1D4ED8]" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wider text-sm leading-none">
                BSEC Admin
              </h1>
              <p className="text-[10px] text-blue-100/70 font-semibold tracking-wider uppercase mt-1 opacity-80">
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
                    ? 'bg-white text-[#1D4ED8] font-bold shadow-sm'
                    : 'text-blue-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#1D4ED8]' : 'text-blue-100/80'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls & Actions */}
      <div className="space-y-2 pt-4 border-t border-white/10">
        {/* New Enrollment Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-white/15 text-white py-2.5 px-3 rounded-xl text-xs font-semibold border border-white/10 transition-all shadow-xs">
          <Plus className="w-4 h-4" />
          <span>New Enrollment</span>
        </button>

        {/* System Status Banner */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-[11px]">
          <p className="text-[9px] font-bold text-blue-100/70 uppercase tracking-wider opacity-70">
            System Status
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>IRT Engine Online</span>
          </div>
        </div>

        <Link
          href="#"
          className="flex items-center gap-3.5 px-4 py-2 rounded-xl font-medium text-xs text-blue-100/80 transition-all duration-200"
        >
          <Settings className="w-4 h-4 text-blue-100/80" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
