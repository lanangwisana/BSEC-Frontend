export type InvoiceStatus = 'PAID' | 'PENDING' | 'OVERDUE';

export type InvoiceFilterTab = 'All Invoices' | 'Paid' | 'Pending' | 'Overdue';

export interface InvoiceRecord {
  id: string; // e.g. "INV-2026-0091"
  studentName: string;
  studentClass: string;
  avatarInitials: string;
  month: string;
  amount: number;
  status: InvoiceStatus;
  whatsappNumber: string;
}

export interface IncomeExpensePoint {
  month: string;
  revenue: number;
  expenses: number;
}

export interface PaymentChannelItem {
  id: string;
  channelName: string;
  percentage: number;
  color: string;
}

export interface FinancialMetrics {
  totalRevenueThisMonth: number;
  revenueGrowthPercentage: number;
  sppCollectionRate: number;
  paidCount: number;
  totalStudents: number;
  pendingCount: number;
  pendingOverdueAmount: number;
  overdueCount: number;
  tutorExpensesAmount: number;
  payrollScheduleDate: string;
}
