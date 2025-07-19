export interface Deduction {
  deductionId: number;
  employeeId: number;
  description: string;
  totalAmount: number;
  paidAmount: number;
  startDate: string;
  endDate: string;
}
