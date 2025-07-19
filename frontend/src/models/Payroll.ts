import type { PaymentStatus } from "./enum/PaymentStatus";

export interface Payroll {
  payrollId: number;
  salaryPolicyId: number;
  employeeId: number;
  startDate: string;
  endDate: string;
  totalWorkingShift: number;
  totalAbsenceWithoutAproval: number;
  totalSalaryAmount: number;
  totalDeductionAmount: number;
  totalPaidAmount: number;
  paymentStatus: PaymentStatus;
}
