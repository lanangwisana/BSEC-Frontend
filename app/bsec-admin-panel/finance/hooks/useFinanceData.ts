'use client';

import { useState, useMemo } from 'react';
import {
  InvoiceRecord,
  FinancialMetrics,
  IncomeExpensePoint,
  PaymentChannelItem,
  InvoiceFilterTab,
} from '../types';

export function useFinanceData() {
  const [activeTab, setActiveTab] = useState<InvoiceFilterTab>('All Invoices');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Pusat - T.A. 2024/2025');
  const [selectedInvoiceIds, setSelectedInvoiceIds] = useState<string[]>([]);

  // Summary Metrics matching Image 7
  const metrics: FinancialMetrics = useMemo(() => ({
    totalRevenueThisMonth: 185000000,
    revenueGrowthPercentage: 6.5,
    sppCollectionRate: 88,
    paidCount: 1091,
    totalStudents: 1240,
    pendingCount: 149,
    pendingOverdueAmount: 22500000,
    overdueCount: 12,
    tutorExpensesAmount: 62000000,
    payrollScheduleDate: '25th',
  }), []);

  // Income vs Expenses Chart data
  const incomeExpenseData: IncomeExpensePoint[] = useMemo(() => [
    { month: 'MAY', revenue: 52, expenses: 40 },
    { month: 'JUN', revenue: 68, expenses: 46 },
    { month: 'JUL', revenue: 62, expenses: 58 },
    { month: 'AUG', revenue: 84, expenses: 50 },
    { month: 'SEP', revenue: 78, expenses: 52 },
    { month: 'OCT', revenue: 98, expenses: 62 },
  ], []);

  // Payment Channel Breakdown
  const paymentChannels: PaymentChannelItem[] = useMemo(() => [
    { id: 'ch-1', channelName: 'Bank Transfer', percentage: 52, color: 'bg-blue-900' },
    { id: 'ch-2', channelName: 'QRIS', percentage: 30, color: 'bg-blue-600' },
    { id: 'ch-3', channelName: 'E-Wallet', percentage: 18, color: 'bg-blue-300' },
  ], []);

  // Student Invoices matching Image 7
  const initialInvoices: InvoiceRecord[] = useMemo(() => [
    {
      id: 'INV-2026-0091',
      studentName: 'Adinda Putri',
      studentClass: 'SMA 12 - Grade 12',
      avatarInitials: 'AP',
      month: 'October 2026',
      amount: 1500000,
      status: 'PAID',
      whatsappNumber: '6281234567890',
    },
    {
      id: 'INV-2026-0092',
      studentName: 'Bagas Saputra',
      studentClass: 'SMA 10 - Grade 10',
      avatarInitials: 'BS',
      month: 'October 2026',
      amount: 1500000,
      status: 'PENDING',
      whatsappNumber: '6281987654321',
    },
    {
      id: 'INV-2026-0094',
      studentName: 'Citra Halim',
      studentClass: 'SMP 9 - Grade 9',
      avatarInitials: 'CH',
      month: 'September 2026',
      amount: 1250000,
      status: 'OVERDUE',
      whatsappNumber: '6281566778899',
    },
  ], []);

  // Filtered Invoices
  const filteredInvoices = useMemo(() => {
    return initialInvoices.filter((inv) => {
      const matchesTab =
        activeTab === 'All Invoices' ||
        (activeTab === 'Paid' && inv.status === 'PAID') ||
        (activeTab === 'Pending' && inv.status === 'PENDING') ||
        (activeTab === 'Overdue' && inv.status === 'OVERDUE');

      const matchesSearch =
        inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.studentName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [initialInvoices, activeTab, searchQuery]);

  // Checkbox Selection
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInvoiceIds(filteredInvoices.map((i) => i.id));
    } else {
      setSelectedInvoiceIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoiceIds((prev) => [...prev, id]);
    } else {
      setSelectedInvoiceIds((prev) => prev.filter((item) => item !== id));
    }
  };

  return {
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
    invoices: filteredInvoices,
  };
}
