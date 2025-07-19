import type { PaymentMethod } from "./enum/PaymentMethod";

export interface SalaryPayment {
  salaryPaymentId: number;
  payrollId: number;
  implementerId: number;
  note: string;
  method: PaymentMethod;

  receivedBank: string;
  receivedAccountId: string;
  paidBank: string;
  paidAccountId: string;
  paymentId: string;

  evidenceImageUrl: string;
}
