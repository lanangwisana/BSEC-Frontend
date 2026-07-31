'use client';

import React from 'react';
import { Sidebar } from '../dashboard/components/Sidebar';
import { Header } from '../dashboard/components/Header';
import {
  Banknote,
  ClipboardList,
  AlertTriangle,
  Wallet,
  Download,
  Settings,
  MessageSquare,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useFinanceData } from './hooks/useFinanceData';
import { InvoiceFilterTab } from './types';

export default function FinancePage() {
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedBranch,
    setSelectedBranch,
    selectedInvoiceIds,
    handleSelectAll,
    handleSelectOne,
    metrics,
    incomeExpenseData,
    paymentChannels,
    invoices,
  } = useFinanceData();

  const filterTabs: InvoiceFilterTab[] = [
    'All Invoices',
    'Paid',
    'Pending',
    'Overdue',
  ];

  const isAllSelected =
    invoices.length > 0 && selectedInvoiceIds.length === invoices.length;

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
          placeholder="Search financials..."
          userTitle="Alex Rivera"
          userRole="Chief Admin"
          selectedBranch="Pusat - T.A. 2024/2025"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* Page Title Banner & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Financials & Tuition (SPP) Management
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-1">
                Track student monthly tuition, payment gateways, and tutor honorarium payouts
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Download Financial Report</span>
              </button>
              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md">
                <Settings className="w-4 h-4" />
                <span>Generate Monthly SPP Invoices</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Total Revenue This Month */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    +{metrics.revenueGrowthPercentage}%
                  </span>
                </div>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Total Revenue This Month
                </p>
                <p className="text-2xl font-extrabold text-blue-600 tracking-tight mt-1">
                  Rp {(metrics.totalRevenueThisMonth / 1000).toLocaleString('id-ID')}.000
                </p>
              </div>
            </div>

            {/* Card 2: Tuition Collection Rate */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">
                    {metrics.paidCount.toLocaleString('id-ID')}/{metrics.totalStudents.toLocaleString('id-ID')} Paid
                  </span>
                </div>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Tuition (SPP) Collection Rate
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    {metrics.sppCollectionRate}%
                  </span>
                  <span className="text-[10px] font-bold text-red-500">
                    {metrics.pendingCount} Invoices Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Pending / Overdue Invoices */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {metrics.overdueCount} Overdue
                  </span>
                </div>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Pending / Overdue Invoices
                </p>
                <p className="text-2xl font-extrabold text-red-600 tracking-tight mt-1">
                  Rp {(metrics.pendingOverdueAmount / 1000).toLocaleString('id-ID')}.000
                </p>
              </div>
            </div>

            {/* Card 4: Estimated Tutor Expenses */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-3">
                  <Wallet className="w-5 h-5" />
                </div>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Estimated Tutor Expenses
                </p>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight mt-1">
                  Rp {(metrics.tutorExpensesAmount / 1000).toLocaleString('id-ID')}.000
                </p>
                <p className="text-[10px] font-medium text-gray-400 mt-1">
                  Payroll scheduled for {metrics.payrollScheduleDate}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section Grid (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Bar Chart (~7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                      Monthly Income vs Operational Expenses
                    </h2>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      Last 6 months comparison
                    </p>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#1e293b]" />
                      <span className="text-gray-700">SPP Revenue</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-slate-400" />
                      <span className="text-gray-700">Expenses</span>
                    </div>
                  </div>
                </div>

                {/* SVG Visual Dual Bar Chart */}
                <div className="relative w-full overflow-hidden pt-6">
                  <div className="flex items-end justify-between h-48 px-4 border-b border-gray-100">
                    {incomeExpenseData.map((pt) => (
                      <div key={pt.month} className="flex flex-col items-center gap-2 flex-1">
                        <div className="flex items-end gap-1.5 h-36">
                          {/* Revenue Bar */}
                          <div
                            className="w-3.5 bg-blue-700 rounded-t-md transition-all hover:bg-blue-800"
                            style={{ height: `${(pt.revenue / 100) * 100}%` }}
                            title={`Revenue: ${pt.revenue}`}
                          />
                          {/* Expense Bar */}
                          <div
                            className="w-3.5 bg-slate-600 rounded-t-md transition-all hover:bg-slate-700"
                            style={{ height: `${(pt.expenses / 100) * 100}%` }}
                            title={`Expenses: ${pt.expenses}`}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">
                          {pt.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets (~5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Payment Channel Breakdown */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs space-y-4">
                <h3 className="text-xs font-bold text-gray-900 tracking-tight">
                  Payment Channel Breakdown
                </h3>

                <div className="space-y-3">
                  {paymentChannels.map((ch) => (
                    <div key={ch.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                        <span>{ch.channelName}</span>
                        <span>{ch.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${ch.color}`}
                          style={{ width: `${ch.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Automated SPP Reminders Banner */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 leading-snug">
                      Automated SPP Reminders
                    </h3>
                    <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      WHATSAPP AUTO-SEND ACTIVE
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Next automated blast scheduled for 3 days before overdue.
                </p>

                <button className="w-full bg-[#1e293b] hover:bg-slate-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-xs transition-colors">
                  Manage Messaging Rules
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Table Card: Student SPP Billing & Invoices */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                Student SPP Billing & Invoices
              </h2>

              {/* Status Filter Pills */}
              <div className="flex items-center gap-1.5 bg-gray-100/70 p-1 rounded-xl">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-white text-gray-900 shadow-2xs font-bold'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-4 w-10">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                      />
                    </th>
                    <th className="py-3 px-4">Invoice ID</th>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Month</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoices.map((inv) => {
                    const isSelected = selectedInvoiceIds.includes(inv.id);

                    return (
                      <tr
                        key={inv.id}
                        className={`hover:bg-gray-50/70 transition-colors ${
                          isSelected ? 'bg-blue-50/30' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => handleSelectOne(inv.id, e.target.checked)}
                            className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                          />
                        </td>

                        <td className="py-3.5 px-4 text-xs font-bold text-blue-600">
                          #{inv.id}
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                              {inv.avatarInitials}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-900 leading-snug">
                                {inv.studentName}
                              </p>
                              <p className="text-[10px] text-gray-400 font-medium">
                                {inv.studentClass}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-xs font-medium text-gray-600">
                          {inv.month}
                        </td>

                        <td className="py-3.5 px-4 text-xs font-extrabold text-gray-900">
                          Rp {inv.amount.toLocaleString('id-ID')}
                        </td>

                        <td className="py-3.5 px-4">
                          {inv.status === 'PAID' ? (
                            <span className="inline-block text-[9px] font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 tracking-wider">
                              PAID
                            </span>
                          ) : inv.status === 'PENDING' ? (
                            <span className="inline-block text-[9px] font-extrabold px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 tracking-wider">
                              PENDING
                            </span>
                          ) : (
                            <span className="inline-block text-[9px] font-extrabold px-2.5 py-1 rounded-md bg-red-50 text-red-600 tracking-wider">
                              OVERDUE
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2 text-gray-400">
                            <a
                              href={`https://wa.me/${inv.whatsappNumber}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 hover:text-emerald-600 transition-colors"
                              title="Contact via WhatsApp"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>
                            <button
                              className="p-1 hover:text-blue-600 transition-colors"
                              title="View Invoice Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-100 text-xs font-semibold text-gray-500">
              <div>Showing 1-10 of 1,240 records</div>
              <div className="flex items-center gap-1.5 self-center">
                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold">
                  1
                </button>
                <button className="px-3 py-1 rounded-lg hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 rounded-lg hover:bg-gray-100">
                  3
                </button>
                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
